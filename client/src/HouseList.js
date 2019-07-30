import React from "react";
import House from "./House";

function HouseList({ houseShowing }) {
    return (
        <div className="hsls-container">
            <div className="hsls-house-list">
                {houseShowing.map(m => (
                    <House key={m.id} houseShowing={m} />
                ))}
            </div>
        </div>
    );
}

export default HouseList;