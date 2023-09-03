import { useState, useEffect, useRef } from 'react';
import { Box, Flex, Button, Divider, SimpleGrid, Stack} from '@chakra-ui/react'
import * as itemsAPI from '../../utilities/items-apis';
import * as ordersAPI from '../../utilities/orders-apis'
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import OrderItemCard from "../../components/OrderItemCard/OrderItemCard";
import ReviewOrder from "../../components/ReviewOrder/ReviewOrder";


export default function CartSection({user, orderId, order, setOrder}){
  const [orderItems, setOrderItems] = useState(order.orderItems)

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
    const updatedOrder = await ordersAPI.setItemQuantity(orderId, itemId, newQty)
    setOrderItems(updatedOrder.orderItems)
    setOrder(updatedOrder)
  }

  let showOrderItems = <strong>This Order currently has no items</strong>


  if (orderItems.length > 0) {
    showOrderItems = orderItems.map((item, idx) => <OrderItemCard key={idx} item={item} orderId={orderId} handleChangeQty={handleChangeQty}/>)
  }

  return(
    <Flex direction="column" alignItems='center'>
      <ReviewOrder order={order} orderItems={orderItems}/>
      <Divider m={2}/>
      <Flex 
            direction="row" 
            wrap="wrap" 
            overflowY="auto"  
            mt="20vh" 
            maxHeight="calc(100vh - 10vh)"
            h="60vh"
            w='100vw'
            justify='center'
        >
        {showOrderItems}
        </Flex>
    </Flex>
  )
}