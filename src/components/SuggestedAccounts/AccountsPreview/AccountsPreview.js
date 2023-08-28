import classNames from 'classnames/bind';
import styles from './AccountsPreview.module.scss';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Folow1 from "~/components/Popper/Menu/images/Folow1.jpg";



const cx = classNames.bind(styles);


function AccountsPreview() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')}
                    src={Folow1}
                    alt=''>
                </img>
                
                <Button className={cx('folow-btn')} primary>
                    Theo dõi
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>James</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>James Maridista </p>
                <p className={cx('analyties')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                </p>
            </div>
        </div>
     );
}

export default AccountsPreview;




