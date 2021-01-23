import AddAdminUser from '@/components/admin/AddAdminUser';
import UsersTable from '@/components/admin/UsersTable';
import React from 'react';
import Dashboard from './dashboard';

const users = () => {
    return (
        <Dashboard>
            {/* <UsersTable /> */}
            <AddAdminUser />
        </Dashboard>
    );
};

export default users;
