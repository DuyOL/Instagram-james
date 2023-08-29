import React from 'react';
import classNames from 'classnames/bind';
import styles from './RegisterBox.module.scss';
import Logo from './Images/instagram-1.svg';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function RegisterBox({ onClose }) {
  const handleClose = () => {
    // Call the provided onClose function to close both RegisterBox and LoginBox
    onClose();
  };

  return (
    <div className={cx('register-box', 'center-vertically', 'center-horizontally')}>
      <div className={cx('close-icon')} onClick={handleClose}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className={cx('logo-container')}>
        <img src={Logo} alt="Instagram Logo" className={cx('logo')} />
      </div>
      <div className={cx('register-title')}>Đăng ký để xem ảnh và video từ bạn bè.</div>
      <button className={cx('login-with-facebook')}>
        <FontAwesomeIcon icon={faFacebook} bounce />
        <span className={cx('facebook-text')}>Đăng nhập bằng Facebook</span>
      </button>
      <input type="text" placeholder="Số điện thoại hoặc email" />
      <input type="text" placeholder="Tên đầy đủ" />
      <input type="text" placeholder="Tên người dùng" />
      <input type="password" placeholder="Mật khẩu" />
      <div className={cx('register-title')}>
        Bằng cách đăng ký, bạn đồng ý với Điều khoản<br />
        Chính sách quyền riêng tư và<br />
        Chính sách cookie của chúng tôi
      </div>
      <button className={cx('register-button')}>Đăng Kí</button>
    </div>
  );
}

export default RegisterBox;
