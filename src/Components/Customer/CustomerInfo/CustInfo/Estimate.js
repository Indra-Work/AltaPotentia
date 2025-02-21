import React, { useContext } from 'react'
import { Box, Button, Typography, Grid, Popper, Fade, Paper } from '@mui/material'
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { PlusIcon } from '../../../../Assets/Images/SvgFile';
import print from '../../../../Assets/Images/print.png'
import paperPlane from '../../../../Assets/Images/paperPlane.png'
import pdf from '../../../../Assets/Images/pdf.png'
import AuthContext from '../../../../common/contaxt/Context';
import CustInfoStyle from './Style';

function Estimate() {
    const auth = useContext(AuthContext);

    const handleEstimate = () => {
        auth.login()
    }

    return (
        <CustInfoStyle>
            <Box className="main-estimate" id='estimate'>
                <Box className='vehicle-sect' sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography variant="h6" className="text-dark-black">Estimate</Typography>
                    <Box className="btn-newcust">
                        <Button onClick={() => handleEstimate()}><PlusIcon />New Estimate</Button>
                    </Box>
                </Box>
                <Box sx={{ flexGrow: 1 }} className="box-main">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Box className='sec-1'>
                                <Box className="title">
                                    <Typography variant="h5">Toyato<Typography variant='span'>(#12532545)</Typography></Typography>
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
                                            <MenuItem onClick={handleClose}>Edit</MenuItem>
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
                                                                    <Typography sx={{ p: 2, pb: 0 }} >Edit</Typography>
                                                                    <Typography sx={{ p: 2 }}>Create Workorder</Typography>
                                                                </Paper>
                                                            </Fade>
                                                        )}
                                                    </Popper>
                                                </div>
                                            )}
                                        </PopupState>
                                    </Box>
                                </Box>
                                <Box className="content-sec">
                                    <Box className="id-info">
                                        <Box className="info-1">
                                            <Typography variant='h3'>AU10066112</Typography>
                                            <Typography variant='h4'>Original Est</Typography>
                                        </Box>
                                        <Box className="info-2">
                                            <Typography variant='h3'>$2000.52</Typography>
                                            <Typography variant='h4'>$160 Deductible</Typography>
                                        </Box>
                                    </Box>
                                    <Box className="document-sec">
                                        <Box className="content">
                                            <Typography variant='h5'>Commerce</Typography>
                                            <Typography variant='h5'>Abhsihek Bandi (appraiser)</Typography>
                                        </Box>
                                        <Box className="pdf-sec">
                                            <Box>
                                                <Button><img src={print} alt="print" /></Button>
                                                <Button><img src={paperPlane} alt="paperPlane" /></Button>
                                            </Box>
                                            <Box className="date-pdf">
                                                <Button><img src={pdf} alt="pdf" /></Button>
                                                <Box className="content">
                                                    <Typography variant='h5'>DTP</Typography>
                                                    <Typography variant='h6'>Jan 24, 2020</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="add-attachments">
                                        <Box className="title">
                                            <Typography variant='h3'>Estimate State Attachments</Typography>
                                        </Box>
                                        <Box className="attachment-1">
                                            <Box>
                                                <img src={pdf} alt="pdf" />
                                                <Box className="content">
                                                    <Typography variant='h4'>Preliminary Estimate</Typography>
                                                    <Typography variant='h5'>Jan 22, 2020</Typography>
                                                </Box>
                                            </Box>
                                            <Box className="print-send">
                                                <Button><img src={print} alt="print" /></Button>
                                                <Button><img src={paperPlane} alt="paperPlane" /></Button>
                                            </Box>
                                        </Box>
                                        <Box className="attachment-1">
                                            <Box>
                                                <img src={pdf} alt="pdf" />
                                                <Box className="content">
                                                    <Typography variant='h4'>Orginal Est</Typography>
                                                    <Typography variant='h5'>Jan 22, 2020</Typography>
                                                </Box>
                                            </Box>
                                            <Box className="print-send">
                                                <Button><img src={print} alt="print" /></Button>
                                                <Button><img src={paperPlane} alt="paperPlane" /></Button>
                                            </Box>
                                        </Box>
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

export default Estimate