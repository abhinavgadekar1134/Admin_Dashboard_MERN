import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Col, Button, Container, Row } from 'react-bootstrap';
import "./Orders.css"
const OrderingFood = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const ID = localStorage.getItem("ID");
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();
    const [foodName, setfoodName] = useState('');
    const [foodid, setId] = useState('');
    const [foodtype, setfoodtype] = useState('');
    const [price, setprice] = useState('');
    const [desc, setdesc] = useState('');
    const [foodimg, setfoodimg] = useState('');


    const [Date, setDate] = useState('');
    const [Quantity, setQuantity] = useState(1);
    const [CustomerId, setCustomerId] = useState('');
    const [CustomerName, setCustomerName] = useState('');
    const [Note, setNote] = useState('');
    const [OrderAddress, setOrderAddress] = useState('');
    let TotalPrice = 0;
    let qu = 0;
    useEffect(() => {
        axios.get(`${apiUrl}/getFoodItemsById/${ID}`)
            .then(res => {
                console.log(res.data);
                setfoodName(res.data.data.FoodName);
                setId(res.data.data.ID);
                setfoodtype(res.data.data.FoodType);
                setprice(res.data.data.Price);
                setdesc(res.data.data.Discription);
                setfoodimg(res.data.data.foodimg);

            }
            )
            .catch(err => {
                console.log(err);
            }
            )
    

    }, []);

    // -------------------------------------------------------
    const handleSubmit = (event) => {
        const setdata = {
            Foodid: foodid,
            Date: Date,
            FoodName: foodName,
            FoodType: foodtype,
            Price: price,
            Quantity: Quantity,
            TotalPrice: TotalPrice,
            CustomerId: CustomerId,
            CustomerName: CustomerName,
            Note: Note,
            OrderAddress: OrderAddress

        }

        axios({
            url: `${apiUrl}/postOrder`,
            method: 'POST',
            data: setdata

        }).then(res => {
            console.log(res.data);
            window.alert("Order Succeed");
        })
            .catch((err) => {
                console.log(err);
            })

        setValidated(true);
        navigate('/fooditems');
        setValidated(true);
    }

    return (
        <><br />
            <center><h3>Ordering Food</h3></center>
            {/* style={{marginLeft:"auto",marginRight:"auto",width:"220px"}} */}
            <div >
                <img width={"200px"} src={`http://localhost:8000/abc/` + foodimg} alt="" /><br></br>
                Name:{foodName}<br></br>
                FoodId: {foodid}<br></br>
                Price: {price}<br></br>
                Type: {foodtype}<br></br>
                Description: {desc}<br></br>
                <br />
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <Form.Label>CustomerName</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Customer Name"
                                value={CustomerName}
                                onChange={(e) => { setCustomerName(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>CustomerId</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter CustomerId"
                                value={CustomerId}
                                onChange={(e) => { setCustomerId(e.target.value) }}
                            />
                        </Col>

                        <Col lg={6}>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Enter Quantity"
                                value={Quantity}
                                onChange={(e) => { setQuantity(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Note</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Note"
                                value={Note}
                                onChange={(e) => { setNote(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>OrderAddress</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter OrderAddress"
                                value={OrderAddress}
                                onChange={(e) => { setOrderAddress(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                placeholder="Enter Date"
                                value={Date}
                                onChange={(e) => { setDate(e.target.value) }}
                            />
                        </Col>

                    </Row>

                </Container>
                <div>
                    <br />
                    {TotalPrice = Quantity*price}
                    <p className='paytotalMsg'>You have to pay: {Quantity * price}</p>
                    <br /><br />
                    <Button type="submit" className='btn btn-success' style={{ marginLeft: "50px" }}>Order</Button>
                </div>

            </Form>
        </>
    )
}

export default OrderingFood
