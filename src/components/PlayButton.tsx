import { FaPlay } from "react-icons/fa";

interface Props {
  className?: string;
  style?: "primary" | "accent";
}

const PlayButton = ({ className, style }: Props) => {
  return (
    <span
      className={`flex justify--center align--center play play--${
        style ? "primary" : "accent"
      } ${className}`}
    >
      <FaPlay className="icon--play" color={"#fff"} size={15} />
    </span>
  );
};

export default PlayButton;
