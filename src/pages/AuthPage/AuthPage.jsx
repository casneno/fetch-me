import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import About from "../../components/About/About"
import { useState } from "react";
import { Button, ButtonGroup, Box } from '@chakra-ui/react'

export default function AuthPage({setUser}){
  const [toggleSignIn, setToggleSignIn] = useState(true)

  return(
    <Box>
      {toggleSignIn ?
      <LoginForm setUser={setUser}/>
      :
      <SignUpForm setUser={setUser}/>
      }
      <Button colorScheme='yellow' className="switch-sign" onClick={()=>setToggleSignIn(!toggleSignIn)}>{toggleSignIn ? 'Sign-up here' : 'Go to Log In'}</Button>
      <About />
    </Box>
  )
}