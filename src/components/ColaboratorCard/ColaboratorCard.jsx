import { Avatar, Box, Button, ButtonGroup, Text } from '@chakra-ui/react'
import { IoPersonAddSharp, IoPersonRemoveSharp } from "react-icons/io5"

export default function ColaboratorCard({ person, isFriend, handleAdd, handleRemove }) {

  return (
    <Box>
      <Box display="flex" alignItems="center"  justifyContent="space-between" h={10} mt={2} pr={1} pl={3} border='1px' borderColor='gray.200' borderRadius="5px" >
        <Avatar size="sm" name={person.name} src={person.icon} />
        <Text textAlign='left'>{person.name}</Text>
        {isFriend
          ?
          <Button leftIcon={<IoPersonRemoveSharp />} colorScheme='blue' size='sm' onClick={() => handleRemove(person._id)}>Remove</Button>
          :
          <Button leftIcon={<IoPersonAddSharp />} colorScheme='blue' size='sm' onClick={() => handleAdd(person._id)}>Add</Button>
        }
        
        </Box>
    </Box>
  )
}