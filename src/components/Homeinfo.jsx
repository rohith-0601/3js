import React from "react";
import {Link} from "react-router-dom"
import {arrow} from "../assets/icons"

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="text-white text-center text-base sm:text-xl font-medium leading-snug sm:leading-relaxed px-4 py-3 mx-4 bg-blue-500 rounded-xl shadow-md">
      <p>{text}</p>
      <Link
        to={link}
        className="mt-3 inline-flex items-center gap-2 text-blue-500 bg-white px-3 py-1.5 rounded-lg font-semibold hover:shadow-lg transition-all"
      >
        {btnText}
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};


const renderContent = {
  1: (
    <h1 className="text-white text-center text-2xl sm:text-3xl font-semibold leading-snug sm:leading-relaxed px-6 py-4 mx-4 bg-blue-500 rounded-xl shadow-md">
      Hi, I am <span className="">Rohith ✌🏻👋🏻</span>
    </h1>
  ),
  2: (
    <InfoBox
      text="An Engineering Science Student at IIT Hyderabad"
      link="/about"
      btnText="Learn More about me"
    />
  ),
  3: (
    <InfoBox
      text="I enjoy working on real-time web apps and love diving into frontend frameworks like React and Three.js"
      link="/projects"
      btnText="See my Projects"
    />
  ),
  4: (
    <InfoBox
      text="Feel free to reach out — I'm always open to collaboration or a quick chat!"
      link="/contact"
      btnText="Get in Touch"
    />
  ),
};


// const InfoBox = ({ text, link, btnText }) => {
//   <div className="info-box">{text}</div>;
// };

const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;
