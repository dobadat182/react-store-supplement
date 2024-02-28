import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa6';

const Navbar = styled.nav`
    background: rgba(255, 255, 255, 0.8);
`;

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset;
        const isScrolledToBottom =
            window.innerHeight + currentScrollPos >= document.body.offsetHeight;

        setVisible(prevScrollPos > currentScrollPos || isScrolledToBottom);
        setPrevScrollPos(() => currentScrollPos);
    }, [prevScrollPos]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <Navbar
            className={`sticky top-0 z-50 w-full backdrop-blur transition-transform ${
                visible ? '' : '-translate-y-full'
            }`}
        >
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <a
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap"></span>
                </a>
                <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Sign In
                    </button>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a
                                href="/"
                                className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="inline-flex items-center gap-1 px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                <span>Shop</span>{' '}
                                <FaChevronDown className="text-sm" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Navbar>
    );
};

export default Header;
