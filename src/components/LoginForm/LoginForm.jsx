import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { Box, Flex, VStack, Heading, Text, Input, FormControl, FormLabel, HStack, Button } from '@chakra-ui/react';
import About from '../About/About'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <Flex direction='column' h='55vh'>
      <Box 
        w={['full','md']} 
        p={[8, 10]} 
        mt={[20,'10vh']} 
        mx='auto' 
        border={['none', '1px']}
        borderColor={['', 'gray.300']}
        borderRadius={10}
        >
          <VStack spacing={4} align='flex-start' w='full'>
            <VStack spacing={1} align={['flex-start', 'center']} w='full'>
              <Heading>Login</Heading>
              <Text>Enter your email and password to login</Text>
            </VStack>

            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input type="text" name="email" value={credentials.email} onChange={handleChange} variant='filled' required />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={credentials.password} onChange={handleChange} variant='filled' required />
            </FormControl>
            <HStack w='full' justify='space-between' >
              <Button type="submit" colorScheme='yellow' onClick={handleSubmit} w={['full']}>Log In</Button>
            </HStack>
          </VStack>
      </Box>
      

{/*       <div className="auth">
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
            <button type="submit">LOG IN</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div> */}
    
    </Flex>
  );
}