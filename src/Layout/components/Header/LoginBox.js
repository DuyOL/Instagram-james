import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Logo from './Images/instagram-1.svg';

const cx = classNames.bind(styles);

function LoginBox({ onClose }) { 
  return (
    <div className={cx('login-box')}>
      <div className={cx('close-icon')} onClick={onClose}> 
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className={cx('logo-container')}>
        <img src={Logo} alt="Instagram Logo" className={cx('logo')} />
      </div>
      <input type="text" placeholder="Tài Khoản" />
      <input type="password" placeholder="Mật khẩu" />
      <button className={cx('login-button')}>Đăng Nhập</button>
      <div className={cx('login-with-facebook')}>
              <FontAwesomeIcon icon={faFacebook} />
              <span className={cx('facebook-text')}>Đăng nhập bằng Facebook</span>
      </div>
      <div className={cx('Forgot-password' , 'center-vertically')}>
        <span className={cx('password')}>Quên mật khẩu ?</span>
      </div>
    </div>
  );
}

export default LoginBox;
