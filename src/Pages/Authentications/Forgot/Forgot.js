import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Box, TextField, Button, Typography } from '@mui/material';
import logo_img from '../../../Assets/Images/logo.png';
import eye_icons from '../../../Assets/Images/eye.png';
import swm_icons from "../../../Assets/Images/shape.png";
import arrow from '../../../Assets/Images/arrow02.png';
import Forgotstyle from './Style';

const Forgot = () => {
    const [forgot, setForgot] = useState(false);
    const [create, setCreate] = useState(false);

    return (
        <Forgotstyle>
            <Box className='forgot_main'>
                {!forgot ? (
                    <Box className="content_main">
                        <Box className='header_main'>
                            <Box className="back_button" component={Link} to="/">
                                <Button variant="text"><img src={arrow} alt="" /></Button>
                            </Box>
                            <Box className="icons">
                                <img src={swm_icons} alt="" />
                            </Box>
                        </Box>
                        <Box className="content">
                            <Typography variant='h3'>Forgot Password</Typography>
                        </Box>
                        <Box className="email_box">
                            <Typography variant='span'>Email/Phone</Typography>
                            <Box className="password">
                                <TextField className='input_email' id="filled-basic" placeholder='Enter your Email or Phone' />
                            </Box>
                        </Box>
                        <Box className="sign_in">
                            <Button variant="contained" onClick={() => setForgot(true)}>
                                Send
                            </Button>
                        </Box>
                    </Box>) : (
                    <Box className="content_main">
                        <Box>
                            {!create ? (
                                <Box>
                                    <Box className='header_main'>
                                        <Box className="back_button" onClick={() => setForgot(false)}>
                                            <Button variant="text"><img src={arrow} alt="" /></Button>
                                        </Box>
                                        <Box className="icons">
                                            <img src={swm_icons} alt="" />
                                        </Box>
                                    </Box>
                                    <Box className="content">
                                        <Typography variant='h3'>Forgot Password</Typography>
                                    </Box>
                                    <Box className="email_box">
                                        <Typography className='link' variant='span'>A link to reset your password sent to ”email or phone number”</Typography>
                                    </Box>
                                    <Box className="sign_in">
                                        <Button variant="contained" onClick={() => setCreate(true)}>
                                            Login
                                        </Button>
                                    </Box>
                                </Box>
                            ) : (
                                <Box>
                                    <Box className="content">
                                        <Typography variant='h3'>Create Password</Typography>
                                        <Box className="logo_img">
                                            <img src={logo_img} alt="" />
                                        </Box>
                                    </Box>
                                    <Box className="email_box">
                                        <Typography variant='span'>Enter new password</Typography>
                                        <Box className="password">
                                            <TextField type='password' className='input_email' id="filled-basic" placeholder='Enter new password' />
                                            <img src={eye_icons} className='eye_icons' alt="" />
                                        </Box>
                                    </Box>
                                    <Box className="email_box re-enter">
                                        <Typography variant='span'>Re-enter new password</Typography>
                                        <Box className="password">
                                            <TextField type='password' className='input_email' id="filled-basic" placeholder='Re-enter new password' />
                                            <img src={eye_icons} className='eye_icons' alt="" />
                                        </Box>
                                    </Box>
                                    <Box className="sign_in">
                                        <a href='/' variant="contained" >
                                            Create Password
                                        </a>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Box>
                )}
            </Box>
        </Forgotstyle>
    )
}
export default Forgot;