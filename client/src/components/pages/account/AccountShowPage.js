import React from 'react';

import Table from '../../table/Table';

const AccountShowPage = props => {
    const { currentUser } = props;

    return (
        <>
            Hello, {currentUser.first_name}!

            <Table currentUser={currentUser} />
        </>
    );
};

export default AccountShowPage;
