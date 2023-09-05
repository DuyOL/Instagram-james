import classNames from 'classnames/bind';
import styles from './PageHome.module.scss'
import avatar from '~/pages/Home/ImgHome/Image/avatar11.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle,  faEllipsis } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PageHome() {
    return (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <img className={cx('avatar')}
                        src={avatar}
                        alt='Ngoại Hạng Anh'
                    />
                </div>
                <div className={cx('body')}>
                    <p className={cx('name')}>
                    <strong>Ngoại Hạng Anh</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        <strong className={cx('time-name')}> 9 hours ago</strong>
                    </p>
                    <strong className={cx('nickname')}>Number 1 of the World</strong>
                </div>
                <div className={cx('footer')}>
                        <FontAwesomeIcon className={cx('ellipsis')} icon={faEllipsis} />
                    </div>
            </div>
            
    )
}
export default PageHome;







