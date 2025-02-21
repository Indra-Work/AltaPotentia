import React, { useState, useContext } from 'react';
import { Box, FormControl, MenuItem, Select, TextareaAutosize, TextField, Typography } from '@mui/material';
import { DateIcon, LeftArrowIcon, PenIcon } from '../../../Assets/Images/SvgFile';
import AuthContext from '../../../common/contaxt/Context';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import NewWorkOrderStyle from './Style';

const NewWorkorder = ({ closeWorkOrder }) => {
    const auth = useContext(AuthContext);
    const [orderStatus,setOrderStatus] = useState('open');
    const [repairStatus, setRepairStatus] = useState('dispatched');
    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const handleChangeOrder = (event) => {
        setOrderStatus(event.target.value);
    };
    const handleChangeRepair = (event) => {
        setRepairStatus(event.target.value);
    };
    const handlecloseWo = () => {
        closeWorkOrder();
        auth.editStatusWorkorderNull('');
    }

    return (
        <NewWorkOrderStyle>
            <Box className='new-customer custom-radius workOrder-Main'>
                <Box className='create-cust' sx={{ display: "flex", alignItems: "center" }}>
                    <Box className='workorder-data'>
                        <Box className='work-backIcon'>
                            <Box sx={{ cursor: "pointer" }} onClick={() => handlecloseWo()}><LeftArrowIcon /></Box>
                            <Typography variant='h2' className="text-dark-black">Create Work order<span>(Abhishek Bandi)</span></Typography>
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
                                        value={orderStatus}
                                        onChange={handleChangeOrder}
                                        placeholder='Select reason for cancel'
                                    >
                                        <MenuItem value="open">Open</MenuItem>
                                        <MenuItem value="close">close</MenuItem>
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
                                        value={repairStatus}
                                        onChange={handleChangeRepair}
                                        placeholder='Select reason for cancel'
                                    >
                                        <MenuItem value="dispatched">To be Dispatched</MenuItem>
                                        <MenuItem value="dispatchedtobe">dispatchedtobe</MenuItem>
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
                        placeholder="add description"
                        minRows={3}
                        style={{ width: 'auto', height: '142px' }}
                    />
                </Box>
            </Box>
        </NewWorkOrderStyle>
    )
}

export default NewWorkorder;