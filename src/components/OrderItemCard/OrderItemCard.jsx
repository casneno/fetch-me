import { Box, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter, Heading, Image, Text, Stack, Divider } from '@chakra-ui/react'

export default function OrderItemCard({item, orderId, handleChangeQty}){
  console.log(orderId)
  console.log(item._id)
  console.log(item)

  return(
    <Card maxW='xs'>
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{item.name}</Heading>
          <Text color='blue.600' fontSize='2xl'> 
            Total: ${item.item.price*item.qty}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Box>
          <Button onClick={() => handleChangeQty(orderId, item._id, item.qty-1)}>-</Button>
          <Box>{item.qty}</Box>
          <Button onClick={() => handleChangeQty(orderId, item._id, item.qty+1)}>+</Button>
        </Box>
      </CardFooter>
    </Card>
  )
}