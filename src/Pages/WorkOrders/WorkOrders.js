import React, { useState, useContext } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Autocomplete, TextField, Button, FormControl, Select, MenuItem } from '@mui/material';
import activeSymbol from "../../Assets/Images/activeSymbol.png";
import MenuIcon from '@mui/icons-material/Menu';
import { FilterIcon, SearchIcon } from '../../Assets/Images/SvgFile';
import PaginationMain from '../../Components/PaginationMain/PaginationMain';
import Sidebar from '../../Components/Sidebar/Sidebar';
import AuthContext from '../../common/contaxt/Context';
import OrderInfo from '../../Components/WorkOrder/OrderInfo';
import NewWorkorder from '../../Components/Customer/NewWorkorder/NewWorkorder';
import WorkOrderStyle from './Style';

const top100Films = [
    { label: 'Search claim, customer, phone, email, vehicle, work order' },
    { label: '2016 BMW X6' },
    { label: '2021 Honda Accord' },
    { label: '2016 BMW X6' },
    { label: '2021 Honda Accord' },
    { label: "2016 BMW X6" },
    { label: '2021 Honda Accord' },
];

const createData = (cno, prelim, wno, activeIcon, activeLabel, techname, vehicle, desc) => {
    return { cno, prelim, wno, activeIcon, activeLabel, techname, vehicle, desc};
}
const rows = [
    createData('AU10066114','Prelim Est', '#12532589', activeSymbol, 'Active', 'Abhishek', '2016 BMW X6', 'Lorem Ipsum...'),
    createData('AU10066114','Prelim. Supp 1', '#12532589', activeSymbol, 'Active', 'James', '2016 BMW X6', 'Lorem Ipsum...'),
    createData('AU10066114','Supplement 2', '#12532589', activeSymbol, 'Active', 'John', '2016 BMW X6', 'Lorem Ipsum...'),
    createData('AU10066114','Prelim. Supp 2', '#12532589', activeSymbol, 'Active', 'Robert', '2016 BMW X6', 'Lorem Ipsum...')
];

const WorkOrder = () => {
    const auth = useContext(AuthContext);
    const [platestatus, setPlatestatus] = useState('name');
    const [orderInfo, setOrderInfo] = useState(false);
    const [openMenu, setOpenmenu] = useState(false);
    const [repairstatus, setRepairstatus] = useState('hold');

    const handlePlate = (event) => {
        setPlatestatus(event.target.value);
    };
    const handleBack = () => {
        setOrderInfo(false)
    }
    const handleChange = (event) => {
        setRepairstatus(event.target.value);
    };
    const handleWorkOrder = () => {
        auth.login(false);
    }; 
    const handleOpen = () => {
        setOrderInfo(true);
    }

    return (
        <WorkOrderStyle>
            <Box className='order-wrap'>
                <Box className={openMenu ? "menu-open customer-main" : "customer-main"}>
                    <Sidebar openMenu={openMenu} setOpenmenu={setOpenmenu} />
                    <Box className='cust-wrapper'>
                        {!orderInfo ?
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
                                                    value={platestatus}
                                                    onChange={(e) => handlePlate(e)}
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
                                                <TableCell align="left">Tech name</TableCell>
                                                <TableCell align="left">Vehicle</TableCell>
                                                <TableCell align="left">Repair Status</TableCell>
                                                <TableCell align="right">Repair Description</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row,key) => (
                                                <TableRow
                                                    key={key}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: "pointer" }}
                                                >
                                                    <TableCell component="th" scope="row" align="left">
                                                        {row.cno}
                                                        <Typography className="prelim-num text-dark-black">{row.prelim}</Typography>
                                                    </TableCell>
                                                    <TableCell align="left" onClick={() => setOrderInfo(true)}>{row.wno}
                                                        <Typography className='active-data'><img src={row.activeIcon} alt="" />{row.activeLabel}</Typography>
                                                    </TableCell>
                                                    <TableCell align="left">{row.techname}</TableCell>
                                                    <TableCell align="left">{row.vehicle}</TableCell>
                                                    <TableCell>
                                                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                                            <Select
                                                                labelId="demo-simple-select-standard-label"
                                                                id="demo-simple-select-standard"
                                                                value={repairstatus}
                                                                onChange={(e) => handleChange(e)}
                                                                label="status"
                                                            >
                                                                <MenuItem value="hold">On hold</MenuItem>
                                                                <MenuItem value="paint">Paint</MenuItem>
                                                                <MenuItem value="dispatch">To be dispatched</MenuItem>
                                                                <MenuItem value="sublet">Sublet</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell align="center" className='repair-wrap'>{row.desc}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <PaginationMain />
                            </Box>
                            : auth.status === false ? <OrderInfo setOrderInfo={handleBack} openEditWorkorder={handleOpen} /> : <NewWorkorder closeWorkOrder={handleWorkOrder} />}
                    </Box>
                </Box>
            </Box>
        </WorkOrderStyle>
    )
}

export default WorkOrder;