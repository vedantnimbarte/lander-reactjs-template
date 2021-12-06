import "./styles/hero-form.css";

function HeroForm() {
  return (
    <div className="form-container">
      <h1 className="heading">Get Access Now</h1>
      <p className="sub-heading">
        Download the brochure{" "}
        <span>"5 great tips to grow your freelance business".</span>
      </p>
      <form className="form">
        <input type="text" name="name" id="name" placeholder="Enter the name" />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter the email"
        />
        <input
          type="text"
          name="contact"
          id="contact"
          placeholder="Enter the mobile no"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default HeroForm;
