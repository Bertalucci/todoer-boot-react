import React, {Component} from "react";
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbar from "./AppNavbar";
import {Link} from "react-router-dom";


export default class ClientList extends Component {
    constructor(props) {
        super(props);
        this.state = {clients: []};
    }

    componentDidMount() {
        fetch('/clients')
            .then(response => response.json())
            .then(data => this.setState({clients: data}))
    }


    render() {
        const {clients, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>
        }

        const clientList = clients.map(client => {
            return <tr key={client.id}>
                <td style={{whiteSpace: 'nowrap'}}>{client.name}</td>
                <td>{client.email}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/clients/" + client.id}>Edit</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-end">
                        <Button color="success" tag={Link} to="/clients/new">Add Client</Button>
                    </div>
                    <h3>CLients</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Name</th>
                            <th width="30%">Email</th>
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {clientList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );

    }
}