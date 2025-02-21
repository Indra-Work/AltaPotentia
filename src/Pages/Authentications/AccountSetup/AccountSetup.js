import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import logo_img from '../../../Assets/Images/logo.png';
import Accoutstyle from './Style';

const AccountSetup = () => {
    return (
        <Accoutstyle>
            <Box className="main_accout" id="account_main">
                <Box className="account_setup">
                    <Box className="logo_img">
                        <img src={logo_img} alt="" />
                        <Typography variant='h3'>Account Setup</Typography>
                    </Box>
                    <Box className="form_main">
                        <Box className="input_text_field">
                            <Box className="input_name">
                                <Typography variant='span'>Business Name</Typography>
                                <TextField className='input_text' id="filled-basic" placeholder='Enter your business name' />
                            </Box>
                            <Box className="input_name">
                                <Typography variant='span'>Business Address</Typography>
                                <TextField className='input_text' id="filled-basic" placeholder='Enter your business address' />
                            </Box>
                        </Box>
                        <Box className="input_text_field">
                            <Box className="input_name">
                                <Typography variant='span'>Business Email</Typography>
                                <TextField className='input_text' id="filled-basic" placeholder='Enter your business email' />
                            </Box>
                            <Box className="input_name">
                                <Typography variant='span'>Business Phone</Typography>
                                <TextField className='input_text' id="filled-basic" placeholder='Enter your business email' />
                            </Box>
                        </Box>
                        <Box className="input_text_field">
                            <Box className="input_name">
                                <Typography variant='span'>EIN/Tax ID Number</Typography>
                                <TextField className='input_text' id="filled-basic" placeholder='Enter your EIN/Tax ID number' />
                            </Box>
                            <Box className="input_name">
                                <Typography variant='span'>RS Number</Typography>
                                <TextField className='input_text' id="filled-basic" placeholder='Enter repair shop number' />
                            </Box>
                        </Box>
                    </Box>
                    <Box className="sign_in">
                        <a href='/dashboard'>Continue to Dashboard</a>
                    </Box>
                </Box>
            </Box>
        </Accoutstyle>
    )
}

export default AccountSetup