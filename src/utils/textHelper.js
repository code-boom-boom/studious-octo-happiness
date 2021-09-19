/**
 * Text helper functions
 */
import React from "react";

// Convert name to firstname and first letter of lastname
export const avatarText = (name) => {
    let names = name.split(" ");

    return names[0] + " " + names[1].toUpperCase().charAt(0) + ".";
}