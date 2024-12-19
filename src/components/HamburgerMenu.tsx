interface Props {
  onMenuActive: () => void;
}

const HamburgerMenu = ({ onMenuActive }: Props) => {
  return (
    <div
      className="flex flex--column justify--center align--center hamburger__menu"
      onClick={onMenuActive}
    >
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
    </div>
  );
};

export default HamburgerMenu;
