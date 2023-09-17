import React, { useState, useRef } from "react";
import video from '~/pages/Home/Videos/video8.mp4';
import classNames from "classnames/bind";
import styles from "~/pages/Home/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";
import Modal from './ModalHome';

const cx = classNames.bind(styles);

function ImgHome() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [videoStarted, setVideoStarted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const videoRef = useRef(null);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== "") {
      setComments((prevComments) => [...prevComments, comment]);
      setComment("");
    }
  };

  const startVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoStarted(true);
    }
  };

  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <div className={cx("video-container")}>
          {videoStarted ? null : (
            <div className={cx("play-button")} onClick={startVideo}>
            </div>
          )}
          <video ref={videoRef} className={cx("video-content5")} controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className={cx("interact")}>
          <div className={cx("icon")}>
            <FontAwesomeIcon
              className={cx("love-icon")}
              icon={faHeart}
              onClick={() => setIsModalOpen(true)} 
            />
            <FontAwesomeIcon
              className={cx("comment-icon")}
              icon={faComment}
              onClick={() => setIsModalOpen(true)} 
            />
            <FontAwesomeIcon
              className={cx("message-icon")}
              icon={faMessage}
              onClick={() => setIsModalOpen(true)} 
            />
          </div>
        </div>
        <div className={cx("detail-list")}>
          <p className={cx("detail-like")}>134 .214.331 view</p>
          <p className={cx("detail-comment")}>
            Golden Boy Kylian Mbappe <br />            
          </p>
          <p className={cx("detail-more")}>See more</p>
          <p className={cx("detail-translation")}>See translation</p>
          <p className={cx("detail-seeall")}>See all 19.812 comment</p>
        </div>
        <div>
          <form onSubmit={handleCommentSubmit}>
            <input
              className={cx('comment')}
              type="text"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Thêm bình luận ..."
            />
          </form>
        </div>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
      {/* Hiển thị Modal nếu isModalOpen là true */}
      <Modal isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </div>
  );
}

export default ImgHome;
