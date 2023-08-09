import React, { useState, useRef, useEffect } from 'react';
import styles from './Real.module.scss';
import classNames from 'classnames/bind';
import videoData from './videoData';

const cx = classNames.bind(styles);

function Real() {
    const videoRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(null);
    // Thêm null để không có video nào được chạy ban đầu

    const handleVideoClick = (index) => {
        // Tắt và đặt thời gian về 0 cho tất cả video
        videoRefs.current.forEach((videoRef) => {
            videoRef.pause();
            videoRef.currentTime = 0;
            videoRef.muted = true;
        });

        // Bật âm thanh và chạy video mới
        videoRefs.current[index].play();
        videoRefs.current[index].muted = false;
        setActiveIndex(index);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Tắt âm thanh cho tất cả video
            videoRefs.current.forEach((videoRef) => {
                videoRef.muted = true;
            });

            // Bật âm thanh cho video đang hoạt động
            if (activeIndex !== null) {
                videoRefs.current[activeIndex].muted = false;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeIndex]);

    return (
        <div className={cx('wrapper')}>
            {videoData.map((video, index) => (
                <div
                    key={index}
                    className={cx('video-container', { active: index === activeIndex })}
                    onClick={() => handleVideoClick(index)}
                >
                    <video
                        ref={(ref) => (videoRefs.current[index] = ref)}
                        controls
                        className={cx('video')}
                    >
                        <source src={video.src} type="video/mp4" />
                    </video>
                    <p className={cx('video-title')}>{video.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Real;
