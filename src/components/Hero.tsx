import Button from "./Button";
import LPFlavors from "../assets/LP flavors.jpg";
import Img from "./Img";

const Hero = () => {
  return (
    <section className="hero">
      <div className="block container">
        <span className="hero__circle"></span>
        <div className="flex justify--center flex--column align--center block container hero__container">
          <span className="hero__badge">Lovy Popcorn</span>
          <h1>THE SNACK FOR EVERYONE. ANYONE.</h1>
          <Button className="btn--primary">Explore</Button>
        </div>
        <Img src={LPFlavors} />
      </div>
    </section>
  );
};

export default Hero;
