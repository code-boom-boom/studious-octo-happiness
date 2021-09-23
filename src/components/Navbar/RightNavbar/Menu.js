/**
 * Ordinary Menu at the top to the right of navbar
 */
import React, {useState} from "react";
import MenuIcon from "./MenuIcon";
import { AppsRounded } from "@material-ui/icons";

function Menu() {
    return (
        <div className="menu-container">
            <MenuIcon icon={ <AppsRounded /> } isActive={ false } />
        </div>
    );
}

export default Menu;