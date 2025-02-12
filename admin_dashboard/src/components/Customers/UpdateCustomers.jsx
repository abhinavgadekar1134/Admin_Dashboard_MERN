import React from 'react'
import { Col,Form,Container,Button,Row } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const UpdateCustomers = () => {
    const localCustId = localStorage.getItem("custId");
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();
    const [CustID, setCustID] = useState('');
    const [Password, setPassword] = useState('');
    const [Name, setName] = useState('');
    const [ContactNo, setContactNo] = useState('');
    const [Mail, setMail] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/abc/getCustomersById/${localCustId}`)
            .then(res => {
                console.log(res.data);
                setCustID(res.data.data.CustID);
                setPassword(res.data.data.Password);
                setName(res.data.data.Name);
                setContactNo(res.data.data.ContactNo);
                setMail(res.data.data.Mail);

            }
            )
            .catch(err => {
                console.log(err);
            }
            )
    }, []);

    const handleSubmit = (event) => {
        const setdata = {
            Password: Password,
            Name:Name,
            ContactNo:ContactNo,
            Mail:Mail
        }

        console.log(setdata)
        axios({
            url: `http://localhost:8000/abc/CustUpdate/${localCustId}`,
            method: 'PUT',
            data: setdata
        })
            .then(res => {
                console.log(res.data);
                window.alert("Data updated");
            })
            .catch((err) => {
                console.log(err);
            });

        navigate('/customers');
        setValidated(true);
    }

  return (
    <>
    <br /><center><h3>Customers Update</h3></center><br />
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Container>

                    <Row>
                        
                        <Col lg={6}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Customer Name"
                                value={Name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Password"
                                value={Password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </Col>

                        <Col lg={6}>
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Contact Number"
                                value={ContactNo}
                                onChange={(e) => { setContactNo(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Mail Id</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Mail Id"
                                value={Mail}
                                onChange={(e) => { setMail(e.target.value) }}
                            />
                        </Col>                        
                    </Row>

                </Container>

                <Button type="submit" style={{ marginLeft: "50px" }}>Update</Button>
            </Form>
    </>
  )
}

export default UpdateCustomers
