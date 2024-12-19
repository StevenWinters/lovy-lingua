import Article from "../components/Article";
import Benefits from "../components/Benefits";
import Languages from "../components/Languages";
import Learn from "../components/Learn";

const LearnPage = () => {
  return (
    <div className="learn__section">
      <span className="learn__circle"></span>
      <Learn />
      <Languages />
      <Article />
      <Benefits />
    </div>
  );
};

export default LearnPage;
