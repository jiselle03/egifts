import React from 'react';

import Table from '../../table/Table';

const AccountShowPage = props => {
    const { first_name, last_name, email, phone_number } = props.currentUser;

    return (
        <>
            Hello, {first_name}!

            <Table>
                <tr>
                    <th>Name</th>
                    <th>{first_name}{last_name}</th>
                </tr>
                <tr>
                    <th>Email</th>
                    <th>{email}</th>
                </tr>
                <tr>
                    <th>Phone</th>
                    <th>{phone_number}</th>
                </tr>
            </Table>
        </>
    );
};

export default AccountShowPage;
