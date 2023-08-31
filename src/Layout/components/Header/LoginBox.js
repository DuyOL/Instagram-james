import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from './Header.module.scss';
import Logo from './Images/instagram-1.svg';
import RegisterBox from './RegisterBox';
import myFirebaseApp from './myFirebaseApp';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'; // Update import path
const cx = classNames.bind(styles);

function LoginBox({ onClose }) {
  const [showRegister, setShowRegister] = useState(false);

  const handleShowRegister = () => {
    setShowRegister(true);
  };

  const handleLogin = async (provider) => {
    try {
      const auth = getAuth(myFirebaseApp);

      let authProvider = null;

      if (provider === 'google') {
        authProvider = new GoogleAuthProvider();
      } else if (provider === 'facebook') {
        authProvider = new FacebookAuthProvider();
      }

      if (authProvider) {
        await signInWithPopup(auth, authProvider);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  if (showRegister) {
    return <RegisterBox onClose={() => setShowRegister(false)} />;
  }

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
      <button className={cx('login-button')} onClick={() => handleLogin('google')}>Đăng Nhập</button>
      <div className={cx('login-with-facebook')} onClick={() => handleLogin('facebook')}>
        <FontAwesomeIcon icon={faFacebook} bounce />
        <span className={cx('facebook-text')}>Đăng nhập bằng Facebook</span>
      </div>
      <div className={cx('login-with-google')} onClick={() => handleLogin('google')}>
        <FontAwesomeIcon icon={faGoogle} bounce />
        <span className={cx('google-text')}>Đăng nhập bằng Google</span>
      </div>
      <div className={cx('Forgot-password', 'center-vertically')}>
        <span className={cx('password')}>Quên mật khẩu ?</span>
      </div>
      <div className={cx('Forgot-password', 'center-vertically')}>
        <span className={cx('Account')}>Bạn chưa có tài khoản</span>
        <span className={cx('Register')} onClick={handleShowRegister}>
          Đăng kí
        </span>
      </div>
    </div>
  );
}

export default LoginBox;
