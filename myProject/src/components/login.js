import React from 'react'
import { Jumbotron, Button, Form } from 'react-bootstrap'

// function loginButton(){
//     const id = document.getElementsByClassName('login-id')
//     const password = document.getElementByClassName("login-password")
//     console.log(id)
//     console.log(password)
// }

export default function Login() {
    return (
        <div className="container">
            <Jumbotron>
                <h1>LogIn</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="login-id" type="email" placeholder="Enter email"  />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="login-password" type="password" placeholder="Password"  />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Login
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    )
}

