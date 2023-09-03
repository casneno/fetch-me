import { Box, HStack, Button } from '@chakra-ui/react'

export default function CategoryCard({ categories, activeCategory, setActiveCategory }) {

  return (
    <HStack 
        position="fixed" 
        top="17vh" 
        spacing={{ base: 1, md: 1 }} 
        wrap="wrap" 
        justify="center"
        borderBottom='1px'
        borderColor='secondary.200'
        pb={4}
    >
        {categories.map(category => (
            <Button 
                key={category} 
                onClick={() => setActiveCategory(category)} 
                bg='secondary.400' 
                mx={0.5} 
                my={0.5} 
                p={2} 
                fontSize={{ base: 'sm', md: 'sm' }}
                borderRadius='md' 
                w={{ base: 'auto', md: 'auto' }}
                h={{ base: '2.5rem', md: 'auto' }}
            >
                {category}
            </Button>
        ))}
    </HStack>
);


  }