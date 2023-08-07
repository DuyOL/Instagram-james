import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import PageHome from './PageHome';
import PageHome1 from './PageHome/PageHome1';
import PageHome2 from './PageHome/PageHome2';
import ImgHome from './ImgHome/ImgHome';
import ImgHome1 from './ImgHome/ImgHome1';
import ImgHome2 from './ImgHome/ImgHome2';




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
        </div>
    )
}
export default Home;