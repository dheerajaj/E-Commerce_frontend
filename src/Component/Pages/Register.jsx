import React, { useState } from 'react';
import './Register.css';
import TextField from '@mui/material/TextField';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Logo from '../images/reglogo.png';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roleType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendRequest = async () => {
    try {
      const response = await fetch('http://192.168.1.246:8080/api/signup', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);
      navigate("/login");
    } catch (err) {
      console.error('Error:', err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
  };
  return (
    <div className='reg'>
      <div className='header'>
        <img src='logo.png' alt='' className='logooo'></img>
        <h2 className='he-n'>E-cart</h2>
      </div>
      <div className='nav-he' role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="">
            Register
          </Link>
        </Breadcrumbs>
      </div>

      <div className="registration">
        <img src={Logo} alt='' className='logooo'></img>
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
              label='First Name'
            />
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
              label='Last Name'
            />
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
              label='E-mail'
            />
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
              label='Password'
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


