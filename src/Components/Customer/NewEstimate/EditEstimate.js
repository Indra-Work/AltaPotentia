import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { DateIcon, LeftArrowIcon } from '../../../Assets/Images/SvgFile';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import NewEstimateStyle from './Style';

const EditEstimate = () => {
    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <NewEstimateStyle>
            <Box className='new-customer custom-radius'>
                <Box className='create-cust' sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ cursor: "pointer" }} ><LeftArrowIcon /></Box>
                    <Typography variant='h2' className="text-dark-black">Edit Estimate</Typography>
                </Box>
                <Box className='create-cust create-estimate' sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant='h2' className="text-dark-black">#12532589 (abhishek)</Typography>
                    <Typography variant='h4' className="text-dark-black">2016 BMW X4</Typography>
                </Box>
                <Box className='custform-main'>
                    <Box className='custside-first'>
                        <Box className='cust-form'>
                            <label>Claim Number</label>
                            <TextField id="outlined-basic" placeholder="Enter claim number" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>Appraiser name</label>
                            <TextField id="outlined-basic" placeholder="appraised name" variant="outlined" />
                        </Box>
                        <Box className='cust-form cust-picker'>
                            <label>Date of Loss</label>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    inputFormat="MM/dd/yyyy"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <DateIcon />
                            </LocalizationProvider>
                        </Box>
                        <Box className='cust-form'>
                            <label>Adjuster Name</label>
                            <TextField id="outlined-basic" placeholder="Aduster name" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>Adjuster Phone</label>
                            <TextField id="outlined-basic" placeholder="Aduster phone" variant="outlined" />
                        </Box>
                    </Box>
                    <Box className='custside-first'>
                        <Box className='cust-form'>
                            <label>Insurance Company</label>
                            <TextField id="outlined-basic" placeholder="Enter insurance company name" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>Deductible</label>
                            <TextField id="outlined-basic" placeholder="amount deductible" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>Adjuster Fax </label>
                            <TextField id="outlined-basic" placeholder="Aduster fax" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>Adjuster E-mail</label>
                            <TextField id="outlined-basic" placeholder="Aduster email" variant="outlined" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </NewEstimateStyle>
    )
}

export default EditEstimate