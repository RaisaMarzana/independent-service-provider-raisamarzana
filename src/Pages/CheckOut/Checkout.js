import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const handleSubmit = event => {
        event.preventDefault();
        toast('Your Booking is confirmed.');
    }
    return (
        <div className='container p-2'>
            <h4 className='text-center'>Checkout</h4>
            <div className='m-4'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Full Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhoneNumber">
                        <Form.Label column sm={2}>
                            Phone Number
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Phone Number" />
                        </Col>
                    </Form.Group>
                    <fieldset className='d-lg-flex d-sm-block'>
                        <Form.Label className='me-1' column sm={2}>
                            Your Comment
                        </Form.Label>
                        <div className="input-group">

                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </fieldset>
                    <Form.Group as={Row} className="my-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button className='btn btn-secondary' type="submit">Checkout</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Checkout;