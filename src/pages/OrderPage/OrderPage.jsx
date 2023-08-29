import { useState, useEffect, useRef } from 'react';
import { Box, Button, Divider, SimpleGrid, Stack } from '@chakra-ui/react'
import ShoppingSection from "../../components/ShoppingSection/ShoppingSection"
import CartSection from "../../components/CartSection/CartSection";

/* ----------------------------------------------------- */
export default function OrderPage({ user, orders, setOrders }) {
  const [switchView, setSwitchView] = useState(true);

  const switchComponentView = () => {
    setSwitchView(!switchView)}

    console.log(switchView)

  return (
    <>
      <Button onClick={switchComponentView}>Change Section</Button>
      {switchView ?
      <ShoppingSection user={user}/>
      :
      <CartSection user={user}/>
      }

    </>
  )
}