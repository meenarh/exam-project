import React from "react";
import Navbar from "../components/Navbar";
import image from "../assets/images/image-3.png";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="About page"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />
      <div className="about flex p-12 m-12">
        <section className="about-img p-8">
          <img src={image} alt="people laughing" />
        </section>

        <section className="about-info p-8">
          <h2 className="p-3">About the company</h2>
          <h4 className="p-3">Manage and easily access your teams database</h4>
          <p className="p-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <p className="num p-6">
            500k+ <span>Users per day</span>
          </p>
          <button className="about-btn">Learn More</button>
        </section>
      </div>
    </div>
  );
};

export default About;
