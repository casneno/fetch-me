import ColaboratorCard from '../../components/ColaboratorCard/ColaboratorCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useState, useEffect } from 'react';
import * as usersAPI from '../../utilities/users-apis'
import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import { IoPersonAddSharp } from "react-icons/io5"

export default function FriendsPage({user, setUser}){
  const [strangers, setStrangers] = useState([]) //other users
  const [friends, setFriends] = useState([]) //user friends
  const [search, setSearch] = useState('')

  
  useEffect(()=>{
    async function getAllUsers(){
      try{
        const allUsers = await usersAPI.getAllUsers();
        const getUser = await usersAPI.getUser(user._id)
        setFriends(getUser.friends)
        const filteredUsers = allUsers.filter(obj=> !user.friends.some(friend=> friend === obj._id))
        setStrangers(filteredUsers)
      } catch (error){
        console.error(error)
      }
    }
    getAllUsers()
  }, [])


  async function handleAdd(friendId){
    const allUsers = await usersAPI.getAllUsers()
    const updatedUser = await usersAPI.addFriend(friendId, user._id)
    setFriends(updatedUser.friends)
    const strangers = allUsers.filter(user => !updatedUser.friends.includes(user._id))
    setStrangers(strangers)
    setUser(updatedUser)
  }

  async function handleRemove(friendId){

  }

  let friendsList = <strong>Sorry, but you have no friends at the moment</strong>

  if (friends.length > 0) {
    friendsList = friends.map(user => 
    <Box>
      <ColaboratorCard key={user._id} user={user} isFriend={true} handleRemove={handleRemove}/>
    </Box>
    )
  }

  let otherUsersList = <strong>Sorry, but there are no users at the moment</strong>

  if (strangers.length > 0) {
    otherUsersList = strangers.map(user => 
    <Box>
      <ColaboratorCard key={user._id} user={user} isFriend={false} handleAdd={handleAdd}/>
    </Box>
    )
  }

  return(
    <>
      <h1>Friends Page</h1>
      <SearchBar setSearch={setSearch}/>
      My Friends
      {friendsList}
      Other Users
      {otherUsersList}
    </>
  )
}