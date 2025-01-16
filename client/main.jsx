import { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoadingPage from './pages/LoadingPage'
import './assets/css/index.css'

const E404 = lazy(() => import('./pages/error/E404'))
const HomePage = lazy(() => import('./pages/info/Home'));
const AboutPage = lazy(() => import('./pages/info/About'));
const ContactPage = lazy(() => import('./pages/info/ContactUs'));
const TermsPage = lazy(() => import('./pages/info/Terms'));
const PrivacyPage = lazy(() => import('./pages/info/Privacy'));
const PricingPage = lazy(()=> import('./pages/info/PricingPage') )

const DashboardPage = lazy(() => import('./pages/dash/Dashboard'));




createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Suspense fallback={<LoadingPage />}> <HomePage /> </Suspense>} />
            <Route path='/about' element={<Suspense fallback={<LoadingPage />}> <AboutPage /> </Suspense>} />
            <Route path='/terms' element={<Suspense fallback={<LoadingPage />}> <TermsPage /> </Suspense>} />
            <Route path='/privacy' element={<Suspense fallback={<LoadingPage />}> <PrivacyPage /> </Suspense>} />
            <Route path='/contact' element={<Suspense fallback={<LoadingPage />}> <ContactPage /> </Suspense>} />
            <Route path='/pricing' element={<Suspense fallback={<LoadingPage />}> <PricingPage /> </Suspense>} />
            <Route path='/dashboard' element={<Suspense fallback={<LoadingPage />}> <DashboardPage /> </Suspense>} />

            {/* NOT FOUND  */}
            <Route path="*" element={<Suspense fallback={<LoadingPage />}> <E404 /> </Suspense>} />
        </Routes>
    </BrowserRouter>
)
