import './Hero.css';

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero__background">
                <div className="hero__overlay"></div>
                <div className="hero__particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="hero__particle" style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}></div>
                    ))}
                </div>
            </div>

            <div className="container hero__content">
                <div className="hero__badge">
                    <span className="hero__badge-icon">✨</span>
                    <span>Nepal's Premier Mountain Destination</span>
                </div>

                <h1 className="hero__title">
                    Where Nepal <br />
                    <span className="hero__title-highlight">Touches the Sky</span>
                </h1>

                <p className="hero__subtitle">
                    Adventure • Views • Peace
                </p>

                <p className="hero__description">
                    Experience breathtaking Himalayan panoramas, world-class paragliding,
                    and unforgettable mountain adventures at Nepal's most stunning viewpoint.
                </p>

                <div className="hero__buttons">
                    <a href="#experiences" className="btn btn-primary">
                        <span>Explore Experiences</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        <span>Contact Us</span>
                    </a>
                </div>

                <div className="hero__stats">
                    <div className="hero__stat">
                        <span className="hero__stat-number">3,500m</span>
                        <span className="hero__stat-label">Altitude</span>
                    </div>
                    <div className="hero__stat">
                        <span className="hero__stat-number">360°</span>
                        <span className="hero__stat-label">Panoramic Views</span>
                    </div>
                    <div className="hero__stat">
                        <span className="hero__stat-number">5+</span>
                        <span className="hero__stat-label">Adventures</span>
                    </div>
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <span>Scroll to explore</span>
                <div className="hero__scroll-arrow"></div>
            </div>
        </section>
    );
}

export default Hero;
