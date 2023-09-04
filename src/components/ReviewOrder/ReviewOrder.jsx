import { useState } from 'react';
import { Box, Button, ButtonGroup, Input, Text, VStack, StackDivider, Table, Thead, Tbody, Tfoot, Th, Td, Tr, TableContainer } from '@chakra-ui/react'
import { IoPersonAddSharp } from "react-icons/io5"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel } from '@chakra-ui/react'
import ReviewOrderItem from '../../components/ReviewOrderItem/ReviewOrderItem'

export default function ReviewOrder({ order, orderItems }) {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const orderReviewList = orderItems.map((orderItem, idx) => <ReviewOrderItem key={idx} order={order} orderItem={orderItem} />)

  function handleCheckout() {
    console.log('HERE')
  }

  return (
    <>
      <Button position='fixed' top='17vh' w='90vw' isDisabled={!order.orderItems.length} onClick={onOpen}>REVIEW ORDER</Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {order.name}
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody pb={6}>
          <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Item</Th>
        <Th>Qty</Th>
        <Th isNumeric>Price</Th>
      </Tr>
    </Thead>
    <Tbody>
        {orderReviewList}
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>TOTAL</Th>
        <Th></Th>
        <Th isNumeric>${order.orderTotal.toFixed(2)}</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
            

          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} type='submit' onClick={handleCheckout} w={['full']}>
              Go to Checkout
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}