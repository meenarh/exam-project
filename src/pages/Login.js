import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  signInWithGoogle,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { logInWithEmailAndPassword } from "../firebase";
import image from "../assets/images/image-2.png";
import formatErrorMessage from "../utils/formatErrorMessage";

const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  console.log(error)

  const navigate = useNavigate();

  const onLogin = async (e) =>{
    e.preventDefault();
    try{
      if (!email || !password) {
        alert("Please fill out all fields.");
        return false;
    }
    await logInWithEmailAndPassword(email, password)
    navigate('/')
    }catch(error){
      console.log(error)
      alert(formatErrorMessage(error.message))
    }
  } 

  const registerWithGoogle = async (e) =>{
    e.preventDefault();
    try{
      await signInWithGoogle()
      navigate('/')
    }catch(err){
      alert(formatErrorMessage(err.message))
    }
    
  }

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading, navigate]);

  return (
    <div>
      <div className="main flex">
        <section className="form flex-auto mt-4 ml-16 mr-10">
          <h4 className="logo mt-4 ml-1">D_C</h4>

          <h3 className="mt-20 mb-4">Welcome Back!</h3>
          <p className="mb-4">Log into your account to continue</p>
          <form>
            <label name="email" className="mb-6">
              Email
            </label>
            <input
              className="mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email here"
            />
            <label name="password" className="mb-6">
              Password
            </label>
            <input
              className="mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Your password"
            />
            <button className="login-btn" onClick={onLogin}>
              Log In
            </button>

            <button
              className="signin-btn mt-6 bg-white"
              onClick={registerWithGoogle}
            >
              Sign In with Google
            </button>
          </form>
          <p className="create text-black mt-10 pl-16 ml-8">
            Don't have an account?{"  "}
            <Link to="/signup" className="create-link">
              Create one
            </Link>
          </p>
        </section>

        <section className="m-0 image">
          <div className="box">
            <p>
              The advance of technology is based on making it fit in so that you
              don't really even notice it, so it's part of everyday life
            </p>
          </div>
          <img src={image} alt="man" />
        </section>
      </div>
    </div>
  );
};

export default Login;
