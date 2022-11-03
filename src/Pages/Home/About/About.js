import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero py-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img src={person} alt="" className="w-11/12 h-full rounded-xl" />
          <img
            src={parts}
            alt=""
            className="absolute w-3/5 right-5 top-1/2 border-8 border-white"
          />
        </div>
        <div className="w-1/2 text-black">
          <h6 className="font-bold text-orange-600 pb-5 text-xl">About Us</h6>
          <h1 className="text-5xl font-bold">
            We are qualified <br />& of experience <br /> in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="pb-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
