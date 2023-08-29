import { useState } from 'react';
import { Box, Button, ButtonGroup, Input } from '@chakra-ui/react'
import { IoPersonAddSharp } from "react-icons/io5"
import ColaboratorCard from '../ColaboratorCard/ColaboratorCard';
import * as ordersAPI from '../../utilities/orders-apis'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel
} from '@chakra-ui/react'

/* --------------------------------------------------------------------------- */

export default function NewCart({ user, orders, setOrders }) {
  const [newOrder, setNewOrder] = useState({
    name: '',
    owner: user._id,
    colaborators: [],
    orderItems: [],
    isPaid: false
  })

  const { isOpen, onOpen, onClose } = useDisclosure()

  async function handleChange(evt) {
    setNewOrder({ ...newOrder, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const addedOrder = await ordersAPI.createNewOrder(newOrder)
      setOrders([...orders, addedOrder])
    } catch {
      console.error('Unable to Create Order')
    }
  }


  return (
    <Box mr={2}>
      <Button onClick={onOpen}>NEW ORDER</Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>

          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>What should we name this Cart?</FormLabel>
              <Input type='text' placeholder='order name' name='name' value={newOrder.name} onChange={handleChange} variante='filled'></Input>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} type='submit' onClick={handleSubmit} w={['full']}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* <Box>
      <Input placeholder='Cart Name'></Input>
      <ColaboratorCard user={user} handleAdd={handleAddColaborators}/>
    </Box> */}
    </Box>
  )
}