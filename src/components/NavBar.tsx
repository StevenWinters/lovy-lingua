import { useState } from "react";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import NavLists from "./NavLists";
import { IoMdClose } from "react-icons/io";
import Img from "./Img";
import NavPopcorn from "../assets/nav-popcorn.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <header>
      <nav
        className={`flex justify--between align--center nav__bar ${
          isMenuActive && "active"
        }`}
      >
        <Logo className="nav__logo" onMenuActive={() => setMenuActive(false)} />
        <NavLists onMenuActive={() => setMenuActive(false)} />
        <Link to="quiz">
          <Button style="accent" className="btn--sm nav__btn">
            Quiz
          </Button>
        </Link>
        <HamburgerMenu onMenuActive={() => setMenuActive(true)} />
        <IoMdClose
          className="icon nav__close"
          onClick={() => setMenuActive(false)}
        />
        <Img src={NavPopcorn} className="nav__popcorn" />
      </nav>
    </header>
  );
};

export default NavBar;
