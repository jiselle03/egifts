import React from 'react';
import { Link } from 'react-router-dom';

import { Table, TableRow } from '../../Table';
import { Title, Text } from '../../Typography';
import Flex from '../../Flex';

const AccountShowPage = props => {
    const { first_name, last_name, email, phone_number } = props.currentUser;

    return (
        <>
            <Title as="h4">Hello, {first_name}!</Title>

            <Flex>
                <Title as="h3">Profile</Title>
                <Link to="/account/edit">Edit</Link>
            </Flex>
            
            <Table>
                <tbody>
                    <TableRow name="Name" content={`${first_name} ${last_name}`}/>
                    <TableRow name="Email" content={email} />
                    <TableRow name="Phone" content={phone_number} />
                </tbody>
            </Table>

            <Title as="h3">Gifts</Title>
            <Table>
            </Table>

            <Title as="h3">Purchases</Title>
            <Table>
            </Table>
        </>
    );
};

export default AccountShowPage;
