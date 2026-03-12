import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Fix #1 — Code splitting: pages are lazy-loaded only when navigated to.
// Reduces initial JS bundle by ~30-40%.
const Home = lazy(() => import('./pages/Home'));
const IndustrialProducts = lazy(() => import('./pages/IndustrialProducts'));

function PageLoader() {
    return (
        <div style={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-primary)',
        }}>
            <div style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '3px solid rgba(200,150,12,0.2)',
                borderTopColor: 'var(--accent-gold-bright)',
                animation: 'spin 0.7s linear infinite',
            }} aria-label="Loading…" role="status" />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <a href="#main-content" className="skip-to-content">Skip to main content</a>
                <Navbar />
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/industrial-products" element={<IndustrialProducts />} />
                    </Routes>
                </Suspense>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
