import React from "react";
import Navbar from "../components/Navbar";
import image from "../assets/images/image-3.png";
import { Helmet } from "react-helmet-async";
import google from "../assets/images/google.png";
import clickup from "../assets/images/clickup.png";
import figma from "../assets/images/figma.png";
import webflow from "../assets/images/webflow.png";
import altschool from "../assets/images/altschool.png";
import clickupsm from "../assets/images/clickupsm.png";
import figmasm from "../assets/images/Figmasm.png";
import googlesm from "../assets/images/googlesm.png";
import altschoolsm from "../assets/images/altschoolsm.png";
import webflowsm from "../assets/images/webflowsm.png";
import Footer from "../components/Footer";

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

      <div className="companies mb-8 mt-8">
          <p className="text-center">Trusted by more than 100+ Startups</p>
          <div className="companies-img-desktop flex flex-row gap-14 justify-center">
            <img src={google} alt="google" className="bg-white" />
            <img src={clickup} alt="clickup" className="bg-white" />
            <img src={figma} alt="figma" className="bg-white" />
            <img src={webflow} alt="webflow" className="bg-white" />
            <img src={altschool} alt="altschool" className="bg-white" />
          </div>

          <div className="companies-img-mobile md:hidden flex flex-row gap-10 justify-center bg-white">
            <img src={googlesm} alt="google" className="bg-white" />
            <img src={clickupsm} alt="clickup" className="bg-white" />
            <img src={figmasm} alt="figma" className="bg-white" />
            <img src={webflowsm} alt="webflow" className="bg-white" />
            <img src={altschoolsm} alt="altschool" className="bg-white" />
          </div>

      </div>
      <Footer />
    </div>
  );
};

export default About;
