import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeaderlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark , faSpinner , faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCloudUpload, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';


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

    const currentUser = true;

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

    const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@Duy'
        },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coins'
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/Gear'
        },
        ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log Out',
        to: '/logout',
        separate: true,
    },
    ]
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* <div className={cx('logo')}> */}
                     <img src={tiktokLogo} alt="TikTok Logo" className={cx('logo-svg')} />
                {/* </div> */}
                <HeaderlessTippy
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
                </HeaderlessTippy>
                <div className={cx('actions')}>
                {currentUser ? (
                        <>
                            <Tippy delay={[0, 230]} content =  "upload Video" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                        </>
                    ) : (            
                <>       
                    <Button text >Upload</Button>
                    <Button primary >Log in</Button>
                    
                </> 
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={hendleMenuChange}>
                        {currentUser ? (
                            <img className={cx('user-avatar')}
                            src='https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/311694773_908430393473557_4231130014534670841_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fCjYafxIVv4AX_lcEw7&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDbCFywbykp3he9nwscCEcPnwq9AvYo912bH4Y1GQ1wZQ&oe=64C29BA3'
                            alt="Nguyễn Đức Duy" />
                        ) : (
                        <button className={cx('more-btn')}>
                         <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;