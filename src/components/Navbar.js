import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "../styles/App.css";
// Nav container styling
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #f5efff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Nav links styling
const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 1.5rem;

    a {
        text-decoration: none;
        color: #000;
        font-size: 1.1rem;
        transition: color 0.3s ease;

        &:hover {
            color: #a594f9;
        }
    }
`;

// Styled component for the logo
const Logo = styled.h1`
    color: #a594f9;
    font-size: 2rem;
`;

// Navbar component
const Navbar = () => (
    <Nav>
        <Logo>
            <Link to="/">Esra'a</Link>
        </Logo>
        <NavLinks>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </NavLinks>
    </Nav>
);

export default Navbar;
