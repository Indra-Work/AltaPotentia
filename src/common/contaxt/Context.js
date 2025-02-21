import React from 'react';

export const AuthContext = React.createContext({
    status: false,
    login: '',
    editStatus: '',
    editStatusData: '',
    editStatusDataNull: '',
    editstatusVehical: '',
    editStatusVehicalData: '',
    editStatusVehicalNull: '',
    editStatusWorkorder:'',
    editStatusWorkorderNull: '',
    editStatusWorkorderData: '',
});


export default AuthContext;
