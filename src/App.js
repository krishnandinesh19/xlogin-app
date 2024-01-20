// src/App.js
import React from 'react';
import './App.css';
import Login from './login'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login /> {/* Update this line */}
      </header>
    </div>
  );
}

export default App;
