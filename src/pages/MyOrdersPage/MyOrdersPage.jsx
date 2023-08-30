import SearchBar from "../../components/SearchBar/SearchBar";
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-apis'
import { Box, Button, SimpleGrid, Flex, Spacer, Center, Left, Text, Divider, } from '@chakra-ui/react'
import OrderCard from "../../components/OrderCard/OrderCard";
import NewOrder from "../../components/NewOrder/NewOrder"

/* ----------------------------------------------------- */
export default function MyOrdersPage({ user, orders, setOrders }) {
  const [newOrder, setNewOrder] = useState({
    name: '',
    owner: user._id,
    colaborators: [],
    orderItems: [],
    isPaid: false
  })

  useEffect(() => {

    async function getAllOrders() {
      const allOrders = await ordersAPI.getAllOrders()
      console.log(allOrders)
      setOrders(allOrders)
    }
    getAllOrders()

  }, [])

  /* Display only orders which I am the owner and that are not yet paid */
  const showMyOrders = orders.filter(order=> order.owner === user._id && order.isPaid===false).map((order, idx)=><OrderCard key={idx} name={order.name} orderId={order._id}/>)

  /* Display only orders with which I am colaborating and that are not yet paid */
  const showMyColabs = orders.filter(order=> order.colaborators.some(colab=>colab.toString() === user._id && order.isPaid===false)).map((order, idx)=><OrderCard key={idx} name={order.name} orderId={order._id}/>)


  return (
    <>
      <SearchBar/>
      <Box>
        <Flex>
          <Center m={2} ml={3}>
            <Text fontSize='xl'>My Orders</Text>
          </Center>
        <Spacer/>
          <NewOrder user={user} orders={orders} setOrders={setOrders} newOrder={newOrder} setNewOrder={setNewOrder}/>
        </Flex>
      </Box>
      <Divider m={2}/>
      <SimpleGrid columns={2} spacing={2}>
        {showMyOrders}
      </SimpleGrid>
      <Divider m={2}/>
            <Text fontSize='xl' position='left' m={3}>My Colaborations</Text>
      <SimpleGrid columns={2} spacing={10}>
        {showMyColabs}
      </SimpleGrid>
    </>
  )
}