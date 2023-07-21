import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark , faSpinner , faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';


import Button from '~/components/Button';
import { wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import tiktokLogo from '~/assets/images/logoIntagram.svg';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                 {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'FeedBack and Help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])
    //handle logic
    const hendleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
         }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* <div className={cx('logo')}> */}
                     <img src={tiktokLogo} alt="TikTok Logo" className={cx('logo-svg')} />
                {/* </div> */}
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                     Accounts
                                </h4>
                                     <AccountItem />
                                     <AccountItem />
                                     <AccountItem />
                                     <AccountItem />
                                     <AccountItem />
                                </PopperWrapper>
                            </div>                          
                      )}
                      >
                <div className={cx('search')}>
                    <input placeholder='Search accounts and video' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                         <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                   
                    </div>
                     </Tippy>
                <div className={cx('actions')}>
                    <Button text >Upload</Button>
                    <Button primary >Log in</Button>
                    <Menu
                        items={MENU_ITEMS}
                        onChange={hendleMenuChange}
                    >
                        <button className={cx('more-btn')}>
                         <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;