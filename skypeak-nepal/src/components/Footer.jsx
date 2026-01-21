import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <span className="footer__logo-icon">🏔️</span>
                            <span className="footer__logo-text">
                                <span className="footer__logo-name">SkyPeak</span>
                                <span className="footer__logo-tagline">Nepal</span>
                            </span>
                        </div>
                        <p className="footer__description">
                            Nepal's premier mountain destination offering breathtaking views,
                            world-class adventures, and unforgettable experiences.
                        </p>
                        <div className="footer__social">
                            <a href="#" className="footer__social-link" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="#" className="footer__social-link" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#" className="footer__social-link" aria-label="YouTube">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer__links">
                        <h4 className="footer__title">Explore</h4>
                        <ul className="footer__list">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#experiences">Experiences</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#plan">Plan Your Visit</a></li>
                        </ul>
                    </div>

                    <div className="footer__links">
                        <h4 className="footer__title">Adventures</h4>
                        <ul className="footer__list">
                            <li><a href="#experiences">Paragliding</a></li>
                            <li><a href="#experiences">Cable Car Ride</a></li>
                            <li><a href="#experiences">Sunrise Viewpoint</a></li>
                            <li><a href="#experiences">Sky Cafe</a></li>
                        </ul>
                    </div>

                    <div className="footer__contact">
                        <h4 className="footer__title">Contact Us</h4>
                        <ul className="footer__list footer__contact-list">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                Near Kathmandu, Nepal
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                +977-XXX-XXXXXXX
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                info@skypeaknepal.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© {currentYear} SkyPeak Nepal. All rights reserved.</p>
                    <div className="footer__bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
