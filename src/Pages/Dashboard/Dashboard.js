import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../../Components/Sidebar/Sidebar';
import DashboardStyle from "./Style";

const Dashboard = () => {
  const [openMenu, setOpenmenu] = useState(false);

  return (
    <DashboardStyle>
      <Box className={openMenu ? "menu-open dashboard-main" : "dashboard-main"}>
        <Sidebar openMenu={openMenu} setOpenmenu={setOpenmenu} />
        <Box className="dashboard-wrap">
          <Typography className='text-dark-black dashboard-title'><MenuIcon className='show-sidemenu' onClick={() => setOpenmenu(!openMenu)}/>Welcome Back, Abhishek Bandi</Typography>
        </Box>
      </Box>
    </DashboardStyle>
  )
}

export default Dashboard