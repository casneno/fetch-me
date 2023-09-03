import SearchBar from "../../components/SearchBar/SearchBar";
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-apis'
import { Box, Button, SimpleGrid, Flex, Heading, Spacer, Center, Left, Text, Divider, useBreakpointValue } from '@chakra-ui/react'
import OrderCard from "../../components/OrderCard/OrderCard";
import NewOrder from "../../components/NewOrder/NewOrder"

/* ----------------------------------------------------- */
export default function MyOrdersPage({ user, orders, setOrders }) {
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [newOrder, setNewOrder] = useState({
    name: '',
    owner: user._id,
    colaborators: [],
    orderItems: [],
    isPaid: false
  })

  useEffect(() => {
    async function getUserOrders(userId) {
      const allOrders = await ordersAPI.getUserOrders(userId)
      setOrders(allOrders)
    }
    getUserOrders(user._id)
  }, [])

  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' })

  /* Display only orders which I am the owner and that are not yet paid */
  const showMyOrders = orders.filter(order => order.owner === user._id && order.isPaid === false).map((order, idx) => <OrderCard key={idx} name={order.name} orderId={order._id} isOwner={true} onDelete={handleDelete} isDeleteMode={isDeleteMode} />)

  /* Display only orders with which I am colaborating and that are not yet paid */
  const showMyColabs = orders.filter(order => order.colaborators.some(colab => colab.toString() === user._id && order.isPaid === false)).map((order, idx) => <OrderCard key={idx} name={order.name} orderId={order._id} isOwner={false} />)

  async function handleDelete(orderId) {
    await ordersAPI.deleteOrder(orderId);
    const updatedOrders = orders.filter(order => order._id !== orderId);
    setOrders(updatedOrders);
  }

  return (
    <Box p={0} bg="primary.100" minH="100vh" >
      <Flex justifyContent="center" alignItems="center" p={4}>
        <NewOrder user={user} orders={orders} setOrders={setOrders} newOrder={newOrder} setNewOrder={setNewOrder} />
        <Spacer />
        <Button
          size={buttonSize}
          ml={4}
          colorScheme="primary"
          onClick={() => setIsDeleteMode(!isDeleteMode)}
        >
          {isDeleteMode ? "Exit Delete Mode" : "Delete Orders"}
        </Button>
      </Flex>

      <Divider my={4} borderColor="primary.500" />

      <Flex direction={{ base: "column", md: "row" }} justify="space-between" wrap={{base: "nowrap" , md:"wrap"}} className='master-box' h='80vh' m={0}>

        <Box className="my-orders" flex="1" mr={{ md: 4 }}>
          <Heading
            as="h2"
            size="lg"
            mb={4}
            color="primary.500"
            fontFamily="'Nunito', sans-serif"
            fontWeight="bold"
          >
            My Orders
          </Heading>

          <Divider my={4} borderColor="primary.500" />

          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4} maxW="100%">
            {showMyOrders}
          </SimpleGrid>

        </Box>

        <Divider my={4} display={{ base: "block", md: "none" }} borderColor="primary.500" />

        <Box className="my-colaborations" flex="1">
          <Heading
            as="h2"
            size="lg"
            mb={4}
            color="primary.500"
            fontFamily="'Nunito', sans-serif"
            fontWeight="bold"
          >
            My Collaborations
          </Heading>

          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4} maxW="100%">
            {showMyColabs}
          </SimpleGrid>
        </Box>

      </Flex>
    </Box>
  );


}