import React from 'react';
import {CustomLink, Header, Nav} from './Navbar.style';

const Navbar: React.FC = () => {
    return (
        <Header>
            <Nav>
                <CustomLink to='/'>Main</CustomLink>
                <CustomLink to='/search'>Search</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </Nav>
        </Header>
    );
};

export default Navbar;