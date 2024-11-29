import Home from './pages/Home'
import About from './pages/About'
import E404 from "./pages/error/E404"
import Dashboard from './pages/dash/Dashboard'
import Loading from './pages/Loading'
import {PrivacyPage, TermsPage} from "./pages/legal/pages"
import AuthPage from './pages/AuthPage'

export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '*', component: E404 },
    { path: '/dashboard', component: Dashboard },
    { path: '/loading', component: Loading },
    { path: '/privacy', component: PrivacyPage },
    { path: '/terms', component: TermsPage },
    { path: '/auth', component: AuthPage }
];