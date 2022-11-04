import React from "react";
import { Link } from "react-router-dom";
import { auth, provider, signInWithRedirect } from "../config";

const Login = () => {

  const signIn = (event) => {
    event.preventDefault();
    console.log('Signed In')

    signInWithRedirect(auth, provider);
  };

  return (
    <div>
      <h1>Hi! </h1>
      {/* <Link to="/signup">Sign up</Link> or <Link to="/login">Sign in here</Link>
      <form>
        <input type="text" placeholder="Enter your username here" />
        <br />
        <input type="password" placeholder="Your password" />
        
        
      </form> */}
      <button className="btn-link" onClick={signIn}>
          Log In
        </button>
    </div>
  );
};

export default Login;
