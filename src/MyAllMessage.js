import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './MyAllCustomer.css';


function MyAllMessage() {
    const [messageData, setmessageData] = useState([])

    useEffect(() => {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        // axios.get('http://localhost:5000/api/allmessage')
        axios.get(`${API_BASE_URL}/api/allmessage`)
            .then((result) => {
                setmessageData(result.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className="all-customer-container">
            <Container>
                <h1 className="all-customer-heading">All Messages</h1>
                <Row>
                    {
                        messageData.map((message, index) => {
                            return (
                                <Col key={index} lg={3} md={6} sm={12}>
                                    <Card className="customer-card">
                                        <Card.Body>
                                            <h5 className="customer-name">Sender Name: {message.SenderName}</h5>
                                            <p className="customer-name">Sender Email: {message.SenderEmail}</p>
                                            <p className="customer-name">Message: {message.SenderMessage}</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default MyAllMessage;