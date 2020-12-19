import React from 'react';

const AccountShowPage = props => {
    const { first_name, last_name, email, phone_number } = props.currentUser;

    return (
        <>
            Hello, {first_name}!
        </>
    );
};

export default AccountShowPage;
