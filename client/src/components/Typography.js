import styled from 'styled-components';
import { string } from 'prop-types';

export const Title = styled.h1`
    margin: 0;
    padding: 1rem 2rem;
    text-align: ${({ align }) => align};
`;

Title.propTypes = {
    align: string,
};

export const Text = styled.p`
    text-align: ${({ align }) => align};
`;

Text.propTypes = {
    align: string,
};

export const Small = styled.small`
`;
