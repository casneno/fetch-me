import { Box, HStack, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'

export default function CategoryCard({ categories, activeCategory, setActiveCategory }) {

  return (
    <HStack
      position="fixed"
      top="17vh"
      justify="center"
      borderBottom='1px'
      borderColor='secondary.200'
      pb={4}
      zIndex={10}

    >
      <Menu>
        {/* Trigger */}
        <MenuButton
          as={Button}
          bg='accent.300'
          p={2}
          fontSize={{ base: 'sm', md: 'sm' }}
          borderRadius='md'
          w={{ base: 'auto', md: 'auto' }}
          h={{ base: '2.5rem', md: 'auto' }}
        >
          Select Category
        </MenuButton>
        <MenuList >
          <MenuItem onClick={() => setActiveCategory("All")}>
            All
          </MenuItem>
          {categories.map(category => (
            <MenuItem
              key={category}
              onClick={() => setActiveCategory(category)}
            >

              {category}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </HStack>
  );


}