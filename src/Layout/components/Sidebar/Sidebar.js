import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    SearchIcons,
    SearchActiveIcon,
    DiscoverIcon,
    DiscoverActiveIcon,
    ReelsIcon,
    ReelsActiveIcon,
    MessageIcons,
    MessageActiveIcons,
    NotificationIcon,
    NotificationActiveIcon,
    CreateIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';


const cx = classNames.bind(styles)


function Sidebar() {
    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title="Trang chủ" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
            <MenuItem title="Tìm kiếm" to={config.routes.following} icon={<SearchIcons />} activeIcon={<SearchActiveIcon />} />
            <MenuItem title="Khám phá" to={config.routes.discover} icon={<DiscoverIcon />} activeIcon={<DiscoverActiveIcon />} />
            <MenuItem title="Phim ngắn" to={config.routes.real} icon={<ReelsIcon />} activeIcon={<ReelsActiveIcon />} />
            <MenuItem title="Tin nhắn" to={config.routes.message} icon={<MessageIcons />} activeIcon={<MessageActiveIcons />}/>
            <MenuItem title="Thông báo" to={config.routes.notification} icon={<NotificationIcon />} activeIcon={<NotificationActiveIcon />} />
            <MenuItem title="Tạo" to={config.routes.upload} icon={<CreateIcon />} />
        </Menu>
        <SuggestedAccounts label="Được đề xuất" />
        {/* <SuggestedAccounts label="Theo dõi tài khoản"/> */}
    </aside>
}
export default Sidebar;