import { Link } from "react-router-dom";
import Logo from "./Logo";
import footerData from "./footerData";

const Footer = () => {
  return (
    <footer className="block">
      <div className="container footer__container">
        <Logo className="footer__logo" />
        <div className="footer__content">
          <h2>Lovy Lingua</h2>
          <div className="flex flex--column justify--between align--center footer__sections">
            {footerData.map((data, index) => (
              <div key={index} className="footer__navigation">
                <h4>{data.heading}</h4>
                <ul className="footer__lists">
                  <li className="footer__list">
                    {data.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        to={link.path}
                        className="footer__link"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="footer__copyright">
          Copyright © 2024. Powered by the PWU ICT/HE/ABM Students.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
