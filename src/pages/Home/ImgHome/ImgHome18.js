import React, { useState } from "react";
import content from '~/pages/Home/ImgHome/Image/avatar20.jpg'
import classNames from "classnames/bind";
import styles from "~/pages/Home/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function ImgHome() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

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

  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <img
          className={cx("img-content3")}
          src={content}
          alt=""
        />
        <div className={cx("interact")}>
          <div className={cx("icon")}>
            <FontAwesomeIcon className={cx("love-icon")} icon={faHeart} />
            <FontAwesomeIcon className={cx("comment-icon")} icon={faComment} />
            <FontAwesomeIcon className={cx("message-icon")} icon={faMessage} />
          </div>
        </div>
        <div className={cx("detail-list")}>
          <p className={cx("detail-like")}>321.331 lượt xem</p>
          <p className={cx("detail-comment")}>
            Ý kiến ​​của bạn là huấn luyện viên giỏi nhất để dẫn dắt Real Madrid 🤔  <br />
          </p>
          <p className={cx("detail-more")}>Xem thêm</p>
          <p className={cx("detail-translation")}>Xem bản dịch</p>
          <p className={cx("detail-seeall")}>Xem tất cả 9.812 bình luận</p>
        </div>
        <div>
          <form onSubmit={handleCommentSubmit}>
            <input className={cx('comment')}
              type="text"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Thêm bình luận ..."
            />
            {/* <button type="submit">Gửi</button> */}
          </form>
        </div>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
}

export default ImgHome;
