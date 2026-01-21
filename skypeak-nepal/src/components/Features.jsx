import './Features.css';

const features = [
    {
        icon: '🏔️',
        title: 'Highest Panoramic Viewpoint',
        description: 'Experience 360° views of the majestic Himalayan range from Nepal\'s most stunning altitude.',
    },
    {
        icon: '🪂',
        title: 'World-Class Paragliding',
        description: 'Soar above valleys and ridges with certified pilots and breathtaking aerial perspectives.',
    },
    {
        icon: '🚠',
        title: 'Scenic Cable Car Access',
        description: 'Glide through misty clouds and lush forests on a scenic cable car journey to the summit.',
    },
    {
        icon: '☕',
        title: 'Sky Cafes & Photo Decks',
        description: 'Relax at mountain-top cafes with panoramic views perfect for your golden hour shots.',
    },
];

function Features() {
    return (
        <section id="features" className="features section">
            <div className="container">
                <h2 className="section-title">Why SkyPeak?</h2>
                <p className="section-subtitle">
                    Discover what makes SkyPeak Nepal's most sought-after mountain destination
                </p>

                <div className="features__grid">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="features__card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="features__icon">{feature.icon}</div>
                            <h3 className="features__title">{feature.title}</h3>
                            <p className="features__description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
