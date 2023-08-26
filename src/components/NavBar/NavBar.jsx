import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service'
import { Box } from "@chakra-ui/react";
import {BottomNavigation, BottomNavigationItem, BottomNavigationIcon,  BottomNavigationLabel} from "chakra-ui-bottom-navigation";
import { AddIcon, BellIcon, EditIcon } from "@chakra-ui/icons";
import { BsCart3 } from "react-icons/bs";
import { FaHome, FaUserFriends, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";


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
    <Box>

      <BottomNavigation onChange={handleChange}>

        <BottomNavigationItem>
          <BottomNavigationIcon boxSize={6} as={FaHome} />
          <BottomNavigationLabel><Link to="/home">Home</Link></BottomNavigationLabel>
        </BottomNavigationItem>

        <BottomNavigationItem>
          <BottomNavigationIcon boxSize={6} as={FaUserFriends} />
          <BottomNavigationLabel><Link to="/friends">Friends</Link></BottomNavigationLabel>
        </BottomNavigationItem>

        <BottomNavigationItem>
          <BottomNavigationIcon boxSize={6} as={BsCart3} />
          <BottomNavigationLabel><Link to="/carts">Carts</Link></BottomNavigationLabel>
        </BottomNavigationItem>

        <BottomNavigationItem>
          <BottomNavigationIcon boxSize={6} as={FaUser} />
          <BottomNavigationLabel><Link to="/profile">Profile</Link></BottomNavigationLabel>
        </BottomNavigationItem>

        <BottomNavigationItem>
          <BottomNavigationIcon boxSize={6} as={FiLogOut} />
          <BottomNavigationLabel><Link to="" onClick={handleLogout}>Log Out</Link></BottomNavigationLabel>
        </BottomNavigationItem>

      </BottomNavigation>
    </Box>


    // <nav> {/*this is how we use links:*/}
    //   <span>Welcome, {user.name}</span>
    //   &nbsp; | &nbsp;
    //   <Link to="/home">HOME PAGE ICON</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/profile">PROFILE PAGE ICON</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/carts">CARTS PAGE ICON</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/friends">FRIENDS PAGE ICON</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/order/history">ORDER HISTORY PAGE ICON</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="" onClick={handleLogout}>Log Out</Link>
    // </nav>
  )
}