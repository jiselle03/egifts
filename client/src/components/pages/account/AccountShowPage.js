import React from 'react';

import Table from '../../table/Table';
import TableRow from '../../table/TableRow';
import Title from '../../typography/Title';

const AccountShowPage = props => {
    const { first_name, last_name, email, phone_number } = props.currentUser;

    return (
        <>
            Hello, {first_name}!

            <Table>
                <thead>
                    <Title as="h3">Profile</Title>
                </thead>
                <tbody>
                    <TableRow name="Name" content={`${first_name} ${last_name}`}/>
                    <TableRow name="Email" content={email} />
                    <TableRow name="Phone" content={phone_number} />
                </tbody>
            </Table>

            <Table>
                <thead>
                <Title as="h3">Gifts</Title>
                </thead>
            </Table>

            <Table>
                <thead>
                    <Title as="h3">Purchases</Title>
                </thead>
            </Table>
        </>
    );
};

export default AccountShowPage;
