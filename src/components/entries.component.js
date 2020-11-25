import React, { Component } from "react";
import AuthService from "../services/auth.service";
import UserService from '../services/user.service';
import Entry from "./entry.modal.component";
import {Button, Card, Table, Container, Row, Col} from "react-bootstrap";

class Entries extends Component {
    constructor(props) {
        super(props);

        this.getData = this.getData.bind(this);

        this.state = {
            currentUser: AuthService.getCurrentUser(),
            data: []
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        UserService.getEntries().then(
            response => {
                this.setState({
                    data: response.data
                });
            },
            error => {
                let resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                if (resMessage.includes("403")) {
                    resMessage = "You are not authorized";
                }
                this.setState({
                    message: resMessage
                });
            }
        );
    }

    render() {

        return (
            <Container fluid style={{padding: "2rem"}}>
                <Row>
                    <Col style={{marginBottom: "1rem"}}>
                        <Entry show={false} getData={this.getData}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card bg={"light"} style={{padding: "0"}}>
                            <Card.Header as="h5">
                                    Entries
                            </Card.Header>
                            <Card.Body>
                                <Table responsive borderless>
                                    <thead>
                                        <tr>
                                            <th>Starttime</th>
                                            <th>Endtime</th>
                                            <th>Username</th>
                                            <th>Category</th>
                                            <th>Note</th>
                                            <th/>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.data.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.checkIn}</td>
                                                <td>{item.checkOut}</td>
                                                <td>Test</td>
                                                <td>Test</td>
                                                <td>Test</td>
                                                <td>
                                                    <Button variant={"outline-dark"} size={"sm"}>
                                                        <i className="far fa-edit" />
                                                    </Button>
                                                    <Button variant={"outline-danger"} size={"sm"} style={{marginLeft: "4px"}}>
                                                        <i className="far fa-trash-alt" />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );

    }

}

export default Entries;