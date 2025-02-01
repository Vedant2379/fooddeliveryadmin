// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Card, Col, Container, Row } from 'react-bootstrap'

// function MyAllFood() {
//   const [foodData, setfoodData] = useState([])

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/allfood')
//       .then((result) => {
//         setfoodData(result.data)
//       }).catch((err) => {
//         console.log(err)
//       })
//   }, [])

//   return (
//     <div>
//       <Container>
//         <Row>
//           {
//             foodData.map((food) => {
//               return (
//                 <Col lg={3} sm={12} md={6}>
//                   <Card>
//                     <Card.Img className='food-image' src={`http://localhost:5000${food.FoodImage}`} />
//                     <Card.Body>
//                       <h5>{food.FoodName}</h5>
//                       <h5>{food.FoodType}</h5>
//                       <h5>{food.FoodCategory}</h5>
//                       <h5>{food.FoodPrice}</h5>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               )
//             })
//           }
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default MyAllFood
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './MyAllFood.css';

function MyAllFood() {
  const [foodData, setfoodData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/allfood')
      .then((result) => {
        setfoodData(result.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="all-food-container">
      <Container>
        <Row>
          {
            foodData.map((food, index) => {
              return (
                <Col key={index} lg={3} md={6} sm={12}>
                  <Card className="food-card">
                    <Card.Img className='food-image' src={`http://localhost:5000${food.FoodImage}`} />
                    <Card.Body>
                      <h5 className="food-name">{food.FoodName}</h5>
                      <p className="food-details">Type: {food.FoodType}</p>
                      <p className="food-details">Category: {food.FoodCategory}</p>
                      <p className="food-price">${food.FoodPrice}</p>
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

export default MyAllFood;