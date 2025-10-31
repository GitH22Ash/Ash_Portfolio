import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
// import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import "./index.css";

const App = () => (
  <div className="custom-cursor">
    <Navbar />
    <Hero />
    <TechStack />
    <LogoShowcase />
    <ShowcaseSection />
    {/* <Experience /> */}
    <FeatureCards />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default App;
