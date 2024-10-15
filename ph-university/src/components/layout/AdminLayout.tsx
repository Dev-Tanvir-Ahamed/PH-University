import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            admin layout
            <Outlet/>
        </div>
    );
};

export default AdminLayout;