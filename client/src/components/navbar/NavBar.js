import React, { useState, useRef } from 'react';

import styled from 'styled-components';

import Burger from './Burger';
import Menu from './Menu';
import useOnClickOutside from './hooks';

const NavBar = props => {
    const { open, setOpen, currentUser, onSignOut } = props; 

    const node = useRef(); 

    useOnClickOutside(node, () => setOpen(false));

    return (
        <header ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} currentUser={currentUser} handleSignOut={onSignOut} />
        </header>
    );
};

export default NavBar;
