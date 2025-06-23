import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // ✅ Add useNavigate and Link
import '../styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Registration Data:', formData);

    // Simulate registration logic
    setTimeout(() => {
      alert("Registration successful!");
      navigate('/login'); // ✅ Navigate to login after registration
    }, 1000);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Create Account</h2>
        <p className="register-subtitle">Sign up to get started</p>

        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />

        <button type="submit" className="register-button">Register</button>
        <p className="register-footer">
          Already have an account? <Link to="/login">Login</Link> {/* Better than <a> */}
        </p>
      </form>
    </div>
  );
};

export default Register;
