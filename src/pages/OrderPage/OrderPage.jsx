import { useState, useEffect, useRef, } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, AvatarBadge, AvatarGroup, Box, Button, Divider, SimpleGrid, Stack } from '@chakra-ui/react'
import * as usersAPI from '../../utilities/users-apis';
import * as ordersAPI from '../../utilities/orders-apis'
import ShoppingSection from "../../components/ShoppingSection/ShoppingSection"
import CartSection from "../../components/CartSection/CartSection";
import AvatarList from "../../components/AvatarList/AvatarList"

/* ----------------------------------------------------- */
export default function OrderPage({ user, setUser }) {
  const [switchView, setSwitchView] = useState(true);
  const [order, setOrder] = useState([])
  const [users, setUsers] = useState([])
  const [friends, setFriends] = useState([])
  const [otherUsers, setOtherUsers] = useState([])
  const [colabs, setColabs] = useState([])
  const orderId = useParams().id

  useEffect(() => {

    async function getOrder(orderId) {
      try{
        const getOrder = await ordersAPI.getOrder(orderId)
        setOrder(getOrder)
        setColabs(getOrder.colaborators)
      } catch (err) {
        console.error(err)
      }
    }
    
    async function setAllUserStates(){
      try{
        const allUsers = await usersAPI.getAllUsers();
        const populatedUser = await usersAPI.getUser(user._id)
        const filteredUsers = allUsers.filter(obj=> !user.friends.some(friend=> friend === obj._id))
        setUsers(allUsers)
        setFriends(populatedUser.friends)
        setOtherUsers(filteredUsers)
      } catch (err){
        console.error(err)
      }
    }

    getOrder(orderId)
    setAllUserStates()

}, [])

  const switchComponentView = () => {
    setSwitchView(!switchView)
  }

  return (
    <>
      
      <AvatarList order={order} friends={friends} otherUsers={otherUsers} colabs={colabs} setColabs={setColabs} />

      <Button alignItems="center" onClick={switchComponentView}>Change Section</Button>
      {switchView ?
        <ShoppingSection user={user} orderId={orderId} order={order} setOrder={setOrder} />
        :
        <CartSection user={user} orderId={orderId} order={order} setOrder={setOrder} />
      }

    </>
  )
}