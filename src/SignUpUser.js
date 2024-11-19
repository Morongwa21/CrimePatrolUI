import React, { useState } from 'react';
import axios from 'axios';
import './SignUpUser.css';

const SignUpUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    department: '',
    badgeNumber: ''
  });

  const [error, setError] = useState('');

  // Handle form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit new user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/users', formData);
      setFormData({
        name: '',
        email: '',
        password: '',
        role: '',
        department: '',
        badgeNumber: ''
      });
    } catch (err) {
      setError('Error adding user: ' + err.response?.data?.error);
    }
  };

  return (
    <div className="container">
      <h1>Create an account</h1>

      {/* Display form for adding a new user */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Role Dropdown */}
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Officer">Officer</option>
          <option value="Manager">Manager</option>
          {/* Add more roles as needed */}
        </select>

        {/* Department Dropdown */}
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Department</option>
          <option value="Traffic">Traffic</option>
          <option value="Criminal Investigation">Criminal Investigation</option>
          <option value="Administration">Administration</option>
          {/* Add more departments as needed */}
        </select>

        <input
          type="text"
          name="badgeNumber"
          placeholder="Badge Number"
          value={formData.badgeNumber}
          onChange={handleChange}
          required
        />
        <button type="submit">Add User</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignUpUser;
