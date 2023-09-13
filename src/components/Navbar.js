import logo from "../images/logo.svg";
import { pageLinks } from "../data";
import { FaBars } from "react-icons/fa";
// import Pagelinks from "./Pagelinks";
import Sociallinks from "./Sociallinks";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linkscontainerRef = useRef();
  const linksRef = useRef();

  useEffect(() => {
    let linksHeight = linksRef.current.getBoundingClientRect().height;
    if (toggle) {
      linkscontainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linkscontainerRef.current.style.height = "0px";
    }
  }, [toggle]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img
            src={logo}
            className="nav-logo"
            alt="backroads"
            onClick={() => setToggle(false)}
          />
          <button
            className="nav-toggle"
            onClick={() => setToggle((pre) => !pre)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linkscontainerRef}>
          <ul className="links" ref={linksRef}>
            {pageLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id} onClick={() => setToggle((pre) => !pre)}>
                  <a href={href}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="">
          <Sociallinks />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
