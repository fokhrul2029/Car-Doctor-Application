/* eslint-disable react/no-unescaped-entities */
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

function About() {
  return (
    <div className="hero py-20 bg-base-200">
      <div className="hero-content flex-col lg:flex-row justify-between">
        <div className="relative w-1/3">
          <img src={person} className="max-w-sm rounded-lg shadow-2xl w-full" />
          <img
            src={parts}
            className="max-w-sm rounded-lg shadow-2xl absolute -right-10 -bottom-10 w-2/3 border-8 border-gray-400"
          />
        </div>
        <div className="w-1/2">
          <strong className="text-orange-600">About Us</strong>
          <h1 className="text-5xl font-bold">
            BWe are qualified & of experience in this field
          </h1>
          <p className="py-2 text-gray-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-2 text-gray-500">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-error text-white font-bold">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
