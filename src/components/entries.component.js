import React, { Component } from "react";
import AuthService from "../services/auth.service";
import UserService from '../services/user.service';
import {Button, Card, Table} from "react-bootstrap";

class Entries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
    }

    componentDidMount() {
        //this.setState({data: UserService.getEntries()})
    }

    getData() {
        this.setState({data: UserService.getEntries()})
    }

    createEntry(e) {
        e.preventDefault();
        UserService.createEntry(this.state.username, this.state.startTime, this.state.endTime, this.state.category, this.state.note).then(
            () => {
                this.getData();
            },
            error => {
                let resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                if (resMessage.includes("403")) {
                    resMessage = "Something went wrong while saving your data :(";
                }
                this.setState({
                    message: resMessage
                });
            }
        );
    }

    render() {

        return (
            <div style={{padding: "4rem"}}>
                <Card bg={"light"} style={{padding: "0"}}>
                    <Card.Header as="h5">
                        <Card.Title>Entries
                            <Button variant={"outline-primary"} size={"sm"} style={{marginLeft: "1rem"}}>
                                <i className="fas fa-plus"></i>
                            </Button>
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table responsive borderless>
                            <thead>
                            <th>Starttime</th>
                            <th>Endtime</th>
                            <th>Category</th>
                            <th>Note</th>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        );

    }

}

export default Entries;