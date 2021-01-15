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
    padding: 1rem;
    border-radius: 5px;

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.primary};
    }

    &:hover {
        box-shadow: 3px 3px 3px 3px #f3f3f3;
    }
`;

Card.propTypes = {
    theme: object,
};
