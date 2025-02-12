import React from 'react'
import { Container, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAdmin = () => {
    const [validated, setValidated] = useState(false);
    const [adminName, setadminName] = useState('');
    const [adminid, setadminid] = useState('');
    const [password, setpassword] = useState('');
    const [adminmail, setadminmail] = useState('');
    const [contact, setcontact] = useState('');
    
    const handleSubmit = (event) => {

        event.preventDefault()

        const setdata = {

            adminName: adminName,
            adminid:adminid,
            password:password,
            adminmail:adminmail,
            contact:contact,
            

        }

        axios({
            url:`${process.env.REACT_APP_BACKEND_LINK}/postcar`,
            method:'POST',
            data:setdata,
            headers:{
                "Content-Type": "multipart/form-data",
            }
            
        }).then(res => {
            console.log(res.data);
            window.alert("Food data added");
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
        <div><br />
                <center><h3>Register Admin</h3></center><br />
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Container>

                        <Row>
                            <Col lg={6}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter admin Name"
                                    onChange={(e) => { setadminName(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>Id</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Id"
                                    onChange={(e) => { setadminid(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter password"
                                    onChange={(e) => { setpassword(e.target.value) }}
                                />
                            </Col>
                            
                            <Col lg={6}>
                                <Form.Label>Mail-id</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Enter Mail-id"
                                    onChange={(e) => { setadminmail(e.target.value) }}
                                />
                            </Col>
                            
                            <Col lg={6}>
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Enter Contact Number"
                                    onChange={(e) => { setcontact(e.target.value) }}
                                />
                            </Col>
                           
                        </Row>

                    </Container>
                    
                    <Button type="submit" style={{ marginLeft: "50px" }}>Add</Button>
                </Form>
            </div >
    </>
  )
}

export default CreateAdmin
