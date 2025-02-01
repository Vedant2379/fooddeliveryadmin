// import axios from 'axios';
// import React, { useState } from 'react'
// import { Button, Col, Container, Form, Row } from 'react-bootstrap'

// function MyAddFood() {
//     const [foodName, setName] = useState("");
//     const [foodType, setType] = useState("");
//     const [foodCategory, setCategory] = useState("");
//     const [foodPrice, setPrice] = useState(0);
//     const [foodImage, setImage] = useState("");

//     function addFood() {
//         const food = {
//             FoodName: foodName,
//             FoodType: foodType,
//             FoodCategory: foodCategory,
//             FoodPrice: Number(foodPrice),
//             FoodImage: foodImage
//         }
//         axios.post("http://localhost:5000/api/addfood", food)
//             .then((result) => {
//                 alert("Food Added")
//                 console.log(result.data)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }

//     async function hnadlechangeimage(e){
//         const imgData = new FormData();
//         imgData.append(
//             'image',
//             e.target.files[0]
//         );
//         axios.post("http://localhost:5000/uploadfile", imgData)
//         .then((res) =>{
//             console.log("Res:",res.data);
//             setImage(res.data.filepath)
//         })
//         .catch((err) =>{
//             console.log("Err:", err);
//         });
//     }


//     return (
//         <div>
//             <Container>
//                 <Row>
//                     <Form>
//                         <Form.Group>
//                             <Form.Label>Food Name</Form.Label>
//                             <Form.Control type='Text' placeholder="Enter food's name" onChange={(e) => setName(e.target.value)} />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label>Food Type</Form.Label>
//                             <Form.Control type='Text' placeholder="Enter food's type" onChange={(e) => setType(e.target.value)} />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label>Food Category</Form.Label>
//                             <Form.Control type='Text' placeholder="Enter food's category" onChange={(e) => setCategory(e.target.value)} />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label>Food Price</Form.Label>
//                             <Form.Control type='Number' placeholder="Enter food's price" onChange={(e) => setPrice(e.target.value)} />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label>Food Image</Form.Label>
//                             <Form.Control type='File' placeholder="Enter food's image" onChange={hnadlechangeimage} />
//                         </Form.Group>
//                     </Form>
//                     <Button onClick={() => addFood()}>Submit</Button>
//                 </Row>
//                 <Row>
//                     <Col><h4>{foodName}</h4></Col>
//                     <Col><h4>{foodType}</h4></Col>
//                     <Col><h4>{foodCategory}</h4></Col>
//                     <Col><h4>{foodPrice}</h4></Col>
//                     <Col><h4>{foodImage}</h4></Col>
//                 </Row>
//             </Container>
//         </div>
//     )
// }

// export default MyAddFood
import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './MyAddFood.css';

function MyAddFood() {
    const [foodName, setName] = useState("");
    const [foodType, setType] = useState("");
    const [foodCategory, setCategory] = useState("");
    const [foodPrice, setPrice] = useState(0);
    const [foodImage, setImage] = useState("");

    function addFood() {
        const food = {
            FoodName: foodName,
            FoodType: foodType,
            FoodCategory: foodCategory,
            FoodPrice: Number(foodPrice),
            FoodImage: foodImage
        }
        axios.post("http://localhost:5000/api/addfood", food)
            .then((result) => {
                alert("Food Added")
                console.log(result.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    async function handleImageChange(e) {
        const imgData = new FormData();
        imgData.append(
            'image',
            e.target.files[0]
        );
        axios.post("http://localhost:5000/uploadfile", imgData)
            .then((res) => {
                console.log("Res:", res.data);
                setImage(res.data.filepath)
            })
            .catch((err) => {
                console.log("Err:", err);
            });
    }

    return (
        <div className="add-food-container">
            
                    <Form className='add-food-form'>
                        <Form.Group>
                            <Form.Label>Food Name</Form.Label>
                            <Form.Control type='text' placeholder="Enter food's name" onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Food Type</Form.Label>
                            <Form.Control type='text' placeholder="Enter food's type" onChange={(e) => setType(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Food Category</Form.Label>
                            <Form.Control type='text' placeholder="Enter food's category" onChange={(e) => setCategory(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Food Price</Form.Label>
                            <Form.Control type='number' placeholder="Enter food's price" onChange={(e) => setPrice(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Food Image</Form.Label>
                            <Form.Control type='file' onChange={handleImageChange} />
                        </Form.Group>
                        <button className='btn' onClick={() => addFood()}>Submit</button>
                    </Form>
                    
        </div>
    )
}

export default MyAddFood