import styles from './Upload.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Upload() {
    return (
        <div className={cx('wrapper')}>
           <h1> Thước Phim </h1>
        </div>
    )
}
export default Upload;