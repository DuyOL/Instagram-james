import classNames from "classnames/bind";
import Header from '~/Layout/components/Header';
import Sidebar from "~/Layout/components/Sidebar";
import styles from "./DefaultLayout.module.scss"
import PropTypes from 'prop-types';

const cx = classNames.bind(styles)

function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}
DefaultLayout.protoType = {
    children:PropTypes.node.isRequired,
}
export default DefaultLayout;