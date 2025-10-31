import { useEffect, useRef, useState } from "react";
import GlowCard from "./GlowCard";
import TestimonialAvatar from "./TestimonialAvatar";

const InfiniteMovingCards = ({ items, direction = "left", speed = "fast" }) => {
  const containerRef = useRef(null);
  const [animationDuration, setAnimationDuration] = useState("80s");
  const [animationDirection, setAnimationDirection] = useState("forwards");

  useEffect(() => {
    getDirection();
    getSpeed();
  }, [direction, speed]);

  const getDirection = () => {
    if (direction === "left") {
      setAnimationDirection("forwards");
    } else {
      setAnimationDirection("reverse");
    }
  };

  const getSpeed = () => {
    if (speed === "fast") {
      setAnimationDuration("20s");
    } else if (speed === "normal") {
      setAnimationDuration("40s");
    } else {
      setAnimationDuration("80s");
    }
  };

  return (
    <div
      ref={containerRef}
      className="scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      style={{
        "--animation-duration": animationDuration,
        "--animation-direction": animationDirection,
      }}
    >
      <div className="flex min-w-full shrink-0 gap-5 py-4 w-max flex-nowrap animate-scroll hover:[animation-play-state:paused]">
        {/* Render original items */}
        {items.map((item, idx) => (
          <div
            key={`original-${idx}`}
            className="w-[350px] max-w-full relative flex-shrink-0"
          >
            <GlowCard card={item} index={`original-${idx}`}>
              <div className="flex items-center gap-3">
                <TestimonialAvatar imgPath={item.imgPath} name={item.name} />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-white-50 text-sm">{item.mentions}</p>
                </div>
              </div>
            </GlowCard>
          </div>
        ))}
        {/* Render duplicate items for seamless loop */}
        {items.map((item, idx) => (
          <div
            key={`duplicate-${idx}`}
            className="w-[350px] max-w-full relative flex-shrink-0"
          >
            <GlowCard card={item} index={`duplicate-${idx}`}>
              <div className="flex items-center gap-3">
                <TestimonialAvatar imgPath={item.imgPath} name={item.name} />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-white-50 text-sm">{item.mentions}</p>
                </div>
              </div>
            </GlowCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMovingCards;