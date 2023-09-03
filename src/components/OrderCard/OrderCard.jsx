import { Box, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter, Flex, Heading, Image, Text, Stack, Divider, Icon } from '@chakra-ui/react'
import cartImage from '../../images/images/full_cart.png'
import { Link } from 'react-router-dom';
import { DeleteIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import * as ordersAPI from '../../utilities/orders-apis'

export default function OrderCard({ name, orderId, isOwner, isDeleteMode, onDelete }) {

  function handleClick(evt) {
    if (isDeleteMode && isOwner) {
      evt.preventDefault();
      onDelete(orderId);
    }
  };


  return (
    <Card 
      w={['40vw', '25vw', '12rem']}  // Increased square card sizes
      h={['40vw', '25vw', '12rem']} 
      _hover={{ boxShadow: 'outline' }} 
      p={0} 
      m="8px" 
      borderRadius="20px"  
      onClick={handleClick}
      position="relative"  
    >
      <CardBody>
        {isDeleteMode && isOwner && (
          <Button 
            position="absolute" 
            top="5px"  
            right="5px" 
            borderRadius="50%" 
            size="sm" 
            colorScheme="red"
          >
            <Icon as={DeleteIcon} />
          </Button>
        )}
        <Link to={`/orders/${orderId}`}>
          <Image 
            boxSize='80%' 
            objectFit="cover"  
            src={cartImage} 
            alt='Shopping Cart' 
            borderRadius="10px"
            mx="auto" 
          />
          <Divider />
          <Stack mt='8px' spacing='4px'>
            <Heading 
              textAlign={['center']} 
              size='md'
              isTruncated 
              noOfLines={2} 
            >
              {name}
            </Heading>
          </Stack>
        </Link>
      </CardBody>
    </Card>
  )

  
}