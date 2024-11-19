import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUpUser from './SignUpUser';
import LandingPage from './LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root to LandingPage */}
        <Route path="/" element={<Navigate to="/landing" />} /> 
        <Route path="/landing" element={<LandingPage />} /> {/* Landing page */}
        <Route path="/signup" element={<SignUpUser />} /> {/* Sign Up User */}
        {/* Uncomment the lines below to add more routes */}
        {/* <Route path="/user-list" element={<UserList />} />
        <Route path="/delete-user" element={<DeleteUser />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
