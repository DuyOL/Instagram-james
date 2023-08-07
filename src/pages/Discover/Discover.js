import React from 'react';
import classNames from 'classnames/bind';
import styles from './Discover.module.scss';

const cx = classNames.bind(styles)
// Page Khám phá
function Discover() {
      return (
        <div className={cx('wrapper')}>
           <h1> Khám Phá </h1>
        </div>
    )
}

export default Discover;