import React from 'react';
import './navbar.css';
import NavbarItem from './NavbarItem/NavbarItem';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-items">
                    <div className='navbar-item'>
                        <NavbarItem href="./#" label="Anasayfa" />
                    </div>
                    <div className='navbar-item'>
                        <NavbarItem label="Raporlarım" />
                    </div>
                    <div className='navbar-item'>
                        <NavbarItem label="Çıkış"/>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;