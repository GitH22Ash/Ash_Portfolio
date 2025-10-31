import { abilities } from "../constants";
import "./FeatureCards.css";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="feature-card"
        >
          <div className="feature-card-icon-wrapper">
            <img src={imgPath} alt={title} className="feat-img"/>
          </div>
          <h3 className="feature-card-title">{title}</h3>
          <p className="feature-card-desc">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;