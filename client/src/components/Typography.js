import styled from 'styled-components';
import { string } from 'prop-types';

export const Title = styled.h1`
    display: block;
    margin: 1rem;
    margin-right: 2rem;
    text-align: ${({ align }) => align};
`;

Title.propTypes = {
    align: string,
};

export const Text = styled.p`
    
`;
