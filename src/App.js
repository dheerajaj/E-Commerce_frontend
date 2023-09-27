// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Register from './Component/Pages/Register';
// import Home from './Component/Pages/Home';
// import Dashboard from './Component/Pages/Dashboard';

// function App () {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     // Implement your login logic here.
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     // Implement your logout logic here.
//     setIsLoggedIn(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home onLogin={handleLogin} />} />
//           <Route
//             path="/register"
//             element={isLoggedIn ? <Navigate to="/dashboard" /> : <Register onRegister={handleLogin} />}
//           />
//           <Route
//             path="/login"
//             element={isLoggedIn ? <Navigate to="/dashboard" /> : <Home onLogin={handleLogin} />}
//           />
//           {isLoggedIn ? (
//             <Route path="/dashboard" element={<Dashboard onLogout={handleLogout} />} />
//           ) : (
//             <Navigate to="/login" />
//           )}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;







import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Component/Pages/Register';
import Home from './Component/Pages/Home';
import Dashboard from './Component/Pages/Dashboard';

function App() {
  return (
    <div>
      <div className="content"></div>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Home />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;


