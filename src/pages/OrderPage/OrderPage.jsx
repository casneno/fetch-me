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
        const getOrder = await ordersAPI.getOrder(orderId)
        setOrder(getOrder)
        setColabs(getOrder.colaborators)
      } catch (err) {
        console.error(err)
      }
    }

    async function setAllUserStates() {
      try {
        const allUsers = await usersAPI.getAllUsers();
        const populatedUser = await usersAPI.getUser(user._id)
        const filteredUsers = allUsers.filter(obj => !user.friends.some(friend => friend === obj._id))
        setUsers(allUsers)
        setFriends(populatedUser.friends)
        setOtherUsers(filteredUsers)
      } catch (err) {
        console.error(err)
      }
    }

    getOrder(orderId)
    setAllUserStates()

  }, [colabs])

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
                  colorScheme="primary.500"
                  mb={4}
                  w="90vw"
              >
                  Change Section
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