// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Button, Card, Col, Container, Row } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'

// function MyAllOrder() {
//     const [orderData, setorderData] = useState([])
//     const navi = useNavigate()

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/allorder')
//       .then((result) => {
//         setorderData(result.data)
//       }).catch((err) => {
//         console.log(err)
//       })
//     }, [])

//   return (
//     <div>
//         <Container>
//         <Row>
//           {
//             orderData.map((order) => {
//               return (
//                 <Col lg={3} sm={12} md={6}>
//                   <Card>
//                     <Card.Body>
//                       <h5>{order.orderDate}</h5>
//                       <h5>{order.orderStatus}</h5>
//                       <h5>{order.NoOfItems}</h5>
//                       <h5>{order.TotalAmt}</h5>
//                     </Card.Body>
//                     <Card.Footer>
//                       <Button onClick={() => navi(`/orderdetails/${order._id}`)}>Details</Button>
//                     </Card.Footer>
//                   </Card>
//                 </Col>
//               )
//             })
//           }
//         </Row>
//         </Container>
//     </div>
//   )
// }

// export default MyAllOrder
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './MyAllOrder.css';

function MyAllOrder() {
    const [orderData, setorderData] = useState([])
    const navi = useNavigate()

    useEffect(() => {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        // axios.get('http://localhost:5000/api/allorder')
        axios.get(`${API_BASE_URL}/api/allorder`)
            .then((result) => {
                setorderData(result.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className="all-order-container">
            <Container>
                <h1 className="all-order-heading">All Orders</h1>
                <Row>
                    {
                        orderData.map((order, index) => {
                            return (
                                <Col key={index} lg={3} md={6} sm={12}>
                                    <Card className="order-card">
                                        <Card.Body>
                                            <h5 className="order-date">Date: {order.orderDate}</h5>
                                            <p className="order-status">Status: {order.orderStatus}</p>
                                            <p className="order-items">Items: {order.NoOfItems}</p>
                                            <p className="order-total">Total: ${order.TotalAmt}</p>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button onClick={() => navi(`/orderdetails/${order._id}`)}>Details</Button>
                                        </Card.Footer>
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

export default MyAllOrder;
