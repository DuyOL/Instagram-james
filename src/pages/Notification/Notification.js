import React from "react";
import styles from './Notification.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Notification() {
    return (
        <div className={cx('wrapper')}>
           <h1> Thông Báo </h1>
        </div>
    )
}

export default Notification;