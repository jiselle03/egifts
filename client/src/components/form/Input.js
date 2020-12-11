import styled from 'styled-components';

const Input = styled.input`
    width: ${({ half }) => half ? "45%" : "100%"};
    height: 40px;
    margin: 0.5rem;
`;

export default Input;
