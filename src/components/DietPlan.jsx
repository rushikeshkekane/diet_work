import React from 'react';
import generatePlan from '../utils/generateplan'; // adjust path as needed
import '../styles/dietplan.css';

const DietPlan = ({ userData }) => {
  if (!userData) {
    return (
      <div className="diet-result">
        <p>⚠️ No user data available. Please go back and fill the form.</p>
      </div>
    );
  }

  const { name, bmi, recommendation, foodItems } = generatePlan(userData);

  return (
    <div className="diet-result">
      <h2>🍽️ Personalized Diet Plan for {name}</h2>
      <h3>Your BMI: {bmi}</h3>
      <p>{recommendation}</p>
      <h4>Recommended Foods:</h4>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index}>✅ {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DietPlan;
