/**
 * Profile Component on the navbar
 */
import React, {useContext} from "react";
import AvatarIcon from "../../AvatarIcon";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { avatarText } from "Utils/textHelper";

function Profile() {

    const { userState } = useContext(UserContext);

    return (
        <Link to="/my-profile" className="profile-container">
            <AvatarIcon profile_pic={ userState.currentUser.profile_pic } size="sm" />
            <Typography className="profile-name">{ avatarText(userState.currentUser.name) }</Typography>
        </Link>
    );
}

export default Profile;