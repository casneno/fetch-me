import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service'
import { Box, Flex, Spacer, extendTheme } from "@chakra-ui/react";
import {BottomNavigation, BottomNavigationItem, BottomNavigationIcon,  BottomNavigationLabel} from "chakra-ui-bottom-navigation";
import { AddIcon, BellIcon, EditIcon } from "@chakra-ui/icons";
import { BsCart3 } from "react-icons/bs";
import { FaHome, FaUserFriends, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import './NavBar.css'


export default function NavBar({user, setUser}){

  function handleLogout(){
    usersService.logOut();
    setUser(null);
  }

  // const router = useRouter();

  function handleChange(){
    // (path)=>{router.push(path);
    // },
    // [router.push]
  };

  return(
      <BottomNavigation onChange={handleChange} as='footer' position='fixed' bottom={0} w='100vw' zIndex={2} maxHeight="70px">
      <Link to="/home">
        <BottomNavigationItem>
          <BottomNavigationIcon boxSize={6} as={FaHome} />
          <BottomNavigationLabel>Home</BottomNavigationLabel>
        </BottomNavigationItem>
        </Link>
        <Link to="/friends">
        <BottomNavigationItem>
          <BottomNavigationIcon boxSize={6} as={FaUserFriends} />
          <BottomNavigationLabel>Friends</BottomNavigationLabel>
        </BottomNavigationItem>
        </Link>
        <Link to="/orders">
        <BottomNavigationItem>
          <BottomNavigationIcon boxSize={6} as={BsCart3} />
          <BottomNavigationLabel>Orders</BottomNavigationLabel>
        </BottomNavigationItem>
        </Link>
        <Link to="/profile">
        <BottomNavigationItem>
          <BottomNavigationIcon boxSize={6} as={FaUser} />
          <BottomNavigationLabel>Profile</BottomNavigationLabel>
        </BottomNavigationItem>
        </Link>
        <Link to="" onClick={handleLogout}>
        <BottomNavigationItem>
          <BottomNavigationIcon boxSize={6} as={FiLogOut} />
          <BottomNavigationLabel>Log Out</BottomNavigationLabel>
        </BottomNavigationItem>
        </Link>
      </BottomNavigation>


    // <nav> {/*this is how we use links:*/}
    //   <span>Welcome, {user.name}</span>
    //   &nbsp; | &nbsp;
    //   <Link to="/home">HOME PAGE ICON</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/profile">PROFILE PAGE ICON</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/orders">CARTS PAGE ICON</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/friends">FRIENDS PAGE ICON</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/order/history">ORDER HISTORY PAGE ICON</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="" onClick={handleLogout}>Log Out</Link>
    // </nav>
  )
}