import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGen] = useState('');

  const handleCreateEmployee = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'https://gorest.co.in/public/v2/users?access-token=33b6fb110d633578b736fd78b6dca76279a2822251d92da5000afd35cc5b11e3',
        {
          name,
          email,
          gender,
          status: 'active',
        }
      );
      alert('Employee created successfully');
    } catch (error) {
      console.error(error);
      alert('Error creating employee');
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleCreateEmployee}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        /><br/>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        /><br/>
        <input
          type="text"
          value={gender}
          onChange={(e) => setGen(e.target.value)}
          placeholder="Gender"
          required
        /><br/>
        <button type="submit">Create Employee</button>
      </form>
    </div>
  );
};

export default AdminPanel;
