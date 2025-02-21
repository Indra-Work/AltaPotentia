import React, { useState, useContext } from 'react';
import { Box, Button, Fade, FormControl, Grid, MenuItem, Paper, Popper, Select, Typography } from '@mui/material';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import AuthContext from '../../../../common/contaxt/Context';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { PlusIcon } from '../../../../Assets/Images/SvgFile';
import CustInfoStyle from './Style';

const WorkOrders = () => {
    const auth = useContext(AuthContext);
    const [dispatch, setDispatch] = useState('dispatched');

    const handleChangeDispatch = (event) => {
        setDispatch(event.target.value);
    };
    const handleAddWorkOrder = () => {
        auth.login()
    }
    const handleEditWorkOrder = () => {
        auth.login()
        auth.editStatusWorkorderData('edit')
    }

    return (
        <CustInfoStyle>
            <Box className='workorder-main' id='workorder'>
                <Box className='vehicle-sect' sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography variant="h6" className="text-dark-black">Work order</Typography>
                    <Box className="btn-newcust">
                        <Button onClick={() => handleAddWorkOrder()}><PlusIcon />New Workorder</Button>
                    </Box>
                </Box>
                <Box className='vehicleData-main'>
                    <Grid container sx={{ justifyContent: "space-between" }}>
                        <Grid item xs={6}>
                            <Box className='work-order'>
                                {/* <Box className='order-btn'>
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={() => handleEditWorkOrder()}>Edit</MenuItem>
                                        <MenuItem>Create Workorder</MenuItem>
                                    </Menu>
                                </Box> */}
                                <Box className='order-btn'>
                                    <PopupState variant="popper" popupId="demo-popup-popper">
                                        {(popupState) => (
                                            <div>
                                                <Button variant="contained" {...bindToggle(popupState)}>
                                                    <MoreVertIcon />
                                                </Button>
                                                <Popper {...bindPopper(popupState)} transition className='poper-estimate'>
                                                    {({ TransitionProps }) => (
                                                        <Fade {...TransitionProps} timeout={350}>
                                                            <Paper>
                                                                <Typography sx={{ p: 2, pb: 0 }} onClick={() => handleEditWorkOrder()}>Edit</Typography>
                                                                <Typography sx={{ p: 2 }}>Create Workorder</Typography>
                                                            </Paper>
                                                        </Fade>
                                                    )}
                                                </Popper>
                                            </div>
                                        )}
                                    </PopupState>
                                </Box>
                                <Box className="price">
                                    <Typography variant='h3'>#12532589<span>(Honda)</span></Typography>
                                    <Typography variant='h4'>$1258.52</Typography>
                                </Box>
                                <button className='open_box'>open</button>
                                <Box className="saler-dispatch">
                                    <Typography variant='h5'>Abhsihek Bandi (Technician)</Typography>
                                    <Box>
                                        <Box className='dot'></Box>
                                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                            <Select
                                                className='select-dispatch'
                                                value={dispatch}
                                                onChange={handleChangeDispatch}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="dispatched"><Typography>To be dispatched</Typography></MenuItem>
                                                <MenuItem value="disassembly"><Typography>Disassembly</Typography></MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Box>
                                <Box className="repair-description">
                                    <Typography variant='h4'>Vehicle Repair description</Typography>
                                    <Box className="content">
                                        <Typography><FiberManualRecordIcon />Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem </Typography>
                                        <Typography><FiberManualRecordIcon />Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem </Typography>
                                        <Typography><FiberManualRecordIcon />Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </CustInfoStyle>
    )
}

export default WorkOrders