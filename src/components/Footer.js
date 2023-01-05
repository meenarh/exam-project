import React from 'react'
import { Link } from 'react-router-dom'
import twitter from '../assets/images/twitter.png'
import linkedin from '../assets/images/linkedin.png'
import facebook from '../assets/images/facebook.png'

const Footer = () => {
  return (
    <div className='footer bg-black flex justify-between gap-10 pl-10 pr-10 mt-10 h-[100px]'>
      <h4 className="logo mt-4 md:pt-4 text-white">D_C</h4>

      <div className="nav-links  text-center mt-6 md:pt-4">
         <Link to='/' className='text-white mr-1 md:mr-3'>Home</Link>
         <Link to='/about' className='text-white md:ml-4 md:mr-4 ml-1 mr-1'>About</Link>
         <Link to='/users' className='text-white ml-1 md:ml-3'>Team</Link>
      </div>

      <div className="social-links flex flex-row md:pt-9 pt-6">
         <img src={twitter} alt="twitter" />
         <img src={linkedin} alt="linkedin" />
         <img src={facebook} alt="facebook" />
      </div>
    </div>
  )
}

export default Footer