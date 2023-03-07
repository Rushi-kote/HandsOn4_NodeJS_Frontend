import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css"


const Navigation = () => {
  return (
    <div className='NavBar'>
        <Link to='/login' className='link'>Login</Link>
        <Link to='/auth/sign-up' className='link'>Register</Link>
    </div>
  )
}

export default Navigation