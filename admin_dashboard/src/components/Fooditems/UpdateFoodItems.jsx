import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const UpdateFoodItems = () => {
    const ID = localStorage.getItem("ID");
    const [validated, setValidated] = useState(false);
    const apiUrl = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [foodName, setfoodName] = useState('');
    const [foodid, setId] = useState('');
    const [foodtype, setfoodtype] = useState('');
    const [price, setprice] = useState('');
    const [desc, setdesc] = useState('');
    const [foodimg, setfoodimg] = useState('');

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
    },[]);

    const handleSubmit = (event) => {
        const setdata = {
            FoodName: foodName,
            Discription: desc,
            FoodType: foodtype,
            Price: price,
            foodimg: foodimg

        }

        console.log(setdata)
        axios({
            url: `${apiUrl}/FoodUpdate/${ID}`,
            method: 'PUT',
            data: setdata
            // headers: {
            //     "Content-Type": "multipart/form-data",
            // }

        })
            .then(res => {
                console.log(res.data);
                window.alert("Data updated");
            })
            .catch((err) => {
                console.log(err);
            });

        navigate('/fooditems');
        setValidated(true);
    }

    return (
        <>
            <br /><center><h3>Update Food Items</h3></center><br />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Container>

                        <Row>
                            <Col lg={6}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Food Name"
                                    value={foodName}
                                    onChange={(e) => { setfoodName(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>Food type</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Medium / Spicy"
                                    value={foodtype}
                                    onChange={(e) => { setfoodtype(e.target.value) }}
                                />
                            </Col>

                            <Col lg={6}>
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Enter Price"
                                    value={price}
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
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={desc} onChange={(e) => { setdesc(e.target.value) }}></textarea>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                    <img src={`http://localhost:8000/abc/`+foodimg} width='200' height='120' alt="Food img" />
                    <br /><br />
                    <Button type="submit" className='btn btn-success' style={{ marginLeft: "50px" }}>Update</Button>
                </Form>
        </>

    )
}

export default UpdateFoodItems
