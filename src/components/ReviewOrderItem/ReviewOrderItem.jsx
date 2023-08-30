import { Box, Button, ButtonGroup, Text, HStack, Tr, Td } from '@chakra-ui/react'

export default function ReviewOrderItem({order, orderItem}){
  console.log('order', order)
  return(
    <>
    <Tr>
      <Td>{orderItem.item.name}</Td>
      <Td>{orderItem.qty}</Td>
      <Td>${orderItem.extPrice.toFixed(2)}</Td>
    </Tr>
    


    
    {/* <Box display="flex" alignItems="center" justifyContent="space-between" h={10} mt={2} pr={1} pl={3}>
      <Box>{orderItem.item.name}</Box>
      <Box>{orderItem.qty}</Box>
      <Box>${orderItem.extPrice.toFixed(2)}</Box>
    </Box> */}
    </>
  )
}