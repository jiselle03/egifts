import React, { useState, useRef } from 'react';

import Burger from './Burger';
import Menu from './Menu';
import useOnClickOutside from './hooks';

const NavBar = props => {
    const { currentUser, onSignOut } = props; 

    const [open, setOpen] = useState(false);

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