import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { wrapper as PopperWrapper } from '~/components/Popper';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountsPreview from './AccountsPreview';
import Folow1 from "~/components/Popper/Menu/images/Folow1.jpg";

const cx = classNames.bind(styles);

function AccountsItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountsPreview />
                 </PopperWrapper>
            </div>
        )
    }
    return (         
        <div>
            <Tippy
                // visible
                interactive
                delay={[800, 0]}
                placement="bottom"
                offset={[-20 , 0]}
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src={Folow1}
                        alt=''
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>James</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>James Maridista</p>
                    </div>
                </div>
            </Tippy>
        </div>
     );
}
PropTypes.propTypes = {

}

export default AccountsItem;
