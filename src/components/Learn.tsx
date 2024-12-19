import LPPopcorn from "../assets/single-popcorn.png";
import Img from "./Img";

const Learn = () => {
  return (
    <section className="flex flex--column justify--between align--center block container learn">
      <header>
        <h1>Learn Global</h1>
      </header>
      <Img src={LPPopcorn} alt="Lovy Popcorn" className="learn__popcorn" />
    </section>
  );
};

export default Learn;
