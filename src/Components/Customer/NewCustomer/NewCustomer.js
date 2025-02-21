import React, { useContext, useState } from 'react';
import { Box, Typography, TextField, ToggleButtonGroup, ToggleButton } from '@mui/material';
import AuthContext from '../../../common/contaxt/Context';
import { LeftArrowIcon } from '../../../Assets/Images/SvgFile';
import NewCustomerStyle from "./Style";

const NewCustomer = ({ closeCreate }) => {
  const auth = useContext(AuthContext);
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleBack = () => {
    closeCreate();
    auth.editStatusDataNull('');
  }

  return (
    <NewCustomerStyle>
      <Box className='new-customer custom-radius'>
        <Box className='create-cust' sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ cursor: "pointer",display:"flex" }} onClick={() => handleBack()}><LeftArrowIcon /></Box>
          {auth.editstatus ? <Typography variant='h2' className="text-dark-black">Edit customer details</Typography> : <Typography variant='h2' className="text-dark-black">Create new customer</Typography>}
        </Box>
        <Box className='custform-main'>
          <Box className='custside-first'>
            <Box className='cust-form'>
              <label>First Name </label>
              <TextField id="outlined-basic" placeholder="Enter first name" variant="outlined" />
            </Box>
            <Box className='cust-form'>
              <label>Cell Phone </label>
              <TextField id="outlined-basic" placeholder="Enter cell phone" variant="outlined" />
            </Box>
            <Box className='cust-form'>
              <label>Street Address 1 </label>
              <TextField id="outlined-basic" placeholder="Enter address 1" variant="outlined" />
            </Box>
            <Box className='cust-form'>
              <label>Zip code </label>
              <TextField id="outlined-basic" placeholder="Enter zip code" variant="outlined" />
            </Box>
            <Box className='cust-form'>
              <label>State </label>
              <TextField id="outlined-basic" placeholder="Enter state" variant="outlined" />
            </Box>
          </Box>
          <Box className='custside-first'>
            <Box className='cust-form'>
              <label>Last Name </label>
              <TextField id="outlined-basic" placeholder="Enter last name" variant="outlined" />
            </Box>
            <Box className='cust-form'>
              <label>E-mail </label>
              <TextField id="outlined-basic" placeholder="Enter your email" variant="outlined" />
            </Box>
            <Box className='cust-form'>
              <label>Street address 2</label>
              <TextField id="outlined-basic" placeholder="Enter address 2" variant="outlined" />
            </Box>
            <Box className='cust-form'>
              <label>City </label>
              <TextField id="outlined-basic" placeholder="Enter city" variant="outlined" />
            </Box>
            <Box className='cust-form'>
              <label>Dealership  </label>
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                className='cust-btn'
              >
                <ToggleButton value="left" aria-label="left aligned" className='cust-yesbtn'>
                  Yes
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned" className='cust-nobtn'>
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Box>
        </Box>
      </Box>
    </NewCustomerStyle>
  )
}

export default NewCustomer;