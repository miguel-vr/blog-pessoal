import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        alert("Usuário deslogado")
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static">
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

    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;