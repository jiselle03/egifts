import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.secondary};
`;

export default Card;