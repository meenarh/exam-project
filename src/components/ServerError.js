import React from "react";
import Navbar from "./Navbar";

const ServerError = () => {
  return (
    <>
      <Navbar />

      <h1 className="error-test text-center">Oh no! An error has occured🥲</h1>
    </>
  );
};

export default ServerError;
