import React, { useState } from 'react'
import axios from 'axios'
import './Admin.css'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const apiUrl = process.env.RENDER_API;
  const navigate = useNavigate();
  const [uname, setuname] = useState('');
  const [upass, setupass] = useState('');
  const handleSubmit = (event) => {

    event.preventDefault();
    event.stopPropagation();
    axios.get(`${apiUrl}/adminlogin/${uname}/${upass}`)
      .then(res => {
        console.log(res.data.status);
        // setfname(res.data.name);
        if (res.data.status == "success") {
          window.alert("Login successfull");
          // navigate('/adminHome');
          localStorage.setItem('adminname', res.data.mail);
          
          // document.getElementById("seconddiv").style.display = "inline";
          navigate('/Home');

        }
        else {
          window.alert("username or password not matched");
          navigate('/');
        }
      }
      )
      .catch(err => {
        window.alert("Error in system");
        console.log(err);
        navigate('/');
      }
      )
  }
  return (
    <>
      {/* <Home/> */}
      <div className='adminlogin'>
        <div class="login-container">
          <div class="login-form">
            <h2>Login</h2>
            
            <Form onSubmit={handleSubmit} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" onChange={(e) => { setuname(e.target.value) }} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => { setupass(e.target.value) }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin
