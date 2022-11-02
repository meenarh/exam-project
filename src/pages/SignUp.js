import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
       <h2>Fill the form below to create an account</h2> 

       <form>
        <input type='text' placeholder='Enter your first name here' />
        <input type='text' placeholder='Enter your last name here' />
        <input type='email' placeholder='Enter your email address' />
        <input type='password' placeholder='Enter your password' />
        <Link to='/' className='btn-link'>Sign Up</Link>
       </form>
    </div>
  )
}

export default SignUp