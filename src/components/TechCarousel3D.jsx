import '../../src/index.css';

const TechCarousel3D = ({ items }) => {
  return (
    <div className="carousel-banner">
      <div className="carousel-slider" style={{ '--quantity': items.length }}>
        {items.map((item, index) => (
          <div 
            key={index} 
            className="carousel-item" 
            style={{ '--position': index + 1 }}
          >
            <img src={item.imgPath || item.icon} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel3D;
