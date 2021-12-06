import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import "./styles/navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className="brand-logo" />
      <Link to="/">Home</Link>
      <Link to="/">Landing Pages</Link>
      <Link to="/404">404</Link>
      <a className="contact-btn" href="tel:+9158324958">
        <span>
          <i class="fas fa-phone"></i> &nbsp;
        </span>
        (+91) 915-832-4958
      </a>
    </nav>
  );
}

export default NavBar;
