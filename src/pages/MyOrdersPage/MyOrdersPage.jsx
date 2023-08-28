import SearchBar from "../../components/SearchBar/SearchBar";
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-apis'
import { Box, Button } from '@chakra-ui/react'
import OrderCard from "../../components/OrderCard/OrderCard";
import NewOrder from "../../components/NewOrder/NewOrder"

/* ----------------------------------------------------- */
export default function MyOrdersPage({ user, orders, setOrders }) {
  const [myOrders, setMyOrders] = useState([])

  // useEffect(() => {
  //   async function getAllOrders() {
  //     const allOrders = await ordersAPI.getAllOrders()
  //     console.log(allOrders)
  //     setOrders(allOrders)
  //   }
  //   getAllOrders()

  // }, [])

  const showMyOrders = orders.filter(order=> order.owner === user._id).map((order, idx)=><OrderCard/>)

  const showMyColabs = orders.filter(order=> order.colaborators.some(colab=>colab.toString() === user._id)).map((order, idx)=><OrderCard/>)

  console.log('my orders:', showMyOrders) 
  console.log(showMyOrders)
  console.log(showMyColabs)
  

  // function showMyColabs(orders) {
  //   return orders.filter({ colaborators: user._id })
  // }

  // async function addNewOrder() {
  //   const newOrder = await ordersAPI.addNewOrder()
  //   setOrders([...orders, newOrder])
  // }

  return (
    <>
      <SearchBar />
      <h1>My Orders Page</h1>
      <Box>
        <h2>My Orders</h2>
        {showMyOrders}
        <NewOrder user={user} orders={orders} setOrders={setOrders}/>
      </Box>
      <Box>
        <h2>My Colaborations</h2>
        {showMyColabs}
      </Box>
    </>
  )
}