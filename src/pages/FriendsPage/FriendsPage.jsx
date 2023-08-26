import ColaboratorCard from '../../components/ColaboratorCard/ColaboratorCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useState, useEffect } from 'react';
import * as usersAPI from '../../utilities/users-apis'

export default function FriendsPage(){
  const [friends, setFriends] = useState([])
  const [search, setSearch] = useState('')

  async function handleAddFriend(){
  
  }

  async function findFriend(){

  }


  useEffect(()=>{
    async function showFriends(){
      try{
        const friendList = await usersAPI.getAllUsers();
        console.log('check1', friendList)
        setFriends(friendList)
        console.log(friends)
      } catch {
        console.error('whoooops')
      }
    }
    showFriends()
  }, [])

  let friendsList = <strong>Sorry, but there are no users aat the moment</strong>

  console.log('Check2:', friends)

  if (friends.length > 0) {
    friendsList = friends.map(friend => <ColaboratorCard key={friend._id} name={friend.name} />)
  }

  return(
    <>
      <h1>Friends Page</h1>
      <SearchBar setSearch={setSearch}/>
      {friendsList}
    </>
  )
}