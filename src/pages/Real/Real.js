import React, { useState, useRef, useEffect } from 'react';
import styles from './Real.module.scss';
import classNames from 'classnames/bind';
import videoData from './videoData';
import PageHome10 from '../Home/PageHome/PageHome10';
import PageHome11 from '../Home/PageHome/PageHome11';
import PageHome13 from '../Home/PageHome/PageHome13';
import PageHome17 from '../Home/PageHome/PageHome17';
import PageHome18 from '../Home/PageHome/PageHome18';
import PageHome19 from '../Home/PageHome/PageHome19';

const cx = classNames.bind(styles);

const pageHomes = [
    <PageHome10  />,
    <PageHome11  />,
    <PageHome13 />,
    <PageHome17 />,
    <PageHome11 />,
    <PageHome18 />,
    <PageHome19 />,
    <PageHome13  />,
    <PageHome13  />,
]

function Real() {
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRefs = useRef([]);

    const handleVideoClick = (index) => {
        // Dừng và reset thời gian video trước đó
        if (videoRefs.current[activeIndex]) {
            videoRefs.current[activeIndex].pause();
            videoRefs.current[activeIndex].currentTime = 0;
            videoRefs.current[activeIndex].muted = true;
        }

        // Bật âm thanh và chạy video mới
        if (videoRefs.current[index]) {
            videoRefs.current[index].play();
            videoRefs.current[index].muted = false;
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Tắt âm thanh và dừng video ở trên
            for (let i = 0; i < videoRefs.current.length; i++) {
                if (i !== activeIndex) {
                    if (videoRefs.current[i]) {
                        videoRefs.current[i].muted = true;
                        videoRefs.current[i].pause();
                        videoRefs.current[i].currentTime = 0;
                    }
                }
            }
            
            // Bật âm thanh cho video đang hoạt động
            if (scrollPosition >= 0 && videoRefs.current[activeIndex]) {
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
                    className={cx('video-container', { 
                        active: index === activeIndex,
                        horizontal: video.layout === 'horizontal',
                        square: video.layout === 'square'
                    })}
                    onClick={() => handleVideoClick(index)}
                >
                    <video
                        ref={ref => (videoRefs.current[index] = ref)}
                        controls
                        className={cx('video')}
                    >
                        <source src={video.src} type="video/mp4" />
                    </video>
                     {pageHomes[index]}
                </div>
            ))}
        </div>
    );
}

export default Real;
