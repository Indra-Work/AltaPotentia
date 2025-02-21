import React, { useContext, useState } from 'react';
import { Autocomplete, Box, Button, Table, TableBody, TableCell, Paper, TableContainer, TableHead, TableRow, Typography, TextField, FormControl, Select, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import activeSymbol from "../../Assets/Images/activeSymbol.png";
import { FilterIcon, SearchIcon } from '../../Assets/Images/SvgFile';
import AuthContext from '../../common/contaxt/Context';
import Sidebar from '../../Components/Sidebar/Sidebar';
import PaginationMain from '../../Components/PaginationMain/PaginationMain';
import NewEstimate from '../../Components/Customer/NewEstimate/NewEstimate';
import CustomerInfo from '../../Components/Customer/CustomerInfo/CustomerInfo';
import NewVehicle from '../../Components/Customer/NewVehicles/NewVehicles';
import NewCustomer from '../../Components/Customer/NewCustomer/NewCustomer';
import EstimatesStyle from './Style';

const top100Films = [
    { label: 'Search claim, customer, phone, email, vehicle, work order' },
    { label: '2016 BMW X6' },
    { label: '2021 Honda Accord' },
    { label: '2016 BMW X6' },
    { label: '2021 Honda Accord' },
    { label: "2016 BMW X6" },
    { label: '2021 Honda Accord' },
];

const createData = (cno, prelim, wno, activeIcon, activeLabel, cname, vehicle, updatedate, total) => {
    return { cno, prelim, wno, activeIcon, activeLabel, cname, vehicle, updatedate, total };
}
const rows = [
    createData('AU10066114', 'Prelim Est', '#12532589', activeSymbol, 'Active', 'Abhishek Bandi', '2016 BMW X6', 'Jan 22, 2020', '$1,951.52'),
    createData('AU10066114', 'Original Est', '#12532589', activeSymbol, 'Active', 'James', '2016 BMW X6', 'Jan 22, 2020', '$1,951.52'),
    createData('AU10066114', 'Prelim. Supp 1', '#12532589', activeSymbol, 'Active', 'Robert', '2016 BMW X6', 'Jan 22, 2020', '$1,951.52'),
    createData('AU10066114', 'Supplement 2', '#12532589', activeSymbol, 'Active', 'John', '2016 BMW X6', 'Jan 22, 2020', '$1,951.52'),
    createData('AU10066114', 'Prelim. Supp 2', '#12532589', activeSymbol, 'Active', 'Rahul', '2016 BMW X6', 'Jan 22, 2020', '$1,951.52'),
];

const Estimates = () => {
    const auth = useContext(AuthContext);
    const [claimtatus, setClaimstatus] = useState('name');
    const [openMenu, setOpenmenu] = useState(false);
    const [custInfo, setCustInfo] = useState(false);
    const [custAdd, setCustAdd] = useState(false);

    const handleClaim = (event) => {
        setClaimstatus(event.target.value);
    };
    const handleClose = () => {
        setCustAdd(false)
    }
    const handleVehicle = () => {
        auth.login(false);
    }
    const handleBack = () => {
        setCustInfo(false)
    }

    return (
        <EstimatesStyle>
            <Box className='estimate-wrap order-wrap'>
                <Box className={openMenu ? "menu-open customer-main" : "customer-main"}>
                    <Sidebar openMenu={openMenu} setOpenmenu={setOpenmenu} />
                    <Box className='cust-wrapper'>
                        {!custAdd ? !custInfo ?
                            <Box className='customer-wrap'>
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
                                                    value={claimtatus}
                                                    onChange={(e) => handleClaim(e)}
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
                                                <TableCell align="left">Claim No</TableCell>
                                                <TableCell align="left">WO number</TableCell>
                                                <TableCell align="left">Customer name</TableCell>
                                                <TableCell align="left">Vehicle</TableCell>
                                                <TableCell align="left">Last updated</TableCell>
                                                <TableCell align="center">Est. Total</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row, key) => (
                                                <TableRow
                                                    key={key}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: "pointer" }}
                                                >
                                                    <TableCell component="th" scope="row" align="left">
                                                        {row.cno}
                                                        <Typography className="prelim-num text-dark-black">{row.prelim}</Typography>
                                                    </TableCell>
                                                    <TableCell align="left">{row.wno}
                                                        <Typography className='active-data'><img src={row.activeIcon} alt="" />{row.activeLabel}</Typography>
                                                    </TableCell>
                                                    <TableCell align="left">{row.cname}</TableCell>
                                                    <TableCell align="left">{row.vehicle}</TableCell>
                                                    <TableCell align="left">{row.updatedate}</TableCell>
                                                    <TableCell align="center" className='repair-wrap'>{row.total}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <PaginationMain />
                            </Box>
                            : auth.status === false ? <CustomerInfo setCustInfo={handleBack} /> : <NewVehicle closeVehicle={handleVehicle} />
                            : <NewCustomer closeCreate={handleClose} />}
                        <NewEstimate />
                    </Box>
                </Box>
            </Box>
        </EstimatesStyle>
    )
}

export default Estimates