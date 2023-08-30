import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import { IoPersonAddSharp } from "react-icons/io5"

export default function ColaboratorCard({user, handleAdd}){
  return(
    <Box display="flex" alignItems="center" justifyContent="space-between" h={10} mt={2} pr={1} pl={3} border='1px' borderColor='gray.200' borderRadius="5px" >
      <Box>{user.name}</Box>
      {handleAdd ?
      <Button leftIcon={<IoPersonAddSharp />} colorScheme='blue' size='sm' onClick={()=> handleAdd(user._id)}>Add</Button>
      :
      ''
      }
    </Box>
  )
}