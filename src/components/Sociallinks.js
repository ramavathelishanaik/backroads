import { socialLinks } from "../data";
import Sociallink from "./Sociallink";
const Sociallinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <Sociallink key={id} href={href} icon={icon} itemClass={itemClass} />
        );
      })}
    </ul>
  );
};
export default Sociallinks;
