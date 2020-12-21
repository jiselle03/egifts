import styled from 'styled-components';
import { bool, object } from 'prop-types';

const Container = styled.main`
    width: calc(100% - ${({ theme, open }) => open ? theme.drawer : "2rem"} - 2rem);
    margin-top: 5rem;
    margin-left: calc(${({ theme, open }) => open ? theme.drawer : "0rem"} + 2rem);
`;

Container.propTypes = {
    theme: object,
    open: bool.isRequired,
};

export default Container;
