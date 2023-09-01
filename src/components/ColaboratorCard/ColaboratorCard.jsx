import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react'
import { IoPersonAddSharp, IoPersonRemoveSharp } from "react-icons/io5"

export default function ColaboratorCard({ person, isFriend, handleAdd, handleRemove }) {

  if (!person) return null;

  function handleClick() {
    if (isFriend) {
      handleRemove(person)
    } else {
      handleAdd(person)
    }
  }

  return (
    <Flex align="center" justify="space-between" minHeight="30px" h={10} mt={1} p={5} pr={2} pl={2} border='1px' borderColor='gray.200' borderRadius="5px" >
      <Flex alignItems="center" flexGrow={1}>
        <Avatar size="sm" name={person.name} src={person.icon} />
        <Text ml={3}>{person.name}</Text>
      </Flex>
      {isFriend
        ?
        <Button leftIcon={<IoPersonRemoveSharp />} colorScheme='yellow' size='sm' onClick={handleClick}>Remove</Button>
        :
        <Button leftIcon={<IoPersonAddSharp />} colorScheme='yellow' size='sm' onClick={handleClick}>Add</Button>
      }

    </Flex>
  )
}