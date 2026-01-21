import './Gallery.css';

const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
        alt: 'Himalayan mountain range at sunrise',
        span: 'large',
    },
    {
        src: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=600&q=80',
        alt: 'Paragliding over Nepal valleys',
        span: 'normal',
    },
    {
        src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
        alt: 'Snow-capped peaks and blue sky',
        span: 'normal',
    },
    {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
        alt: 'Golden hour mountain silhouette',
        span: 'normal',
    },
    {
        src: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=80',
        alt: 'Misty mountain trails',
        span: 'normal',
    },
    {
        src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
        alt: 'Trekkers at mountain viewpoint',
        span: 'large',
    },
];

function Gallery() {
    return (
        <section id="gallery" className="gallery section">
            <div className="container">
                <h2 className="section-title">Capture the Magic</h2>
                <p className="section-subtitle">
                    Real moments, real altitude, real emotions from SkyPeak
                </p>

                <div className="gallery__grid">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className={`gallery__item ${image.span === 'large' ? 'gallery__item--large' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <img src={image.src} alt={image.alt} className="gallery__image" />
                            <div className="gallery__overlay">
                                <span className="gallery__caption">{image.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gallery__cta">
                    <a href="#contact" className="btn btn-secondary" style={{ color: 'var(--deep-navy)', borderColor: 'var(--sky-blue)' }}>
                        View Full Gallery
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
