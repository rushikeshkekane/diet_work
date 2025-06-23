// src/components/UserForm.jsx
import React, { useState } from 'react';
import '../styles/userform.css';

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    gender: '',
    goal: '',
    activity: '',
    diet: '',
    allergies: '',
    medical: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="userform-page">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2 className="form-title">📝 Enter Your Health Details</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="height"
          placeholder="Height (cm)"
          value={formData.height}
          onChange={handleChange}
          required
        />

        <select name="diet" value={formData.diet} onChange={handleChange} required>
          <option value="">Select Diet Preference</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>

        <select name="goal" value={formData.goal} onChange={handleChange} required>
          <option value="">Select Your Goal</option>
          <option value="weight_loss">Lose Weight</option>
          <option value="weight_gain">Gain Weight</option>
          <option value="maintain_weight">Maintain Weight</option>
        </select>

        {/* Future fields can be enabled later */}
        {/* 
        <input
          type="text"
          name="gender"
          placeholder="Gender (optional)"
          value={formData.gender}
          onChange={handleChange}
        />
        <input
          type="text"
          name="activity"
          placeholder="Activity Level (optional)"
          value={formData.activity}
          onChange={handleChange}
        />
        <input
          type="text"
          name="allergies"
          placeholder="Any allergies?"
          value={formData.allergies}
          onChange={handleChange}
        />
        <input
          type="text"
          name="medical"
          placeholder="Medical Conditions?"
          value={formData.medical}
          onChange={handleChange}
        />
        */}

        <button type="submit">🚀 Generate My Diet Plan</button>
      </form>
    </div>
  );
};

export default UserForm;
