import React, { useState } from "react";
import content from '~/pages/Home/ImgHome/Image/Image.jpg';
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
          <p className={cx("detail-like")}>97.816.381 view</p>
          <p className={cx("detail-comment")}>
            Thanks everyone. Of course like 9 years ago on the field
            <br />
            ours, I will still say: "Hala Madrid"
          </p>
           <p className={cx("detail-more")}>See more</p>
          <p className={cx("detail-translation")}>See translation</p>
          <p className={cx("detail-seeall")}>See all 1.811.812 comment</p>
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
        <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </div>
  );
}

export default ImgHome;
