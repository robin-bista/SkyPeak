import './Experiences.css';

const experiences = [
    {
        image: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=600&q=80',
        title: 'Paragliding Over Valleys',
        duration: '15-30 mins',
        difficulty: 'Moderate',
        description: 'Soar above stunning valleys with panoramic Himalayan views.',
    },
    {
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
        title: 'Glass Skywalk',
        duration: '30 mins',
        difficulty: 'Easy',
        description: 'Walk on air with transparent floors over dramatic cliffs.',
    },
    {
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
        title: 'Sunrise Viewpoint',
        duration: '2-3 hours',
        difficulty: 'Easy',
        description: 'Witness magical Himalayan sunrises painting the peaks gold.',
    },
    {
        image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=80',
        title: 'Cable Car Ride',
        duration: '20 mins',
        difficulty: 'Easy',
        description: 'Glide through clouds to the summit in scenic comfort.',
    },
    {
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80',
        title: 'Mountain Hiking',
        duration: '3-5 hours',
        difficulty: 'Moderate',
        description: 'Trek through pristine trails with spectacular mountain vistas.',
    },
    {
        image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&q=80',
        title: 'Sky Cafe Experience',
        duration: '1-2 hours',
        difficulty: 'Easy',
        description: 'Sip coffee with clouds at your feet and peaks all around.',
    },
];

function Experiences() {
    return (
        <section id="experiences" className="experiences section">
            <div className="container">
                <h2 className="section-title">Signature Experiences</h2>
                <p className="section-subtitle">
                    Discover unforgettable adventures that await you at SkyPeak
                </p>

                <div className="experiences__grid">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.title}
                            className="experiences__card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="experiences__image-wrapper">
                                <img src={exp.image} alt={exp.title} className="experiences__image" />
                                <div className="experiences__overlay">
                                    <span className="experiences__difficulty">{exp.difficulty}</span>
                                </div>
                            </div>
                            <div className="experiences__content">
                                <h3 className="experiences__title">{exp.title}</h3>
                                <p className="experiences__description">{exp.description}</p>
                                <div className="experiences__meta">
                                    <span className="experiences__duration">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 6v6l4 2" />
                                        </svg>
                                        {exp.duration}
                                    </span>
                                    <a href="#contact" className="experiences__link">
                                        Learn More →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="experiences__cta">
                    <a href="#contact" className="btn btn-primary">View All Experiences</a>
                </div>
            </div>
        </section>
    );
}

export default Experiences;
