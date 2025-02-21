import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AuthContext from "../../common/contaxt/Context";
import Login from "../Authentications/Login/Login"
import AccountSetup from "../Authentications/AccountSetup/AccountSetup";
import Forgot from "../Authentications/Forgot/Forgot";
import Privacy from "../Authentications/Privacy/Privacy"
import Dashboard from "../Dashboard/Dashboard";
import Customer from "../Customer/Customer";
import WorkOrder from "../WorkOrders/WorkOrders";
import Estimates from "../Estimates/Estimates";
import Invoice from "../Invoice/Invoice";

export const RoutesPage = () => {

    const [authstatus, setauthstatus] = useState(false);
    const [editStatus, setEditStatus] = useState('');
    const [editStatusVehical, setEditStatusVehical] = useState('');
    const [editStatusWorkorder, setEditStatusWorkorder] = useState('');

    const login = () => {
        setauthstatus(!authstatus);
    };

    const editStatusData = () => {
        setEditStatus('edit')
    }

    const editStatusDataNull = () => {
        setEditStatus('')
    }

    const editStatusVehicalData = () => {
        setEditStatusVehical('edit')
    }

    const editStatusVehicalNull = () => {
        setEditStatusVehical('')
    }

    const editStatusWorkorderData = () => {
        setEditStatusWorkorder('edit')
    }

    const editStatusWorkorderNull = () => {
        setEditStatusWorkorder('')
    }

    return (
        <AuthContext.Provider value={{ status: authstatus, login: login, editstatus: editStatus, editStatusData: editStatusData, editStatusDataNull: editStatusDataNull, editstatusVehical: editStatusVehical, editStatusVehicalData: editStatusVehicalData, editStatusVehicalNull: editStatusVehicalNull, editStatusWorkorder: editStatusWorkorder, editStatusWorkorderData: editStatusWorkorderData, editStatusWorkorderNull: editStatusWorkorderNull }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/accountSetup" element={<AccountSetup />} />
                    <Route path="/forgot" element={<Forgot />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/customer" element={<Customer />} />
                    <Route path="/workOrders" element={<WorkOrder />} />
                    <Route path="/estimates" element={<Estimates />} />
                    <Route path="/invoice" element={<Invoice />} />
                </Routes>
            </Router>
        </AuthContext.Provider>
    );
};