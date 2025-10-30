import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechCarousel3D from "../components/TechCarousel3D";
import { techStackIcons } from "../constants";

const TechStack = () => {
  // Animate the carousel on scroll
  useGSAP(() => {
    gsap.fromTo(
      ".carousel-banner",
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={
            <img 
              src="../images/skills.png" 
              alt="My Awesome Skills" 
              className="sub-icon" 
            />
          }
          sub={<p className="tech-text">My Tech Stack</p>}
        />
        
        {/* 3D Carousel replacing the grid */}
        <TechCarousel3D techStackIcons={techStackIcons} />
      </div>
    </div>
  );
};

export default TechStack;