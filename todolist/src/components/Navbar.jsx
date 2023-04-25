import React, { useState } from "react";
import {Avatar, Button, Flex, HStack, Heading, Spacer, Text} from '@chakra-ui/react'
import avatarProfile from '../images/avatar-profile.jpg'
const Navbar = (props) => {
    const {darkMode, setDarkMode} = props

    const toggleDarkMode = () => {
        darkMode === 'white'? setDarkMode('blackAlpha.800'): setDarkMode('white')
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
                <Text>cwilcox@codingdojo.com</Text>
                {
                    darkMode === 'white'?
                    <Button onClick={toggleDarkMode} color={'black'}>Light Mode</Button>:
                    <Button onClick={toggleDarkMode} color={'black'}>Dark Mode</Button>
                }
                <Button color={'red'}>Logout</Button>
            </HStack>
        </Flex>
    )
};

export default Navbar;
