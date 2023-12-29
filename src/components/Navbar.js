import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./button";
import { MdLocalGroceryStore } from "react-icons/md";

import { useAuth } from "../hooks/auth-hook";

import './Navbar.css';

const Navbar = () => {
    const navRef = useRef();

    const { token } = useAuth();


    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const logoutHandler = () => {
        localStorage.removeItem('userData');
        window.location.reload();
    };

    return (
        <header>
            < MdLocalGroceryStore  />
            <nav ref={navRef}>
                <a href="/#" className="nav-links">Home</a>
                <a href="/products" className="nav-links">Store</a>
                <a href="/contact" className="nav-links">Contact us</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars />
            </button>
            {!token && <Button className="logout-btn" href='/auth'>Login</Button>}
            {token && <Button className="logout-btn" onClick={logoutHandler}>Logout</Button>}
        </header>
    );
}

export default Navbar;