import { pageLinks } from "../data";
import Pagelink from "./Pagelink";
const Pagelinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <Pagelink link={link} itemClass={itemClass} key={link.id} />;
      })}
    </ul>
  );
};
export default Pagelinks;
