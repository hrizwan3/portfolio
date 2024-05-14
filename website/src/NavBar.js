import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='nav-menu'>
            <ul>
                <CustomLink to='/'>Hassan Rizwan</CustomLink>
            </ul>
            <ul>
                <li>
                    <CustomLink to='/'>Home</CustomLink>
                </li>
                <li>
                    <CustomLink to="/projects">Projects</CustomLink>
                </li>
                <li>
                    <CustomLink to="/contacts">Contact</CustomLink>
                </li>
                <li>
                    <CustomLink to="/resume">Resume</CustomLink>
                </li>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default NavBar;