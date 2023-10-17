import React, { useState } from 'react';

function NavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState({
        home: false,
        services: false,
        about: false,
        contact: false,
    });

    const handleDropdownToggle = (link) => {
        setIsDropdownOpen({ ...isDropdownOpen, [link]: !isDropdownOpen[link] });
    };

    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex justify-between items-center">
                <div className="text-white text-2xl font-bold">My App</div>
                <div className="md:hidden">
                    <button
                        onClick={() => handleDropdownToggle("menu")}
                        className="text-white hover:bg-blue-600 px-4 py-2"
                    >
                        Menu
                    </button>
                    {isDropdownOpen.menu && (
                        <div className="absolute bg-blue-500 p-2 top-10">
                            <ul>
                                <li>
                                    <a
                                        className="text-white hover:bg-blue-600 block p-2"
                                        href="#home"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-white hover:bg-blue-600 block p-2"
                                        href="#services"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-white hover:bg-blue-600 block p-2"
                                        href="#about"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-white hover:bg-blue-600 block p-2"
                                        href="#contact"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="hidden md:flex">
                    <a
                        onMouseEnter={() => handleDropdownToggle("home")}
                        onMouseLeave={() => handleDropdownToggle("home")}
                        className="text-white hover:bg-blue-600 px-4 py-2"
                        href="#home"
                    >
                        Home
                    </a>
                    {isDropdownOpen.home && (
                        <div className="absolute bg-blue-500 p-2 top-10">
                            <ul>
                                <li>
                                    <a
                                        className="text-white hover:bg-blue-600 block p-2"
                                        href="#service1"
                                    >
                                        Service 6
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-white hover:bg-blue-600 block p-2"
                                        href="#service2"
                                    >
                                        Service 9
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-white hover:bg-blue-600 block p-2"
                                        href="#service3"
                                    >
                                        Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                    <a
                        onMouseEnter={() => handleDropdownToggle("services")}
                        onMouseLeave={() => handleDropdownToggle("services")}
                        className="text-white hover:bg-blue-600 px-4 py-2"
                        href="#services"
                    >
                        Services
                    </a>
                    {isDropdownOpen.services && (
                        <div className="absolute bg-blue-500 p-2 top-10">
                            <ul>
                                <li>
                                    <a
                                        className="text-white hover:bg-blue-600 block p-2"
                                        href="#service1"
                                    >
                                        Service 1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-white hover:bg-blue-600 block p-2"
                                        href="#service2"
                                    >
                                        Service 2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-white hover:bg-blue-600 block p-2"
                                        href="#service3"
                                    >
                                        Service 3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                    <a
                        onMouseEnter={() => handleDropdownToggle("about")}
                        onMouseLeave={() => handleDropdownToggle("about")}
                        className="text-white hover:bg-blue-600 px-4 py-2"
                        href="#about"
                    >
                        About
                    </a>
                    {isDropdownOpen.about && (
                        <div className="absolute bg-blue-500 p-2 top-10">
                            <ul>
                                <li>
                                    <a
                                        className="text-white hover:bg-blue-600 block p-2"
                                        href="#service1"
                                    >
                                        About Item 1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-white hover:bg-blue-600 block p-2"
                                        href="#service2"
                                    >
                                        About Item 2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-white hover:bg-blue-600 block p-2"
                                        href="#service3"
                                    >
                                        About Item 3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                    <a
                        onMouseEnter={() => handleDropdownToggle("contact")}
                        onMouseLeave={() => handleDropdownToggle("contact")}
                        className="text-white hover:bg-blue-600 px-4 py-2"
                        href="#contact"
                    >
                        Contact
                    </a>
                    {isDropdownOpen.contact && (
                        <div className="absolute bg-blue-500 p-2 top-10">
                            <ul>
                                <li>
                                    <a
                                        className="text-white hover:bg-blue-600 block p-2"
                                        href="#service1"
                                    >
                                        Contact Item 1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-white hover:bg-blue-600 block p-2"
                                        href="#service2"
                                    >
                                        Contact Item 2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-white hover:bg-blue-600 block p-2"
                                        href="#service3"
                                    >
                                        Contact Item 3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
