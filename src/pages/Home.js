import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import image from "../assets/images/image-1.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="body-container">
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content=" Home"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />

      <div className="body flex m-12">
        <section className="p-16 m-10  flex-1">
          <h1 className="hi">Welcome!👋🏽</h1>
          <h3>Manage and easily access your teams database</h3>
          <p className="mt-6 mb-8 home-p">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          {!currentUser && (
            <Link className="home-btn mt-8 pt-6 pb-6 pl-10 pr-10" to="/signup">
              Get Started
            </Link>
          )}
        </section>
        <section className="pt-10 pb-10 flex-1 home-img">
          <img src={image} alt="girl-laughing" />
        </section>
      </div>
    </div>
  );
};

export default Home;
