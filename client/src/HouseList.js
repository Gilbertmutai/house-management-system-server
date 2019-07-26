import React from "react";
import House from "./House";

function HouseList({ houseRenting }) {
    return (
        <div className="mvls-container">
            <div className="mvls-House-list">
                {houseRenting.map(h => (
                    <House key={h.id} popularHousing={h} />
                ))}
            </div>
        </div>
    );
}

export default HouseList;