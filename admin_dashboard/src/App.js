import logo from './logo.svg';
import './App.css';
import './components/Home/home.css';
import PiechartRevenuee from './components/analytics/PiechartRevenuee';
import BarchartRevenuu from './components/analytics/BarchartRevenuu';
import Dropdown from 'react-bootstrap/Dropdown';
import Calendar from 'react-calendar';
import { Route, Routes } from 'react-router-dom';
import { FaGear } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import { FaBars } from "react-icons/fa";
import 'react-calendar/dist/Calendar.css';
import Fooditems from './components/Fooditems/Fooditems';
import Customers from './components/Customers/Customers';
import CreateAdmin from './components/Admin/CreateAdmin';
import ContactInfo from './components/ContactInfo/ContactInfo';
import UpdateFoodItems from './components/Fooditems/UpdateFoodItems';
import Orders from './components/Orders/Orders';
import UpdateCustomers from './components/Customers/UpdateCustomers';
import OrderingFood from './components/Orders/OrderingFood';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Admin from './components/Admin';
function App() {
  const [date, setDate] = useState(new Date()); // Initialize state for selected date

  const onChange = (newDate) => {
    setDate(newDate); // Update selected date when calendar date changes
  };
  let i =0;
  const toggleswitch =()=>{
    if(i==1){
      document.getElementById('firstdiv').style.display = 'none';
      i=0;
    }
    else{
      document.getElementById('firstdiv').style.display = 'inline-block';
      i=1;
    }
  }
  return (
    <>
    <Routes>
        {/* <Route path='/Home' element={<Home/>} /> */}
        <Route path='/' element={<Admin/>} />
    </Routes>
    </>
  );
}

export default App;
