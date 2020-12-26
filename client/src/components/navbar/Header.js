import React, { useRef } from 'react';
import { bool, func, object } from 'prop-types';

import Burger from './Burger';
import Menu from './Menu';
import useOnClickOutside from '../../global/hooks';

const Header = props => {
    const { open, setOpen, currentUser, onSignOut, handleClose } = props; 

    const node = useRef(); 

    useOnClickOutside(node, () => setOpen(false));

    return (
        <header ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} currentUser={currentUser} handleSignOut={onSignOut} handleClose={handleClose} />
        </header>
    );
};

Header.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
    currentUser: object,
    onSignOut: func.isRequired,
};

export default Header;
