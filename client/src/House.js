import React from "react";

function House({ houseShowing }) {
    const { house_id, name, image, discription, customer_id } = houseShowing;
    

    return (
        <div className="hsls-house">
            <img className="hsls-poster" src={image} alt={name} />
            <div className="hsls-house-body">
                <div className="hsls-name">{name}</div>
                <div className="hsls-discription">{discription}</div>
                <div className="hsls-cusomer_id">{customer_id}</div>
            </div>
            <div className="mvls-house-footer">
                <a href={`/house/${house_id}`} className="hsls-btn hsls-btn-houses">
                    See Cinemas
                </a>
            </div>
        </div>
    );
}

export default House;