import React from "react";
import Customer from "./Customer";

function CustomerList({customer}) {
    return (
        <div className="mvls-container">
            <div className="mvls-Customer-list">
                {customer.map(c => (
                    <Customer key={c.id} popularHousing={c} />
                ))}
            </div>
        </div>
    );
}

export default CustomerList;