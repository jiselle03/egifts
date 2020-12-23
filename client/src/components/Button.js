import styled from 'styled-components';
import { bool, object } from 'prop-types';

const Button = styled.button`
    border: none;
    border-radius: 5px;
    margin: 1rem 0.5rem;
    padding: 1rem;
    background: ${({ theme, primary }) => primary ? theme.accent : theme.background};
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.1rem;
    cursor: pointer;
    float: right;
`;

Button.propTypes = {
    primary: bool,
    theme: object,
};

export default Button;
