import ColaboratorCard from '../../components/ColaboratorCard/ColaboratorCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useState, useEffect } from 'react';
import * as usersAPI from '../../utilities/users-apis'
import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import { IoPersonAddSharp } from "react-icons/io5"

export default function FriendsPage({user}){
  const [userList, setUserList] = useState([])
  const [friends, setFriends] = useState([])
  const [search, setSearch] = useState('')

  async function handleAddFriend(friendId){
    const updatedUser = await usersAPI.addFriend(friendId, user._id)
    setFriends(updatedUser.friends)
  }

  async function findFriend(){

  }


  useEffect(()=>{
    async function getAllUsers(){
      try{
        const allUsers = await usersAPI.getAllUsers();
        console.log('check1', allUsers)
        setFriends(user.friends)
        console.log('check2', user.friends)
        const filteredUsers = allUsers.filter(obj=> !user.friends.some(friend=> friend === obj._id))
        console.log('filtered users:', filteredUsers)
        setUserList(filteredUsers)
      } catch {
        console.error('whoooops')
      }
    }
    getAllUsers()
  }, [])

  let friendsList = <strong>Sorry, but you have no friends at the moment</strong>

  if (friends.length > 0) {
    friendsList = friends.map(user => 
    <Box>
      <ColaboratorCard key={user._id} user={user}/>
    </Box>
    )
  }

  let otherUsersList = <strong>Sorry, but there are no users at the moment</strong>

  if (userList.length > 0) {
    otherUsersList = userList.map(user => 
    <Box>
      <ColaboratorCard key={user._id} user={user} handleAddFriend={handleAddFriend}/>
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