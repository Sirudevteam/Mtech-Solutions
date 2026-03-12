import { Mail, Phone, MapPin, MessageSquare, ChevronRight } from 'lucide-react';
import './Footer.css';

// Fix #10 — Computed once at module scope, not on every render
const CURRENT_YEAR = new Date().getFullYear();

// Fix — scrollTo extracted to module scope (pure function, no closure over state)
const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Footer = () => {
    return (
        <footer className="footer" role="contentinfo">
            <div className="container">
                <div className="footer-top">
                    {/* Company Info & Contact */}
                    <div className="footer-company">
                        <h3 className="footer-logo">
                            <span className="text-highlight">Mtech</span> Solutions
                        </h3>
                        <p className="footer-desc">
                            Advanced Industrial Automation &amp; Press Machine Solutions. Distribution,
                            Integration, Manufacturing, and IIoT — your single-source automation partner.
                        </p>

                        <ul className="footer-contact-list">
                            <li className="footer-contact-item">
                                <Phone size={18} />
                                <div>
                                    <span className="contact-label">Phone</span>
                                    <a href="tel:+919876543210">+91 98765 43210</a>
                                </div>
                            </li>
                            <li className="footer-contact-item">
                                <MessageSquare size={18} />
                                <div>
                                    <span className="contact-label">WhatsApp</span>
                                    <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">+91 98765 43210</a>
                                </div>
                            </li>
                            <li className="footer-contact-item">
                                <Mail size={18} />
                                <div>
                                    <span className="contact-label">Email</span>
                                    <a href="mailto:info@mtechsolutions.com">info@mtechsolutions.com</a>
                                </div>
                            </li>
                            <li className="footer-contact-item">
                                <MapPin size={18} />
                                <div>
                                    <span className="contact-label">Address</span>
                                    <span>No. 229, Gandhinagar, Thogarapalli,<br />Bargur Taluk, Krishnagiri – 635203</span>
                                </div>
                            </li>
                        </ul>

                    </div>

                    {/* Quick Links */}
                    <div className="footer-links-group">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#hero" onClick={(e) => scrollTo(e, 'hero')}><ChevronRight size={14} /> Home</a></li>
                            <li><a href="#about" onClick={(e) => scrollTo(e, 'about')}><ChevronRight size={14} /> About Us</a></li>
                            <li><a href="#services" onClick={(e) => scrollTo(e, 'services')}><ChevronRight size={14} /> Services</a></li>
                            <li><a href="#industries" onClick={(e) => scrollTo(e, 'industries')}><ChevronRight size={14} /> Industries</a></li>
                            <li><a href="#contact" onClick={(e) => scrollTo(e, 'contact')}><ChevronRight size={14} /> Contact</a></li>
                            <li><a href="#contact" onClick={(e) => scrollTo(e, 'contact')}><ChevronRight size={14} /> Get a Quote</a></li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className="footer-links-group">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#services" onClick={(e) => scrollTo(e, 'services')}><ChevronRight size={14} /> Product Distribution</a></li>
                            <li><a href="#services" onClick={(e) => scrollTo(e, 'services')}><ChevronRight size={14} /> Integration Services</a></li>
                            <li><a href="#services" onClick={(e) => scrollTo(e, 'services')}><ChevronRight size={14} /> Panel Manufacturing</a></li>
                            <li><a href="#services" onClick={(e) => scrollTo(e, 'services')}><ChevronRight size={14} /> IIoT Solutions</a></li>
                            <li><a href="#press-machines" onClick={(e) => scrollTo(e, 'press-machines')}><ChevronRight size={14} /> Press Machine Services</a></li>
                            <li><a href="#partners" onClick={(e) => scrollTo(e, 'partners')}><ChevronRight size={14} /> Technology Partners</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    {/* Fix #10 — CURRENT_YEAR computed once at module level */}
                    <p>&copy; {CURRENT_YEAR} Mtech Solutions. All Rights Reserved.</p>
                    <p className="footer-credit">Designed by <a href="https://siruailabs.pages.dev/" target="_blank" rel="noreferrer">Siru AI Labs</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
