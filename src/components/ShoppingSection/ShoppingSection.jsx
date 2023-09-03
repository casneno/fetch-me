import { useState, useEffect, useRef } from 'react';
import { Box, Button, Flex, Divider, Container, SimpleGrid, Stack, useBreakpointValue } from '@chakra-ui/react'
import * as itemsAPI from '../../utilities/items-apis';
import * as ordersAPI from '../../utilities/orders-apis'
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ItemCard from "../../components/ItemCard/ItemCard";


export default function ShoppingSection({user, orderId, order, setOrder}){
  const [activeCategory, setActiveCategory] = useState()
  const categoriesRef = useRef([]);
  const [items, setItems] = useState([])

  /* Get all items to show and set the category */
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAllItems();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setItems(items);
      setActiveCategory(categoriesRef.current[0]);
    }
    getItems()
  }, []);

  /* adds item in the order in the database and adds item to the order state */
  async function addItemToOrder(itemId){
    console.log(orderId, itemId)
    const addedItem = await ordersAPI.addItemToOrder(orderId, itemId)
    setOrder({...order, addedItem})
    console.log('updated order:', order)
  }
  
  /* variable to display  items from the active category*/
  const activeItems = ( activeCategory === 'All' ? items : items.filter(item => item.category.name === activeCategory))

  const breakpoint = useBreakpointValue({ base: 'mobile', md: 'desktop' });

  return (
    <Flex direction="column" alignItems="center" spacing={4} w="100%">
        
        <CategoryCard 
            position="fixed"
            top="0"
            zIndex="10"

            categories={categoriesRef.current} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory}
        />

        <Divider borderColor="primary.500" my={4} />

        <Flex 
            direction="row" 
            wrap="wrap" 
            overflowY="auto"  
            mt="25vh"  // this is the key line
            maxHeight="calc(100vh - 40vh)"
            w='100vw'
            justify='center'
        >
            {activeItems.map((item, idx) => 
                <ItemCard key={idx} item={item} orderId={orderId} addItemToOrder={addItemToOrder} />
            )}
        </Flex>
    </Flex>
);




}