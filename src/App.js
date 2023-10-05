import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Component/Pages/Register";
import Home from "./Component/Pages/Home";
import Dashboard from "./Component/Pages/Dashboard";
import Navbar from "./Component/Navigation/Navbar";
import Search from "./Component/Navigation/Search";
import MensFashion from "./Component/Pages/MensFashion";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?q=${query}`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="content"></div>
      <Router>
        <div className="App">
          <Navbar onSearch={handleSearch} />
          {/* Search results component */}
          <Search searchResults={searchResults} />
          <Routes>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Home />}></Route>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/Mens Fashion" element={<MensFashion />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
