import React from "react";
import { NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../Auth";

const Navbar = () => {

  const {currentUser} = useContext(AuthContext);
  console.log(currentUser)

  const navigate = useNavigate();

  const onLogOut = async () =>{
    try{
      await logout();
      navigate('/')
    }catch(err){
      console.log('err')
      alert('Sign out failed😿')
    }
  }

    return (
      <div>
        <nav className="flex p-5">
          <h4 className="logo p-4 text-black">D_C</h4>

          <div className="nav-links flex-1">
            <NavLink className='links p-4'
              style={({ isActive }) => ({
                color: isActive ? "#A2D2FF" : "",
              })}
              to="/"
            >
              Home
            </NavLink>
            <NavLink className='links p-4 hover:bg-white'
              style={({ isActive }) => ({
                color: isActive ? "#A2D2FF" : "",
              })}
              to="/about"
            >
              About Us
            </NavLink>
            {
              currentUser ? 
              (
                <>
                <NavLink className='links p-4 hover:bg-white'  
                  style={({ isActive }) => ({
                    color: isActive ? "#A2D2FF" : "",
                  })}
                  to="/users"
                >
                  Team
                </NavLink>
                <NavLink className='links p-4 hover:bg-white'
                  style={({ isActive }) => ({
                    color: isActive ? "#A2D2FF" : "",
                  })}
                  to="/error-test"
                >
                  Error Boundary Test
                </NavLink>
                <NavLink className='links p-4 hover:bg-white' onClick={onLogOut}>
                  Sign Out
                </NavLink>
                </>
              ) : (
                <>
                <NavLink className='links p-4 hover:bg-white'
                  style={({ isActive }) => ({
                    color: isActive ? "#A2D2FF" : "",
                  })}
                  to="/login"
                >
                  Sign In
                </NavLink>
                <NavLink className='links p-4 hover:bg-white'
                  style={({ isActive }) => ({
                    color: isActive ? "#A2D2FF" : "",
                  })}
                  to="/signup"
                >
                  Sign Up
                </NavLink>
                </>
              )
            }
                
                
                
          </div>
        </nav>
      </div>
    );
  };


export default Navbar;
