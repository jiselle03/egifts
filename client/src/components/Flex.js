import styled from 'styled-components';
import { string } from 'prop-types';

const Flex = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ justify }) => justify};
    align-content: ${({ align }) => align};
`;

Flex.propTypes = {
    direction: string,
    justify: string,
    align: string,
};

export default Flex;
