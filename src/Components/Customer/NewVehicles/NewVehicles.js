import React, { useState, useContext } from 'react';
import { Box, FormControl, MenuItem, Select, TextField, Typography, Button } from '@mui/material';
import AuthContext from '../../../common/contaxt/Context';
import { LeftArrowIcon, ScanIcon } from '../../../Assets/Images/SvgFile';
import NewVehicleStyle from './Style';

const NewVehicle = ({ closeVehicle }) => {
    const auth = useContext(AuthContext);
    const [vyear, setVyear] = useState('select');

    const handleChangeYear = (event) => {
        setVyear(event.target.value);
    };
    const handleclose = () => {
        closeVehicle();
        auth.editStatusVehicalNull('');
    }

    return (
        <NewVehicleStyle>
            <Box className='new-customer custom-radius'>
                <Box className='create-cust' sx={{ display: "flex", alignItems: "center",justifyContent:"space-between" }}>
                    <Box sx={{ display: "flex", alignItems: "center"}}>
                        <Box sx={{ cursor: "pointer" }} onClick={() => handleclose()}><LeftArrowIcon /></Box>
                        {auth.editstatusVehical ? <Typography variant='h2' className="text-dark-black">Edit Vehicle details</Typography> : <Typography variant='h2' className="text-dark-black">Add New Vehicle</Typography>}
                    </Box>
                    <Typography variant="h3" className="text-dark-black">Abhishek Bandi</Typography>
                </Box>
                <Box className='vehicles-wraps'>
                    <Box className='custform-main'>
                        <Box className='custside-first'>
                            <Box className='cust-form'>
                                <label>Vehicle Year</label>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={vyear}
                                            onChange={handleChangeYear}
                                            placeholder='Select reason for cancel'
                                        >
                                            <MenuItem value="select">-select-</MenuItem>
                                            <MenuItem value="2016">2016</MenuItem>
                                            <MenuItem value="2017">2017</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>
                            <Box className='cust-form'>
                                <label>Vehicle Model</label>
                                <TextField id="outlined-basic" placeholder="Enter vehicle model" variant="outlined" />
                            </Box>
                            <Box className='cust-form'>
                                <label>VIN Manual Entry</label>
                                <TextField id="outlined-basic" placeholder="VIN manual entry" variant="outlined" />
                            </Box>
                            <Box className='cust-form'>
                                <label>License plate </label>
                                <TextField id="outlined-basic" placeholder="Enter License Plate Number" variant="outlined" />
                            </Box>
                        </Box>
                        <Box className='custside-first'>
                            <Box className='cust-form'>
                                <label>Vehicle Make</label>
                                <TextField id="outlined-basic" placeholder="Enter vehicle make" variant="outlined" />
                            </Box>
                            <Box className='cust-form'>
                                <label>Vehicle Color</label>
                                <TextField id="outlined-basic" placeholder="Enter vehicle color" variant="outlined" />
                            </Box>
                            <Box className='cust-form cust-scan'>
                                <label>VIN Scan</label>
                                <TextField id="outlined-basic" placeholder="VIN scan" variant="outlined" />
                                <ScanIcon />
                            </Box>
                        </Box>
                    </Box>
                    <Box className='vehicle-wrap'>
                        {auth.editstatusVehical ? <Button>Save</Button> : <Button>Add vehicle</Button> }
                    </Box>
                </Box>
            </Box>
        </NewVehicleStyle>
    )
}

export default NewVehicle;