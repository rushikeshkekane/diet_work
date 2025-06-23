import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="navbar-row">
      <button onClick={() => navigate('/')} className="nav-btn">Home</button>
      <button onClick={handleLogout} className="nav-btn logout">Logout</button>
    </nav>
  );
};

export default Navbar;
