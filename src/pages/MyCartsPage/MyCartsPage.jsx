import SearchBar from "../../components/SearchBar/SearchBar";
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-apis'
import { Box, Button } from '@chakra-ui/react'

export default function MyOrdersPage({user}){
  const [orders, setOrders] = useState([])

  useEffect(()=>{
    async function getAllOrders(){
      const allUserOrders = await ordersAPI.getAllOrders(user._id)
      setOrders(allUserOrders)
    }
    getAllOrders()
    async function getUserOrders(){

    }

  })
  
  async function addNewOrder(){
    const newOrder = await ordersAPI.addNewOrder()
    setOrders([...orders, newOrder])
  }

  return(
    <>
      <h1>My Orders Page</h1>
      <Box>
        <Button>ADD CART</Button>
      </Box>
      <SearchBar/>
    </>
  )
}