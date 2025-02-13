import React from 'react'
import { Container, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal,ModalBody } from 'react-bootstrap';

const ContactInfo = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [data1, setdata] = useState([])
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        axios.get(`${apiUrl}/getContactData`)
            .then(res => {
                console.log(res.data)
                setdata(res.data.data)
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }, [])
    return (
        <>
            <div className='All-Food-Items'>
                <br /><center><h3>Contact Information</h3></center><br />
                <div style={{ width: "100%", overflowX: "scroll" }}>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Topic</th>
                                <th>Description</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data1.map((ii) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{ii.ID}</td>
                                                <td>{ii.name}</td>
                                                <td>{ii.title}</td>
                                                <td>{ii.Discription}</td>
                                                <td>{ii.Date}</td>
                                                
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default ContactInfo
