import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './MyDashboard.css';

function MyDashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">FoodDelight</h1>
      <h6 className="dashboard-heading1">Indulging in flavors that make life delicious.</h6>
      {/* <Container>
        <h1 className="dashboard-heading">Dashboard</h1>
        <Row>
          <Col md={6} lg={4}>
            <Card className="dashboard-card">
              <Card.Body>
                <h3>Orders</h3>
                <p>Total orders: 150</p>
                <p>Pending orders: 10</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="dashboard-card">
              <Card.Body>
                <h3>Customers</h3>
                <p>Total customers: 100</p>
                <p>New customers today: 5</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="dashboard-card">
              <Card.Body>
                <h3>Revenue</h3>
                <p>Total revenue: $5000</p>
                <p>Today's revenue: $250</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
    </div>
  )
}

export default MyDashboard