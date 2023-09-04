import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service'
import { Box, Flex, Spacer, extendTheme } from "@chakra-ui/react";
import { BottomNavigation, BottomNavigationItem, BottomNavigationIcon, BottomNavigationLabel } from "chakra-ui-bottom-navigation";
import { AddIcon, BellIcon, EditIcon } from "@chakra-ui/icons";
import { BsCart3 } from "react-icons/bs";
import { FaHome, FaUserFriends, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import './NavBar.css'


export default function NavBar({ user, setUser }) {

  function handleLogout() {
    usersService.logOut();
    setUser(null);
  }

  // const router = useRouter();

  function handleChange() {
    // (path)=>{router.push(path);
    // },
    // [router.push]
  };

  return (
    <BottomNavigation onChange={handleChange} as='footer' position='fixed' bottom={0} left={0} right={0} w='100vw' height="70px" bg="primary.100" shadow="md" color="primary.900" zIndex={10}>
      <Flex justifyContent="space-between" w="100%" alignItems="center">
      <Link to="/" style={{ flexGrow: 1, margin: 0, padding: 0 }}>
        <BottomNavigationItem _hover={{ bgColor: "primary.200" }} p={2} m={0}w='100%'>
          <BottomNavigationIcon boxSize={6} as={FaHome} m={0}/>
          <BottomNavigationLabel fontSize="sm" mt={0}>Home</BottomNavigationLabel>
        </BottomNavigationItem>
      </Link>
      <Link to="/friends" style={{ flexGrow: 1, margin: 0, padding: 0 }}>
      <BottomNavigationItem _hover={{ bgColor: "primary.200" }} p={2} m={0}w='100%'>
          <BottomNavigationIcon boxSize={6} as={FaUserFriends} />
          <BottomNavigationLabel fontSize="sm" mt={0}>Friends</BottomNavigationLabel>
        </BottomNavigationItem>
      </Link>
      <Link to="/orders" style={{ flexGrow: 1, margin: 0, padding: 0 }}>
      <BottomNavigationItem _hover={{ bgColor: "primary.200" }} p={2} m={0}w='100%'>
          <BottomNavigationIcon boxSize={6} as={BsCart3} />
          <BottomNavigationLabel fontSize="sm" mt={0}>Orders</BottomNavigationLabel>
        </BottomNavigationItem>
      </Link>
      <Link to="/profile" style={{ flexGrow: 1, margin: 0, padding: 0 }}>
      <BottomNavigationItem _hover={{ bgColor: "primary.200" }} p={2} m={0}w='100%'>
          <BottomNavigationIcon boxSize={6} as={FaUser} />
          <BottomNavigationLabel fontSize="sm" mt={0}>Profile</BottomNavigationLabel>
        </BottomNavigationItem>
      </Link>
      <Link to="" onClick={handleLogout} style={{ flexGrow: 1, margin: 0, padding: 0 }}>
      <BottomNavigationItem _hover={{ bgColor: "primary.200" }} p={2} m={0}w='100%'>
          <BottomNavigationIcon boxSize={6} as={FiLogOut} />
          <BottomNavigationLabel fontSize="sm" mt={0}>Log Out</BottomNavigationLabel>
        </BottomNavigationItem>
      </Link>
      </Flex>
    </BottomNavigation>
  )

}