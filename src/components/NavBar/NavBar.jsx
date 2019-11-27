import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import Menu from '../menu/Menu';

const NavBar = props => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <Nav showMenu={showMenu} setMenu={setShowMenu} />
            <Menu showMenu={showMenu} setMenu={setShowMenu} />
        </>
    );
};

export default NavBar;