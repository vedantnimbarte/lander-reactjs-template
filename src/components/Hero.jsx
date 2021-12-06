import "./styles/hero.css";

function Hero() {
  return (
    <div className="hero">
      <h1>5 great tips to grow your freelance business in 2017.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis.
      </p>
      <div className="list">
        <div>
          <span>
            <i class="fas fa-check"></i>
          </span>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div>
          <span>
            <i class="fas fa-check"></i>
          </span>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div>
          <span>
            <i class="fas fa-check"></i>
          </span>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <p className="video-btn">
        <span>
          <i class="far fa-play-circle"></i>
        </span>
        Watch Video
      </p>
    </div>
  );
}

export default Hero;
