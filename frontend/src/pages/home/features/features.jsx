import React from 'react';
import './features.css';
import GraduationCap from '../../../assets/graduation-icon.svg';
import Notification from '../../../assets/notification.svg';
import HandShake from '../../../assets/handshake.svg'
import Mike from '../../../assets/mike.svg'

export function Features() {
  const features = [
    {
      icon: <img src={GraduationCap} alt="Graduation Cap" />,
      title: "Access All",
      subtitle: "Universities",
      description: "Connect with societies and communities in your university."
    },
    {
      icon: <img src={Notification} alt="Notfication" />,
      title: "Interactive",
      subtitle: "Q & A",
      description: "Ask and answer questions to engage with your university peers."
    },
    {
      icon: <img src={Mike} alt="Mike" />,
      title: "Stay",
      subtitle: "Updated",
      description: "Get the latest updates on university announcements and events."
    },
    {
      icon: <img src={HandShake} alt="Handshake" />,
      title: "Join",
      subtitle: "Communities",
      description: "Join communities across universities which help you grow."
    }
  ];

  return (
    <section className="features-section">
      <h2 className="features-title">Why <span className="highlight">Academora</span>?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">
              {feature.title}<br />
              <span className="feature-subtitle">{feature.subtitle}</span>
            </h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
