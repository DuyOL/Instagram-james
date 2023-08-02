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


const cx = classNames.bind(styles)


function Sidebar() {
    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title="Trang chủ" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
            <MenuItem title="Tìm kiếm" to={config.routes.search} icon={<SearchIcons />} activeIcon={<SearchActiveIcon />} />
            <MenuItem title="Khám phá" to={config.routes.discover} icon={<DiscoverIcon />} activeIcon={<DiscoverActiveIcon />} />
            <MenuItem title="Real" to={config.routes.real} icon={<ReelsIcon />} activeIcon={<ReelsActiveIcon />} />
            <MenuItem title="Tin nhắn" to={config.routes.message} icon={<MessageIcons />} activeIcon={<MessageActiveIcons />}/>
            <MenuItem title="Thông báo" to={config.routes.notification} icon={<NotificationIcon />} activeIcon={<NotificationActiveIcon />} />
            <MenuItem title="Tạo" to={config.routes.upload} icon={<CreateIcon />} />
        </Menu>
    </aside>
}
export default Sidebar;