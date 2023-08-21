import React from "react";
import styles from './Notification.module.scss';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Notification() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon')}>
                <FontAwesomeIcon icon={faBell} />
            </div>
            <h1>Hoạt động trên bài viết của bạn</h1>
            <p>Khi có người thích hoặc bình luận về một trong những bài viết của bạn, bạn sẽ nhìn thấy nó ở đây.</p>
        </div>
    );
}

export default Notification;
