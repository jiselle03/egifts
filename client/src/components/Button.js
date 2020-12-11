import styled from 'styled-components';

const Button = styled.button`
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    padding: 1rem;
    margin: 1rem 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    cursor: pointer;
`;

export default Button;
