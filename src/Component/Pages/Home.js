import React from 'react'
import Login from './Login'
import './login.css';
function Home() {
  return (
    <div>

    <div >
     <nav className='navv'>
     <img  className="login_logo" src='logo.png' alt='logo' height='100px'/>
     <h3 className='cartt'>E-cart</h3>
     <a  className="regiss" href='/register'>Register Here </a>
     </nav>
        </div>
      <Login></Login>
    </div>
  )
}

export default Home
