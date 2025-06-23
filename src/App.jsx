// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import DietPlan from './components/DietPlan';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register';
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    setUserData(data);
    navigate('/diet-result');
  };

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/diet" element={<UserForm onSubmit={handleFormSubmit} />} />
        <Route
          path="/diet-result"
          element={
            userData ? (
              <DietPlan userData={userData} />
            ) : (
              <p style={{ textAlign: 'center', marginTop: '2rem' }}>
                ⚠️ No data submitted yet. Please go to <a href="/diet">Diet Form</a>.
              </p>
            )
          }
        />
      </Routes>
      {!hideNavbar && <Footer />}
    </>
  );
};

export default App;
