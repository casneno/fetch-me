import { getUser } from '../../utilities/users-service'
import './App.css';
import { useState, useEffect } from "react"
import About from "../../components/About/About"
import AuthPage from "../AuthPage/AuthPage"
import HomePage from "../HomePage/HomePage"
import MyOrdersPage from "../MyOrdersPage/MyOrdersPage"
import OrderPage from "../OrderPage/OrderPage"
import ProfilePage from "../ProfilePage/ProfilePage"
import FriendsPage from "../FriendsPage/FriendsPage"
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage"
import NavBar from "../../components/NavBar/NavBar";
import * as usersService from '../../utilities/users-service'
import { Routes, Route } from 'react-router-dom';
import { useBreakpointValue, Stack, Box } from "@chakra-ui/react";
import SideNavBar from "../../components/SideNavBar/SideNavBar"


export default function App() {
  const [user, setUser] = useState(getUser());
  const [orders, setOrders] = useState([])

  const isMobile = useBreakpointValue({ base: true, sm: false, md: false, lg: false });

  function handleLogout(){
    usersService.logOut();
    setUser(null);
  }

  return (
    <>
      {user ?
        <Box position="relative" w='100%' minHeight="100vh">
          <Box ml={isMobile ? "0" : "180px"} mb={isMobile ? "4em" : "0"}>
            <Routes>
                {/* <HomePage/> */}
              <Route exact path='/' element={<HomePage />} />
              <Route exact path='/orders' element={<MyOrdersPage user={user} orders={orders} setOrders={setOrders}/>} />
              <Route path='/profile' element={<ProfilePage user={user} setUser={setUser}/>} />
              <Route path='/friends' element={<FriendsPage user={user} setUser={setUser}/>} />
              <Route path='/orders/:id' element={<OrderPage user={user} setUser={setUser}/>} />
              <Route path='/orders/history' element={<OrderHistoryPage />} />
            </Routes>
          </Box>

          {isMobile ? 
            <NavBar user={user} setUser={setUser} handleLogout={()=>handleLogout()} />
            : 
            <SideNavBar user={user} setUser={setUser} handleLogout={()=>handleLogout()} />
          }

          {/* </Stack> */}
        </Box>
        :
        <AuthPage setUser={setUser}/>
      }
    </>
  );
}
