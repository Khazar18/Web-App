import './stories.css';
export default function Story({ logo, alt }) {
    return (
      <div className="story-logo">
        <div className="dot"></div>
        <img src={logo} alt={alt} />
      </div>
    );
  }