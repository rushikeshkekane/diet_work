import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import DietPlan from '../components/DietPlan';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  return (
    <div>
      <h2>Dashboard</h2>
      {!userData ? (
        <UserForm onSubmit={setUserData} />
      ) : (
        <DietPlan userData={userData} />
      )}
    </div>
  );
};

export default Dashboard;
