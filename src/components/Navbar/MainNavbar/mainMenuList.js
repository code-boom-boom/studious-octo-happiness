/**
 * Main Menu Items List
 */
import React from "react";
import {
    FlagRounded,
    GroupRounded, GroupWork, GroupWorkOutlined,
    HomeOutlined,
    HomeRounded, OndemandVideoOutlined, OndemandVideoRounded,
    OutlinedFlagRounded, People,
    PeopleOutlined, PeopleOutlineRounded
} from "@material-ui/icons";

const mainMenuList = [
    {
        name: "Home",
        iconActive: <HomeRounded />,
        iconPassive: <HomeOutlined />,
        link: "/home",
        notification: 0
    },
    {
        name: "Friends",
        iconActive: <GroupRounded />,
        iconPassive: <PeopleOutlined />,
        link: "/friends",
        notification: 0
    },
    {
        name: "Pages",
        iconActive: <FlagRounded />,
        iconPassive: <OutlinedFlagRounded />,
        link: "/pages",
        notification: 8
    },
    {
        name: "Watch",
        iconActive: <OndemandVideoRounded />,
        iconPassive: <OndemandVideoOutlined />,
        link: "/watches",
        notification: 1
    },
    {
        name: "Groups",
        iconActive: <GroupWork />,
        iconPassive: <GroupWorkOutlined />,
        link: "/groups",
        notification: 6
    },
];

export default mainMenuList;