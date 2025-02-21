import React, { useState, useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Typography, Button, Autocomplete, TextField, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Paper, Tooltip, IconButton, FormControl, Select, MenuItem } from '@mui/material';
import activeSymbol from "../../Assets/Images/activeSymbol.png";
import { PlusIcon, SearchIcon, FilterIcon } from '../../Assets/Images/SvgFile';
import AuthContext from '../../common/contaxt/Context';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CustomerInfo from '../../Components/Customer/CustomerInfo/CustomerInfo';
import PaginationMain from '../../Components/PaginationMain/PaginationMain';
import NewCustomer from '../../Components/Customer/NewCustomer/NewCustomer';
import NewVehicle from '../../Components/Customer/NewVehicles/NewVehicles';
import CustomerStyle from "./Style";

const top100Films = [
  { label: 'Search claim, customer, phone, email, vehicle, work order' },
  { label: '2016 BMW X6' },
  { label: '2021 Honda Accord' },
  { label: '2016 BMW X6' },
  { label: '2021 Honda Accord' },
  { label: "2016 BMW X6" },
  { label: '2021 Honda Accord' },
];

const createData = (cname, phone, email, vehicles, order, activeLabel, activeIcon, vehicleCount, orderCount) => {
  return { cname, phone, email, vehicles, order, activeLabel, activeIcon, vehicleCount, orderCount };
}

const rows = [
  createData('Abhishek Bandi', '(508) 509-4459', 'abc@gmail.com', '2016 BMW X6', '#12586', 'Active', activeSymbol, '+3', '+3'),
  createData('James', '(508) 509-4589', 'a2bc@gmail.com', '2021 Honda Accord', '#12587', '', '', '+2', '+3'),
  createData('Robert', '(508) 145-1205 ', 'abdc@gmail.com', '2016 BMW X6', '#12585', '', '', "+2", '+2'),
  createData('John', '(125) 523-1475', 'xcv@gmail.com', '2021 Honda Accord', '#12510', '', '', '+3', '+3')
];

const Customer = () => {
  const auth = useContext(AuthContext);
  const [namestatus, setNamestatus] = useState('name');
  const [openMenu, setOpenmenu] = useState(false);
  const [custInfo, setCustInfo] = useState(false);
  const [custAdd, setCustAdd] = useState(false);

  const handleStatus = (event) => {
    setNamestatus(event.target.value);
  };
  const handleOpen = () => {
    setCustAdd(true);
  }
  const handleClose = () => {
    setCustAdd(false)
  }
  const handleVehicle = () => {
    auth.login(false);
  }
  const handleBack = () => {
    setCustInfo(false)
  }
  const MoreDetail = [
    <Box className="count-content">
      <Typography variant="h2" className='text-dark-black'>2017 BMW X7</Typography>
      <Box variant="span" sx={{ ml: 1 }}>
        <Typography variant="h3" className='text-dark-black'>#12458 <Typography variant="span">Active</Typography></Typography>
        <Typography variant="h3" className='text-dark-black'>#12458 <Typography variant="span">Active</Typography></Typography>
      </Box>
    </Box>
  ]

  return (
    <CustomerStyle>
      <Box className={openMenu ? "menu-open customer-main" : "customer-main"}>
        <Sidebar openMenu={openMenu} setOpenmenu={setOpenmenu} />
        {!custAdd ? !custInfo ?
          <Box className='cust-wrapper'>
            <Box className="customer-wrap">
              <Box className='customer-head'>
                <Box className="search-sect">
                  <MenuIcon className="show-sidemenu" onClick={() => setOpenmenu(!openMenu)} />
                  <Box className='search-detail'>
                    <Typography className="search-icon"><SearchIcon /></Typography>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 640 }}
                      renderInput={(params) => <TextField {...params} />}
                      placeholder="Search claim, customer, phone, email, vehicle, work order"
                    />
                    <FormControl variant="standard" sx={{ m: 1 }} className='search-byname'>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={namestatus}
                        onChange={(e) => handleStatus(e)}
                        label="status"
                      >
                        <MenuItem value="name">by name</MenuItem>
                        <MenuItem value="vin">by VIN </MenuItem>
                        <MenuItem value="plate">by Plate</MenuItem>
                        <MenuItem value="wo">by wo</MenuItem>
                        <MenuItem value="claim">by claim</MenuItem>
                      </Select>
                    </FormControl>
                    <Typography className="filter-icon"><FilterIcon /></Typography>
                  </Box>
                </Box>
                <Box className="btn-newcust">
                  <Button onClick={() => handleOpen()}><PlusIcon />New Customer</Button>
                </Box>
              </Box>
              <Box className='sort-sect'>
                <Typography>Sort By :</Typography>
                <Box className='sort-option'>
                  <Button className="date-active">Date in</Button>
                  <Button>Date out</Button>
                </Box>
              </Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1200 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Customer name</TableCell>
                      <TableCell align="left">Phone</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="left">Vehicles</TableCell>
                      <TableCell align="center">Work Orders</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.cname}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: "pointer" }}>
                        <TableCell align="left" onClick={() => setCustInfo(true)}>{row.cname}</TableCell>
                        <TableCell align="left">{row.phone}</TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                        <TableCell align="left">{row.vehicles}
                          <Tooltip title={MoreDetail} className='record-count' placement="top-end">
                            <IconButton>
                              {row.vehicleCount}
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                        <TableCell align="center">{row.order}
                          <Tooltip title={MoreDetail} className='record-count' placement="top-end">
                            <IconButton>
                              {row.orderCount}
                            </IconButton>
                          </Tooltip>
                          <Typography><img src={row.activeIcon} alt="" />{row.activeLabel}</Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <PaginationMain />
            </Box>
          </Box>
          : auth.status === false ? <CustomerInfo setCustInfo={handleBack} openEditCus={handleOpen} /> : <NewVehicle closeVehicle={handleVehicle} />
          : <NewCustomer closeCreate={handleClose} />}
      </Box>
    </CustomerStyle>
  )
}

export default Customer;