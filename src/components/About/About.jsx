'use client'

import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { ReactElement } from 'react'

export default function About() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our goal
          </Text>
          <Heading>Groceries by Colaboration</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore
          </Text>
        </Stack>
      <Flex>
        <Image
          rounded={'md'}
          alt={'feature image'}
          src={
            'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
          objectFit={'cover'}
        />
      </Flex>
    </SimpleGrid>
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ultrices lectus. In vulputate eros tellus, ut facilisis massa sagittis non. Donec lectus sapien, eleifend eget eros a, egestas facilisis quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc pulvinar felis id sapien ullamcorper mollis. Donec consequat libero eget consequat convallis. Nunc eleifend, magna interdum consequat viverra, nibh eros egestas nisl, nec venenatis metus mauris mattis turpis. Proin sed leo non odio maximus vulputate consectetur volutpat velit. Curabitur hendrerit ligula sed erat ultricies sodales. Etiam vel pellentesque lacus. Praesent id accumsan sem.

Vestibulum aliquet purus semper, vulputate risus eu, aliquam lorem. Suspendisse ante tellus, sodales vel est nec, malesuada pellentesque magna. Aenean quis mi vel diam cursus hendrerit. Cras gravida mi ut lorem auctor, eu pharetra metus posuere. Donec tortor nunc, commodo eu ligula in, accumsan finibus elit. Phasellus auctor malesuada purus, ut posuere sapien facilisis in. Donec ac sodales mauris. Vestibulum nulla mi, dignissim id leo in, iaculis scelerisque ligula. Aliquam nisl nibh, convallis eget vehicula in, molestie at dui. Duis dapibus nunc sit amet erat eleifend blandit. Mauris vel erat ipsum.

Aliquam imperdiet vestibulum nisi, vel feugiat augue blandit eu. Phasellus orci dolor, iaculis at elit non, pellentesque varius enim. In iaculis sapien eget mauris egestas cursus. Sed at dui auctor, mollis lacus at, rhoncus nisi. Etiam elit augue, consequat elementum aliquam non, fermentum ut leo. Pellentesque in sem accumsan, venenatis odio id, convallis elit. Cras rutrum, eros nec mattis mollis, justo enim mollis mauris, et gravida arcu leo vel tellus. Fusce at velit efficitur, egestas nisl ut, bibendum odio. Vivamus faucibus augue sollicitudin, elementum nisi vel, sodales risus. Nullam molestie massa nunc, in rutrum neque pellentesque vel. Morbi vel augue id mauris mattis fermentum. Nullam mi quam, hendrerit ut nulla vel, mattis auctor felis. Nunc convallis est quis felis rutrum, id semper tellus ultrices. Quisque faucibus semper eros non luctus. In a leo sit amet nulla luctus molestie a vitae ipsum. Suspendisse urna ex, dignissim a consectetur in, porttitor eu enim.

Duis a ante non elit viverra commodo eu id felis. Cras at consequat odio. Integer interdum sit amet nulla accumsan tincidunt. Etiam orci tortor, vehicula sit amet aliquam dapibus, sagittis nec ante. Vestibulum feugiat egestas congue. Fusce vestibulum semper hendrerit. Aenean commodo turpis at tortor lobortis dictum. Maecenas quis enim tortor.

Sed mattis convallis blandit. Vivamus mauris leo, pulvinar in diam sit amet, ultricies posuere ex. Donec dapibus sem augue, non tincidunt nisi dictum quis. Suspendisse nec risus a lorem pellentesque fringilla. Proin tristique justo nec odio hendrerit, in feugiat odio scelerisque. Nunc tempor tempus mattis. Donec id felis non enim venenatis molestie. Phasellus semper pretium elit viverra molestie.</Text>
    </Container >
    
  )
}