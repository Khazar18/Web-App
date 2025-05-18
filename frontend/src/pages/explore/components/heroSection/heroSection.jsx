import Venture from '../../../../assets/venture.svg';
import Astranaut from '../../../../assets/femaleAstronaut.svg';
import './heroSection.css';
export default function HeroSection() {
    return (
        <div className="venture-header">
            <div className="venture-graphics">
                <img src={Venture} alt="VR" className="vr-icon" />
            </div>
            <h1 className="venture-title">Venture</h1>
            <div className="astronaut-graphics">
                <img src={Astranaut} alt="VR" className="vr-icon" />
            </div>
        </div>
    );
}
