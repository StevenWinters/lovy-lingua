import languageData from "../data/languageData";

const Languages = () => {
  return (
    <section className="block container languages">
      <h2>Learn how to say popcorn globally</h2>
      <div className="grid languages__grid">
        {languageData.map((data, index) => (
          <div
            key={index}
            className={`flex flex--column justify--center align--center language__box language--${
              index + 1
            }`}
          >
            <span className="language__heading">{data.text}</span>
            <span className="language__translation">{data.translation}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
