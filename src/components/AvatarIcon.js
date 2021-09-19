/**
 * Avatar Icon
 */
import React from "react";
import defaultAvatar from "Assets/images/avatar.png";

function AvatarIcon({ profile_pic, size = "md" }) {
    return (
        <div className="avatar-container">
            <img src={ profile_pic ? profile_pic : defaultAvatar } alt="my avatar" className={ `avatar-${ size }` } />
        </div>
    )
}

export default AvatarIcon;