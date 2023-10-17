// Navbar.js
import React from 'react';
import NavItem from './NavItem';
import Dropdown from './Dropdown';

function Navbar() {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex justify-between items-center">
                <div className="text-white text-2xl font-bold">My App</div>
                <div className="hidden md:flex">
                    <NavItem text="Home" />
                    <NavItem text="Services">
                        <Dropdown />
                    </NavItem>
                    <NavItem text="About" />
                    <NavItem text="Contact" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
