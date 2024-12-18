import React, { useState } from 'react';
import axios from 'axios';
import "../components/Login.css";
import "../assets/google.svg"
import SocialLogin from './SocialLogin';
import InputField from './InputField';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', formData);
      alert('Login successful');
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className='login-container'>
        <h2 className='form-title'>Log in with</h2>
        <SocialLogin/>

        <p className='separator'><span>or</span></p>

        <form action="#" className="login-form">         
          <InputField type="email" placeholder="Email address" icon="mail"/>
          <InputField type="password" placeholder="Password" icon="lock"/>        
          <a href="#" className="forgot-pass-link">Forgot Password</a>
          <button className="login-button">Log In</button>
        </form>

        <p className="signup-text">Don&apos;t have an account? <a href='#'>Signup now</a></p>
    </div>
  );
};

export default Login;
