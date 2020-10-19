import React from 'react'
import Form from 'react-bootstrap/Form'

export const CreateAccount = () => {
    return (
    <div>
        <div>
        <div>
        <h4>CREATE ACCOUNT</h4>
        </div>
        <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
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
