import { AtSignIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
    return (
        <List color={"white"} fontSize={"1.2em"} spacing={4}>
            <ListItem>
                <NavLink to={"/"}>
                    <ListIcon as={CalendarIcon} />
                    Dashboard
                </NavLink>
            </ListItem>
            <ListItem>
                <ListIcon as={EditIcon} />
                <NavLink to={"/newTask"}>New Task</NavLink>
            </ListItem>
            <ListItem>
                <ListIcon as={AtSignIcon} />
                <NavLink to={"/profile"}>Profile</NavLink>
            </ListItem>
        </List>
    );
};

export default Sidebar;
