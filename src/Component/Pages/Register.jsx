import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roleType: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await fetch('http://192.168.1.18:8080/signup', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json', // Set the Content-Type header
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);
    } catch (err) {
      console.error('Error:', err.message);
    }
  };

  return (
    <div className='reg'>
      <div className="registration">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              className='in-field'
              type="text"
              id="firstname"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor="lastname">Last Name</label>
            <input
              className='in-field'
              type="text"
              id="lastname"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className='in-field'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className='in-field'
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="roletype">Role Type</label>
            <select
              className='role-type'
              id="roleType"
              name="roleType"
              value={formData.roleType}
              onChange={handleChange}
              required
            >
            <option>Select</option>
              <option value={1}>Buyer</option>
              <option value={2}>Seller</option>
            </select>
          </div>
          <br></br>
          <button className='reg-b' type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
