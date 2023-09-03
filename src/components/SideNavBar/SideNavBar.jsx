// SideNavBar.jsx
import { Box, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, VStack, Icon, Link, Button } from "@chakra-ui/react";
import { FaHome, FaUserFriends, FaUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

export default function SideNavBar({ handleLogout }) {

  return (
    <Box position="fixed" left={0} top={0} bottom={0} w="180px" borderRight="1px solid gray" py={5} bg="gray.50">
      <VStack spacing={4} align="start" ml={5}>
        <Link to="/home">
          <Icon as={FaHome} boxSize={6} />
          Home
        </Link>
        <Link to="/friends">
          <Icon as={FaUserFriends} boxSize={6} />
          Friends
        </Link>
        <Link to="/orders">
          <Icon as={BsCart3} boxSize={6} />
          Orders
        </Link>
        <Link to="/profile">
          <Icon as={FaUser} boxSize={6} />
          Profile
        </Link>
        <Button leftIcon={<FiLogOut boxSize={6} />} onClick={handleLogout}>
          Log Out
        </Button>
      </VStack>
    </Box>
  );
}
    // <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
    //   <DrawerOverlay>
    //     <DrawerContent>
    //       <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
    //       <DrawerBody>
    //         <VStack spacing={4} align="start">
    //           <Link to="/home" onClick={onClose}>
    //             <Button leftIcon={<Icon as={FaHome} />} variant="ghost" w="100%">
    //               Home
    //             </Button>
    //           </Link>
    //           <Link to="/friends" onClick={onClose}>
    //             <Button leftIcon={<Icon as={FaUserFriends} />} variant="ghost" w="100%">
    //               Friends
    //             </Button>
    //           </Link>
    //           <Link to="/orders" onClick={onClose}>
    //             <Button leftIcon={<Icon as={BsCart3} />} variant="ghost" w="100%">
    //               Orders
    //             </Button>
    //           </Link>
    //           <Link to="/profile" onClick={onClose}>
    //             <Button leftIcon={<Icon as={FaUser} />} variant="ghost" w="100%">
    //               Profile
    //             </Button>
    //           </Link>
    //           <Link to="" onClick={() => { handleLogout(); onClose(); }}>
    //             <Button leftIcon={<Icon as={FiLogOut} />} variant="ghost" w="100%">
    //               Log Out
    //             </Button>
    //           </Link>
    //         </VStack>
    //       </DrawerBody>
    //     </DrawerContent>
    //   </DrawerOverlay>
    // </Drawer>
//   );
// }
