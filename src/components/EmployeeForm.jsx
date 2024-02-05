import React, { useState } from 'react';
import './EmployeeStyles.css';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // alert('Form submitted successfully!');
    setFormData({
      name: '',
      designation: '',
      location: '',
      salary: '',
    });
  };

  const testAlert = () => {
    alert('Form submitted successfully!');
    
    // Reset the form data using setFormData
    setFormData({
      name: '',
      designation: '',
      location: '',
      salary: '',
    });
  };

  return (
    <div className="employee-form">
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit} >
      <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Designation:
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Salary:
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type="button" onClick={testAlert}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
