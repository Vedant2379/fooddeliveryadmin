// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Button, Card, Col, Container, Row, Form } from 'react-bootstrap'
// import { useParams } from 'react-router-dom'

// const OrderDetails = () => {
//     const { orderid } = useParams()
//     const [orderDetails, setorderDetails] = useState({})

//     const [selStatus, setselStatus] = useState("")

//     useEffect(() => {
//         const data = {
//             oid: orderid
//         }
//         axios.post('http://localhost:5000/api/getorderbyid', data)
//             .then((result) => {
//                 setorderDetails({ ...result.data })
//                 console.log("DATA", result.data)
//             }).catch((err) => {
//                 console.log(err)
//             })
//     }, [])

//     const updateStatus = () => {
//         const orderData = {
//             orderstatus: selStatus,
//             oid: orderid
//         }
//         axios.post('http://localhost:5000/api/updatestatus', orderData)
//             .then((result) => {
//                 //alert('Order Status Update')
//                 window.location.reload(false)
//             }).catch((err) => {
//                 console.log(err)
//             });

//     }


//     return (
//         <>
//             <h1>DETAILS</h1>
//             <h3>Mob No: {orderDetails?.UserId?.CustomerMob}</h3>
//             <h3>Email: {orderDetails?.UserId?.CustomerEmail}</h3>
//             <h3>Current Status: {orderDetails?.OrderStatus}</h3>
//             <h2>Order Items</h2>
//             <div>
//                 <Container>
//                     <Row>
//                         {
//                             orderDetails?.OrderItems?.map((food) => {
//                                 return (
//                                     <Col>
//                                         <Card>
//                                             <Card.Img className='food-image' src={`http://localhost:5000${food.FoodId.FoodImage}`} />
//                                             <Card.Body>
//                                                 <h5>{food.FoodId.FoodName}</h5>
//                                                 <h5>Price : {food.FoodId.FoodPrice}</h5>
//                                                 <h5>Quantity : {food.Qty}</h5>
                                                
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                 )
//                             })
//                         }
//                     </Row>
//                 </Container>

//             </div>
//             <Container>
//                 <Form.Group>
//                     <Form.Check onChange={(e) => setselStatus(e.target.value)} inline id='ap' type='radio' value="Approved" label="Approved" name='status' />
//                     <Form.Check onChange={(e) => setselStatus(e.target.value)} inline id='dp' type='radio' value="Dispatch" label="Dispatch" name='status' />
//                     <Form.Check onChange={(e) => setselStatus(e.target.value)} inline id='ind' type='radio' value="In transit" label="In transit" name='status' />
//                     <Form.Check onChange={(e) => setselStatus(e.target.value)} inline id='cn' type='radio' value="Cancel" label="Cancel" name='status' />
//                 </Form.Group>
//                 <Button onClick={() => updateStatus()}>Update Status</Button>
//             </Container>
//         </>

//     )
// }

// export default OrderDetails
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './OrderDetails.css'; // Import CSS file for styling

const OrderDetails = () => {
    const { orderid } = useParams()
    const [orderDetails, setorderDetails] = useState({})
    const [selStatus, setselStatus] = useState("")
    
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    useEffect(() => {
        const data = {
            oid: orderid
        }
        // axios.post('http://localhost:5000/api/getorderbyid', data)
        axios.post(`${API_BASE_URL}/api/getorderbyid`, data)
            .then((result) => {
                setorderDetails({ ...result.data })
                console.log("DATA", result.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const updateStatus = () => {
        const orderData = {
            orderstatus: selStatus,
            oid: orderid
        }
        // axios.post('http://localhost:5000/api/updatestatus', orderData)
        axios.post(`${API_BASE_URL}/api/updatestatus`, orderData)
            .then((result) => {
                window.location.reload(false)
            }).catch((err) => {
                console.log(err)
            });

    }

    return (
        <>
            <div className="order-details-container">
                <h1 className="details-heading">Order Details</h1>
                <div className="customer-info">
                    <h3>Mob No: {orderDetails?.UserId?.CustomerMob}</h3>
                    <h3>Email: {orderDetails?.UserId?.CustomerEmail}</h3>
                    <h3>Current Status: {orderDetails?.OrderStatus}</h3>
                </div>
                <h2>Order Items</h2>
                <Container>
                    <Row>
                        {orderDetails?.OrderItems?.map((food, index) => (
                            <Col key={index}>
                                <Card>
                                    <Card.Img className='food-image' src={`${API_BASE_URL}${food.FoodId.FoodImage}`} />
                                    <Card.Body>
                                        <h5>{food.FoodId.FoodName}</h5>
                                        <p>Price : {food.FoodId.FoodPrice}</p>
                                        <p>Quantity : {food.Qty}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Form className="status-form">
                    <Form.Group>
                        <Form.Check onChange={(e) => setselStatus(e.target.value)} inline id='ap' type='radio' value="Approved" label="Approved" name='status' />
                        <Form.Check onChange={(e) => setselStatus(e.target.value)} inline id='dp' type='radio' value="Dispatch" label="Dispatch" name='status' />
                        <Form.Check onChange={(e) => setselStatus(e.target.value)} inline id='ind' type='radio' value="In transit" label="In transit" name='status' />
                        <Form.Check onChange={(e) => setselStatus(e.target.value)} inline id='cn' type='radio' value="Cancel" label="Cancel" name='status' />
                    </Form.Group>
                    <Button onClick={() => updateStatus()}>Update Status</Button>
                </Form>
            </div>
        </>
    )
}

export default OrderDetails;
