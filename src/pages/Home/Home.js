import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import PageHome from './PageHome';
import PageHome1 from './PageHome/PageHome1';
import PageHome2 from './PageHome/PageHome2';
import PageHome3 from './PageHome/PageHome3';
import PageHome4 from './PageHome/PageHome4';
import PageHome5 from './PageHome/PageHome5';
import PageHome6 from './PageHome/PageHome6';
import PageHome7 from './PageHome/PageHome7';
import PageHome8 from './PageHome/PageHome8';

import ImgHome from './ImgHome/ImgHome';
import ImgHome1 from './ImgHome/ImgHome1';
import ImgHome2 from './ImgHome/ImgHome2';
import ImgHome3 from './ImgHome/ImgHome3';
import ImgHome4 from './ImgHome/ImgHome4';
import ImgHome5 from './ImgHome/ImgHome5';
import ImgHome6 from './ImgHome/ImgHome6';
import ImgHome7 from './ImgHome/ImgHome7';
import ImgHome8 from './ImgHome/ImgHome8';




const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
        <div className={cx('header')}>
                <PageHome />                
            <div className={cx('container')}>
                <ImgHome />
            </div>
            </div>
         <div className={cx('header')}>
                <PageHome1/>                
            <div className={cx('container')}>
                <ImgHome1 />
            </div>
            </div>
            <div className={cx('header')}>
                <PageHome2/>                
            <div className={cx('container')}>
                <ImgHome2 />
            </div>
            </div>
             <div className={cx('header')}>
                <PageHome3/>                
            <div className={cx('container')}>
                <ImgHome3 />
            </div>
            </div>
            <div className={cx('header')}>
                <PageHome4/>                
            <div className={cx('container')}>
                <ImgHome4 />
            </div>
            </div>
             <div className={cx('header')}>
                <PageHome5/>                
            <div className={cx('container')}>
                <ImgHome5 />
            </div>
            </div>
            <div className={cx('header')}>
                <PageHome6/>                
            <div className={cx('container')}>
                <ImgHome6 />
            </div>
            </div>
            <div className={cx('header')}>
                <PageHome7/>                
            <div className={cx('container')}>
                <ImgHome7 />
            </div>
            </div>
             <div className={cx('header')}>
                <PageHome8/>                
            <div className={cx('container')}>
                <ImgHome8 />
            </div>
            </div>
        </div>
    )
}
export default Home;