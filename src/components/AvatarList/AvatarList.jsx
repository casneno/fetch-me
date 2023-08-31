import { Avatar, Box, Button, ButtonGroup, Input, Text } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel } from '@chakra-ui/react'
import * as ordersAPI from '../../utilities/orders-apis'
import { IoPersonAddSharp } from "react-icons/io5"
import ColaboratorCard from '../ColaboratorCard/ColaboratorCard'


export default function AvatarList({ user, friends, setFriends, otherUsers, colabs, setColabs, order }) {

  const { isOpen, onOpen, onClose } = useDisclosure()

  
  // const avatars = order.colaborators.map(colab => <Avatar size="md" name={colab.name} src={colab.icon} />)

  const friendsList = friends.map(friend=><ColaboratorCard key={friend._id} user={friend} isFriend={true} handleAdd={()=> handleAdd(friend._id)} />)
  
  const otherUsersList = otherUsers.map(otherUser=><ColaboratorCard key={otherUser._id} user={otherUser} isFriend={true} handleAdd={()=> handleAdd(otherUser._id)} />)

  const colaboratorsList = colabs.map(colab => <ColaboratorCard key={colab._id} user={colab} isFriend={false} handleRemove={handleRemove} />)
  

  async function handleAdd(colabId){
    const addColab = await ordersAPI.addColab(order._id, colabId)
    console.log('neworder', addColab)
  }

  async function handleRemove(){

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
              {/* <Box>
                {colabs.length>0 ? {colaboratorsList} : <strong>This cart has no colaborators</strong>}
              </Box>
              <Box>
                <Text>Friends</Text>
                {friends.length>0 ? {friendsList} : <strong>You have no friends</strong>}
              </Box>
              <Box>
                <Text>Other Users</Text>
                {otherUsers.length > 0 ? {otherUsersList} : <strong>No more users to display</strong>}
              </Box> */}

          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Done</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}