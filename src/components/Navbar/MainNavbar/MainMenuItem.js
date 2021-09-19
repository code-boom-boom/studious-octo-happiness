/**
 * Main Menu Item
 */
import React from "react";
import classnames from "classnames";
import {Link} from "react-router-dom";
import {Badge} from "@material-ui/core";

function MainMenuItem({ menuItem, isActive }) {
    return (
        <div className={ classnames("menu-item-wrapper", { "active": isActive }) }>
            <Link to={ menuItem.link } className="menu-item-icon">
                <Badge color="error" badgeContent={ menuItem.notification }>
                    { isActive? menuItem.iconActive : menuItem.iconPassive }
                </Badge>
            </Link>
        </div>
    );
}

export default MainMenuItem;