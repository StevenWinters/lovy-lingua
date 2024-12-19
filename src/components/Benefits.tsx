import benefitsData from "../data/benefitsData";
import Img from "./Img";

const Benefits = () => {
  return (
    <section className="block container benefits">
      <h2>Multilinggual Benefits</h2>
      <div className="flex--colunn justify--center align--center gap benefit__flex">
        {benefitsData.map((data, index) => (
          <div
            key={index}
            className={`flex flex--column justify--center align--center benefit__container benefit--${
              index + 1
            }`}
          >
            <h3>{data.heading}</h3>
            <Img src={data.src} className="benefit__img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
