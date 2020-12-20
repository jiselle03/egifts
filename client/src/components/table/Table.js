import React from 'react';
import styled from 'styled-components';

const Table = props => {
    const { first_name, last_name, email, phone_number } = props.currentUser;

    return (
        <StyledTable>
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
        </StyledTable>
    );
};

export default Table;

const StyledTable = styled.table`
    width: 100%;
    border: 1px solid #f3f3f3;
`;
