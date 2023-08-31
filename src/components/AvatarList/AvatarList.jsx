import { Avatar, Box, Button, ButtonGroup, Input, Text } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel } from '@chakra-ui/react'
import * as ordersAPI from '../../utilities/orders-apis'
import { IoPersonAddSharp } from "react-icons/io5"
import ColaboratorCard from '../ColaboratorCard/ColaboratorCard'


export default function AvatarList({ user, friends, setFriends, otherUsers, colabs, setColabs, order }) {

  const { isOpen, onOpen, onClose } = useDisclosure()

  
  // const avatars = order.colaborators.map(colab => <Avatar size="md" name={colab.name} src={colab.icon} />)

  const colabIds = colabs.map(colab => colab._id);
  const filteredFriends = friends.filter(friend => !colabIds.includes(friend._id));
  const filteredOtherUsers = otherUsers.filter(otherUser => !colabIds.includes(otherUser._id));

  const friendsList = filteredFriends.map(friend=><ColaboratorCard key={Math.random()*1000} user={friend} isFriend={false} handleAdd={()=> handleAdd(friend._id)} />)
  
  const otherUsersList = filteredOtherUsers.map(otherUser=><ColaboratorCard key={Math.random()*1000} user={otherUser} isFriend={false} handleAdd={()=> handleAdd(otherUser._id)} />)

  const colaboratorsList = colabs.map(colab => (<ColaboratorCard key={Math.random()*1000} user={colab} isFriend={true} handleRemove={()=>handleRemove(colab._id)} />));
  

  async function handleAdd(colabId){
    try{
      const updatedOrder = await ordersAPI.addColab(order._id, colabId)
      console.log('neworder', updatedOrder)
      setColabs(updatedOrder.colaborators)
    } catch (err) {
      console.error(err)
    }
  }

  async function handleRemove(colabId){
    const updatedOrder = await ordersAPI.removeColab(order._id, colabId)
    setColabs(updatedOrder.colaborators)
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" h={10} mt={2} p={8} pr={3} border='1px' borderColor='gray.200' borderRadius="5px" >
      {order.length > 0
      ?
      <Avatar size="md" name={order.owner.name} src={order.owner.icon} />
      /* {avatars} */
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
                {colabs.length>0 ? colaboratorsList : <strong>This cart has no colaborators</strong>}
              </Box>
              <Box>
                <Text>Friends</Text>
                {friends.length>0 ? friendsList : <strong>You have no friends</strong>}
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