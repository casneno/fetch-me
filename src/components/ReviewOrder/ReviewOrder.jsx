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
      <Button isDisabled={!order.orderItems.length} onClick={onOpen}>REVIEW ORDER</Button>
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
            {/* <Box display="flex" alignItems="center" justifyContent="space-between" h={10} mt={2} pr={1} pl={3} borderBottom='2px' borderColor='black.200'>
              <Text>Item</Text>
              <Text>Qty</Text>
              <Text>Price</Text>
            </Box>
            <VStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={0.5}
              align='stretch'
            >
              {orderReviewList}
            </VStack>
            <Box display="flex" alignItems="center" justifyContent="space-between" h={10} mt={2} pr={1} pl={3} borderTop='2px' borderColor='black.200'>
              <Text>TOTAL</Text>
              <Text>${order.orderTotal.toFixed(2)}</Text>
            </Box> */}

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