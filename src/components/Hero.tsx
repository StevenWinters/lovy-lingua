import Button from "./Button";
import LPPoster from "../assets/LP-Advertisement-Expanded.jpg";
import LPVideo from "../assets//LP-Commercial.mp4";

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
        <video
          className="video"
          controls
          poster={LPPoster}
          src={LPVideo}
        ></video>
      </div>
    </section>
  );
};

export default Hero;
