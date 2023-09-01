import { Box, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter, Heading, Image, Text, Stack, Divider, Icon } from '@chakra-ui/react'
import cartImage from '../../images/images/full_cart.png'
import { Link } from 'react-router-dom';
import { DeleteIcon } from '@chakra-ui/icons'
import {useState} from 'react';
import * as ordersAPI from '../../utilities/orders-apis'

export default function OrderCard({ name, orderId, handleDelete }) {
  const [showDelete, setShowDelete] = useState(false);



  return (
    <Card maxH='sm' maxW='sm' _hover={{ boxShadow: 'outline' }} p={0} m={2} borderRadius={20} onMouseEnter={() => setShowDelete(true)} onMouseLeave={() => setShowDelete(false)} onClick={()=>handleDelete(orderId)}>
      {showDelete && (<Button position="absolute" top="5px" right="5px" borderRadius="50%" size="sm" colorScheme="red">
      <Icon as={DeleteIcon} />
      </Button>)}
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