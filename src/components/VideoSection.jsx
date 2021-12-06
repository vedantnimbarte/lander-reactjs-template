import video from "../assets/images/people.jpg";
import "./styles/video-section.css";

function VideoSection() {
  return (
    <div className="video-section-container">
      <div className="video-section-info-container">
        <div className="left">
          <h1>3-minute video</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <button>Get Access Now</button>
        </div>
        <div className="right">
          <img src={video} alt="video" className="video" />
        </div>
      </div>
      <div className="stat-section">
        <div className="stat-one">
          <h1 className="percentage">95%</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
        <div className="stat-two">
          <h1 className="percentage">12%</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
        <div className="stat-three">
          <h1 className="percentage">85%</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
