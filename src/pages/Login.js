import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <h1 >Hi! </h1>
            <Link to='/signup'>Sign up</Link> or <Link to='/login'>Sign in here</Link>
        <form id='form'>
            <input type='text' placeholder='Enter your username here' /><br/>
            <input type='password' placeholder='Your password' />
            <Link to='/' className='btn-link'>Log In</Link>
        </form>
    </div>
  )
}

export default Login