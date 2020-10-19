import React from 'react'
import Form from 'react-bootstrap/Form'

export const Login = () => {
    return (
        <div>
        <div className="login">
        <div className="login_text">
        <h4>LOG IN</h4>
        </div>
        <Form>
         <Form.Group controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" />
         </Form.Group>
         <Form.Group controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        </Form>
        </div>   
        </div>
    )
}
