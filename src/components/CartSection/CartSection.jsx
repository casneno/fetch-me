import { useState, useEffect, useRef } from 'react';
import { Box, Button, Divider, SimpleGrid, Stack } from '@chakra-ui/react'
import * as itemsAPI from '../../utilities/items-apis';
import * as ordersAPI from '../../utilities/orders-apis'
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ItemCard from "../../components/ItemCard/ItemCard";


export default function CartSection({user}){

  return(
    <Box>
      <h1>Cart Section</h1>
    </Box>
  )
}