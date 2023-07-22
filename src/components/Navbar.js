import logo from "../images/logo.svg";
import Pagelinks from "./Pagelinks";
import Sociallinks from "./Sociallinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <Pagelinks parentClass="nav-links" itemClass="nav-link" />
        <Sociallinks parentClass="nav-icons" itemClass="nav-icon" />
      </div>
    </nav>
  );
};
export default Navbar;
