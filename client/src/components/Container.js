import styled from 'styled-components';
import { bool, object } from 'prop-types';

const Container = styled.main`
    margin: 5rem ${({ open }) => open ? "0rem" : "2rem"};
    width: calc(${({ open }) => open ? "0vw" : "100vw"} - 4rem);

    @media screen and (min-width: ${({ theme }) => theme.medium}) {
        width: calc(100% - ${({ theme, open }) => open ? theme.drawer : "2rem"} - 2rem);
        margin-left: calc(${({ theme, open }) => open ? theme.drawer : "0rem"} + 2rem);
    }
`;

Container.propTypes = {
    theme: object,
    open: bool.isRequired,
};

export default Container;
