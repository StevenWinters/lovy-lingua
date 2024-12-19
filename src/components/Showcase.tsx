import Img from "./Img";
import Flavors from "../assets/flavors.png";

const Showcase = () => {
  return (
    <section className="showcase">
      <header className="block container">
        <h1>Our Flavors</h1>
        <p>There's something for everyone.</p>
      </header>
      <div className="showcase__slider">
        <Img src={Flavors} className="showcase__img" />
      </div>
    </section>
  );
};

export default Showcase;
