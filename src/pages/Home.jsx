import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-box">
        <h1 className="main-heading">Welcome to Diet Recommendation System</h1>
        <p className="description">
          Your personalized diet plan starts here. Let’s improve your health with science-backed meal suggestions!
        </p>

        <div className="button-group">
          <Link to="/login" className="home-button login">🔐 Login</Link>
          <Link to="/dashboard" className="home-button dashboard">📊 Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
