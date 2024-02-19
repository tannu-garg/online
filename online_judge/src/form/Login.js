import React, { useState } from 'react'
import './Login.css';

const Login = () => {
  const [login,setLogin]=useState(true);
  return (
    <div className="container">
      <h2>Login Form</h2>
      <form>
        <div className="login">
        <label>
          Username:
          <input type="text" placeholder="Enter your email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" placeholder='Enter your password' />
        </label>
        <br />
        <button type="submit" onClick={()=>setLogin("login")}>Login</button>
      
        </div>
        </form>
     
    </div>
  )
}

export default Login
