import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    // SearchIcons,
    // SearchActiveIcon,
    DiscoverIcon,
    DiscoverActiveIcon,
    ReelsIcon,
    ReelsActiveIcon,
    MessageIcons,
    MessageActiveIcons,
    NotificationIcon,
    NotificationActiveIcon,
    CreateIcon,
    CreateIconActive,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';


const cx = classNames.bind(styles)


function Sidebar() {
    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title="Home page" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
            {/* <MenuItem title="Tìm kiếm" to={config.routes.following} icon={<SearchIcons />} activeIcon={<SearchActiveIcon />} /> */}
            <MenuItem title="Discover" to={config.routes.discover} icon={<DiscoverIcon />} activeIcon={<DiscoverActiveIcon />} />
            <MenuItem title="Short film" to={config.routes.real} icon={<ReelsIcon />} activeIcon={<ReelsActiveIcon />} />
            <MenuItem title="Message" to={config.routes.message} icon={<MessageIcons />} activeIcon={<MessageActiveIcons />}/>
            <MenuItem title="Notification" to={config.routes.notification} icon={<NotificationIcon />} activeIcon={<NotificationActiveIcon />} />
            <MenuItem title="Create" to={config.routes.upload} icon={<CreateIcon />} activeIcon={<CreateIconActive />} />
        </Menu>
        <SuggestedAccounts label="Recommended" />
        {/* <SuggestedAccounts label="Theo dõi tài khoản"/> */}
    </aside>
}
export default Sidebar;