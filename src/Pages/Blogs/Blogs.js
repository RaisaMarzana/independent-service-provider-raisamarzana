import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Card className='m-5'>
                <Card.Header className='fw-bold'>Difference between authorization and authentication.</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <span className='fw-bold'>Authorization</span>
                        <p>
                            <ol>
                                <li>Authorization determines what resources a user.</li>
                                <li>Authorization always takes place after authentication.</li>
                                <li>Authorization isn’t visible to or changeable by the user.</li>
                            </ol>
                        </p>
                        <span className='fw-bold'>Authentication</span>
                        <p>
                            <ol>
                                <li>Authentication verifies who the user is.</li>
                                <li>Authentication is the first step of a good identity and access management process.</li>
                                <li>Authentication is visible to and partially changeable by the user.</li>
                            </ol>
                        </p>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card className='m-5'>
                <Card.Header className='fw-bold'>Why are you using firebase? What other options do you have to implement authentication ?</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        </p>
                        <p>
                            <ol>
                                <li>Okta</li>
                                <li>Auth0</li>
                            </ol>
                        </p>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card className='m-5'>
                <Card.Header className='fw-bold'>What other services does firebase provide other than authentication ?</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            <ol>
                                <li>Firebase Realtime Database</li>
                                <li>Authentication</li>
                                <li>Cloud Storage</li>
                                <li>Hosting service</li>
                            </ol>
                        </p>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blogs;