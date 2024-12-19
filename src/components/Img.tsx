interface Props {
  src: string;
  className?: string;
  alt?: string;
}

const Img = ({ src, className, alt }: Props) => {
  return <img className={`img ${className}`} src={src} alt={alt} />;
};

export default Img;
