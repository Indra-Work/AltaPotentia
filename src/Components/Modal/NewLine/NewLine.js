import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import close from "../../../Assets/Images/close.png";

const newlinestyle = {
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

const NewLine = ({ newlineOpen, setNewlineOpen }) => {
  return (
      <Modal
          onClose={() => setNewlineOpen(false)}
          open={newlineOpen}
          className="add-new-field"
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
          <Box sx={newlinestyle}>
              <Box className="detailed-modal">
                  <Box className="title">
                      <Typography id="modal-modal-title" variant="h6">Add New Line</Typography>
                      <Box sx={{cursor:"pointer"}} onClick={() => setNewlineOpen(false)}><img src={close} alt="close" /></Box>
                  </Box>
                  <Box className="content">
                      <Box className="discription">
                          <Typography variant='h3'>Description</Typography>
                          <input type="text" placeholder='Enter description' />
                      </Box>
                      <Box className="discription">
                          <Typography variant='h3'>Amount</Typography>
                          <input type="text" placeholder='Enter amount' />
                      </Box>
                      <Box className="discription">
                          <Typography variant='h3'>Quantity</Typography>
                          <input type="text" placeholder='Enter Quantity' />
                      </Box>
                  </Box>
                  <Box className="save-btn">
                      <Button onClick={() => setNewlineOpen(false)}>Save</Button>
                  </Box>
              </Box>
          </Box>
      </Modal>
  )
}

export default NewLine;