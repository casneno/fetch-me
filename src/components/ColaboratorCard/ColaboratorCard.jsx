import { Avatar, Box, Button, ButtonGroup, Text } from '@chakra-ui/react'
import { IoPersonAddSharp, IoPersonRemoveSharp } from "react-icons/io5"

export default function ColaboratorCard({ person, isFriend, handleAdd, handleRemove }) {

  if (!person) return null;
  
  function handleClick(){
    if (isFriend) {
      handleRemove(person)
    } else {
      handleAdd(person)
    }
  }

  return (
      <Box display="flex" alignItems="center"  justifyContent="space-between" h={10} mt={2} pr={1} pl={3} border='1px' borderColor='gray.200' borderRadius="5px" >
        <Avatar size="sm" name={person.name} src={person.icon} />
        <Text textAlign='left'>{person.name}</Text>
        {isFriend
          ?
          <Button leftIcon={<IoPersonRemoveSharp />} colorScheme='yellow' size='sm' onClick={handleClick}>Remove</Button>
          :
          <Button leftIcon={<IoPersonAddSharp />} colorScheme='yellow' size='sm' onClick={handleClick}>Add</Button>
        }
        
        </Box>
  )
}