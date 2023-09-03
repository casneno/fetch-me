import { Box, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter, Heading, Image, Text, Stack, Divider } from '@chakra-ui/react'

export default function ItemCard({item, orderId, addItemToOrder }){
  console.log()
  return (
    <Card 
        w={{ base: "40vw", md: "30vw" }} 
        borderWidth="1px" 
        borderRadius="lg" 
        overflow="hidden" 
        zIndex={1}
        m={2}
    >
        <Image 
            boxSize={{ base: "25vw", md: "150px" }}
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            mx="auto"
            my={2}
        />
        <Stack 
            p={4} 
            spacing='3' 
            align="center"
        >
            <Heading size={{ base: "sm", md: "md" }} textAlign="center">{item.name}</Heading>
            <Text 
                color='blue.600' 
                fontSize={{ base: "3xl", md: "2xl" }} 
                fontWeight="bold" 
                textAlign="center"
            >
                ${item.price}
            </Text>
        </Stack>
        <Divider borderColor="primary.500" />
        <CardFooter p={4} align="center">
            <Button variant='ghost' colorScheme='blue' onClick={() => addItemToOrder(item._id)}>
                Add to cart
            </Button>
        </CardFooter>
    </Card>
);

}
