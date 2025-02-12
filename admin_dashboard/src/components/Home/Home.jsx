import "./home.css"
import PiechartRevenuee from '../analytics/PiechartRevenuee';
import BarchartRevenuu from '../analytics/BarchartRevenuu';
import Dropdown from 'react-bootstrap/Dropdown';
import Calendar from 'react-calendar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { FaGear } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import { FaBars } from "react-icons/fa";
import 'react-calendar/dist/Calendar.css';
import Fooditems from '../Fooditems/Fooditems';
import Customers from '../Customers/Customers';
import CreateAdmin from '../Admin/CreateAdmin';
import ContactInfo from '../ContactInfo/ContactInfo';
import UpdateFoodItems from '../Fooditems/UpdateFoodItems';
import Orders from '../Orders/Orders';
import UpdateCustomers from '../Customers/UpdateCustomers';
import OrderingFood from '../Orders/OrderingFood';
import Dashboard from '../Dashboard/Dashboard';
import Admin from "../Admin";
const Home = () => {
    const navigate = useNavigate();

    const adminname = localStorage.getItem('adminname');
    const [date, setDate] = useState(new Date()); // Initialize state for selected date

    const onChange = (newDate) => {
        setDate(newDate); // Update selected date when calendar date changes
    };
    const logout = ()=>{
        // localStorage.removeItem('adminname');
        window.alert("Log out succeed");
        navigate('/');
    }
    let i = 0;
    // const toggleswitch = () => {
    //     if (i == 1) {
    //         document.getElementById('firstdiv').style.display = 'none';
    //         i = 0;
    //     }
    //     else {
    //         document.getElementById('firstdiv').style.display = 'inline-block';
    //         i = 1;
    //     }
    // }
    return (
        <>
            <div class="mainall">
                <div class="firstdiv" id='firstdiv'>
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic" className='navv-icon'>
                            <FaGear id="dropdown-basic" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Link className='nav-links ' to={"/createNewAdmin"}> Create New Admin</Link>
                            <Link className='nav-links ' to={"/sfds"}> Change Credentials</Link>
                            <a className='nav-links log-out-btn dropdown-item' role="button" tabindex="0" onClick={logout}> Log Out</a>
                        </Dropdown.Menu>
                    </Dropdown>
                    <center><img class="adminimg" width="100"
                        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
                        <p class="adcaption">{adminname}</p>
                    </center>
                    <div class="navcontent">
                        <ul class="ad-table">
                            <li><a class="nav-links-main" href="#">PAGES</a></li>
                            <Link className='nav-links' to={"/Dashboard"}> Dashboard</Link>
                            <Link className='nav-links' to={"/fooditems"}>Food Items </Link>

                            <Link className='nav-links' to={"/customers"}>Customers </Link>
                            <Link className='nav-links' to={"/Orders"}> Orders</Link>
                            <Link className='nav-links' to={"/Calendar"}>Calender </Link>
                            <Link className='nav-links' to={"/contactInfo"}>Contact Info </Link>
                            <li><a class="nav-links-main" href="#">CHARTS</a></li>
                            <Link className='nav-links' to={"/ggg"}>Financial</Link>
                            <Link className='nav-links' to={"/PiechartRevenuee"}>Pie</Link>
                            <Link className='nav-links' to={"/BarchartRevenuu"}>Bar</Link>
                        </ul>
                    </div>
                </div>
                <div class="seconddiv" id="seconddiv">
                    <div>
                        {/* <FaBars onClick={toggleswitch}/> */}
                        <div class="sec-div-top">
                            <center><h2>Restaurant Management</h2></center>
                        </div>
                        <div class="sec-div-containt">
                            <Routes>
                                <Route path='/Home' element={<Dashboard />} />

                                <Route path='/Dashboard' element={<Dashboard />} />
                                <Route path='/createNewAdmin' element={<CreateAdmin />} />
                                <Route path='/fooditems' element={<Fooditems />} />
                                <Route path='/customers' element={<Customers />} />
                                <Route path='/contactInfo' element={<ContactInfo />} />
                                <Route path='/FoodUpdate' element={<UpdateFoodItems />} />
                                <Route path='/CustomerUpdate' element={<UpdateCustomers />} />
                                <Route path='/OrderingFood' element={<OrderingFood />} />
                                <Route path='/Orders' element={<Orders />} />
                                <Route path='/PiechartRevenuee' element={<PiechartRevenuee />} />
                                <Route path='/BarchartRevenuu' element={<BarchartRevenuu />} />
                                <Route path='/Calendar' element={<> <center>
                                    <h4 className='chtitle'>Calender</h4> </center><div style={{ width: '350px', marginLeft: 'auto', marginRight: 'auto' }}>

                                        <Calendar
                                            onChange={onChange}
                                            value={date}
                                            calendarType="US"
                                        />
                                    </div></>} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
