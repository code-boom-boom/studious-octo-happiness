/**
 * Top Navigation Bar Component
 */
import React from "react";
import LeftNavbar from "./LeftNavbar";
import MainNavbar from "./MainNavbar";
import RightNavbar from "./RightNavbar";

function TopNavBar() {

    return (
        <div className="banner">
            <LeftNavbar />
            <MainNavbar />
            <RightNavbar />
        </div>
    );
}

export default TopNavBar;