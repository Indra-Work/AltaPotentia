import React from 'react';
import { LeftArrowIcon, ScanIcon } from '../../../Assets/Images/SvgFile'
import NewVehicleStyle from './Style'
import { Box, FormControl, MenuItem, Select, TextField, Typography, Button } from '@mui/material';

const EditVehicles = ({ closeVehicle }) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleclose = () => {
        closeVehicle()
    }

    return (
        <NewVehicleStyle>
            <Box className='new-customer custom-radius'>
                <Box className='create-cust' sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ cursor: "pointer" }} onClick={() => handleclose()}><LeftArrowIcon /></Box>
                    <Typography variant='h2' className="text-dark-black">Edit Vehicle details</Typography>
                </Box>
                <Box className='custform-main'>
                    <Box className='custside-first'>
                        <Box className='cust-form'>
                            <label>Vehicle Year</label>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        onChange={handleChange}
                                        placeholder='Select reason for cancel'
                                    >
                                        <MenuItem value={1}>2016</MenuItem>
                                        <MenuItem value={2}>2017</MenuItem>
                                        <MenuItem value={3}>2018</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                        <Box className='cust-form'>
                            <label>Vehicle Model</label>
                            <TextField id="outlined-basic" placeholder="RAV4" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>VIN Manual Entry</label>
                            <TextField id="outlined-basic" placeholder="12562895" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>License plate </label>
                            <TextField id="outlined-basic" placeholder="4LK247" variant="outlined" />
                        </Box>
                    </Box>
                    <Box className='custside-first'>
                        <Box className='cust-form'>
                            <label>Vehicle Make</label>
                            <TextField id="outlined-basic" placeholder="Toyato" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>Vehicle Color</label>
                            <TextField id="outlined-basic" placeholder="Brown" variant="outlined" />
                        </Box>
                        <Box className='cust-form cust-scan'>
                            <label>VIN Scan</label>
                            <TextField id="outlined-basic" placeholder="12562895" variant="outlined" />
                            <ScanIcon />
                        </Box>
                    </Box>
                </Box>
                <Box className='vehicle-wrap'>
                    <Button>Add vehicle</Button>
                </Box>
            </Box>
        </NewVehicleStyle>
    )
}

export default EditVehicles;