import Pagelinks from "./Pagelinks";
import Sociallinks from "./Sociallinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <Pagelinks parentClass="footer-links" itemClass="footer-link" />
      <Sociallinks parentClass="footer-icons" itemClass="footer-icon" />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
