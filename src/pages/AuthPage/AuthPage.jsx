import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import About from "../../components/About/About"
import { useState } from "react";
import { Button, Flex, ButtonGroup, Box, useBreakpointValue } from '@chakra-ui/react'

export default function AuthPage({ setUser }) {
  const [toggleSignIn, setToggleSignIn] = useState(true)

  const isMobile = useBreakpointValue({ base: true, sm: false, md: false, lg: false });

  return (
    <Flex ml={isMobile ? "0" : "20px"} pb={isMobile ? "4em" : "0"} direction='column' justify='center' align='center'>
      {toggleSignIn ?
        <LoginForm setUser={setUser} />
        :
        <SignUpForm setUser={setUser} />
      }
      <Button w='65vw' color='white' bg='accent.300' onClick={() => setToggleSignIn(!toggleSignIn)}>{toggleSignIn ? 'Sign-up here' : 'Go to Log In'}</Button>
      {toggleSignIn ?
        <About />
        :
        null
      }
    </Flex>
  )
}