import React from 'react';
import './PreviousWork.css';
import banner from '../../../images/banner1.jpg'
import { Card, Col, Row } from 'react-bootstrap';
import work1 from '../../../images/works/work1.jpg';
import work2 from '../../../images/works/work2.jpg';
import work3 from '../../../images/works/work3.jpg';
import work4 from '../../../images/works/work4.jpg';

const PreviousWork = () => {
    return (
        <div className='container mx-auto w-75'>
            <h1 className='text-dark text-center'>Previous Works</h1>
            <div className='m-4'>
                <div className="card bg-dark text-white">
                    <img src={banner} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Gaye Holud</h5>
                    </div>
                </div>
            </div>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={work1} />
                        <Card.Body>
                            <Card.Title>Wedding</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={work2} />
                        <Card.Body>
                            <Card.Title>Reception</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={work3} />
                        <Card.Body>
                            <Card.Title>Engagement</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={work4} />
                        <Card.Body>
                            <Card.Title>Party</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default PreviousWork;