import React from 'react';
import HouseList from "./HouseList.js";
import "./App.css";




function App(House) {
  return (
    <div className="hsls-app">
      <header className="hsls-header">
      </header>
      <main className="hsls-main">
        <HouseList houseRenting={House} />
      </main>
    </div>
  );
}

export default App;
