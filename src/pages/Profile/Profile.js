import React, {useState} from "react";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle , faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Image1 from "~/pages/Profile/Images/Image1.jpg";
import Image2 from "~/pages/Profile/Images/Image2.jpg";
import Image3 from "~/pages/Profile/Images/Image3.jpg";
import Image4 from "~/pages/Profile/Images/Image4.jpg";
import Image5 from "~/pages/Profile/Images/Image5.jpg";
import Image6 from "~/pages/Profile/Images/Image6.jpg";
import Image7 from "~/pages/Profile/Images/Image7.jpg";



const cx = classNames.bind(styles);

function Profile() {

  const [showMore, setShowMore] = useState(false);

  const handleSeeMoreClick = () => {
    setShowMore(!showMore);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('Header')}>
        <div className={cx('Left-avatar')}>
          <div className={cx('avatar')}>
            <img
              className={cx("img-content")}
              src={Image1}
              alt=""
            />
          </div>
        </div>
        <div className={cx('Right-content')}>
          <div className={cx('info')}>
            <p className={cx('username')}>
              James Maridista
            </p>
              <FontAwesomeIcon icon={faCheckCircle} className={cx('verification-icon')} />
            <div className={cx('buttons')}>
              <button className={cx('edit-button')}>Chỉnh Sửa Trang cá nhân</button>
              <button className={cx('view-button')}>Xem kho lưu trữ</button>
            </div>
          </div>
      <div className={cx('folowing')}>
        <p>42 bài viết</p>
        <p>15 người theo dõi</p>
        <p>Đang theo dõi 45 người dùng</p>
          </div>
          <p className={cx('folowing-name')}>
             Nguyễn Đức Duy
          </p>
        </div>
      </div>
      <div className={cx('friend')}>
        <div className={cx('add-friend')}>
          <img className={cx('add-avatar')}
            src={Image2}
            alt="">
          </img>
          <p className={cx('add-name')}>
             nsnd_vantin
          </p>
        </div>
         <div className={cx('add-friend')}>
          <img className={cx('add-avatar')}
            src={Image3}
            alt="">
          </img>
          <p className={cx('add-name')}>
             lock
          </p>
        </div>
         <div className={cx('add-friend')}>
          <img className={cx('add-avatar')}
            src={Image4}
            alt="">
          </img>
          <p className={cx('add-name')}>
             Tacer
          </p>
        </div>
        <div className={cx('add-friend')}>
          <img className={cx('add-avatar')}
            src={Image5}
            alt="">
          </img>
          <p className={cx('add-name')}>
             Tuan
          </p>
        </div>
        <div className={cx('add-friend')}>
          <img className={cx('add-avatar')}
            src={Image6}
            alt="">
          </img>
          <p className={cx('add-name')}>
             minh_phuoc
          </p>
        </div>
        <div className={cx('add-friend')}>
          <img className={cx('add-avatar')}
            src={Image7}
            alt="">
          </img>
          <p className={cx('add-name')}>
             duc_long
          </p>
        </div>
        <div className={cx('see-more')} onClick={handleSeeMoreClick}>
            <FontAwesomeIcon icon={faChevronDown} className={cx('see-more-icon')} />
        </div>
        </div>
        <div className={cx('friend-list', { 'show-more': showMore })}>
        <div className={cx('add-friend')}>
          <img className={cx('add-avatar')}
            src={Image1}
            alt="">
          </img>
          <p className={cx('add-name')}>
             nguyen_duy
          </p>
        </div>
        <div className={cx('add-friend')}>
          <img className={cx('add-avatar')}
            src={Image1}
            alt="">
          </img>
          <p className={cx('add-name')}>
             nguyen_duy
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Profile;
