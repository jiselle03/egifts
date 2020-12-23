import styled from 'styled-components';
import { object } from 'prop-types';

export const Grid = styled.div`
    display: grid;
    gap: 1rem;

    @media screen and (min-width: ${({ theme }) => theme.medium}) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: ${({ theme }) => theme.large}) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

Grid.propTypes = {
    theme: object,
};

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.secondary};

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.primary};
    }
`;

Card.propTypes = {
    theme: object,
};
