import styled from 'styled-components';

const Title = styled.h1`
    display: block;
    margin: 1rem;
    margin-right: 2rem;
    text-align: ${({ align }) => align};
`;

export default Title;
