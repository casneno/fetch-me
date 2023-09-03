import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import About from "../../components/About/About"
import { useState } from "react";
import { Button, Flex, ButtonGroup, Box } from '@chakra-ui/react'

export default function AuthPage({ setUser }) {
  const [toggleSignIn, setToggleSignIn] = useState(true)

  return (
    <Flex className='master-box' direction='column' justify='center' align='center'>
      {toggleSignIn ?
        <LoginForm setUser={setUser} />
        :
        <SignUpForm setUser={setUser} />
      }
      <Button w='80vw' colorScheme='yellow' className="switch-sign" onClick={() => setToggleSignIn(!toggleSignIn)}>{toggleSignIn ? 'Sign-up here' : 'Go to Log In'}</Button>
      {toggleSignIn ?
        <About />
        :
        null
      }
    </Flex>
  )
}