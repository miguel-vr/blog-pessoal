import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar className="tool" variant="dense">
                    <Box className='cursor logo' style={{ cursor: "pointer" }} >
                        <Typography variant="h5" >
                            Logo
                        </Typography>
                    </Box>

                    <Box className="icons" display="flex" justifyContent="start">
                        <Box className='cursor icon1' mx={2}>
                            <Typography variant="h6">
                                Home
                            </Typography>
                        </Box>
                        <Box className='cursor icon2' mx={2} >
                            <Typography variant="h6" >
                                Postagens
                            </Typography>
                        </Box>
                        <Box className='cursor icon3' mx={2}>
                            <Typography variant="h6" >
                                Temas
                            </Typography>
                        </Box>
                        <Box className='cursor icon4' mx={2}>
                            <Typography variant="h6">
                                Cadastrar tema
                            </Typography>
                        </Box>
                        <Link to="/login" className="text-decorator-none" >
                            <Box className='cursor icon5' mx={2} >
                                <Typography variant="h6">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;