import { Box, Button, Flex, Center, ButtonGroup, Card, CardHeader, CardBody, CardFooter, Heading, Image, Text, Stack, Divider, HStack } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'; // Assuming Chakra UI v2.0 or later

export default function OrderItemCard({ item, orderId, handleChangeQty }) {
  return (
    <Card
      maxW='xs'
      bgGradient="linear(to-br, gray.100, gray.200)"
      borderRadius="md"
      boxShadow="xl"
      overflow="hidden"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
      zIndex={0}
      h="250px" // Adjusted height
      m={2}
    >
      {item.item.emoji && (
        <Box m={1}>
          <Image
            src={item.item.emoji}
            alt={item.item.name}
            objectFit="cover"
            w="100%"
            h="100px"
          />
        </Box>
      )}
        <CardBody>
          <Stack spacing={2}>
            <Center>
              <Heading size='sm'>
                {item.item.name}
              </Heading>
            </Center>

            <HStack spacing={4}>
              <Button
                size="xs"
                colorScheme="blue"
                variant="outline"
                leftIcon={<MinusIcon />}
                onClick={() => handleChangeQty(orderId, item._id, item.qty - 1)}
              />

              <Box fontWeight="bold">{item.qty}</Box>

              <Button
                size="xs"
                colorScheme="blue"
                variant="outline"
                rightIcon={<AddIcon />}
                onClick={() => handleChangeQty(orderId, item._id, item.qty + 1)}
              />
            </HStack>
          </Stack>
        </CardBody>

      <Divider />

      <Flex justify="center" align="center" height="25%"> {/* Center the CardFooter content */}
        <CardFooter>
          <Text color='blue.600' fontSize='xl'>
            Total: ${item.extPrice.toFixed(2)}
          </Text>
        </CardFooter>
      </Flex>
    </Card>
  );
}