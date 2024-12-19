import { Link } from "react-router-dom";
import Img from "./Img";
import PlayButton from "./PlayButton";
import quizSelectionData from "./quizSelectionData";

const QuizSelection = () => {
  return (
    <section className="block selection">
      <div className="container">
        <header>
          <h1>Quiz</h1>
        </header>
        {quizSelectionData.map((data, index) => (
          <Link
            to={`/test/${index + 1}`}
            key={index}
            className={`flex justify--center align--center selection__quiz selection--${
              index + 1
            }`}
          >
            <span className="selection__items">
              <span className="item__highlight">{data.items}</span> items
            </span>
            <span className="selection__difficulty">{data.difficulty}</span>
            <Img src={data.src} alt={data.name} className="selection__img" />
            <PlayButton className="selection__play" style="primary" />
            <h2>{data.name}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default QuizSelection;
