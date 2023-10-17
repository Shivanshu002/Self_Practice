// Dropdown.js
import React from 'react';

function Dropdown() {
    return (
        <div className="absolute bg-blue-500 p-2 top-10 hidden group-hover:block">
            <ul>
                <li>
                    <a className="text-white hover:bg-blue-600 block p-2">Service 1</a>
                </li>
                <li>
                    <a className="text-white hover:bg-blue-600 block p-2">Service 2</a>
                </li>
                <li>
                    <a className="text-white hover:bg-blue-600 block p-2">Service 3</a>
                </li>
            </ul>
        </div>
    );
}

export default Dropdown;
