import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Divider, SimpleGrid, Stack } from '@chakra-ui/react'
import * as itemsAPI from '../../utilities/items-apis';
import * as ordersAPI from '../../utilities/orders-apis'
import ShoppingSection from "../../components/ShoppingSection/ShoppingSection"
import CartSection from "../../components/CartSection/CartSection";

/* ----------------------------------------------------- */
export default function OrderPage({ user }) {
  const [switchView, setSwitchView] = useState(true);
  const [order, setOrder] = useState([])
  const params = useParams().id

useEffect(()=>{
  async function getOrder(orderId){
    const getOrder = await ordersAPI.getOrder(orderId)
    setOrder(getOrder)
  }
  getOrder(params)
}, [])

  const switchComponentView = () => {
    setSwitchView(!switchView)}



  return (
    <>
      <Button onClick={switchComponentView}>Change Section</Button>
      {switchView ?
      <ShoppingSection user={user} orderId={params} order={order} setOrder={setOrder}/>
      :
      <CartSection user={user} orderId={params} order={order} setOrder={setOrder}/>
      }

    </>
  )
}