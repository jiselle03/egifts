import styled from 'styled-components';
import { bool } from 'prop-types';

export const Form = styled.form`
    max-width: 600px;
    align-self: center;
    padding: 2rem;
    margin: auto;
`;

export const Input = styled.input`
    width: ${({ half }) => half ? "45%" : "100%"};
    height: 40px;
    margin: 0.5rem;
`;

Input.propTypes = {
    half: bool,
};
