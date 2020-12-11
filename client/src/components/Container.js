import styled from 'styled-components';
import { bool, object } from 'prop-types';

const Container = styled.main`
    width: calc(100% - ${({ theme, open }) => open ? theme.drawer : "0"});
    margin-left: ${({ theme, open }) => open ? theme.drawer : "0"};
`;

Container.propTypes = {
    theme: object,
    open: bool.isRequired,
};

export default Container;
