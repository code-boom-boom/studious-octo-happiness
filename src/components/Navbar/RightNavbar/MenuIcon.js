/**
 * Menu Button Icon in the right navbar
 */
import React from "react";
import classNames from "classnames";

function MenuIcon({ icon, isActive }) {
    return (
        <div className={ classNames("menu-icon", { "active": isActive }) }>
            { icon }
        </div>
    );
}

export default MenuIcon;