import React from 'react'
import SocialLogin from './SocialLogin';
import InputField from './InputField';

export default function Signup() {
  return (
    <div className='login-container'>
    <h2 className='form-title'>SignUp</h2>
    <SocialLogin/>

    <p className='separator'><span>or</span></p>

    <form action="#" className="login-form">         
      <InputField type="text" placeholder="Username" icon="user"/>
      <InputField type="email" placeholder="Email address" icon="mail"/>
      <InputField type="password" placeholder="Password" icon="lock"/>              
      <button className="login-button">Log In</button>
    </form>

    <p className="signup-text">Do you have an account? <a href='#'>Login</a></p>
    </div>
  )
}
