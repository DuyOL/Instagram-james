import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import LoginBox from './LoginBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import config from '~/config';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import tiktokLogo from '~/assets/images/logoIntagram.svg';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import myAvatar from '~/assets/images/avatar.jpg';

import { auth } from './myFirebaseApp'; 
import { signOut } from 'firebase/auth'; 

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'Language',
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
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log Out',
  },
];

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const currentUser = false;

  // Xử lý đăng xuất Firebase
  const handleLogout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem('firebaseAuthToken'); // Xóa token từ localStorage (nếu bạn đã lưu token vào đó)
    console.log('Đăng xuất thành công');
  } catch (error) {
    console.error('Lỗi đăng xuất:', error);
  }
};


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
      to: '/@Duy',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coins',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/Gear',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log Out',
      to: '/logout',
      separate: true,
      onClick: handleLogout,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={tiktokLogo} alt="TikTok Logo" className={cx('logo-svg')} />
        </Link>

        <Search />
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="upload Video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary onClick={() => setShowLogin(true)}>
                Log in
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={hendleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src={myAvatar}
                alt="Nguyễn Đức Duy"
                fallback="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/311694773_908430393473557_4231130014534670841_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fCjYafxIVv4AX_lcEw7&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDbCFywbykp3he9nwscCEcPnwq9AvYo912bH4Y1GQ1wZQ&oe=64C29BA3"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
      {showLogin && (
        <div className={cx('login-container')}>
          <LoginBox onClose={() => setShowLogin(false)} />
        </div>
      )}
    </header>
  );
}

export default Header;
