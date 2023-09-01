import { getUser } from '../../utilities/users-service'
import { Link } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from "react"
import { Box } from '@chakra-ui/react'
import AuthPage from "../AuthPage/AuthPage"
import HomePage from "../HomePage/HomePage"
import MyOrdersPage from "../MyOrdersPage/MyOrdersPage"
import OrderPage from "../OrderPage/OrderPage"
import ProfilePage from "../ProfilePage/ProfilePage"
import FriendsPage from "../FriendsPage/FriendsPage"
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage"
import NavBar from "../../components/NavBar/NavBar";
import * as ordersAPI from '../../utilities/orders-apis'

import { Routes, Route } from 'react-router-dom';
import { getAllUsers } from '../../utilities/users-apis';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [orders, setOrders] = useState([])

  /* Load all orders into the state */
  console.log('user:', user)

  return (
    <>
      {/*if the user is logged in, show order apge, else show the authentication*/}
      {user ?
        <Box position="absolute" h="100%">
          <Routes>
            {/*Route components in here*/}
            <Route path='/home' element={<HomePage />} />
            <Route exact path='/orders' element={<MyOrdersPage user={user} orders={orders} setOrders={setOrders}/>} />
            <Route path='/profile' element={<ProfilePage user={user} setUser={setUser}/>} />
            <Route path='/friends' element={<FriendsPage user={user} setUser={setUser}/>} />
            <Route path='/orders/:id' element={<OrderPage user={user} setUser={setUser}/>} />
            <Route path='/orders/history' element={<OrderHistoryPage />} />
          </Routes>

          <NavBar user={user} setUser={setUser}/>
        </Box>
        :
        <AuthPage setUser={setUser}/>
      }
    </>
  );
}
