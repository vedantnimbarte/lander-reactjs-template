import "./styles/learn-more.css";
import LearnSection from "../assets/images/learn-section.jpg";

function LearnMore() {
  return (
    <div>
      <div className="learnMore-container">
        <img src={LearnSection} alt="" className="learnMore-background" />
        <div className="overlay">
          <div className="learn-more-info-container">
            <h1>Want to learn more?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="button-container">
              <button>
                <span>
                  <i class="fas fa-arrow-right"></i>
                </span>
                &nbsp; Learn More
              </button>
              <button>
                <span>
                  <i class="fas fa-lock"></i>
                </span>
                &nbsp; Get Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
