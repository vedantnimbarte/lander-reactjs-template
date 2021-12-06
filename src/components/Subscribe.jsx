import "./styles/subscribe-section.css";

function Subscribe() {
  return (
    <div className="subcribe-section-container">
      <h1>Subscribe to our updates</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <form className="subscribe-form">
        <input type="email" name="email" placeholder="Enter the email" />
        <button className="subscribe-btn">Subscribe</button>
      </form>

      <div className="social">
        <i class="fab fa-twitter"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
      </div>
    </div>
  );
}

export default Subscribe;
