import React, { useState } from "react";
import content from '~/pages/Home/ImgHome/Image/Image3.jpg'
import classNames from "classnames/bind";
import styles from "~/pages/Home/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";
import Modal from "./ModalHome"; 

const cx = classNames.bind(styles);

function ImgHome() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <img
          className={cx("img-content")}
          src={content}
          alt=""
        />
        <div className={cx("interact")}>
          <div className={cx("icon")}>
            <FontAwesomeIcon className={cx("love-icon")} icon={faHeart} onClick={openModal} />
            <FontAwesomeIcon className={cx("comment-icon")} icon={faComment} onClick={openModal} />
            <FontAwesomeIcon className={cx("message-icon")} icon={faMessage} onClick={openModal} />
          </div>
        </div>
        <div className={cx("detail-list")}>
          <p className={cx("detail-like")}>811.331 view</p>
          <p className={cx("detail-comment")}>
             If you don't book a deal like this, it's your fault<br />
            very big belly😍<br />    
          </p>
             <p className={cx("detail-more")}>See more</p>
             <p className={cx("detail-translation")}>See translation</p>
             <p className={cx("detail-seeall")}>See all 9.942 comment</p>
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

        {/* Sử dụng component Modal */}
        <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </div>
  );
}

export default ImgHome;
