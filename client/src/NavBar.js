import React from "react";

function NavBar() {
    return (
        <div className="mvls-container">
            <nav className="mvls-nav">
                <span className="mvls-title">House management system</span>
                <a href="/">House</a>
                <a href="/customer">Customer</a>
                <a href="/admin">Admin</a>
            </nav>
        </div>
    );
}

export default NavBar;
