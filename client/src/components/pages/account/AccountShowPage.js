import React from 'react';

import Table from '../../table/Table';
import TableRow from '../../table/TableRow';

const AccountShowPage = props => {
    const { first_name, last_name, email, phone_number } = props.currentUser;

    return (
        <>
            Hello, {first_name}!

            <Table>
                <TableRow name="Name" content={`${first_name} ${last_name}`}/>
                <TableRow name="Email" content={email} />
                <TableRow name="Phone" content={phone_number} />
            </Table>
        </>
    );
};

export default AccountShowPage;
