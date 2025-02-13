import React from 'react'
import Navbar from "../components/ Navbar";
import Footer from '../components/Footer';
import {Box} from "@mui/material"

const GuestLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <Box>
                {children}
            </Box>
            <Footer/>
        </div>
    )
}

export default GuestLayout