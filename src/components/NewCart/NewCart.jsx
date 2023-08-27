import { useState } from 'react';
import { Box, Button, ButtonGroup, Input } from '@chakra-ui/react'
import { IoPersonAddSharp } from "react-icons/io5"
import ColaboratorCard from '../ColaboratorCard/ColaboratorCard';

export default function NewCart({user}){
  const [colaborators, setColaborators] = useState([])

  function handleAddFriend(){

  }

  return(
    <Box>
      <Input></Input>
      <ColaboratorCard user={user} handleAddFriend={handleAddFriend}/>
    </Box>

  )
}