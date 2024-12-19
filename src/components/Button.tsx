interface Props {
  style?: "primary" | "accent";
  children: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ style, children, className, onClick }: Props) => {
  return (
    <button
      className={`btn btn--${style ? style : "primary"} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
