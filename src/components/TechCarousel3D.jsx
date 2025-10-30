import './TechCarousel3D.css';

const TechCarousel3D = ({ techStackIcons}) => {
  return (
    <div className="carousel-banner">
      <div className="carousel-slider" style={{ '--quantity': techStackIcons.length }}>
        {techStackIcons.map((tech, index) => (
          <div 
            key={tech.name} 
            className="carousel-item" 
            style={{ '--position': index + 1 }}
          >
            <div className="carousel-card">
              <div className="carousel-card-content">
                <div className="carousel-icon-container">
                  <img 
                    src={tech.imgPath || tech.icon} 
                    alt={tech.name}
                    className="carousel-tech-icon"
                  />
                </div>
                <p className="carousel-tech-name">{tech.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Central Model/Image */}
      <div className="carousel-center-model">
        <img 
          src={"/images/ayush.png"} 
          alt="Center Character" 
          className="center-model-image"
        />
      </div>
    </div>
  );
};

export default TechCarousel3D;