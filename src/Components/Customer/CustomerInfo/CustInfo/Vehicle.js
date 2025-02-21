import React, { useContext } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Fade, Paper, Popper, Typography } from '@mui/material';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AuthContext from '../../../../common/contaxt/Context';
import { CarrierIcon, PlusIcon, ScanIcon } from '../../../../Assets/Images/SvgFile';
import CustInfoStyle from './Style';

const Vehicle = () => {
    const auth = useContext(AuthContext);

    const handleVehicle = () => {
        auth.login()
    }
    const handleEditVehicles = () => {
        auth.login()
        auth.editStatusVehicalData('edit')
    }

    return (
        <CustInfoStyle>
            <Box id='vehicles_cust'>
                <Box className='vehicle-sect' sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography variant="h6" className="text-dark-black">Vehicles</Typography>
                    <Box className="btn-newcust">
                        <Button onClick={() => handleVehicle()}><PlusIcon />New Vehicle</Button>
                    </Box>
                </Box>
                <Box className='vehicleData-main'>
                    <Box className='vehicle-first'>
                        <Box className='vehicle-mainData'>
                            <Box className='vehicle-state' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant='h4'>Toyato</Typography>
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
                                        <MenuItem onClick={() => handleEditVehicles()}>Edit</MenuItem>
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
                                                            <Typography sx={{ p: 2, pb: 0 }} onClick={() => handleEditVehicles()}>Edit</Typography>
                                                            <Typography sx={{ p: 2 }}>Create Workorder</Typography>
                                                        </Paper>
                                                    </Fade>
                                                )}
                                            </Popper>
                                        </div>
                                    )}
                                </PopupState>
                            </Box>
                            <Typography>RAV4 (2016)</Typography>
                            <Box className='vehicle-brown'>
                                <Box className='vehc-carrier'>
                                    <CarrierIcon />
                                    <Typography>4LK247</Typography>
                                </Box>
                                <Typography>Brown</Typography>
                            </Box>
                            <Box className='vehicle-brown workorder'>
                                <Box className='vehc-carrier'>
                                    <ScanIcon />
                                    <Typography>12562895</Typography>
                                </Box>
                                <Typography>1 Workorder</Typography>
                            </Box>
                        </Box>
                        <Box className='velc-accordion'>
                            <Accordion defaultExpanded>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>#575757</Typography>
                                    <Button>Active</Button>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box className='velh-hexa'>
                                        <Typography>HGZXTV-41289</Typography>
                                        <Typography>$2000.52</Typography>
                                    </Box>
                                    <Typography>FRT/LT</Typography>
                                    <Typography className='commerce'>Commerce</Typography>
                                    <Box className='vehc-commerce'>
                                        <Typography>Date in shop : 06/01/2022</Typography>
                                        <Typography>Promised Delivery : 06/01/2022</Typography>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </CustInfoStyle>
    )
}

export default Vehicle