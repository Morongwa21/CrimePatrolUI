import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import badgeImage from './badge.jpg'; // Adjust the path as necessary

const LandingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(0);

  // Redirect to the signup page after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/signup'); // Redirect to SignUpUser component
    }, 15000);

    // Simulate loading progress
    const loadingInterval = setInterval(() => {
      setLoading((prev) => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          return 100; // Ensure it doesn't go over 100
        }
        return prev + (100 / 150); // Update progress over 15 seconds
      });
    }, 100); // Update every 100ms

    return () => {
      clearTimeout(timer); // Cleanup timer on component unmount
      clearInterval(loadingInterval); // Cleanup loading interval
    };
  }, [navigate]);

  return (
    <div className="landing-container">
      <div className="background-animation"></div> {/* Background animation div */}
      <img src={badgeImage} alt="Police Badge" className="badge-image" />
      <h1 className="welcome-text">Welcome to the Police Account Management System</h1>
      <div className="loading-bar">
        <div className="loading-fill" style={{ width: `${loading}%` }} />
      </div>
    </div>
  );
};

export default LandingPage;
