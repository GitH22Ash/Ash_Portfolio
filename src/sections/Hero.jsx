import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../components/Button.jsx";
import { words } from "../constants/index.js";
import { Spotlight } from "../components/ui/Spotlight.jsx";
import { BackgroundBeams } from "../components/ui/background-beams.jsx";
import { GlobeDemo } from "../components/GlobeDemo.jsx";
// import { px } from "framer-motion";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <BackgroundBeams />

      <Spotlight className="left-90 top-28 h-[80vh] w-[50vw]" fill="#c8e4f0ff" />
      <Spotlight className="left-90 top-28 h-[80vh] w-[50vw]" fill="#8dc7e1ff" />

      <Spotlight
          className="-top-20 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#c8e4f0ff"
        />
      <Spotlight
          className="-top-20 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#7facc0ff"
        />

        <Spotlight
          className="h-[90vh] w-[40vw] top-20 left-full"
          fill="#78c1e0ff"
        />
        <Spotlight
          className="h-[90vh] w-[40vw] top-50 left-full"
          fill="#c8e4f0ff"
        />

      <div className="absolute top-0 left-0 z-10 pointer-events-none">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout flex justify-center items-center text-center md:text-justify">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative pointer-events-none">
              Hi, I'm Ayush, Fullstack Web Developer ,an aspiring Software
              Engineer <br /> and Designer. I help individuals bring their
              ideas to life through
              <br />
              innovative and user-centric digital solutions.
            </p>
            
           <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12 gradient-border-btn text-xl font-semibold"
              id="counter"
              href="#work"
            />
            <Button
              text="View Resume"
              className="md:w-80 md:h-16 w-60 h-12 gradient-border-btn text-xl font-semibold"
              id="counter"
              href="/files/Ayush Bijalwan_Resume.pdf"
            />
          </div>

          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        {/* <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure> */}
      </div>

      {/* Two Column Section */}
      <div className="relative z-30 py-10 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-center">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Connecting Globally . . .
            </h3>
            <p className="text-white-50 text-lg md:text-xl max-w-lg">
              Always eager to learn, grow, and contribute to real-world projects that make a difference across the globe.
            </p>
            <div className="flex flex-col gap-2 text-white-50">
              <p className="flex items-center gap-2">
                <span className="text-2xl"><img src="../images/earth.png" alt="globe" className="new-img"/></span>
                <span>Flexible with Global Teams</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-2xl"><img src="../images/bulb.png" alt="bulb" className="new-img"/></span>
                <span>Building innovative solutions</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-2xl"><img src="../images/rocket.png" alt="rocket" className="new-img"/></span>
                <span>Delivering results that matter</span>
              </p>
            </div>
          </div>

          {/* Right Section - Globe */}
          <div className="flex justify-center items-center">
            <div className="w-full h-[400px] md:h-[500px]">
              <GlobeDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;