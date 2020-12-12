import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    gap: 1rem;

    @media screen and (min-width: ${({ theme }) => theme.medium}) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: ${({ theme }) => theme.large}) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export default Grid;
