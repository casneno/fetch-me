import { getUser } from '../../utilities/users-service'
import { Link } from 'react-router-dom';
import './App.css';
import { useState } from "react"
import AuthPage from "../AuthPage/AuthPage"
import HomePage from "../HomePage/HomePage"
import MyCartsPage from "../MyCartsPage/MyCartsPage"
import ProfilePage from "../ProfilePage/ProfilePage"
import FriendsPage from "../FriendsPage/FriendsPage"
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage"
import NavBar from "../../components/NavBar/NavBar";

import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState(getUser()); //initialize the user state to the getUser fucniton in the user-service.js. it returns the user object

  return (
    <main>
      {/*if the user is logged in, show order apge, else show the authentication*/}
      {user ?
        <>
          <NavBar user={user} setUser={setUser}/>

          <Routes>
            {/*Route components in here*/}
            <Route path='/home' element={<HomePage />} />
            <Route path='/carts' element={<MyCartsPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/friends' element={<FriendsPage />} />
            <Route path='/order/history' element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
