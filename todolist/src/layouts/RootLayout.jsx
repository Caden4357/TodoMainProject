import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { DarkMode, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
const RootLayout = (props) => {
    const { darkMode, setDarkMode } = props
    return (
        // <></>
        //  if I remove templateColumns its a little more responsive but I dont like that solution
        <Grid  bg={darkMode} width={'100%'}>
            <GridItem colSpan={{ base: 6 }}>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </GridItem>
            <GridItem
                as={"aside"}
                colSpan={{ base: 6, lg: 1 }}
                bg={"purple.300"}
                minHeight={{ lg: "80vh" }}
                p={{ base: "20px", lg: "30px" }}
            >
                <Sidebar />
            </GridItem>
            <GridItem
                as={"main"}
                colSpan={{ base: 6, lg: 5 }}
            // p={'40px'}
            >
                <Outlet />
            </GridItem>
        </Grid>
    );
};

export default RootLayout;
