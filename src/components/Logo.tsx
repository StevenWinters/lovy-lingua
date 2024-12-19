import { Link } from "react-router-dom";
import LovyLogo from "../assets/LP-logo.png";

interface Props {
  className?: string;
  onMenuActive?: () => void;
}

const Logo = ({ className, onMenuActive }: Props) => {
  return (
    <Link to="/">
      <img
        className={`img img--logo ${className}`}
        src={LovyLogo}
        alt="Lovy Logo"
        onClick={onMenuActive}
      />
    </Link>
  );
};

export default Logo;
