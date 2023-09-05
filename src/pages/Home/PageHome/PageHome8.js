import classNames from 'classnames/bind';
import styles from './PageHome.module.scss'
import avatar from '~/pages/Home/ImgHome/Image/avatar8.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEllipsis } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PageHome() {
    return (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <img className={cx('avatar')}
                        src={avatar}
                        alt='Ngũ Long Bang'
                    />
                </div>
                <div className={cx('body')}>
                    <p className={cx('name')}>
                    <strong>Ngũ Long Bang</strong>
                        <strong className={cx('time-name')}> 1 hours ago</strong>
                    </p>
                    <strong className={cx('nickname')}>Expatriate children</strong>
                </div>
                <div className={cx('footer')}>
                        <FontAwesomeIcon className={cx('ellipsis')} icon={faEllipsis} />
                    </div>
            </div>
            
    )
}
export default PageHome;







