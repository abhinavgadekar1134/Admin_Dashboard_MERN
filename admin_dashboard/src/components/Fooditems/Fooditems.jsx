import React from 'react'
import { Container, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Fooditems = () => {
    const apiUrl = process.env.RENDER_API;
    const [validated, setValidated] = useState(false);
    const [foodName, setfoodName] = useState('');
    const [foodid, setId] = useState('');
    const [foodtype, setfoodtype] = useState('');
    const [price, setprice] = useState('');
    const [desc, setdesc] = useState('');
    const [foodimg, setfoodimg] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault()

        const setdata = {

            ID: foodid,
            FoodName: foodName,
            Discription:desc,
            FoodType: foodtype,
            Price: price,
            foodimg:foodimg

        }

        axios({
            url: `${apiUrl}/postFoodItems`,
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
        axios.get(`${apiUrl}/getfoodItems`)
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
    const handleDelete = (FoodName) => {

        axios.delete(`${apiUrl}/deleteFoodItems/${FoodName}`)
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
            <div><br />
                <center><h3>Add Food Items</h3></center><br />
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Container>

                        <Row>
                            <Col lg={6}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Food Name"
                                    onChange={(e) => { setfoodName(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>Id</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Id"
                                    onChange={(e) => { setId(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>Food type</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Medium / Spicy"
                                    onChange={(e) => { setfoodtype(e.target.value) }}
                                />
                            </Col>

                            <Col lg={6}>
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Enter Price"
                                    onChange={(e) => { setprice(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>Food Image</Form.Label>
                                <Form.Control
                                    
                                    type="file"
                                    placeholder="Upload Food image"
                                    onChange={(e) => setfoodimg(e.target.files[0])}
                                />
                            </Col>
                            <Col lg={6}>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => { setdesc(e.target.value) }}></textarea>
                                </div>
                            </Col>
                        </Row>

                    </Container>

                    <Button type="submit" style={{ marginLeft: "50px" }}>Add</Button>
                </Form>
            </div >

            <div className='All-Food-Items'>
                <br /><center><h3>All Food Items In Restaurant</h3></center><br />
                <div style={{ width: "100%", overflowX: "scroll" }}>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Image</th>
                                <th>Food Name</th>
                                <th>Food Type</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data1.map((ii) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{ii.ID}</td>
                                                {/* <td>{ii.foodimg}</td> */}
                                                <td><img src={`http://localhost:8000/abc/`+ii.foodimg} width='200' height='120' alt="Food img" /></td>
                                                <td>{ii.FoodName}</td>
                                                <td>{ii.FoodType}</td>
                                                <td>{ii.Price}</td>
                                                <td>{ii.Discription}</td>
                                                <td><button className='btn btn-success' onClick={(props) => {
                                                    localStorage.setItem("ID", ii.ID);
                                                    navigate('/FoodUpdate');
                                                }

                                                } >Update</button><button className='btn btn-danger' onClick={(ID) => handleDelete(ii.ID)} >Delete</button></td>
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

export default Fooditems

