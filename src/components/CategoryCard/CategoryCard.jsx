import { Box, HStack, Button } from '@chakra-ui/react'

export default function CategoryCard({ categories, activeCategory, setActiveCategory }) {

    return (
      <HStack position="sticky" top="120px" spacing={1}>
        {categories.map(category => <Button key={category} onClick={() => setActiveCategory(category)} bg='yellow.400' mx={1} my={2} p={1} px={2} borderRadius=''>
        {category}
      </Button>)}
      </HStack>
    );
  }