import classNames from 'classnames/bind';
import styles from './PageHome.module.scss'
import avatar from '~/pages/Home/ImgHome/Image/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PageHome() {
    return (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <img className={cx('avatar')}
                        src={avatar}
                        alt='Cristiano Ronaldo'
                    />
                </div>
                <div className={cx('body')}>
                    <p className={cx('name')}>
                        <strong>Cristiano Ronaldo</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        <strong className={cx('time-name')}>3 hours ago</strong>
                    </p>
                    <strong className={cx('nickname')}>King of football</strong>
                </div>
                <div className={cx('footer')}>
                        <FontAwesomeIcon className={cx('ellipsis')} icon={faEllipsis} />
                    </div>
            </div>
            
    )
}
export default PageHome;







