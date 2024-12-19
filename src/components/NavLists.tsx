import { Link } from "react-router-dom";
import navlistData from "../data/navlistData";

interface Props {
  onMenuActive: () => void;
}

const NavLists = ({ onMenuActive }: Props) => {
  return (
    <ul className="nav__lists">
      <li className="nav__list">
        {navlistData.map((data, index) => (
          <Link
            key={index}
            className="nav__link"
            to={data.path}
            onClick={onMenuActive}
          >
            {data.name}
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default NavLists;
