import {
  NavBar,
  HeroForm,
  Hero,
  Companies,
  About,
  LearnMore,
  VideoSection,
  Subscribe,
} from "../components";
import BackgroundImage from "../assets/images/background.jpg";
import "./styles/landing.css";

function Landing() {
  return (
    <div className="container">
      <img src={BackgroundImage} className="bg-img" alt="" />
      <NavBar />
      <div className="hero-container">
        <Hero />
        <HeroForm />
      </div>
      <Companies />
      <About />
      <LearnMore />
      <VideoSection />
      <div>
        <Subscribe />
      </div>
    </div>
  );
}

export default Landing;
