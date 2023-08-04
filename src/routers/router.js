import config from '~/config'

// Layouts
import { HeaderOnly } from '~/Layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// Router.js
import Discover from '~/pages/Discover';
import Real from '~/pages/Real';
import Message from '~/pages/Message';
import Notification from '~/pages/Notification';

// Pullic routers
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.discover, component: Discover },
    { path: config.routes.real, component: Real },
    { path: config.routes.message, component: Message },
    { path: config.routes.notification, component: Notification },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload  },
    { path: config.routes.search, component: Search , layout: HeaderOnly }, // Có thể để layout:null để tắt phần header vào thẳng layout Search
    
];

const privateRoutes = [

]

export {publicRoutes , privateRoutes}