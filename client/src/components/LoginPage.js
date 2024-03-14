
// LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  // State for storing login and registration form data
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  // Function to handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Perform login authentication here
    console.log('Login Username:', loginUsername);
    console.log('Login Password:', loginPassword);
  };

  // Function to handle registration form submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Perform registration authentication here
    console.log('Register Username:', registerUsername);
    console.log('Register Password:', registerPassword);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="loginUsername">Username:</label>
          <input 
            type="text" 
            id="loginUsername" 
            value={loginUsername} 
            onChange={(e) => setLoginUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="loginPassword">Password:</label>
          <input 
            type="password" 
            id="loginPassword" 
            value={loginPassword} 
            onChange={(e) => setLoginPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <h2>Register</h2>
      <form onSubmit={handleRegisterSubmit}>
        <div>
          <label htmlFor="registerUsername">Username:</label>
          <input 
            type="text" 
            id="registerUsername" 
            value={registerUsername} 
            onChange={(e) => setRegisterUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="registerPassword">Password:</label>
          <input 
            type="password" 
            id="registerPassword" 
            value={registerPassword} 
            onChange={(e) => setRegisterPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default LoginPage;
