import React from "react";
import Navbar from "../components/Navbar";
import image from "../assets/images/image-5.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Error = () => {
  return (
    <div className="error ">
      <Helmet>
        <title>404: Not Found</title>
        <meta
          name="description"
          content="404:Not Found"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <Navbar />
      <div className="error-body flex">
        <section className="error-info pl-10 pr-4 pt-10 m-8">
          <h1 className="pl-8 pb-4">Page Not Found</h1>
          <p className="pl-8 pt-3 pb-10">
            Sorry, this page you are looking for does not exist or has been
            moved. Please try looking for something else.
          </p>

          <Link className="error-btn ml-8  mt-8 mr-4 p-4 text-center" to="/">
            Take me home
          </Link>
        </section>

        <section className="pr-4  m-4 bg-red error-info-2">
          <img src={image} alt="Crying" />
        </section>
      </div>
    </div>
  );
};

export default Error;
