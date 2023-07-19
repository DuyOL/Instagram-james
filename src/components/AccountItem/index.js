import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')} >
            <img className={cx('avatar')} src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/311694773_908430393473557_4231130014534670841_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ocuEXHLtwxsAX80zEiv&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCPoMzO95OQB49BdHBIUv2mLAKeLDCKlGsX_UX3k_lhMQ&oe=64B9B7A5" alt="Hoa"></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>James Maridista</span>
                    <FontAwesomeIcon className={cx('check')} icon = {faCheckCircle} />
                </h4>
                <span className={cx('username')}>Nhà Tài Phiệt</span>
            </div>
        </div>
    )
}

export default AccountItem;