import React, { useState, useContext } from 'react';
import { Autocomplete, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow, TextField, Typography, FormControl, Select, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import activeSymbol from "../../Assets/Images/activeSymbol.png";
import { FilterIcon, SearchIcon } from '../../Assets/Images/SvgFile';
import Sidebar from '../../Components/Sidebar/Sidebar';
import PaginationMain from '../../Components/PaginationMain/PaginationMain';
import NewInvoice from '../../Components/Customer/NewInvoice/NewInvoice';
import AuthContext from '../../common/contaxt/Context';
import InvoiceStyle from './Style';

const top100Films = [
    { label: 'Search claim, customer, phone, email, vehicle, work order' },
    { label: '2016 BMW X6' },
    { label: '2021 Honda Accord' },
    { label: '2016 BMW X6' },
    { label: '2021 Honda Accord' },
    { label: "2016 BMW X6" },
    { label: '2021 Honda Accord' },
];

const createData = (invoice, invoicestatus, cname, order, activeLabel, activeIcon, amount, date) => {
    return { invoice, invoicestatus, cname, order, activeLabel, activeIcon, amount, date };
}

const rows = [
    createData('Invoice_1', 'Paid', 'Abhishek', '#12532589', '', '', '$950', 'Jan 22, 2020'),
    createData('Invoice_2', 'Unpaid', 'Jone', '#12532589', 'Active', activeSymbol, '$950', 'Jan 22, 2020'),
    createData('Invoice_3', 'Unpaid', 'James', '#12532589', 'Active', activeSymbol, '$950', 'Jan 22, 2020'),
    createData('Invoice_4', 'Unpaid', 'Robert', '#12532589', 'Active', activeSymbol, '$950', 'Jan 22, 2020')
];

const Invoice = () => {
    const auth = useContext(AuthContext);
    const [selectstatus, setselectstatus] = useState('name');
    const [openMenu, setOpenmenu] = useState(false);
    const [invoiceInfo, setInvoiceInfo] = useState(false);

    const handleSelect = (event) => {
        setselectstatus(event.target.value);
    };
    const handleBack = () => {
        setInvoiceInfo(false)
    }

    return (
        <InvoiceStyle>
            <Box className='order-wrap'>
                <Box className={openMenu ? "menu-open customer-main" : "customer-main"}>
                    <Sidebar openMenu={openMenu} setOpenmenu={setOpenmenu} />
                    {!invoiceInfo ?
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
                                                    value={selectstatus}
                                                    onChange={(e) => handleSelect(e)}
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
                                                <TableCell align="left">Invoice</TableCell>
                                                <TableCell align="left">Customer name</TableCell>
                                                <TableCell align="left">Workorder</TableCell>
                                                <TableCell align="left">Amount</TableCell>
                                                <TableCell align="left">Date Created</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.invoice}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: "pointer" }}
                                                >
                                                    <TableCell align="left" onClick={() => setInvoiceInfo(true)} >{row.invoice}
                                                        <Typography className={row.invoicestatus === "Unpaid" ? "active-paid" : "active-paid text-error"}>{row.invoicestatus}</Typography>
                                                    </TableCell>
                                                    <TableCell align="left">{row.cname}</TableCell>
                                                    <TableCell align="left">{row.order}
                                                        <Typography className='active-data'><img src={row.activeIcon} alt="" />{row.activeLabel}</Typography>
                                                    </TableCell>
                                                    <TableCell align="left">{row.amount}</TableCell>
                                                    <TableCell align="left">{row.date}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <PaginationMain />
                            </Box>
                        </Box>
                        : auth.status === false && <NewInvoice setInvoiceInfo={handleBack} />}
                </Box>
            </Box>
        </InvoiceStyle>
    )
}

export default Invoice;