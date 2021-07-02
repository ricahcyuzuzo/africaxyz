import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CardPay = () => {
    return (
        <div>
            <Form>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="text" placeholder='Enter your Card number' value='5399838383838381' />
                </Form.Group>
                <Form.Group controlId='formBasicPhoneNumber'>
                    <Form.Label>CVV</Form.Label>
                    <Form.Control type="text" min='3' max='3' placeholder='Enter your CVV' value='470' />
                </Form.Group>
                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Expiry Month</Form.Label>
                    <Form.Control min='2' max='2' type="text" placeholder='Enter Expiry Month' value='10' />
                </Form.Group>

                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Expiry Year</Form.Label>
                    <Form.Control min='2' max='2' type="text" placeholder='Enter Expiry Year' value='31' />
                </Form.Group>

                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Currency</Form.Label>
                    <Form.Control type="text" placeholder='Enter Currency' value='RWF' />
                </Form.Group>
                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" placeholder='Enter Amount' value='100' />
                </Form.Group>

                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder='Enter Your email' value='Richard NSHIMYUMUKIZA' />
                </Form.Group>
                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Full Names</Form.Label>
                    <Form.Control type="text" placeholder='Enter Your Full names' value='ricahcyuzuzo@gmail.com' />
                </Form.Group>

                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder='Enter Your Telephone number' value='0784218000' />
                </Form.Group>

                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Pin</Form.Label>
                    <Form.Control type="text" placeholder='Enter your pin' value='3310' />
                </Form.Group>

                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>OTP</Form.Label>
                    <Form.Control type="text" placeholder='Enter Your otp' value='12345' />
                </Form.Group>
                <Button variant='primary'>Pay</Button>
            </Form>
        </div>
    )
}

export default CardPay;
