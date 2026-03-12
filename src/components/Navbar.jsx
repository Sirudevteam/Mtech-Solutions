import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    // Fix #11 — memoized with functional updater to avoid stale closure
    const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

    const scrollTo = useCallback((e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsOpen(false);
        setServicesOpen(false);
    }, []);

    const closeDropdown = useCallback(() => {
        setIsOpen(false);
        setServicesOpen(false);
    }, []);

    return (
        <nav className="navbar" role="navigation" aria-label="Main navigation">
            <div className="navbar-container container">
                <div className="navbar-logo">
                    <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }}>
                        <span className="logo-text">
                            <img src="/logo.svg" alt="Mtech" className="logo-icon" />
                            Solutions
                        </span>
                    </Link>
                </div>

                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    {isHome ? (
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }}>Home</a>
                    ) : (
                        <Link to="/" className="nav-link" onClick={() => { window.scrollTo({ top: 0 }); closeDropdown(); }}>Home</Link>
                    )}

                    {isHome ? (
                        <a href="#about" className="nav-link" onClick={(e) => scrollTo(e, 'about')}>About</a>
                    ) : (
                        <Link to="/#about" className="nav-link" onClick={closeDropdown}>About</Link>
                    )}

                    <div
                        className="nav-dropdown"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <span className="nav-link dropdown-toggle" onClick={() => setServicesOpen(prev => !prev)}>
                            Services <ChevronDown size={16} />
                        </span>
                        <div className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
                            {isHome ? (
                                <>
                                    <a href="#services" className="dropdown-item" onClick={(e) => scrollTo(e, 'services')}>Core Services</a>
                                    <a href="#press-machines" className="dropdown-item" onClick={(e) => scrollTo(e, 'press-machines')}>Press Machine Services</a>
                                    <Link to="/industrial-products" className="dropdown-item" onClick={closeDropdown}>Industrial Products</Link>
                                    <a href="#industries" className="dropdown-item" onClick={(e) => scrollTo(e, 'industries')}>Industries We Serve</a>
                                </>
                            ) : (
                                <>
                                    <Link to="/#services" className="dropdown-item" onClick={closeDropdown}>Core Services</Link>
                                    <Link to="/#press-machines" className="dropdown-item" onClick={closeDropdown}>Press Machine Services</Link>
                                    <Link to="/industrial-products" className="dropdown-item" onClick={closeDropdown}>Industrial Products</Link>
                                    <Link to="/#industries" className="dropdown-item" onClick={closeDropdown}>Industries We Serve</Link>
                                </>
                            )}
                        </div>
                    </div>

                    {isHome ? (
                        <a href="#partners" className="nav-link" onClick={(e) => scrollTo(e, 'partners')}>Expertise</a>
                    ) : (
                        <Link to="/#partners" className="nav-link" onClick={closeDropdown}>Expertise</Link>
                    )}

                    <div className="navbar-actions-mobile">
                        {isHome ? (
                            <a href="#contact" className="btn btn-gold" onClick={(e) => scrollTo(e, 'contact')}>Get a Quote</a>
                        ) : (
                            <Link to="/#contact" className="btn btn-gold" onClick={closeDropdown}>Get a Quote</Link>
                        )}
                    </div>
                </div>

                <div className="navbar-actions-desktop">
                    {isHome ? (
                        <a href="#contact" className="btn btn-gold" onClick={(e) => scrollTo(e, 'contact')}>Get a Quote</a>
                    ) : (
                        <Link to="/#contact" className="btn btn-gold" onClick={closeDropdown}>Get a Quote</Link>
                    )}
                </div>

                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle navigation menu" aria-expanded={isOpen}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
