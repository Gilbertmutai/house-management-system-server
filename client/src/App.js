import React from 'react';
import NavBar from "./NavBar";
import HouseList from "./HouseList.js";
import "./App.css";


function App(House) {
  return (
    <div className="hsls-app">
      <header className="hsls-header">
      <NavBar />
      </header>
      <main className="hsls-main">
        <HouseList houseShowing={House} />
      </main>
    </div>
  );
}

export default App;
