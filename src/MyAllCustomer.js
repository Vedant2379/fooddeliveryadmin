// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Card, Col, Container, Row } from 'react-bootstrap'

// function MyAllCustomer() {
//     const [customerData, setcustomerData] = useState([])

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/allcustomer')
//       .then((result) => {
//         setcustomerData(result.data)
//       }).catch((err) => {
//         console.log(err)
//       })
//     }, [])

//   return (
//     <div>
//         <Container>
//         <Row>
//           {
//             customerData.map((customer) => {
//               return (
//                 <Col lg={3} sm={12} md={6}>
//                   <Card>
//                     <Card.Body>
//                       <h5>{customer.CustomerName}</h5>
//                       <h5>{customer.CustomerEmail}</h5>
//                       <h5>{customer.CustomerPassword}</h5>
//                       <h5>{customer.CustomerAddress}</h5>
//                       <h5>{customer.CustomerMob}</h5>
//                     </Card.Body>
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

// export default MyAllCustomer
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './MyAllCustomer.css';

function MyAllCustomer() {
    const [customerData, setcustomerData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/allcustomer')
            .then((result) => {
                setcustomerData(result.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className="all-customer-container">
            <Container>
                <h1 className="all-customer-heading">All Customers</h1>
                <Row>
                    {
                        customerData.map((customer, index) => {
                            return (
                                <Col key={index} lg={3} md={6} sm={12}>
                                    <Card className="customer-card">
                                        <Card.Body>
                                            <h5 className="customer-name">{customer.CustomerName}</h5>
                                            <p className="customer-email">Email: {customer.CustomerEmail}</p>
                                            <p className="customer-address">Address: {customer.CustomerAddress}</p>
                                            <p className="customer-mob">Mobile: {customer.CustomerMob}</p>
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

export default MyAllCustomer;