import './CTA.css';

function CTA() {
    return (
        <section className="cta section">
            <div className="cta__background">
                <div className="cta__overlay"></div>
            </div>
            <div className="container cta__content">
                <h2 className="cta__title">Ready to Experience SkyPeak?</h2>
                <p className="cta__subtitle">
                    Book your adventure today and create memories that last a lifetime
                </p>
                <div className="cta__buttons">
                    <a href="#contact" className="btn btn-orange">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        Book Now
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CTA;
