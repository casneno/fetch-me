import { useState, useEffect, useRef } from 'react';
import { Box, Button, Divider, SimpleGrid, Stack } from '@chakra-ui/react'
import * as itemsAPI from '../../utilities/items-apis';
import * as ordersAPI from '../../utilities/orders-apis'
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import OrderItemCard from "../../components/OrderItemCard/OrderItemCard";


export default function CartSection({user, orderId}){
  const [orderItems, setOrderItems] = useState([])

  /* get the order information */
  useEffect(()=>{
    async function getOrder(orderId){
      const order = await ordersAPI.getOrder(orderId)
      setOrderItems(order.orderItems)
    }
    getOrder(orderId)
  }, [])

  /* increases or decreases the item quantity in the order. Also removes the item from the order if the quantity is 0 */
  async function handleChangeQty(orderId, itemId, newQty){
    const updatedCart = await ordersAPI.setItemQuantity(orderId, itemId, newQty)
    setOrderItems(...orderItems, updatedCart)
  }

  return(
    <Box>
      {orderItems.map((item, idx) => <OrderItemCard item={item} orderId={orderId} handleChangeQty={handleChangeQty}/>)}
    </Box>
  )
}