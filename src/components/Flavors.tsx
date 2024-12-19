import { useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Button from "./Button";
import flavorsData from "./flavorsData";
import Img from "./Img";

const Flavors = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (amount: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += amount;
    }
  };

  return (
    <section className="block flavors">
      <div className="align--center container flavors__container">
        <div className="flex flex--column flavors__content">
          <h2>Try Our Flavors</h2>
          <p>Explore endless ways to customize your gameplay!</p>
          <Button className="flavors__btn">Check In</Button>
          <div className="flex flavors__swap">
            <FaArrowAltCircleLeft
              size={40}
              color={"var(--color-accent)"}
              className="icon"
              onClick={() => scrollByAmount(-300)}
            />
            <FaArrowAltCircleRight
              size={40}
              color={"var(--color-accent)"}
              className="icon"
              onClick={() => scrollByAmount(300)}
            />
          </div>
        </div>
        <div className="flex flavors__slider" ref={sliderRef}>
          {flavorsData.map((data, index) => (
            <Img
              key={index}
              src={data.src}
              alt={data.alt}
              className="flavor__img"
            />
          ))}
        </div>
        <div className="flavors__fade"></div>
      </div>
    </section>
  );
};

export default Flavors;
