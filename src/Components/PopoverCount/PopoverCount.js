import React from 'react';
import { Box, Typography, Popover } from '@mui/material';

const PopoverCount = ({ handlePopoverClose, open, anchorEl }) => {
  return (
      <Popover
          id="mouse-over-popover"
          sx={{
              pointerEvents: 'none',
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
          }}
          transformOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
          className='count-popover'
      >
          <Typography variant="h2">2017 BMW X7</Typography>
          <Box variant="span" sx={{ ml: 1 }}>
              <Typography variant="h3">#12458 <Typography variant="span">Active</Typography></Typography>
              <Typography variant="h3">#12458 <Typography variant="span">Active</Typography></Typography>
          </Box>
      </Popover>
  )
}

export default PopoverCount;