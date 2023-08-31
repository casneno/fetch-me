import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react'
import { IoPersonAddSharp } from "react-icons/io5"

export default function ColaboratorCard({ user, isFriend, handleAdd, handleRemove }) {
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" h={10} mt={2} pr={1} pl={3} border='1px' borderColor='gray.200' borderRadius="5px" >
        <Text>{user.name}</Text>

        {isFriend
          ?
          <Button leftIcon={<IoPersonAddSharp />} colorScheme='blue' size='sm' onClick={() => handleRemove(user._id)}>Remove</Button>
          :
          <Button leftIcon={<IoPersonAddSharp />} colorScheme='blue' size='sm' onClick={() => handleAdd(user._id)}>Add</Button>
        }
        
        </Box>
    </Box>
  )
}