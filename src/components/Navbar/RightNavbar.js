/**
 * Right Nav Bar
 */
import React from "react";
import Profile from "./RightNavbar/Profile";
import Menu from "./RightNavbar/Menu";

function RightNavbar() {
    return (
        <div className="right-nav-container">
            <Profile />
            <Menu />
        </div>
    );
}

export default RightNavbar;