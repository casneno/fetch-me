import ColaboratorCard from '../../components/ColaboratorCard/ColaboratorCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useState, useEffect } from 'react';
import * as usersAPI from '../../utilities/users-apis'
import { Avatar, Box, Button, ButtonGroup, Container, Divider, Flex, SimpleGrid } from '@chakra-ui/react'
import { IoPersonAddSharp } from "react-icons/io5"

export default function FriendsPage({ user, setUser }) {
  const [strangers, setStrangers] = useState([]) //other users
  const [friends, setFriends] = useState([]) //user friends
  const [search, setSearch] = useState('')


  useEffect(() => {
    async function getAllUsers() {
      try {
        const allUsers = await usersAPI.getAllUsers();
        const getUser = await usersAPI.getUser(user._id)
        /* Map array of friends stringified ids */
        const friendIds = getUser.friends.map(friend => friend._id.toString());
        /* filter out the above array and the user*/
        const strangers = allUsers.filter(obj => !friendIds.includes(obj._id.toString()) && obj._id.toString() !== user._id.toString());
        setFriends(getUser.friends)
        setStrangers(strangers)
      } catch (error) {
        console.error(error)
      }
    }
    getAllUsers()
  }, [user._id])


  /* ------------- HANDLE ADD/REMOVE ---------------- */
  async function handleAdd(person) {
    const updatedUser = await usersAPI.addFriend(person._id, user._id)
    setUser(updatedUser)
    setStrangers((prevStrangers) =>
      prevStrangers.filter((stranger) => stranger._id !== person._id)
    );
    // const strangers = allUsers.filter(obj=> !updatedUser.friends.map(friend=> friend._id).includes(user._id))
    // setStrangers(strangers)
    setFriends(updatedUser.friends);
  }

  async function handleRemove(person) {
    const updatedUser = await usersAPI.removeFriend(person._id, user._id)
    setUser(updatedUser)
    setStrangers((prevStrangers) => [...prevStrangers, person]);
    setFriends(updatedUser.friends)
  }


  /* --------------- FILTERS: SEARCH AND DISPLAY ------------------------ */
  const searchFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(search.toLowerCase())
  );

  let friendsList = <strong>Sorry, but you have no friends at the moment</strong>

  if (searchFriends.length > 0) {
    friendsList = searchFriends.map(friend => (
      <Box key={friend._id}>
        <ColaboratorCard person={friend} isFriend={true} handleRemove={handleRemove} />
      </Box>
    ));
  }

  const searchStrangers = strangers.filter(stranger =>
    stranger.name.toLowerCase().includes(search.toLowerCase())
  );

  let strangersList = <strong>Sorry, but there are no users at the moment</strong>

  if (searchStrangers.length > 0) {
    strangersList = searchStrangers.map(stranger => (
      <Box key={stranger._id}>
        <ColaboratorCard person={stranger} isFriend={false} handleAdd={handleAdd} />
      </Box>
    ));
  }

  return (
    <>
    <Flex direction="column" align="center" justify="center" width="90vw" p={5}>
      <h1>Friends Page</h1>
      <SearchBar setSearch={setSearch} />
      <Divider my={4} />
      <Box m={1}>My Friends</Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={1} width="100%">
        {friendsList}
      </SimpleGrid>
      <Divider my={4} />
      <Box m={2}>Other Users</Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={1} width="100%">
        {strangersList}
      </SimpleGrid>
    </Flex>
  </>
  )
}