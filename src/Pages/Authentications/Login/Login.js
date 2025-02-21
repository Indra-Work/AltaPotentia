import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Box, Checkbox, Button, Typography, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import eye_icons from '../../../Assets/Images/eye.png';
import logo_img from '../../../Assets/Images/logo.png';
import swm_icons from "../../../Assets/Images/shape.png";
import google from '../../../Assets/Images/google.png';
import facebook from '../../../Assets/Images/facebook.png';
import twitter from '../../../Assets/Images/Vector.png';
import LoginStyle from './Style';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const Login = () => {
  const [login, setLogin] = useState(false);
  const [create, setCreate] = useState(false);

  return (
    <LoginStyle>
      <Box className="login_main">
        {!login ? (
          <Box className="content_main">
            <Box className="content">
              <Typography variant='h3'>Login</Typography>
              <Box className="logo_img">
                <img src={logo_img} alt="" />
              </Box>
            </Box>
            <Box className="email_box">
              <Typography variant='span'>Email/Phone</Typography>
              <TextField className='input_email' type="email" id="filled-basic" placeholder='Email or Phone' />
            </Box>
            <Box className="email_box passowrd">
              <Typography variant='span'>Password</Typography>
              <Box className="password">
                <TextField className='input_email' type="password" id="filled-basic" placeholder='Password' />
                <img src={eye_icons} className='eye_icons' alt="" />
              </Box>
            </Box>
            <Box className="forgot">
              <a href='./forgot'><img src={swm_icons} alt="" /> Forgot Password</a>
            </Box>
            <Box className="check_box">
              <span className='by_sign'>By signing in, you agree to <a href="/privacy">terms.</a></span>
            </Box>
            <Box className="sign_in">
              <Button variant="contained" component={Link} to="/dashboard" >
                Sign in
              </Button>
            </Box>
            <Box className="or_name">
              <Typography variant='h3'> OR</Typography>
            </Box>
            <Box className="button_main">
              <Button variant="contained" size="small">
                <img src={google} alt="" /> <Typography variant='h5'>Google</Typography>
              </Button>
              <Button variant="contained" size="medium">
                <img src={facebook} alt="" /> <Typography variant='h5'>Facebook</Typography>
              </Button>
              <Button variant="contained" size="large">
                <img src={twitter} alt="" /> <Typography variant='h5'>twitter</Typography>
              </Button>
            </Box>
            <Box className="create_account">
              <Typography variant='h3'>Don’t have account?  <Button sx={{ marginLeft:"3px" }} onClick={() => setLogin(true)}> Create account</Button></Typography>
            </Box>
          </Box>) : (
          <Box className="content_main create-accout">
            {!create ? (
              <Box className='account_create'>
                <Box className="create_account_main">
                  <Box>
                    <Box className="content">
                      <Typography variant='h3'>Create Account</Typography>
                      <Box className="logo_img">
                        <img src={logo_img} alt="" />
                      </Box>
                    </Box>
                    <Box className="email_box">
                      <Typography variant='span'>Email</Typography>
                      <TextField className='input_email' type="email" id="filled-basic" placeholder='Enter your Email' />
                    </Box>
                    <Box className="email_box">
                      <Typography variant='span'>Password</Typography>
                      <Box className="password">
                        <TextField className='input_email' type="password" id="filled-basic" placeholder='Create Password' />
                          <img src={eye_icons} className='eye_icons' alt="" />
                      </Box>
                    </Box>
                    <Box className="check_box spacer">
                      <Checkbox {...label} defaultChecked />
                        <Typography variant='span' className='by_sign'>By creating an account you agree to<a href="/privacy">terms.</a></Typography>
                    </Box>
                    <Box className="sign_in create">
                      <Button variant="contained" onClick={() => setCreate(true)}>
                        Create Account
                      </Button>
                    </Box>
                  </Box>
                  <Box className="create_account sign_have">
                    <Typography variant='h3'>Already have account? <Button onClick={() => setLogin(false)}>Sign In</Button></Typography>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box>
                <Box className="content">
                  <Typography variant='h3'>Create Account</Typography>
                  <Box className="logo_img">
                    <img src={logo_img} alt="" />
                  </Box>
                </Box>
                <Box className="congratulation">
                  <Button variant="contained" className='check_icons'>
                    <CheckIcon className='check' />
                  </Button>
                  <Typography variant='h3'>Congratulations</Typography>
                  <Typography variant='h4'>Your account has been created successfully</Typography>
                  <Typography variant='h6'>Lets set up your business and payment details to get started</Typography>
                </Box>
                <Box className="sign_in">
                  <a href="/accountSetup" variant="contained">
                    Continue
                  </a>
                </Box>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </LoginStyle>
  )
}
export default Login;