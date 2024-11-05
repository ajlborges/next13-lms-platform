import React, { useState } from 'react';
import AccountProfileIcon from './accout-profile-icon';
import AccountProfileMenu from './accout-profile-menu';
import '../../app/globals.css'

export const AccountProfile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
``
    return (
        <div className="AccountProfile">
            <div className="top-right">
                {console.log('just to test if it works 1')}
                <AccountProfileIcon onClick={toggleMenu} />
                {menuOpen && <AccountProfileMenu />}
            </div>
        </div>
    );
}