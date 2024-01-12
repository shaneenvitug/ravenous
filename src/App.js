import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import React, { useState } from "react";

function App() {

  const [ businesses, setBusinesses ] = useState([]);

  const updateBusinesses = (newBusinesses) => {
    setBusinesses(newBusinesses);
  }
  
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar updateBusinesses={updateBusinesses} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
