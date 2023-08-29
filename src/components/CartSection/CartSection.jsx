import { useState, useEffect, useRef } from 'react';
import { Box, Button, Divider, SimpleGrid, Stack } from '@chakra-ui/react'
import * as itemsAPI from '../../utilities/items-apis';
import * as ordersAPI from '../../utilities/orders-apis'
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import OrderItemCard from "../../components/OrderItemCard/OrderItemCard";


export default function CartSection({user, orderId}){
  const [orderItems, setOrderItems] = useState([])

  useEffect(()=>{
    async function getOrder(orderId){
      const order = await ordersAPI.getOrder(orderId)
      setOrderItems(order.orderItems)
    }
    getOrder(orderId)
  }, [])

  async function removeItemFromOrder(itemId){
    // const remove = await ordersAPI.removeItem(itemId)
  }

  async function handleChangeQty(itemId, newQty){
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty)
    setOrderItems(updatedCart)
  }


  return(
    <Box>
      {orderItems.map((item, idx) => <OrderItemCard item={item} removeItemFromOrder={removeItemFromOrder}/>)}
    </Box>
  )
}