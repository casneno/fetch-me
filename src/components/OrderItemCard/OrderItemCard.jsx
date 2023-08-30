import { Box, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter, Heading, Image, Text, Stack, Divider, HStack } from '@chakra-ui/react'

export default function OrderItemCard({item, orderId, handleChangeQty}){
  return(
    <Card maxW='xs'>
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>
            {item.item.name}
          </Heading>
        <HStack>
          <Button onClick={() => handleChangeQty(orderId, item._id, item.qty-1)}>-</Button>
          <Box>{item.qty}</Box>
          <Button onClick={() => handleChangeQty(orderId, item._id, item.qty+1)}>+</Button>
        </HStack>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
          <Text color='blue.600' fontSize='2xl'> 
            Total: ${item.extPrice.toFixed(2)}
          </Text>
      </CardFooter>
    </Card>
  )
}