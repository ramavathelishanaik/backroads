import { socialLinks } from "../data";
import Sociallink from "./Sociallink";
const Sociallinks = () => {
  return (
       <ul className="social-icons">
            {socialLinks.map((socialIcon) => {
              const { id, href, icon } = socialIcon;
              return (
                <Sociallink key={id} href={href} icon={icon}  />
              );
            })}
          </ul>
  
  );
};
export default Sociallinks;
