import { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useBreakpointValue } from '@chakra-ui/react';
import * as ordersAPI from '../../utilities/orders-apis';

export default function NewCart({ user, orders, setOrders, newOrder, setNewOrder }) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' })

  function handleChange(evt) {
    setNewOrder({ ...newOrder, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const addedOrder = await ordersAPI.createNewOrder(newOrder);
      setOrders([...orders, addedOrder]);
    } catch {
      console.error('Unable to Create Order');
    }
  }

  const handleCreateandClose = (evt) => {
    handleSubmit(evt);
    onClose();
  };

  return (
    <Box mr={2}>
      <Button colorScheme="primary" onClick={onOpen} variant="outline" size={buttonSize} /* w="150px" h="40px" */>New Order</Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="white" color="primary.700">
          <ModalHeader>Create a New Order</ModalHeader>
          <ModalCloseButton color="primary.700" />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>What should we name this order?</FormLabel>
              <Input 
                type='text' 
                placeholder='Make it distinguishable...' 
                name='name' 
                value={newOrder.name} 
                onChange={handleChange} 
                variant='filled' 
                borderColor="primary.500"
                focusBorderColor="primary.700"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='primary' mr={3} type='submit' onClick={handleCreateandClose} w={['full']}>
              Create
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
