import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { object } from 'prop-types';

import Icon from './Icon';
import Flex from './Flex';

const Shortcuts = () => {
    return (
        <ShortcutBar>
            <Flex justify="space-between">
                <Link to="/"><Icon type="home" /></Link>
                <Icon type="star" />
                <Icon type="wallet" />
                <Link to="/account"><Icon type="user" /></Link>
            </Flex>
        </ShortcutBar>
    );
};

export default Shortcuts;

const ShortcutBar = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    background-color: ${({ theme }) => theme.accent};

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

ShortcutBar.propTypes = {
    theme: object,
  };
