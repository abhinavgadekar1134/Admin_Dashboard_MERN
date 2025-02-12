import React from 'react'
import { Card, Container, Form } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { useEffect } from 'react';
import "./Orders.css"
const Orders = () => {
    const [validated, setValidated] = useState(false);

    const [FoodId, setID] = useState('');
    const [FoodName, setFoodName] = useState('');
    const [FoodType, setFoodType] = useState('');
    const [Datee, setDatee] = useState('');
    const [Price, setPrice] = useState('');
    const [TotalPrice, setTotalPrice] = useState('');
    const [Quantity, setQuantity] = useState('');
    const [CustomerId, setCust_ID] = useState('');
    const [CustomerName, setCustName] = useState('');
    const [Note, setnote] = useState('');
    const [OrderAddress, setOrderAddress] = useState('');

    const [FoodData, setFoodsData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/abc/getfoodItems`)
            .then(res => {
                console.log(res.data)
                setFoodsData(res.data.data)
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }, [FoodData])

    const handleSubmit = (event) => {

        event.preventDefault()

        const setdata = {
            Foodid: FoodId,
            Date: Date,
            FoodName: FoodName,
            FoodType: FoodType,
            Price: Price,
            Quantity: Quantity,
            TotalPrice: TotalPrice,
            CustomerId: CustomerId,
            CustomerName: CustomerName,
            Note: Note,
            OrderAddress: OrderAddress

        }

        axios({
            url: `http://localhost:8000/abc/postFoodItems`,
            method: 'POST',
            data: setdata,
            headers: {
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

    useEffect(() => {
        axios.get(`http://localhost:8000/abc/getOrders`)
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
    const handleDelete = (FoodId) => {

        axios.delete(`http://localhost:8000/abc/deleteOrders/${FoodId}`)
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
            {/* <div><br />
            <center><h3>Order Food</h3></center><br />

                <Form noValidate validated={validated} onSubmit={handleSubmit} style={{textAlign: "center"}}>
                    <Container>

                        <Row>
                            <Col lg={6}>
                                <Form.Label>ID</Form.Label>
                                <Form.Control
                                    required
                                    type="Number"
                                    placeholder="Enter Id"
                                    onChange={(e) => { setID(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Date"
                                    onChange={(e) => { setDatee(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>Food Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter FoodName"
                                    onChange={(e) => { setFoodName(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    required
                                    type="Number"
                                    placeholder="Enter Price"
                                    onChange={(e) => { setPrice(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>Total Price</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Total"
                                    onChange={(e) => { setTotalPrice(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Enter Quantity"
                                    onChange={(e) => { setQuantity(e.target.value) }}
                                />
                            </Col>
                            
                        </Row>

                    </Container>
                    <Button type="submit" style={{ marginLeft: "50px" }}>Add</Button>
                </Form>
            </div > */}
            <br />
            <div className='All-Food-orders'>
                <br /><center><h3>Our Orders</h3></center><br />
                <div style={{ width: "100%", overflowX: "scroll" }}>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Date</th>
                                <th>Food Name</th>
                                <th>Food Type</th>
                                <th>Price Per Dish</th>
                                <th>Quantity</th>
                                <th>TotalPrice</th>
                                <th>Cust_ID</th>
                                <th>CustName</th>
                                <th>Orders Address</th>
                                <th>Customer Notes</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                data1.map((ii) => {
                                    return (

                                        <>
                                            <tr>

                                                <td>{ii.Foodid}</td>
                                                <td>{ii.Date}</td>
                                                <td>{ii.FoodName}</td>
                                                <td>{ii.FoodType}</td>
                                                <td>{ii.Price}</td>
                                                <td>{ii.Quantity}</td>
                                                <td>{ii.TotalPrice}</td>
                                                <td>{ii.CustomerId}</td>
                                                <td>{ii.CustomerName}</td>
                                                <td>{ii.OrderAddress}</td>
                                                <td>{ii.Note}</td>
                                                <td> <button className='btn btn-danger' onClick={(Foodid) => handleDelete(ii.Foodid)} >Delete</button></td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
            <div>
                <center><h3>Order Food</h3></center>
                <Container>
                    <Row>
                {
                    
                    FoodData.map((ii) => {
                        return (
                            <>
                                <Card className='card-styles' style={{ width: '16rem',height:'auto' }}>
                                    <Card.Img height={"200px"} variant="top" src={`http://localhost:8000/abc/` + ii.foodimg} />
                                    <Card.Body>
                                        <Card.Title ><span className='card--maintitle'>{ii.FoodName}</span></Card.Title>
                                        <Card.Text>
                                        <span  className='card--titles' >FoodId:</span> {ii.ID}<br></br>
                                        <span  className='card--titles' >Price:</span> {ii.Price}<br></br>
                                        <span  className='card--titles' >Type:</span> {ii.FoodType}<br></br>
                                        <span  className='card--titles card--description' >Description: </span>{ii.Discription}<br></br>
                                        </Card.Text>
                                        <button className='btn btn-success' onClick={(props) => {
                                                localStorage.setItem("ID", ii.ID);
                                                navigate('/OrderingFood');
                                            }} >Order</button>
                                    </Card.Body>
                                </Card>
                                
                            </>
                        )
                    })
                }
                </Row>
                </Container>
            </div>
        </>

    )
}

export default Orders
