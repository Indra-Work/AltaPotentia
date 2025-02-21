import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Box, Typography, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../Assets/Images/logo.png";
import user from "../../Assets/Images/user.png";
import help from "../../Assets/Images/help.png";
import terms from "../../Assets/Images/terms.png";
import logout from "../../Assets/Images/logout.png";
import { CustomerIcon, DashboardIcon, EstimateIcon, InvoiceIcon, WorkOrderIcon } from '../../Assets/Images/SvgFile';
import SidebarStyle from "./Style";

const Sidebar = (props) => {
    const [menuActive, setMenuActive] = useState('Dashboard');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleActive = (data) => {
        setMenuActive(data.primary);
    }

    const NavData = [
        { href: '/dashboard', primary: 'Dashboard', icon: <DashboardIcon /> },
        { href: '/customer', primary: 'Customers', icon: <CustomerIcon /> },
        { href: '/workOrders', primary: 'Work Orders', icon: <WorkOrderIcon /> },
        { href: '/estimates', primary: 'Estimates', icon: <EstimateIcon /> },
        { href: '/invoice', primary: 'Invoices', icon: <InvoiceIcon /> }
    ]

    return (
        <SidebarStyle className="sidebar-wrapper">
            <Box className="sidebar-main">
                <Box>
                    <Box className='logo-sect'>
                        <Box>
                            <img src={logo} alt="logo" />
                            <Typography className='text-dark-black'>AltaPotentia</Typography>
                        </Box>
                        <MenuIcon className="menu-icon" onClick={() => props.setOpenmenu(!props.openMenu)} />
                    </Box>
                    <Box className='menu-link'>
                        <List>
                            {NavData.map((data,key) =>
                                <Link to={data.href} key={key} className={data.primary === menuActive ? 'active-menu' : '' }>
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={() => handleActive(data)}>
                                            <ListItemIcon>{data.icon}</ListItemIcon>
                                            <ListItemText primary={data.primary}></ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            )}
                        </List>
                    </Box>
                </Box>
                <Box 
                    className='profile-sect'
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <Box className='profile-icon text-dark-black'>A</Box>
                    <Typography className='text-dark-black'>Abhishek Bandi</Typography>
                </Box>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    className="profile-menu"
                >
                    <MenuItem><img src={user} alt="detail" /><Typography sx={{ml:2}}> My details</Typography></MenuItem>
                    <MenuItem><img src={help} alt="detail" /><Typography sx={{ml:2}}>Help</Typography></MenuItem>
                    <MenuItem component={Link} to="/privacy"><img src={terms} alt="detail" /><Typography sx={{ml:2}}>Terms and conditions</Typography></MenuItem>
                    <MenuItem><img src={logout} alt="detail" /><Typography sx={{ml:2}}> Logout</Typography></MenuItem>
                </Menu>
            </Box>
        </SidebarStyle>
    )
}

export default Sidebar;