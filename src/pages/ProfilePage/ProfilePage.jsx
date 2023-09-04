import { Avatar, Box, Flex, Heading, Text, VStack, StackDivider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import * as usersAPI from '../../utilities/users-apis';
import * as ordersAPI from '../../utilities/orders-apis'

export default function ProfilePage({ user }) {
  const [ownedOrders, setOwnedOrders] = useState([])
  const [collaboratedOrders, setCollaboratedOrders] = useState([]);

  useEffect(() => {
    async function getUserOrders(userId){
        try{
            const myOrders = await ordersAPI.getUserOrders(userId);
            const myOwnedOrders = myOrders.filter(order => order.owner === userId);
            const myCollaboratedOrders = myOrders.filter(order => order.colaborators.includes(userId));
            setOwnedOrders(myOwnedOrders);
            setCollaboratedOrders(myCollaboratedOrders);
        } catch (error) {
            console.error(error);
        }
    }
    getUserOrders(user._id)

}, [user]);


  return (
    <Flex direction="column" align="center" p={5} fontFamily="'Kalam', sans-serif">
      {/* User Info */}
      <Flex align="center" mb={5}>
        <Avatar src={user.icon} size="2xl" mr={4} />
        <Box>
          <Heading>{user.name}</Heading>
          <Text>Email: {user.email}</Text>
        </Box>
      </Flex>

      {/* Owned Orders */}
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="start"
        width="100%"
        mb={5}
      >
        <Heading size="lg">Owned Orders</Heading>
        {ownedOrders.length > 0 ? (
          ownedOrders.map((order) => (
            <Text key={order._id}>- {order.name}</Text>
          ))
        ) : (
          <Text>No owned orders.</Text>
        )}
      </VStack>

      {/* Collaborator Orders */}
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="start"
        width="100%"
        mb={5}
      >
        <Heading size="lg">Collaborating In</Heading>
        {collaboratedOrders.length > 0 ? (
          collaboratedOrders.map((order) => (
            <Text key={order._id}>- {order.name}</Text>
          ))
        ) : (
          <Text>Not collaborating in any orders.</Text>
        )}
      </VStack>

    </Flex>
  );
}
