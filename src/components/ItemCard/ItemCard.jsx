import { Box, Button, ButtonGroup, Flex, Card, CardHeader, CardBody, CardFooter, Heading, Image, Text, VStack, Divider } from '@chakra-ui/react'

export default function ItemCard({item, orderId, addItemToOrder }){

  return (
    <Card 
      w='40vw'  // adjusted width
      bgGradient="linear(to-br, gray.100, gray.200)"
      borderRadius="md"
      boxShadow="xl"
      overflow="hidden"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
      zIndex={1}
      h="200px" // Fixed height to match the other card
      m={2}
    >
      <Image 
        src={item.emoji}
        alt={item.name}
        objectFit="cover"
        w="100%"
        h="90px"
        mx="auto"
      />
      
      <VStack
        p={2} 
        spacing='2' 
      >
        <Heading size={{ base: "sm", md: "md" }} textAlign="center">{item.name}</Heading>
        <Text 
          color='blue.600' 
          fontSize={{ base: "xl", md: "xl" }} 
          textAlign="center"
        >
          ${item.price}
        </Text>
      </VStack>
  
      <Divider borderColor="primary.500" />
  
      <Flex justify="center" align="center" height="25%">
          <Button variant='ghost' colorScheme='blue' onClick={() => addItemToOrder(item._id)}>
        <CardFooter p={4}>
            Add to cart
        </CardFooter>
          </Button>
      </Flex>
    </Card>
  );
  

}
