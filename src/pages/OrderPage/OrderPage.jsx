import { useState, useEffect, useRef, } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, AvatarBadge, AvatarGroup, Box, Button, Divider, SimpleGrid, Stack } from '@chakra-ui/react'
import * as usersAPI from '../../utilities/users-apis';
import * as itemsAPI from '../../utilities/items-apis';
import * as ordersAPI from '../../utilities/orders-apis'
import ShoppingSection from "../../components/ShoppingSection/ShoppingSection"
import CartSection from "../../components/CartSection/CartSection";
import AvatarList from "../../components/AvatarList/AvatarList"

/* ----------------------------------------------------- */
export default function OrderPage({ user }) {
  const [switchView, setSwitchView] = useState(true);
  const [order, setOrder] = useState([])
  const [users, setUsers] = useState([])
  const [friends, setFriends] = useState([])
  const [otherUsers, setOtherUsers] = useState([])
  const [colabs, setColabs] = useState()
  const orderId = useParams().id

  useEffect(() => {
    async function getOrder(orderId) {
      const getOrder = await ordersAPI.getOrder(orderId)
      setOrder(getOrder)
    }
    getOrder(orderId)
    
    async function getAllUsers(){
      try{
        const allUsers = await usersAPI.getAllUsers();
        const otherUsers = allUsers.filter(obj=> !user.friends.some(friend=> friend === obj._id))
        setFriends(user.friends)
        setUsers(allUsers)
        setOtherUsers(otherUsers)
      } catch (error){
        console.error(error)
      }
    }
    getAllUsers()
  }, [])

  const switchComponentView = () => {
    setSwitchView(!switchView)
  }

  console.log('params', orderId)

  console.log('user:', user)
  console.log('friends:', friends)
  console.log('otherUsers:', otherUsers)
  console.log('order:', order)

  return (
    <>
      
      <AvatarList order={order} friends={friends} setFriends={setFriends} otherUsers={otherUsers} colabs={colabs} setColabs={setColabs} />

      <Button onClick={switchComponentView}>Change Section</Button>
      {switchView ?
        <ShoppingSection user={user} orderId={orderId} order={order} setOrder={setOrder} />
        :
        <CartSection user={user} orderId={orderId} order={order} setOrder={setOrder} />
      }

    </>
  )
}