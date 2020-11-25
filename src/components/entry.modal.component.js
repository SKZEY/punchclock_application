import React, { useState } from 'react';
import { Button, Modal, Form, Col } from "react-bootstrap";
import UserService from "../services/user.service";

function Entry(props) {
    const [show, setShow] = useState(props.show);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleStartTime = (startTime) => setStartTime(startTime);
    const handleEndTime = (endTime) => setEndTime(endTime);

    const handleStartDate = (startDate) => setStartDate(startDate);
    const handleEndDate = (endDate) => setEndDate(endDate);

    const dateAndTimeToDate = (dateString, timeString) => {
        return new Date(`${dateString}T${timeString}`).toISOString();
    };

    const createEntry = () => {
        const checkIn = dateAndTimeToDate(startDate, startTime);
        const checkOut = dateAndTimeToDate(endDate, endTime);
        UserService.createEntry("", checkIn, checkOut, "", "").then(
            () => {
                getData();
                handleClose();
            },
            error => {
                let resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                if (resMessage.includes("403")) {
                    resMessage = "Something went wrong while saving your data :(";
                }
                console.log(resMessage);
            }
        );
    };

    const getData = () => {
        props.getData();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add entry <i className="fas fa-plus"/>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create new entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="selectStartTime">
                            <Form.Row>
                                <Col>
                                    <Form.Label>Start date</Form.Label>
                                    <input type={"date"} className={"form-control"} style={{width: "auto"}} onChange={(e) => handleStartDate(e.target.value)}/>
                                </Col>
                                <Col>
                                    <Form.Label>Start time</Form.Label>
                                    <input type={"time"} className={"form-control"} style={{width: "auto"}} onChange={(e) => handleStartTime(e.target.value)}/>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Label>End date</Form.Label>
                                    <input type={"date"} className={"form-control"} style={{width: "auto"}} onChange={(e) => handleEndDate(e.target.value)}/>
                                </Col>
                                <Col>
                                    <Form.Label>End time</Form.Label>
                                    <input type={"time"} className={"form-control"} style={{width: "auto"}} onChange={(e) => handleEndTime(e.target.value)}/>
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group controlId="selectUser">
                            <Form.Label>User</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="selectCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="noteText">
                            <Form.Label>Note</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={createEntry}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Entry;