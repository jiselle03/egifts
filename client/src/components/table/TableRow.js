import React from 'react';

const TableRow = props => {
    const { name, content } = props;

    return (
        <tr>
            <th>{name}</th>
            <th>{content}</th>
        </tr>
    );
};

export default TableRow;
