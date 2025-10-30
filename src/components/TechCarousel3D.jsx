import './TechCarousel3D.css';

const TechCarousel3D = ({ techStackIcons }) => {
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
                <img 
                  src={tech.imgPath || tech.icon} 
                  alt={tech.name}
                  className="carousel-tech-icon"
                />
                <p className="carousel-tech-name" >{tech.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel3D;