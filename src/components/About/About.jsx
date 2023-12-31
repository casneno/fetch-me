'use client'
import { Box, Heading, Text, Container, Image, useBreakpointValue, Center, Flex, Spacer, Icon, AspectRatio } from "@chakra-ui/react";
import { FaShoppingCart, FaUsers, FaList } from 'react-icons/fa';
import coupleImage from '../../images/images/full-length-portrait-shocked-couple.jpg'
import logo from "../../images/images/Screenshot 2023-08-24 212919.png"

function AboutPage() {
    const fontSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
    const imageSize = useBreakpointValue({ base: "100vw", md: "300px", lg: "250px" });

    return (
        <Container maxW="container.xl" py={10} fontFamily="'Kalam', sans-serif">
            <Center marginBottom={10}>
                <Heading as="h1" size="2xl" textAlign="center">
                    About Fetch-Me Groceries App
                </Heading>
            </Center>

            <Flex direction={{ base: "column", md: "row" }} spacing={4}>
              <Center>
              <AspectRatio maxWidth='400px' ratio={4 / 3} >
                <Image
                    src={coupleImage}
                    alt="Groceries"
                    boxSize={imageSize}
                    objectFit="contain"
                    />
                    </AspectRatio>
                    </Center>
                <Box flex="1">
                    <Text fontSize={fontSize} my={5}>
                        Welcome to am innovative shopping experience. An e-commerce platform tailored just for you, your family and buddies.
                    </Text>

                    <Flex alignItems="center" mb={4}>
                        <Icon as={FaShoppingCart} w={8} h={8} color="blue.500" />
                        <Text ml={3} fontSize={fontSize}>Shop groceries in the most collaborative way possible.  You are no longer in charge of all decisions!</Text>
                    </Flex>

                    <Flex alignItems="center" mb={4}>
                        <Icon as={FaUsers} w={8} h={8} color="blue.500" />
                        <Text ml={3} fontSize={fontSize}>Invite friends or family to join your cart and add their own items. Perfect for trip planning, parties, or a weekly family grocery run.</Text>
                    </Flex>

                    <Flex alignItems="center" mb={4}>
                        <Icon as={FaList} w={8} h={8} color="blue.500" />
                        <Text ml={3} fontSize={fontSize}>Always have your list updated and ready. Everyone can contribute, making sure nothing is ever forgotten!</Text>
                    </Flex>
                </Box>
            </Flex>
        </Container>
    );
}

export default AboutPage;
