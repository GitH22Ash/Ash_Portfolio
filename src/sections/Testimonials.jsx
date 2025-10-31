import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import InfiniteMovingCards from "../components/InfiniteMovingCards";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={
            <img
              src="../images/testimonials.png"
              alt="Showcase"
              className="sub-icon"
            />
          }
          sub={<p className="tech-text">Remarks and Testimonials</p>}
        />

        <div className="mt-16">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;