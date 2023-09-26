import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './Component/Pages/Register';
import Home from './Component/Pages/Home';
import Dashboard from './Component/Pages/Dashboard';



function App() {
  return (
    <div>
      <div className="content">
      </div>
      <Router>
        <div className="App">
             
          <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/register' element={<Register></Register>}> </Route>
            <Route path='/login' element={<Home></Home>}></Route>
          </Routes>
        </div>
      </Router>

    </div>
  )
}

export default App

