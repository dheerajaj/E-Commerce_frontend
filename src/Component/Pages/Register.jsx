import React, { useState } from 'react';
import './Register.css';
import TextField from '@mui/material/TextField';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Logo from '../images/reglogo.png';

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
      const response = await fetch('http://192.168.68.44:8080/api/signup', {
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
      <div className='header'>
        <img src='logo.png' alt='' className='logooo'></img>
        <h2 className='he-n'>E-cart</h2>
      </div>
      <div className='nav-he' role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="" >
            Register
          </Link>
        </Breadcrumbs>
      </div>

      <div className="registration">
      <img src={Logo} alt='' className='logooo' ></img>
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">

            <TextField
              type="text"
              id="firstname"
              name="firstName"
              value={formData.firstName}
              multiline
              maxRows={4}
              onChange={handleChange}
              required
              label='First Name'></TextField>
          </div>
          <div className='form-group'>
           
            <TextField
              multiline
              maxRows={4}
              type="text"
              id="lastname"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              label='Last Name'></TextField>
          </div>
          <div className="form-group">
           
            <TextField
            multiline
            maxRows={4}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            label='E-mail'></TextField>
          </div>
          <div className="form-group">
           
            <TextField
            multiline
            maxRows={4}
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            label='Password'></TextField>
            
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
