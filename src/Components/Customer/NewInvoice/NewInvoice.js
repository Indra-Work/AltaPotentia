import React, { useState } from 'react';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import NewLine from '../../Modal/NewLine/NewLine';
import { LeftArrowIcon, PlusIcon } from '../../../Assets/Images/SvgFile';
import editIcon from '../../../Assets/Images/editIcon.png';
import trashIcon from '../../../Assets/Images/trashIcon.png';
import NewInvoiceStyle from './Style';

const createData = (no, desc, amount, quantity, total, editIcon, trashIcon) => {
    return { no, desc, amount, quantity, total, editIcon, trashIcon }
}

const rows = [
    createData(1, 'Front damage', '$200', 1, '$200', editIcon, trashIcon),
    createData(2, 'Mirror damage', '$150', 2, '$300', editIcon, trashIcon),
    createData(3, 'Cleaning', '$400', 1, '$400', editIcon, trashIcon),
    createData('Total', '', '$750', 4, '$900', "", ""),
]

const NewInvoice = ({ setInvoiceInfo }) => {
    const [newlineOpen, setNewlineOpen] = useState(false);

    const handleMoveInvoice = () => {
        setInvoiceInfo();
    }

    return (
        <NewInvoiceStyle>
            <Box className='new-customer custom-radius'>
                <Box className='create-cust' sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ cursor: "pointer" }} onClick={()=>handleMoveInvoice()}><LeftArrowIcon /></Box>
                    <Typography variant='h2' className="text-dark-black">Invoice</Typography>
                </Box>
                <Box className='create-cust create-estimate' sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant='h2' className="text-dark-black">#12532589 (abhishek)</Typography>
                    <Typography variant='h4' className="text-dark-black">2016 BMW X4</Typography>
                </Box>
                <Box className='invoice-table'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'>Sl.no</TableCell>
                                    <TableCell align="left">Description </TableCell>
                                    <TableCell align="left">Amount</TableCell>
                                    <TableCell align="left">Quantity</TableCell>
                                    <TableCell align="left">Total</TableCell>
                                    <TableCell align="center">Options</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.no}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align='center' component="th" scope="row">
                                            {row.no}
                                        </TableCell>
                                        <TableCell align="left">{row.desc}</TableCell>
                                        <TableCell align="left">{row.amount}</TableCell>
                                        <TableCell align="left">{row.quantity}</TableCell>
                                        <TableCell align="left">{row.total}</TableCell>
                                        <TableCell align="center"><img className='edit-invoice' src={row.editIcon} alt="" /><img src={row.trashIcon} alt="" /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box className='invoce-new'>
                        <Typography onClick={() => setNewlineOpen(true)}><PlusIcon /> Add new line</Typography>
                        <Button className='invoice-btn'>Save Invoice</Button>
                    </Box>
                </Box>
            </Box>
            <NewLine newlineOpen={newlineOpen} setNewlineOpen={setNewlineOpen}/>
        </NewInvoiceStyle>
    )
}

export default NewInvoice