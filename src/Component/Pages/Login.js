import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Logo from '../images/loginlogo.png';

function Login() {
  const [formData, setFormData] = useState({   
    email: '',
    password: '',
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    try {
      const response = await fetch('http://192.168.68.44:8080/api/login', {
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
    <div className='log-div'>
    <img src={Logo} alt='' className='loglogo'></img>
      <h2>Log-In</h2>
      <form className='log-form' onSubmit={handleSubmit}>
       
        <div className="form-group">
          
          
          <TextField
          id="outlined-multiline-flexible"
          label="E-mail"
          multiline
          maxRows={4}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>
        <div className="form-group">
          
          <TextField
          id="outlined-multiline-flexible"
          label="Password"
          multiline
          maxRows={4}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        </div>
        <button className='log-b' type="submit">Login</button>
      </form>
      <br></br>
      <Link to='/register' className='reguser'>Not a User? - Sign Up Here</Link>
     
    </div>
  );
}

export default Login;


    

      
        
       