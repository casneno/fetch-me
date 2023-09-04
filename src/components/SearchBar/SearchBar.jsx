import {Box, Button, Input, InputGroup, InputLeftElement, InputRightAddon} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";


export default function SearchBar({setSearch}){

  function handleChange(evt){
    setSearch(evt.target.value);
  }

  return(
    <Box m={3}>
      <InputGroup borderRadius={5} size="sm">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input type="text" placeholder="Search..." border="1px solid #949494" onChange={handleChange}/>
        <InputRightAddon
          p={0}
          border="none"
        >
          {/* <Button size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">
            Search
          </Button> */}
        </InputRightAddon>
      </InputGroup>
    </Box>
  )
}