import { useState, useEffect, useRef } from 'react';
import { Box, Button, Divider, SimpleGrid, Stack } from '@chakra-ui/react'
import * as itemsAPI from '../../utilities/items-apis';
import * as ordersAPI from '../../utilities/orders-apis'
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ItemCard from "../../components/ItemCard/ItemCard";


export default function ShoppingSection({user}){
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState()
  const categoriesRef = useRef([]);
  const [colabs, setColabs] = useState([])
  const [items, setItems] = useState([])

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAllItems();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setItems(items);
      setActiveCategory(categoriesRef.current[0]);
    }
    getItems()
  }, []);

  const activeItems = items.filter(item => item.category.name === activeCategory)

  return(
    <Box>
      <h1>Categories</h1>
      <Stack>
        <CategoryCard categories={categoriesRef.current} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
      </Stack>
      <Divider />
      <h1>Items</h1>
      <SimpleGrid columns={3} spacing={2}>
      {activeItems.map((item,idx)=><ItemCard key={idx} name={item.name} emoji={item.emoji} price={item.price}/>)}
      </SimpleGrid>
    </Box>
  )
}