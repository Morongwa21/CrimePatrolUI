import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    department: '',
    badgeNumber: ''
  });
  
  const [error, setError] = useState('');

  // Fetch all users
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/users');
      setUsers(response.data);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

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
      fetchUsers(); // Refresh user list after adding
    } catch (err) {
      setError('Error adding user: ' + err.response?.data?.error);
    }
  };

  // Delete a user
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${userId}`);
      fetchUsers(); // Refresh the list after deletion
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  return (
    <div>
      <h1>Users Management</h1>

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
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          required
        />
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

export default Users;
