import React, { useState, useEffect } from 'react';
import { Box, Typography, MenuItem, Button, Grid, FormControl, Select, Popper, Fade, Paper } from '@mui/material';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { LeftArrowIcon } from '../../Assets/Images/SvgFile';
import OrderInfoStyle from './Style';


const OrderInfo = ({ setOrderInfo }) => {
    const [openMenu] = useState(false);
    const [note, setNote] = useState(false);
    const [dispatched, setDispatched] = useState('dispatch');
    const [insurance, setInsurance] = useState('insurance');

    const handleSidepanel = () => {
        setNote(!note);
    };

    useEffect(() => {
        if (window.innerWidth < 990) {
            setNote(true);
        }
    }, []);

    const handleChange = (event) => {
        setDispatched(event.target.value);
    };

    const handleChangeInsurance = (event) => {
        setInsurance(event.target.value);
    };

    const handleMovePage = () => {
        setOrderInfo();
    }

    return (
        <OrderInfoStyle>
            <Box className={openMenu ? "menu-open customer-main" : "customer-main"}>
                <Box className="main-order-info">
                    <Box className='info-titlebar' sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ cursor: "pointer" }} onClick={handleMovePage}><LeftArrowIcon /></Box>
                            <Typography variant='h2' className="text-dark-black">#12532589 (abhishek)</Typography>
                        </Box>
                        <Typography>2016 BMW X4</Typography>
                    </Box>
                    <Box className="info-estimate">
                        <Box className="estimate-title">
                            <Typography> WO info and Estimate </Typography>
                            <Box></Box>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container rowSpacing={{ xs: 5, md: 6, xl: 6 }} columnSpacing={{ xs: 1, sm: 2, xl: 6 }}>
                                <Grid item xs={11} md={note ? 11 : 7}>
                                    <Grid item xs={12} className="rm-padding">
                                        <Box className='work-order'>
                                            <Box className="title">
                                                <Typography>Work order</Typography>
                                                {/* <Box>
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
                                                        <MenuItem onClick={handleClose}>Edit</MenuItem>
                                                        <MenuItem onClick={handleClose}>Create Workorder</MenuItem>
                                                    </Menu>
                                                </Box> */}
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
                                                                            <Typography sx={{ p: 2, pb: 0 }}>Edit</Typography>
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
                                                <Typography variant='h3'>#575757</Typography>
                                                <Typography variant='h4'>$1258.52</Typography>
                                            </Box>
                                            <button className='open_box'>open</button>
                                            <Box className="saler-dispatch">
                                                <Typography variant='h5'>Abhishek Bandi (Tech)</Typography>
                                                <Typography className="text-dark-black" sx={{mt:2}}><Typography variant="span" className="text-dark-black">Date in shop :</Typography>  06/07/2020</Typography>
                                                <Box>
                                                    <Box className='dot'></Box>
                                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                        <Select
                                                            className='select-dispatch'
                                                            value={dispatched}
                                                            onChange={handleChange}
                                                            displayEmpty
                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                        >
                                                            <MenuItem value="dispatch"><Typography>To be dispatched</Typography></MenuItem>
                                                            <MenuItem value="disassembly"><Typography>disassembly</Typography></MenuItem>
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
                                            <button className={note ? "position-btn" : "none position-btn"} onClick={() => handleSidepanel()}>
                                                <Box><ArrowBackIosIcon /> Note</Box>
                                            </button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} className="rm-padding">
                                        <Box className='work-order'>
                                            <Box className="title">
                                                <Typography>Estimate</Typography>
                                                {/* <Box>
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
                                                                            <Typography sx={{ p: 2, pb: 0 }}>Edit</Typography>
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
                                                <Typography variant='h3'>#575757</Typography>
                                                <Typography variant='h4'>$1258.52</Typography>
                                            </Box>
                                            <button className='open_box'>open</button>
                                            <Box className="saler-dispatch">
                                                <Typography variant='h5'>Abhishek Bandi (Tech)</Typography>
                                                <Typography className="text-dark-black" sx={{ mt: 2 }}><Typography variant="span" className="text-dark-black">Date in shop :</Typography>  06/07/2020</Typography>
                                                <Box>
                                                    <Box className='dot'></Box>
                                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                        <Select
                                                            className='select-dispatch'
                                                            value={dispatched}
                                                            onChange={handleChange}
                                                            displayEmpty
                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                        >
                                                            <MenuItem value="dispatch"><Typography>To be dispatched</Typography></MenuItem>
                                                            <MenuItem value="disassembly"><Typography>disassembly</Typography></MenuItem>
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
                                <Button className={note ? " arrow-none arrow-position2" : " arrow-position2"} onClick={() => setNote(true)}>
                                    <Box>
                                        <ArrowForwardIosIcon />
                                    </Box>
                                </Button>
                                <Grid item xs={12} md={5} className={note ? "none" : "fixed-note"}>
                                    <Box className='note-category'>
                                        <Box className="title">
                                            <Typography variant='h4'>Note Category</Typography>
                                        </Box>
                                        <FormControl sx={{ minWidth: "100%" }}>
                                            <Select
                                                className='select-dispatch'
                                                value={insurance}
                                                onChange={handleChangeInsurance}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="insurance"><Typography>Insurance</Typography></MenuItem>
                                                <MenuItem value="insurancefff"><Typography>Insurancffffffe</Typography></MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Box className="text-area">
                                            <textarea name="" id="" cols="" rows="" placeholder='Write a note...'></textarea>
                                        </Box>
                                        <Box className="border"></Box>
                                        <Box className="recent-notes">
                                            <Typography variant='h5'>Recent notes</Typography>
                                            <Box className="detail">
                                                <Typography variant='h6'>Abhishek Bandi</Typography>
                                                <Typography>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Lorem Ipsum Lorem IpsumLorem IpsumLorem.</Typography>
                                                <Box>
                                                    <Typography variant='h3'>Insurance</Typography>
                                                    <Typography variant='h4'>June 29, 2022 8:20:00 PM </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Button className={note ? "arrow-none arrow-position" : "arrow-position"} onClick={() => setNote(true)}>
                                            <Box>
                                                <ArrowForwardIosIcon />
                                            </Box>
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </OrderInfoStyle>
    )
}

export default OrderInfo