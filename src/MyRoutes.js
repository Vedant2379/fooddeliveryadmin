import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import MyDashboard from './MyDashboard'
import MyAddFood from './MyAddFood'
import MyAllFood from './MyAllFood'
import MyAllCustomer from './MyAllCustomer'
import MyAllOrder from './MyAllOrder'
import MyNavBar from './MyNavBar'
import OrderDetails from './OrderDetails'
import MyAllMessage from './MyAllMessage'


function MyRoutes() {
  return (
    <div>
        <Router>
            <MyNavBar/>
            <Routes>
                <Route path='/' element={<MyDashboard/>} />
                <Route path='/addfoods' element={<MyAddFood/>} />
                <Route path='/allfoods' element={<MyAllFood/>} />
                <Route path='/allorders' element={<MyAllOrder/>} />
                <Route path='/allcustomers' element={<MyAllCustomer/>} />
                <Route path='/allmessages' element={<MyAllMessage/>} />
                <Route path='/orderdetails/:orderid' element={<OrderDetails />} />
            </Routes>
        </Router>
    </div>
  )
}

export default MyRoutes