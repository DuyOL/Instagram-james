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
            <h1>Work on your posts</h1>
            <p>When someone likes or comments on one of your posts, you'll see it here.</p>
        </div>
    );
}

export default Notification;
