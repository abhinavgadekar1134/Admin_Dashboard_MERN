import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Dashboard.css"
import BarchartRevenuu from '../analytics/BarchartRevenuu'
import Calendar from 'react-calendar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
const Dashboard = () => {
    const [date, setDate] = useState(new Date()); // Initialize state for selected date
    const apiUrl = process.env.REACT_APP_API_URL;
    const onChange = (newDate) => {
        setDate(newDate); // Update selected date when calendar date changes
    };
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
    }, [])
    return (
        <div>
            <br />
            <center><h3>Dashboard</h3></center><br />
            <Container>
                <Row>
                    <Col className='dash-cols'>
                        <div className='cols-data'>
                            <center><h3>Food Items</h3></center>
                            <ul>
                              
                                {
                                    data1.map((ii) => {
                                        return (
                                            <>
                                                <li>{ii.FoodName}</li>

                                            </>
                                        )
                                    })
                                }
                            </ul>

                        </div>
                    </Col>
                    <Col className='dash-cols'>
                        <center><h3>Calender</h3></center>
                        <div style={{ width: '350px', marginLeft: 'auto', marginRight: 'auto' }}>

                            <Calendar
                                onChange={onChange}
                                value={date}
                                calendarType="US"
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='dash-cols'>
                        <div className='cols-data'>
                            <BarchartRevenuu />
                        </div>

                    </Col>
                    <Col className='dash-cols'>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard
