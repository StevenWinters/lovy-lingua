import articleData from "../data/articleData";
import Img from "./Img";

const Article = () => {
  return (
    <section className="block container article">
      {articleData.map((data, index) => (
        <article
          key={index}
          className={`grid grid--1x2 grid--center align--center article__container article--${
            index + 1
          }`}
        >
          <div className="article__content">
            <h3>{data.heading}</h3>
            <p>{data.description}</p>
          </div>
          <Img src={data.src} className="article__img" />
        </article>
      ))}
    </section>
  );
};

export default Article;
