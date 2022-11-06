import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
  
} from "../firebase";
import formatErrorMessage from "../utils/formatErrorMessage";
import image from "../assets/images/image-2.png";
// import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  console.log(error)

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try{
      if (!name || !email || !password) {
        alert("Please fill out all fields.");
        return false;
    }
      console.log(name, email, password)
      await registerWithEmailAndPassword(name, email, password);
      
    }catch(error){
      console.log(error)
      alert(formatErrorMessage(error.message))
    }
  };

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
    if (loading) return;
    console.log(user)
    if (user) navigate("/");
  }, [user, loading, navigate]);

  return (
    <div>
      <div className="main flex">
        <section className="form flex-auto mt-2 ml-16 mr-10">
          <h4 className="logo mt-4 ml-1">D_C</h4>

          <h3 className="mt-20 mb-4">Welcome!</h3>
          <p className="signup-p mb-4">
            Fill the form below to create an account
          </p>
          <form>
            <label name="name">Name</label>
            <input
              className="mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="   Enter your full name"
            />
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
              placeholder="Enter your password"
            />
            <button className="login-btn" onClick={register}>Sign Up</button>

            <button
              className="signin-btn mt-6 bg-white"
              onClick={registerWithGoogle}
            >
              Sign Up with Google
            </button>
          </form>
          <p className="create text-black mt-10 pl-16 ml-8">
            Already have an account?  {"  "}
            <Link to="/login" className="create-link">
              Log In
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

export default SignUp;
