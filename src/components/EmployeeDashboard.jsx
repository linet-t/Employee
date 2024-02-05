// src/components/EmployeeDashboard.js
import React, { useState, useEffect } from 'react';
import './EmployeeStyles.css';

const EmployeeDashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch data from external API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setEmployees(data));
  }, []);

  return (
    <div className="employee-container">
      <h2>Employee Home</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id} className="employee-card">
            <p>ID: {employee.id}</p>
            <p>Name: {employee.name}</p>
            <p>Email: {employee.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeDashboard;
