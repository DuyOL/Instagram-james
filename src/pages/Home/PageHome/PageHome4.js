import classNames from 'classnames/bind';
import styles from './PageHome.module.scss'
import avatar from '~/pages/Home/ImgHome/Image/image4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEllipsis } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PageHome() {
    return (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <img className={cx('avatar')}
                        src={avatar}
                        alt='Di Tu Ve'
                    />
                </div>
                <div className={cx('body')}>
                    <p className={cx('name')}>
                        <strong>Ngoài vòng pháp luật</strong>
                        <strong className={cx('time-name')}>5 hours ago</strong>
                    </p>
                    <strong className={cx('nickname')}>Dong Anh Prison</strong>
                </div>
                <div className={cx('footer')}>
                        <FontAwesomeIcon className={cx('ellipsis')} icon={faEllipsis} />
                    </div>
            </div>
            
    )
}
export default PageHome;







