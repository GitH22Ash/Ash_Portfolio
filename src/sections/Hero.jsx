import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// import AnimatedCounter from "../components/AnimatedCounter.jsx";
import Button from "../components/Button.jsx";
import { words } from "../constants/index.js";
// import HeroExperience from "../components/models/hero_models/HeroExperience.jsx";
import { Spotlight } from "../components/ui/Spotlight.jsx";
import BackgroundRippleEffect from "../components/ui/background-ripple-effect.jsx";

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
      <BackgroundRippleEffect
        rows={13}
        cols={30}
        fillColor="rgba(135, 206, 235, 0.2)"
        className="absolute inset-0 z-20"
      />
      <Spotlight className="left-90 top-28 h-[80vh] w-[50vw]" fill="#87CEEB" />

      <Spotlight
          className="-top-30 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#fefefeff"
        />

        <Spotlight
          className="h-[90vh] w-[40vw] top-20 left-full"
          fill="#ffffffff"
        />

      <div className="absolute top-0 left-0 z-10 pointer-events-none">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout flex justify-center items-center text-center md:text-left">
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
            />
            <Button
              text="View Resume"
              className="md:w-80 md:h-16 w-60 h-12 gradient-border-btn text-xl font-semibold"
              id="counter"
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

      <div className="relative z-30 flex justify-center items-center text-center py-10">
        <p className="text-white-50 text-lg md:text-xl max-w-2xl">
        🚀 Always eager to learn, grow, and contribute to real-world projects that make a difference.
        </p>
        </div>
    </section>
  );
};

export default Hero;