import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faQrcode, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import styles from "./ModalHome.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Modal = ({ isModalOpen, closeModal }) => {
  return (
    isModalOpen && (
      <div className={cx('custom-modal')}>
        <div className={cx('modal-content')}>
          <span className={cx('close-button')} onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <h3 className={cx('modal-title')}>Log in now</h3>
          <button className={`${cx('login-button')} ${cx('phone')}`}>
            <FontAwesomeIcon icon={faPhone} bounce className={cx('phone-icon')} /> Sign in with Phone
          </button>
          <button className={`${cx('login-button')} ${cx('facebook')}`}>
            <FontAwesomeIcon icon={faFacebook} bounce className={cx('facebook-icon')} /> Sign in with Facebook
          </button>
          <button className={`${cx('login-button')} ${cx('google')}`}>
            <FontAwesomeIcon icon={faGoogle} bounce className={cx('google-icon')} /> Sign in with Google
          </button>
            <button className={`${cx('login-button')} ${cx('QRcode')}`}>
            <FontAwesomeIcon icon={faQrcode} bounce className={cx('QRcode-icon')} /> Sign in with QR code
            </button>
            <p className={cx('modal-footer')}>
                      By continuing, you agree to TikTok's <br />
                      Terms of Service and confirm that you 
                      have read TikTok's Privacy Policy.</p>            
        </div>
      </div>
    )
  );
};

export default Modal;
