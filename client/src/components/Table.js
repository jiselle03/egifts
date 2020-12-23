import styled from 'styled-components';
import { string } from 'prop-types';

export const Table = styled.table`
    width: calc(100% - 2rem);
    border: 1px solid #f3f3f3;
    margin: 2rem;
`;

export const TableRow = props => {
    const { name, content } = props;

    return (
        <tr>
            <TableHeader>{name}</TableHeader>
            <TableData>{content}</TableData>
        </tr>
    );
};

TableRow.propTypes = {
    name: string.isRequired,
    content: string.isRequired,
};

const TableHeader = styled.th`
    font-weight: 600;
`;

const TableData = styled.td`
    font-weight: 400;
`;
