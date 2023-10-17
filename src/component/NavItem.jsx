// NavItem.js
import React, { useState } from 'react';

function NavItem({ text, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative group">
            <button
                onClick={toggleDropdown}
                className="text-white hover:bg-red-600 duration-500 px-4 py-2" >
                {text}
            </button>
            {isOpen && children}
        </div>
    );
}

export default NavItem;
