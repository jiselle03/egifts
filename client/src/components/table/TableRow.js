import React from 'react';
import styled from 'styled-components';

const TableRow = props => {
    const { name, content } = props;

    return (
        <tr>
            <TableCell weight="600">{name}</TableCell>
            <TableCell weight="400">{content}</TableCell>
        </tr>
    );
};

export default TableRow;

const TableCell = styled.th`
    font-weight: ${({ weight }) => weight};
`;
