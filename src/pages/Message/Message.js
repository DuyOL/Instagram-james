import React from 'react';
import styles from './Message.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function Message() {
    return (
        <div className={cx('wrapper')}>
           <h1> Tin Nhắn </h1>
        </div>
    )
}

export default Message;