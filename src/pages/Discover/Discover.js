import React from 'react';
import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import Image1 from './Image/Image1.jpg';
import Image2 from './Image/Image2.jpg';
import Image3 from './Image/Image3.jpg';
import Image4 from './Image/Image4.jpg';
import Image5 from './Image/Image5.jpg';
import Image6 from './Image/Image6.jpg';
import Image7 from './Image/Image7.jpg';
import Image8 from './Image/Image8.jpg';
import Image9 from './Image/Image9.jpg';
import Image10 from './Image/Image10.jpg';
import Image11 from './Image/Image11.jpg';
import Image12 from './Image/Image12.jpg';
import Image13 from './Image/Image13.jpg';
import Image14 from './Image/Image14.jpg';
import Image15 from './Image/Image15.jpg';
import Image16 from './Image/Image16.jpg';

import Video5 from './Image/Video5.mp4';
import Video6 from './Image/Video6.mp4';
import Video7 from './Image/Video7.mp4';
import Video8 from './Image/Video8.mp4';

const cx = classNames.bind(styles);

function Discover() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper1')}>
        <div className={cx('left-column')}>
          <img src={Image1} alt="Description 1" className={cx('image')} key="image1" />
          <img src={Image2} alt="Description 2" className={cx('image')} key="image2" />
           <img src={Image3} alt="Description 3" className={cx('image')} key="image3" />
            <img src={Image4} alt="Description 4" className={cx('image')} key="image4" />
            <img src={Image5} alt="Description 5" className={cx('image')} key="image5" />
            <img src={Image6} alt="Description 6" className={cx('image')} key="image6" />
            <img src={Image7} alt="Description 7" className={cx('image')} key="image7" />
            <img src={Image8} alt="Description 8" className={cx('image')} key="image8" />
        </div>
        <div className={cx('right-column')}>
          <div className={cx('bottom-row')}>
             <img src={Image9} alt="Description 9" className={cx('image')} key="image9" />
            <img src={Image10} alt="Description 10" className={cx('image')} key="image10" />      
            <img src={Image11} alt="Description 11" className={cx('image')} key="image11" />
            <img src={Image12} alt="Description 12" className={cx('image')} key="image12" />
            <img src={Image13} alt="Description 13" className={cx('image')} key="image13" />
            <img src={Image14} alt="Description 14" className={cx('image')} key="image14" />
            <img src={Image15} alt="Description 15" className={cx('image')} key="image15" />
            <img src={Image16} alt="Description 16" className={cx('image')} key="image16" />
          </div>
        </div>
      </div>
      <div className={cx('video-container')}>
         <video controls className={cx('video')}>
          <source src={Video7} type="video/mp4" />
        </video>
        <video controls className={cx('video')}>
          <source src={Video5} type="video/mp4" />
        </video>
        <video controls className={cx('video')}>
          <source src={Video6} type="video/mp4" />
        </video>
        <video controls className={cx('video')}>
          <source src={Video8} type="video/mp4" />
        </video>
       
      </div>
    </div>
  );
}


export default Discover;