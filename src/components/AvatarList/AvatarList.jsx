import { Avatar, Box, Button, ButtonGroup, Input, Text } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel } from '@chakra-ui/react'
import { IoPersonAddSharp } from "react-icons/io5"
import ColaboratorCard from '../ColaboratorCard/ColaboratorCard'


export default function AvatarList({ user, friends, setFriends, otherUsers, colabs, setColabs, order }) {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const avatars = order.colaborators.map(colab => <Avatar size="md" name={colab.name} src={colab.icon} />)

  const friend = friends.map(friend=><ColaboratorCard key={friend._id} user={friend} handleAdd={handleAdd} />)
  
  const otherUser = otherUsers.map(otherUser=><ColaboratorCard key={otherUser._id} user={otherUser} handleAdd={handleAdd} />)
  

  async function handleAdd(){

  }

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" h={10} mt={2} pr={1} pl={3} border='1px' borderColor='gray.200' borderRadius="5px" >
      {avatars}
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
                {friend}
              </Box>
              <Box>
                {otherUser}
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