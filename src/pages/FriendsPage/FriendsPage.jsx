import ColaboratorCard from '../../components/ColaboratorCard/ColaboratorCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useState, useEffect } from 'react';
import * as usersAPI from '../../utilities/users-apis'
import { Avatar, Box, Button, ButtonGroup, Divider } from '@chakra-ui/react'
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
        const strangers = allUsers.filter(obj=> !user.friends.some(friend=> friend === obj._id))
        setFriends(getUser.friends)
        setStrangers(strangers)
      } catch (error){
        console.error(error)
      }
    }
    getAllUsers()
  }, [])

  async function handleAdd(friendId){
    const allUsers = await usersAPI.getAllUsers();
    const updatedUser = await usersAPI.addFriend(friendId, user._id)
    setFriends(updatedUser.friends)
    const strangers = allUsers.filter(obj=> !updatedUser.friends.map(friend=> friend._id).includes(user._id))
    setStrangers(strangers)
    setUser(updatedUser)
  }

  async function handleRemove(friendId){
    const updatedUser = await usersAPI.removeFriend(friendId, user._id)
    setFriends(updatedUser.friends)
    setUser(updatedUser)
  }

  console.log('strangers',strangers)
  console.log('friends', friends)
    /* -------- HANDLE DISPLAY -------- */
  let friendsList = <strong>Sorry, but you have no friends at the moment</strong>

  if (friends.length > 0) {
    friendsList = friends.map(friend => 
    <Box>
      <ColaboratorCard key={user._id} person={friend} isFriend={true} handleRemove={handleRemove}/>
    </Box>
    )
  }

  let otherUsersList = <strong>Sorry, but there are no users at the moment</strong>

  if (strangers.length > 0) {
    otherUsersList = strangers.map(stranger => 
    <Box>
      <ColaboratorCard key={user._id} person={stranger} isFriend={false} handleAdd={handleAdd}/>
    </Box>
    )
  }

  return(
    <>
      <h1>Friends Page</h1>
      <SearchBar setSearch={setSearch}/>
      <Box m={2}>My Friends</Box>
      <Divider />
      {friendsList}
      <Box m={2} >Other Users</Box>
      <Divider />
      {otherUsersList}
    </>
  )
}