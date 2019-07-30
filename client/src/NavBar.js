import React from "react";

function NavBar() {
    return (
        <div className="hsls-container">
            <nav className="hsls-nav">
                <span className="hsls-title">House management system</span>
                <a href="/">House</a>
                <a href="/customer">Customer</a>
                <a href="/admin">Admin</a>
            </nav>
        </div>
    );
}

export default NavBar;
