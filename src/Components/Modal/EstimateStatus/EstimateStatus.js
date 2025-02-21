import React, { useState } from 'react';
import { Box, FormControl, MenuItem, Modal, Select, Typography } from '@mui/material';
import close from "../../../Assets/Images/close.png";

const statusstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EstimateStatus = ({ statusOpen, setStatusOpen }) => {
    const [estimateAmt, setEstimateAmt] = useState('original');

    const handleChange = (event) => {
        setEstimateAmt(event.target.value);
    };

    return (
        <Modal
            onClose={() => setStatusOpen(false)}
            open={statusOpen}
            className="add-new-field estimate-stauts"
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={statusstyle}>
                <Box className="detailed-modal estimate-stauts">
                    <Box className="title">
                        <Typography id="modal-modal-title" variant="h6">Estimate Status and amount</Typography>
                        <Box sx={{ cursor: "pointer" }} onClick={() => setStatusOpen(false)}><img src={close} alt="close" /></Box>
                    </Box>
                    <Box className="content">
                        <Box className="discription">
                            <Typography variant='h3'>Estimate status </Typography>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <Select
                                    value={estimateAmt}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="original"><Typography>Original Est</Typography></MenuItem>
                                    <MenuItem value="originalestimate"><Typography>Original Estimate</Typography></MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box className="discription">
                            <Typography variant='h3'>Estimate amount</Typography>
                            <input type="text" placeholder='$2000.56' />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default EstimateStatus;