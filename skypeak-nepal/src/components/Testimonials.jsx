import { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
    {
        text: "One of the best viewpoints in Nepal. The sunrise was absolutely magical, and the paragliding experience was beyond words. A must-visit destination!",
        author: "Sarah Johnson",
        location: "United Kingdom",
        avatar: "🇬🇧",
    },
    {
        text: "Safer and more scenic than I expected. The cable car ride through the clouds was surreal. SkyPeak exceeded all my expectations!",
        author: "Michael Chen",
        location: "Singapore",
        avatar: "🇸🇬",
    },
    {
        text: "Perfect blend of adventure and tranquility. The sky cafe with panoramic views is worth every moment. Already planning my next visit!",
        author: "Priya Sharma",
        location: "India",
        avatar: "🇮🇳",
    },
    {
        text: "As a photographer, SkyPeak is paradise. The golden hour shots here are unmatched. Truly Nepal at its finest!",
        author: "David Mueller",
        location: "Germany",
        avatar: "🇩🇪",
    },
];

function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="testimonials section">
            <div className="container">
                <h2 className="section-title">What Travelers Say</h2>
                <p className="section-subtitle">
                    Stories from adventurers who have touched the sky
                </p>

                <div className="testimonials__slider">
                    <div
                        className="testimonials__track"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonials__slide">
                                <div className="testimonials__card">
                                    <div className="testimonials__quote">"</div>
                                    <p className="testimonials__text">{testimonial.text}</p>
                                    <div className="testimonials__author">
                                        <span className="testimonials__avatar">{testimonial.avatar}</span>
                                        <div className="testimonials__info">
                                            <span className="testimonials__name">{testimonial.author}</span>
                                            <span className="testimonials__location">{testimonial.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="testimonials__dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`testimonials__dot ${index === activeIndex ? 'testimonials__dot--active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
