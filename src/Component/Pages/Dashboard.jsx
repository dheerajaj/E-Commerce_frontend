import React from 'react'
import './Dashboard.css';
import Navbar from '../Navigation/Navbar';

import Cards from './Card';

function Dashboard() {
  return (
    <>
    <div>
  <Navbar></Navbar> 
           
    </div>
    <div>
    <Cards></Cards>
    </div>
    </>
  )
}

export default Dashboard
