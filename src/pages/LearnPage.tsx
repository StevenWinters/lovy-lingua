import Languages from "../components/Languages";
import Learn from "../components/Learn";

const LearnPage = () => {
  return (
    <div className="learn__section">
      <span className="learn__circle"></span>
      <Learn />
      <Languages />
    </div>
  );
};

export default LearnPage;
