import React from 'react';
import HouseList from "./HouseList.js";
import "./App.css";

// This is static hard-coded data, we shall later fetch it from our server
const HOUSE_RENTING = [
  {
    "name":"Helper",
    "image":"img_098385",
    "description":"bedsitter",
    "customer_id":"3"
  }
];

function App() {
  return (
    <div className="mvls-app">
      <header className="mvls-header">
      </header>
      <main className="mvls-main">
        <HouseList houseRenting={HOUSE_RENTING} />
      </main>
    </div>
  );
}

export default App;
