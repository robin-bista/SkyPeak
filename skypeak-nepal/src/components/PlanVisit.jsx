import './PlanVisit.css';

const planItems = [
    {
        icon: '📍',
        title: 'Location',
        value: 'Near Kathmandu Valley',
        description: '2-3 hours drive from Kathmandu',
    },
    {
        icon: '🌤️',
        title: 'Best Season',
        value: 'Oct - May',
        description: 'Clear skies and optimal weather',
    },
    {
        icon: '⏱️',
        title: 'Duration',
        value: 'Full Day Trip',
        description: 'Recommended 6-8 hours',
    },
    {
        icon: '🥾',
        title: 'Difficulty',
        value: 'Easy to Moderate',
        description: 'Suitable for most visitors',
    },
];

function PlanVisit() {
    return (
        <section id="plan" className="plan-visit section">
            <div className="container">
                <h2 className="section-title">Plan Your Visit</h2>
                <p className="section-subtitle">
                    Everything you need to know for your SkyPeak adventure
                </p>

                <div className="plan-visit__grid">
                    {planItems.map((item, index) => (
                        <div
                            key={item.title}
                            className="plan-visit__card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="plan-visit__icon">{item.icon}</div>
                            <div className="plan-visit__content">
                                <h3 className="plan-visit__title">{item.title}</h3>
                                <p className="plan-visit__value">{item.value}</p>
                                <p className="plan-visit__description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="plan-visit__tips">
                    <div className="plan-visit__tip">
                        <h4>💡 Pro Tip</h4>
                        <p>Visit during early morning for stunning sunrise views and fewer crowds. Book your experiences in advance during peak season (October-November).</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PlanVisit;
