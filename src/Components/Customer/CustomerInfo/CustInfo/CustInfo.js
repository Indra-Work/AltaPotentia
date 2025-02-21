import React, { useContext } from 'react';
import { Box, Typography, Button, Grid, Fade, Paper, Popper } from '@mui/material';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AuthContext from '../../../../common/contaxt/Context';
import CustInfoStyle from "./Style";

const CustInfo = ({ openEditCus }) => {
    const auth = useContext(AuthContext);

    const editCustomer = () => {
        auth.editStatusData('edit');
        openEditCus()
    }

    return (
        <CustInfoStyle>
            <Box className='info-details' id='custInfo'>
                <Box className='info-menu' sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 5 }}>
                    <Typography variant="h6" className="text-dark-black">Customer Info</Typography>
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
                            <MenuItem onClick={() => editCustomer()}>Edit customer details</MenuItem>
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
                                                <Typography sx={{ p: 2 }} onClick={() => editCustomer()}>Create Workorder</Typography>
                                            </Paper>
                                        </Fade>
                                    )}
                                </Popper>
                            </div>
                        )}
                    </PopupState>
                </Box>
                <Box className="cust-details">
                    <Grid container sx={{ justifyContent: "space-between" }}>
                        <Grid item xs={6} lg={5} xl={4}>
                            <Box className="add-details" sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                                <Box>
                                    <Typography variant='h2' className="text-dark-black">Abhishek Bandi</Typography>
                                    <Typography className="text-dark-black">abc@gmail.com</Typography>
                                    <Typography className="text-dark-black" sx={{ my: 1 }}>(508) 509-4459</Typography>
                                    <Typography className="text-dark-black">40, 12th Main, 14th Cross Rd, Sector 6, HSR Layout, Bengaluru, Karnataka 560102</Typography>
                                </Box>
                                <Typography variant='h3'>Dealership Name: James</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} lg={4} xl={3}>
                            <Box className="add-details">
                                <Typography variant='h4' className="text-dark-black">Customer ID</Typography>
                                <Box className='id-box'>
                                    <Typography variant="span"><ArrowBackIosIcon /></Typography>
                                    <Typography variant="span"><ArrowForwardIosIcon /></Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </CustInfoStyle>
    )
}

export default CustInfo;