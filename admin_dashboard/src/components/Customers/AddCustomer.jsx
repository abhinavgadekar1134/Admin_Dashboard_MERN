import React from 'react'
import { Container, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const AddCustomer = () => {
    const [validated, setValidated] = useState(false);
    const [CustID, setCustID] = useState('');
    const [Password, setPassword] = useState('');
    const [Name, setName] = useState('');
    const [ContactNo, setContactNo] = useState('');
    const [Mail, setMail] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault()

        const setdata = {
            CustID: CustID,
            Password: Password,
            Name:Name,
            ContactNo:ContactNo,
            Mail:Mail
        }

        axios({
            url: `http://localhost:8000/abc/postCustomers`,
            method: 'POST',
            data: setdata
         

        }).then(res => {
            console.log(res.data);
            window.alert("Customers data added");
        })
            .catch((err) => {
                console.log(err);
            })

        setValidated(true);

    }

    const [data1, setdata] = useState([])
    const navigate = useNavigate();

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Container>

                    <Row>
                        <Col lg={6}>
                            <Form.Label>Id</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Id"
                                onChange={(e) => { setCustID(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Customer Name"
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter Password"
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </Col>

                        <Col lg={6}>
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Contact Number"
                                onChange={(e) => { setContactNo(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Mail Id</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Mail Id"
                                onChange={(e) => { setMail(e.target.value) }}
                            />
                        </Col>
                        
                        
                    </Row>

                </Container>

                <Button type="submit" style={{ marginLeft: "50px" }}>Add</Button>
            </Form>
        </>
    )
}

export default AddCustomer
