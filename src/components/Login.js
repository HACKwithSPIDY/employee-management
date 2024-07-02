import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === 'admin' && password === 'admin') { // checking if admin login or not
      navigate('/admin');
    } else { // else it will check that particular email in the api
      try {
        const response = await axios.get('https://gorest.co.in/public/v2/users?access-token=33b6fb110d633578b736fd78b6dca76279a2822251d92da5000afd35cc5b11e3&email='+email);
        const user = response.data.find(user => user.email === email);
        if (user) {
          setUser(user); // to display the user data into user profile
          navigate('/profile'); // if found the nit will redirect to user profile page
        } else {
          alert('User not found');
        }
      } catch (error) {
        console.error(error);
        alert('Error during login');
      }
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
