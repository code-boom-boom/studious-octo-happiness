/**
 * Main Navbar in the Center
 */
import React from "react";

import mainMenuList from "./MainNavbar/mainMenuList";
import MainMenuItem from "./MainNavbar/MainMenuItem";
import { useLocation } from "react-router-dom";

function MainNavbar() {

    const location = useLocation();

    return (
        <div className="main-navbar-container">
            <ul className="main-menu-list">
                { mainMenuList.map((menuItem, index) => (
                    <li key={ `menu-item${ index }` } className="menu-item-container">
                        <MainMenuItem menuItem={ menuItem } isActive={ location.pathname === menuItem.link } />
                    </li>
                )) }
            </ul>
        </div>
    );
}

export default MainNavbar;