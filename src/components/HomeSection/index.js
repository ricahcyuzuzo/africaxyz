import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import { Modal, Nav, Tab, Col, Row, Form, Button as Buttton } from 'react-bootstrap';
import axios from 'axios';
import { 
    ButtonDonate, 
    HomeSection, 
    HomeH3, 
    ButtonWrappers, 
    Row1, 
    Row2, 
    TextFieldWrapper, 
    InputField, 
    HomeTextTransactionWrapper, 
    HomeBtnWrapper
} from './HomeElements';


const Home = () => {

    const [show, setShow] = useState(false);

    const handleClick1 = () => {
        document.getElementById('amount').value = '100';
    }

    const handleClick2 = () => {
        document.getElementById('amount').value = '250';
    }

    const handleClick3 = () => {
        document.getElementById('amount').value = '500';
    }

    const handleClick4 = () => {
        document.getElementById('amount').value = '1000';
    }

    const handleClick5 = () => {
        document.getElementById('amount').value = '5000';
    }

    const handleClick6 = () => {
        document.getElementById('amount').value = '9900';
    }

    const handleClickPayMomo = () => {
        const amount = document.getElementById('amount').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const fullName = document.getElementById('fullNames').value;

        axios.post('http://africaxyz.eu-4.evennode.com/api/paymomo', {
            email: email,
            amount: amount,
            phoneNumber: phoneNumber,
            fullName: fullName
          })
          .then((response) => {
                console.log(response);
                window.location.href = response.data.data.meta.authorization.redirect;
            })
          .catch((error) => {
            console.log(error);
          });
    }

    const handleClickCheckoutCard = () => {
        const amount = document.getElementById('amount').value;
        const email = document.getElementById('cardEmail').value;
        const phoneNumber = document.getElementById('phoneNumberr').value;
        const fullName = document.getElementById('fullNamess').value;
        const cvv = document.getElementById('cvv').value;
        const cardNumber = document.getElementById('cardNumber').value;
        const expM = document.getElementById('expiryMonth').value;
        const expY = document.getElementById('expiryYear').value;
        const currency = document.getElementById('currency').value;
        const pin = document.getElementById('pin').value;
        const otp = document.getElementById('otp').value;

        axios.post('http://africaxyz.eu-4.evennode.com/api/cardpay', {
            email: email,
            amount: amount,
            phoneNumber: phoneNumber,
            fullName: fullName,
            cvv: cvv,
            cardNumber: cardNumber,
            currency: currency,
            expiryMonth: expM,
            expiryYear: expY,
            pin: pin,
            otp: otp
          })
          .then(function (response) {
            console.log(response);
            alert('Card Cheackout initiated successfully');
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <HomeSection>
            <HomeH3>MAKE A ONE-TIME GIFT</HomeH3>
            <ButtonWrappers>
                <Row1>
                    <Button onClick={handleClick1} id='1' amountData='100'>100 RWF</Button>
                    <Button onClick={handleClick2} id='2' amountData='250'>250 RWF</Button>
                    <Button onClick={handleClick3} id='3' amountData='500'>500 RWF</Button>
                </Row1>
                <Row2>
                    <Button onClick={handleClick4} id='4' amountData='1000'>1000 RWF</Button>
                    <Button onClick={handleClick5} id='5' amountData='5000'>5000 RWF</Button>
                    <Button onClick={handleClick6} id='6' amountData='9900'>9900 RWF</Button>
                </Row2>
            </ButtonWrappers>
            <TextFieldWrapper>
                <InputField type='text' id='amount' placeholder='Name your own amount, maybe 25,000 Rwf?' />
            </TextFieldWrapper>
            <HomeTextTransactionWrapper>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I'll Cover my transaction fees" />
            </Form.Group>
            </HomeTextTransactionWrapper>
            <HomeBtnWrapper>
                <ButtonDonate onClick={() => setShow(true)}>DONATE</ButtonDonate>
            </HomeBtnWrapper>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Pay with Momo or Card
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Momo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Card</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
            <Form>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" id='email' placeholder='Enter your email' />
                </Form.Group>
                <Form.Group controlId='formBasicPhoneNumber'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" id='phoneNumber' placeholder='Enter your Phone number' />
                </Form.Group>
                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Full Names</Form.Label>
                    <Form.Control type="text" id='fullNames' placeholder='Enter your Full Names' />
                </Form.Group>

                <Buttton variant='primary' onClick={handleClickPayMomo}>Pay</Buttton>
            </Form>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Form>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="text" id='cardNumber' placeholder='Enter your Card number' value='5399838383838381' />
                </Form.Group>
                <Form.Group controlId='formBasicPhoneNumber'>
                    <Form.Label>CVV</Form.Label>
                    <Form.Control type="text" id='cvv' min='3' max='3' placeholder='Enter your CVV' value='470' />
                </Form.Group>
                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Expiry Month</Form.Label>
                    <Form.Control min='2' max='2' id='expiryMonth' type="text" placeholder='Enter Expiry Month' value='10' />
                </Form.Group>

                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Expiry Year</Form.Label>
                    <Form.Control min='2' max='2' type="text" id='expiryYear' placeholder='Enter Expiry Year' value='31' />
                </Form.Group>

                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Currency</Form.Label>
                    <Form.Control type="text" placeholder='Enter Currency' id='currency' value='RWF' />
                </Form.Group>

                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder='Enter Your email' id='cardEmail' value='ricahcyuzuzo@gmail.com' />
                </Form.Group>
                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Full Names</Form.Label>
                    <Form.Control type="text" placeholder='Enter Your Full names' id='fullNamess' value='Richard NSHIMYUMUKIZA' />
                </Form.Group>

                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder='Enter Your Telephone number' id='phoneNumberr' value='0784218000' />
                </Form.Group>

                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>Pin</Form.Label>
                    <Form.Control type="text" placeholder='Enter your pin' value='3310' id='pin' />
                </Form.Group>

                <Form.Group controlId='formBasicFullNames'>
                    <Form.Label>OTP</Form.Label>
                    <Form.Control type="text" placeholder='Enter Your otp' value='12345' id='otp' />
                </Form.Group>
                <Buttton variant='primary' onClick={handleClickCheckoutCard}>Checkout Card</Buttton>
            </Form>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
          </Modal.Body>
        </Modal>
        </HomeSection>
    );
}

export default Home
