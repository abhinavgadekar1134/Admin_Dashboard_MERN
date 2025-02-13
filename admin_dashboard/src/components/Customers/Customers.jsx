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
import AddCustomer from './AddCustomer';
const Customers = () => {
    const apiUrl = process.env.RENDER_API;
    const [data1, setdata] = useState([])
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        axios.get(`${apiUrl}/getCustomers`)
            .then(res => {
                console.log(res.data)
                setdata(res.data.data)
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }, [data1])
    const handleDelete = (CustID) => {

        axios.delete(`${apiUrl}/deleteCustomers/${CustID}`)
            .then(res => {
                console.log(res.data);
                window.alert("data deleted");
                // setdata(prevData => prevData.filter(item => item.useremail !== useremail));
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <>
        <Button variant="success" onClick={handleShow}>
                Add Customer
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body> <AddCustomer/> </Modal.Body>

            </Modal>
            <div className='All-Customers'>
                <br /><center><h3>Our Customers</h3></center><br />
                <div style={{ width: "100%", overflowX: "scroll" }}>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Contact</th>
                                {/* <th>Password</th> */}
                                <th>Mail-id</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data1.map((ii) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{ii.CustID}</td>
                                                <td>{ii.Name}</td>
                                                <td>{ii.ContactNo}</td>
{/* 
                                                <td>{ii.Password}</td> */}
                                                <td>{ii.Mail}</td>
                                                <td><button className='btn btn-success' onClick={(props) => {
                                                    localStorage.setItem("custId", ii.CustID);
                                                    navigate('/CustomerUpdate');
                                                    
                                                }

                                                } >Update</button><button className='btn btn-danger' onClick={(CustID) => handleDelete(ii.CustID)} >Delete</button></td>
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

export default Customers
