import { Avatar, Box, Button, ButtonGroup, Input, Text } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel } from '@chakra-ui/react'
import * as ordersAPI from '../../utilities/orders-apis'
import { IoPersonAddSharp } from "react-icons/io5"
import ColaboratorCard from '../ColaboratorCard/ColaboratorCard'
import { useState} from 'react';


export default function AvatarList({ user, friends, setFriends, otherUsers, colabs, setColabs, order }) {
  const [refetch, setRefetch] = useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const avatars = colabs.map(colab => <Avatar size="md" name={colab.name||'Unnamed User'} src={colab.icon} />)

  /* ---------------------------- DISPLAY FILTERS ---------------------- */

  const colabIds = colabs.map(colab => colab._id);
  const friendIds = friends.map(friend => friend._id);
  const filteredFriends = friends.filter(friend => !colabIds.includes(friend._id));
  const filteredOtherUsers = otherUsers.filter(otherUser => !colabIds.includes(otherUser._id) && !friendIds.includes(otherUser._id) && otherUser._id !== user._id);
  
  const friendsList = filteredFriends.map(friend=><ColaboratorCard key={friend._id} person={friend} isFriend={false} handleAdd={()=> handleAdd(friend._id)} />)
  
  const otherUsersList = filteredOtherUsers.map(otherUser=><ColaboratorCard key={otherUser._id} person={otherUser} isFriend={false} handleAdd={()=> handleAdd(otherUser._id)} />)

  const colaboratorsList = colabs.map(colab => (<ColaboratorCard key={colab._id} person={colab} isFriend={true} handleRemove={()=>handleRemove(colab._id)} />));
  
  /* ---------------------------- EVENT HANDLERS --------------------------- */

  async function handleAdd(colabId){
    try{
      const updatedOrder = await ordersAPI.addColab(order._id, colabId)
      setColabs(updatedOrder.colaborators)
    } catch (err) {
      console.error(err)
    }
  }

  async function handleRemove(colabId){
    try{
      const updatedOrder = await ordersAPI.removeColab(order._id, colabId)
      setColabs(updatedOrder.colaborators)
    } catch (err) {
      console.error(err)
    }
  }


  return (
    <Box position="sticky" top={0} display="flex" alignItems="center" justifyContent="space-between" h={10} mt={2} p={8} pr={3} border='1px' borderColor='gray.200' borderRadius="5px" >
      {colabs.length > 0
      ?
      <Box>
        <Avatar size="md" name={order.owner.name} src={order.owner.icon} />
        {avatars}
      </Box>
      :
      <strong>No orders to display</strong>
      }
      <Button onClick={onOpen}>Add Colaborator</Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>

          <ModalHeader>
            <Text>Add Colaborators</Text>
            <ModalCloseButton />
          </ModalHeader>

          <ModalBody pb={6}>
              <Box>
                {colabs.length > 0 ? colaboratorsList : <strong>This cart has no colaborators</strong>}
              </Box>
              <Box>
                <Text>Friends</Text>
                {friends.length > 0 ? friendsList : <strong>You have no friends</strong>}
              </Box>
              <Box>
                <Text>Other Users</Text>
                {otherUsers.length > 0 ? otherUsersList : <strong>No more users to display</strong>}
              </Box>

          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Done</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}