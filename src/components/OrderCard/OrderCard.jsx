import { Box, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter, Heading, Image, Text, Stack, Divider } from '@chakra-ui/react'
import cartImage from '../../images/images/full_cart.png'

export default function OrderCard() {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image boxSize='150px'
          src={cartImage}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>Cart</Heading>

        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
          <Button variant='ghost' colorScheme='blue'>
            Select Cart
          </Button>
      </CardFooter>
    </Card>
  )
}