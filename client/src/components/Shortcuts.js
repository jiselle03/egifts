import React from 'react';
import styled from 'styled-components';
import { object } from 'prop-types';

import Icon from './Icon';
import Flex from './Flex';

const Shortcuts = () => {
    return (
        <ShortcutBar>
            <Flex justify="space-between">
                <Icon type="home" />
                <Icon type="star" />
                <Icon type="wallet" />
                <Icon type="user" />
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
