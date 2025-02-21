import React, { useState } from 'react';
import { Box, FormControl, MenuItem, Select, TextareaAutosize, TextField, Typography } from '@mui/material';
import { DateIcon, LeftArrowIcon, PenIcon } from '../../../Assets/Images/SvgFile';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import NewWorkOrderStyle from './Style';

const EditWorkorder = () => {
    const [age] = useState('');
    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <NewWorkOrderStyle>
            <Box className='new-customer custom-radius workOrder-Main'>
                <Box className='create-cust' sx={{ display: "flex", alignItems: "center" }}>
                    <Box className='workorder-data'>
                        <Box className='work-backIcon'>
                            <LeftArrowIcon />
                            <Typography variant='h2' className="text-dark-black">Edit Work order<span>(Abhishek Bandi)</span></Typography>
                        </Box>
                        <Box className='create-cust create-estimate' sx={{ display: "flex", alignItems: "center" }}>
                            <Typography variant='h4' className="text-dark-black">2016 BMW X4</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className='custform-main'>
                    <Box className='custside-first'>
                        <Box className='cust-form work-pen'>
                            <label>WO number</label>
                            <TextField id="outlined-basic" disabled placeholder="#12532590" variant="outlined" />
                            <PenIcon />
                        </Box>
                        <Box className='cust-form'>
                            <label>Work order status</label>
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
                            <label>Work order amount</label>
                            <TextField id="outlined-basic" disabled placeholder="$1258.52" variant="outlined" />
                        </Box>
                    </Box>
                    <Box className='custside-first'>
                        <Box className='cust-form'>
                            <label>Technician Name</label>
                            <TextField id="outlined-basic" placeholder="Technician Name" variant="outlined" />
                        </Box>
                        <Box className='cust-form'>
                            <label>Enter technician name</label>
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
                    </Box>
                </Box>
                <Box className='cust-form work-textarea'>
                    <label>Vehicle repair description</label>
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Repair description....."
                        minRows={3}
                        style={{ width: 'auto', height: '142px' }}
                    />
                </Box>
            </Box>
        </NewWorkOrderStyle>
    )
}

export default EditWorkorder