import React, { useState, useContext } from "react";
import {Link} from 'react-router-dom'
import {Avatar, Button, Flex, HStack, Heading, Spacer, Text} from '@chakra-ui/react';
import avatarProfile from '../images/avatar-profile.jpg';
import { userContext } from '../context/UserContext';
import axios from "axios";
const Navbar = (props) => {
    const {loggedInUser, setLoggedInUser} = useContext(userContext)
    const {darkMode, setDarkMode} = props

    const toggleDarkMode = () => {
        darkMode === 'white'? setDarkMode('blackAlpha.800'): setDarkMode('white')
    }
    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
            .then((res) => {
                console.log(res);
                window.localStorage.removeItem('uuid')
                setLoggedInUser({})
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <Flex 
        as={'nav'} 
        // borderBottom={'1px solid gray'} 
        p={'10px'} 
        align={'center'} 
        bg={'gray.200'}
        >
            <Heading>Get Tasks Done</Heading>
            <Spacer/>
            <HStack spacing={'20px'}>
                <Avatar name="Logged In User" src={avatarProfile} size={'lg'}/>
                <Text>{loggedInUser.username}</Text>
                {
                    darkMode === 'white'?
                    <Button onClick={toggleDarkMode} color={'black'}>Light Mode</Button>:
                    <Button onClick={toggleDarkMode} color={'black'}>Dark Mode</Button>
                }
                {
                    loggedInUser.username?
                    <Button color={'red'} onClick={logout}>Logout</Button>:
                    <Link to={'/'}><Button>Login</Button></Link>
                }
            </HStack>
        </Flex>
    )
};

export default Navbar;
