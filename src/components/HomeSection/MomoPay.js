import React from 'react';
import { Button, Form } from 'react-bootstrap';

const MomoPay = () => {
    return (
        <div>
            <Form>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder='Enter your email' />
                </Form.Group>
                <Form.Group controlId='formBasicPhoneNumber'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder='Enter your Phone number' />
                </Form.Group>
                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Full Names</Form.Label>
                    <Form.Control type="text" placeholder='Enter your Full Names' />
                </Form.Group>

                <Button variant='primary'>Pay</Button>
            </Form>
        </div>
    )
}

export default MomoPay
