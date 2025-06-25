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

        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

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

        <select name="activity" value={formData.activity} onChange={handleChange} required>
          <option value="">Select Activity Level</option>
          <option value="sedentary">Sedentary (Little/no exercise)</option>
          <option value="light">Light (1–3 days/week)</option>
          <option value="moderate">Moderate (3–5 days/week)</option>
          <option value="active">Active (6–7 days/week)</option>
          <option value="very_active">Very Active (Daily intense training)</option>
        </select>

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

        <button type="submit">🚀 Generate My Diet Plan</button>
      </form>
    </div>
  );
};

export default UserForm;
