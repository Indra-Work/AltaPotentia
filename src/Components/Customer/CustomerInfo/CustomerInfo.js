import React, { useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { LeftArrowIcon } from '../../../Assets/Images/SvgFile';
import CustInfo from './CustInfo/CustInfo';
import Vehicle from './CustInfo/Vehicle';
import WorkOrders from './CustInfo/WorkOrders';
import Estimate from './CustInfo/Estimate';
import CustomerInfoStyle from "./Style";

const CustomerInfo = ({ setCustInfo, openEditCus }) => {
    const [tabActive, setTabActive] = useState('Customer info');

    const handleTabActive = (info) => {
        setTabActive(info.customer);
    }
    const handleMovePage = () => {
        setCustInfo();
    }
    const TabData=[
        { link: '#custInfo', customer:'Customer info'},
        { link: '#vehicles_cust', customer: 'Vehicles' },
        { link: '#workorder', customer: 'Work Orders' },
        { link: '#estimate', customer: 'Estimates' }
    ]

    return (
        <CustomerInfoStyle>
            <Box className='info-tabs'>
                <Box className='tab-menubar'>
                    <Box className='info-titlebar' sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ cursor: "pointer" }} onClick={handleMovePage}><LeftArrowIcon /></Box>
                            <Typography variant='h2' className="text-dark-black">Abhishek Bandi</Typography>
                        </Box>
                        <Typography>Customer id : 1</Typography>
                    </Box>
                    <Box className='custom-tab'>
                        {TabData.map((info,key) =>
                            <Link href={info.link} key={key} className={info.customer === tabActive ? 'active' : ''} onClick={() => handleTabActive(info)} >{info.customer} </Link>
                    )}
                    </Box>
                </Box>
                <Box className='custom-tab-detail'>
                    <CustInfo openEditCus={openEditCus} />
                    <Vehicle />
                    <WorkOrders openEditCus={openEditCus} />
                    <Estimate />
                </Box>
            </Box>
        </CustomerInfoStyle>
    )
}

export default CustomerInfo;