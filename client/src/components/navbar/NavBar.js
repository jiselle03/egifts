import React, { useState, useRef } from 'react';

import Burger from './Burger';
import Menu from './Menu';
import useOnClickOutside from './hooks';

const NavBar = props => {
    const [open, setOpen] = useState(false);

    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

    return (
        <header ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} />
        </header>
    );
};

export default NavBar;
