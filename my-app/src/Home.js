import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';


export default class Home extends Component {
    render() {
        return (
            <div>

                <Container fluid>
                    <Button color="link"><Link to="/clients">Clients</Link></Button>
                </Container>
            </div>
        );
    }
}