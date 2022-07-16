import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import AppNavbar from "../app-navbar/AppNavbar";


export default class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar />
                <Container fluid>
                    <Button color="link"><Link to="/clients">Clientes</Link></Button>
                </Container>
            </div>
        );
    }
};