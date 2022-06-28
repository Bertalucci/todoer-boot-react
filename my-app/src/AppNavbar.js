import React, {Component} from "react";
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';
import './AppNavbar.css';


export default class AppNavbar extends Component {


    render() {
        return <Navbar color="dark" dark expand="md">
            <NavbarBrand className="navbar-brand" tag={Link} to="/">Home</NavbarBrand>
        </Navbar>
    }

};