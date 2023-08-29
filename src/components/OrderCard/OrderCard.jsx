import { Box, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter, Heading, Image, Text, Stack, Divider } from '@chakra-ui/react'
import cartImage from '../../images/images/full_cart.png'
import { Link } from 'react-router-dom';

export default function OrderCard({ name, orderId }) {

  return (
    <Card maxH='sm' maxW='sm' _hover={{ boxShadow: 'outline' }} p={0} m={2} borderRadius={20}>
      <Link to={`/orders/${orderId}`}>
        <CardBody>
          <Image boxSize='150px'
            src={cartImage}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Divider />
          <Stack mt='2' spacing='1'>
            <Heading textAlign={['center']} size='md'>{name}</Heading>
          </Stack>
        </CardBody>
      </Link>
    </Card>
  )
}