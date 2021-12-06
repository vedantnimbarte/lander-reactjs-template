import peopleImg from "../assets/images/people.jpg";
import "./styles/about.css";

function About() {
  return (
    <div className="about-container">
      <img src={peopleImg} alt="peoples" className="people-img" />
      <div className="info-container">
        <h1 className="header">Get active on social media!</h1>
        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus.
        </p>
        <div className="list-item">
          <span>
            <i class="fas fa-check"></i>
          </span>
          <div className="list-text">
            <h3>Mobile Visitors</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="list-item">
          <span>
            <i class="fas fa-check"></i>
          </span>
          <div className="list-text">
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
