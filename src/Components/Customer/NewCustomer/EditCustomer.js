import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { LeftArrowIcon } from '../../../Assets/Images/SvgFile';
import NewCustomerStyle from "./Style";

const EditCustomer = ({ closeCreate }) => {

    const handleBack = () => {
        closeCreate();
    }

    return (
        <NewCustomerStyle>
            <Box className='new-customer custom-radius'>
                <Box className='create-cust' sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ cursor: "pointer" }} onClick={() => handleBack()}><LeftArrowIcon /></Box>
                    <Typography variant='h2' className="text-dark-black">Edit customer details</Typography>
                </Box>
                <Box className='custform-main'>
                    <Box className='custside-first'>
                        <Box className='cust-form'>
                            <label>First Name </label>
                            <TextField id="outlined-basic" placeholder="Abhishek" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>Cell Phone </label>
                            <TextField id="outlined-basic" placeholder="125-256-1256" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>Street Address 1 </label>
                            <TextField id="outlined-basic" placeholder="13 street, 47 W" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>Zip code </label>
                            <TextField id="outlined-basic" placeholder="10001" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>State </label>
                            <TextField id="outlined-basic" placeholder="New York" variant="outlined" />
                        </Box>
                    </Box>
                    <Box className='custside-first'>
                        <Box className='cust-form'>
                            <label>Last Name </label>
                            <TextField id="outlined-basic" placeholder="Bandi" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>E-mail </label>
                            <TextField id="outlined-basic" placeholder="abc@gmail.com" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>Street address 2</label>
                            <TextField id="outlined-basic" placeholder="New York" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>City </label>
                            <TextField id="outlined-basic" placeholder="New York" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>Dealership  </label>
                            <Box className='cust-btn'>
                                <Button className='cust-yesbtn'>Yes</Button>
                                <Button className='cust-nobtn'>No</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </NewCustomerStyle>
    )
}

export default EditCustomer;