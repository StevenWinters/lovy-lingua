import { Link } from "react-router-dom";
import featuresData from "../data/featuresData";
import Img from "./Img";
import PlayButton from "./PlayButton";

const Features = () => {
  return (
    <section className="block container features">
      <h2>Features</h2>
      <div className="justify--between align--center features__container">
        {featuresData.map((data, index) => (
          <Link
            key={index}
            to={data.path}
            className={`flex flex--column justify--center align--center feature__card feature--${
              index + 1
            }`}
          >
            <PlayButton className="features__play" />

            <Img className="feature__img" src={data.src} />
            <h3>{data.heading} </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Features;
