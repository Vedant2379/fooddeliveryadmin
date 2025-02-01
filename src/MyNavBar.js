// import React from 'react'
// import { Nav, Navbar } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

// function MyNavBar() {
//   return (
//     <div>
//         <Navbar collapseOnSelect variant='dark' bg='dark' expand='lg'>
//                 <Navbar.Brand>my navbar</Navbar.Brand>
//                 <Navbar.Toggle aria-controls='responsive-navbar' />
//                 <Navbar.Collapse id='responsive-navbar'>
//                     <Nav className='me-auto'>
//                         <Nav.Link>
//                             <Link to="/">Dashboard</Link>
//                         </Nav.Link>
//                         <Nav.Link>
//                             <Link to="/addfoods">Add Food</Link>
//                         </Nav.Link>
//                         <Nav.Link>
//                             <Link to="/allfoods">All Food</Link>
//                         </Nav.Link>
//                         <Nav.Link>
//                             <Link to="/allorders">All Orders</Link>
//                         </Nav.Link>
//                         <Nav.Link>
//                             <Link to="/allcustomers">All Customers</Link>
//                         </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//     </div>
//   )
// }

// export default MyNavBar
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './MyNavBar.css'; // Import CSS file for styling

function MyNavBar() {
  return (
    <div>
      <Navbar collapseOnSelect variant='dark' bg='dark' expand='lg'>
        <Navbar.Brand>FoodDelight</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar' />
        <Navbar.Collapse id='responsive-navbar'>
          <Nav className='me-auto'>
            <Nav.Link>
              <Link to="/" className="nav-link">Dashboard</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/addfoods" className="nav-link">Add Food</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/allfoods" className="nav-link">All Food</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/allorders" className="nav-link">All Orders</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/allcustomers" className="nav-link">All Customers</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/allmessages" className="nav-link">All Messages</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default MyNavBar;