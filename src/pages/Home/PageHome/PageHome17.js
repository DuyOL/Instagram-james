import classNames from 'classnames/bind';
import styles from './PageHome.module.scss'
import avatar from '~/pages/Home/ImgHome/Image/avatar17.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PageHome() {
    return (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <img className={cx('avatar')}
                        src={avatar}
                        alt='Duy Thanh Computer'
                    />
                </div>
                <div className={cx('body')}>
                    <p className={cx('name')}>
                        <strong>Hà Nội Fan</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        <strong className={cx('time-name')}>2 hours ago</strong>
                    </p>
                    <strong className={cx('nickname')}>Hanoi in me </strong>
                </div>
                <div className={cx('footer')}>
                        <FontAwesomeIcon className={cx('ellipsis')} icon={faEllipsis} />
                    </div>
            </div>
            
    )
}
export default PageHome;







