import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold">Welcome!</h1>
      
      <Link to='/login'>Sign In</Link>
      <Link to='/signup'>Sign Up</Link>
    </div>
  );
};

export default Home;
