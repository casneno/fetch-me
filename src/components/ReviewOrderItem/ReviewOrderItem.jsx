import { Box, Button, ButtonGroup, Text, HStack, Tr, Td } from '@chakra-ui/react'

export default function ReviewOrderItem({order, orderItem}){

  return(
    <>
      <Tr 
          bg="gray.50" 
          borderBottom="1px solid gray.200" 
          _hover={{ bg: "gray.100" }}
      >
        <Td 
            fontSize="md" 
            fontWeight="medium" 
            p={4} 
            textAlign="left"
        >
          {orderItem.item.name}
        </Td>
        <Td 
            fontSize="md" 
            p={4} 
            textAlign="center"
        >
          {orderItem.qty}
        </Td>
        <Td 
            fontSize="md" 
            fontWeight="medium" 
            p={4} 
            textAlign="right"
        >
          ${orderItem.extPrice.toFixed(2)}
        </Td>
      </Tr>
    </>
  )
}