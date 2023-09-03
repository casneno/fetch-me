import { useState, useEffect, useRef, } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, AvatarBadge, AvatarGroup, Box, Button, Divider, SimpleGrid, Stack, Container, Flex, useBreakpointValue } from '@chakra-ui/react'
import * as usersAPI from '../../utilities/users-apis';
import * as ordersAPI from '../../utilities/orders-apis'
import ShoppingSection from "../../components/ShoppingSection/ShoppingSection"
import CartSection from "../../components/CartSection/CartSection";
import AvatarList from "../../components/AvatarList/AvatarList"
import { } from '@chakra-ui/react';

/* ----------------------------------------------------- */
export default function OrderPage({ user, setUser }) {
  const [switchView, setSwitchView] = useState(true);
  const [order, setOrder] = useState([])
  const [users, setUsers] = useState([])
  const [friends, setFriends] = useState([])
  const [otherUsers, setOtherUsers] = useState([])
  const [colabs, setColabs] = useState([])
  const orderId = useParams().id

  useEffect(() => {
    async function getOrder(orderId) {
        try {
            const fetchedOrder = await ordersAPI.getOrder(orderId)
            setOrder(fetchedOrder)
            setColabs(fetchedOrder.colaborators)
        } catch (err) {
            console.error(err)
        }
    }

    getOrder(orderId)

}, [orderId]);

useEffect(() => {
  async function setAllUserStates() {
      try {
          const allUsers = await usersAPI.getAllUsers();
          const populatedUser = await usersAPI.getUser(user._id)
          const friendIds = populatedUser.friends.map(friend => friend._id);
          const filteredUsers = allUsers.filter(
              obj => obj._id !== user._id && !friendIds.includes(obj._id)
          );
          setUsers(allUsers)
          setFriends(populatedUser.friends)
          setOtherUsers(filteredUsers)
      } catch (err) {
          console.error(err)
      }
  }

  setAllUserStates()

}, [user._id]);

  const switchComponentView = () => {
    setSwitchView(!switchView)
  }

  const breakpoint = useBreakpointValue({ base: 'mobile', md: 'desktop' });

    return (
      <Flex
          w='100vw'
          p={4}
          bg="primary.200"
          minH='100vh'
          direction='column'
          alignItems='center'
          overlfowY='hidden'
      >
          <AvatarList
              as='header'
              position='fixed'
              zIndex={10}
              spacing={4}
              user={user}
              users={users}
              order={order}
              friends={friends}
              setFriends={setFriends}
              otherUsers={otherUsers}
              setOtherUsers={setOtherUsers}
              colabs={colabs}
              setColabs={setColabs}
          />
  
          {breakpoint === 'mobile' && (
              <Button
                  position="fixed"
                  top="11vh"
                  onClick={switchComponentView}
                  bg="secondary.300"
                  mb={4}
                  w="90vw"
              >
                  {switchView
                  ?
                  'My Cart'
                  :
                  'Back to Store'}

              </Button>
          )}
  
          {breakpoint === 'mobile' ? (
              switchView ?
                  <ShoppingSection user={user} orderId={orderId} order={order} setOrder={setOrder} /> :
                  <CartSection user={user} orderId={orderId} order={order} setOrder={setOrder} />
          ) : (
              <Flex
                  direction="row"
                  justify="space-between"
                  width="100vw"
                  spacing={6}
              >
                  <ShoppingSection user={user} orderId={orderId} order={order} setOrder={setOrder} />
                  <CartSection user={user} orderId={orderId} order={order} setOrder={setOrder} />
              </Flex>
          )}
  
      </Flex>
  );
}