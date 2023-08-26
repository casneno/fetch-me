import { Component } from 'react';
import { signUp } from '../../utilities/users-service'
import { Box, VStack, Heading, Text, Input, FormControl, FormLabel, HStack, Checkbox, Button } from '@chakra-ui/react';


/* Example of a Class Component */

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt)=>{
    evt.preventDefault();
    try {
      const {name, email, password} = this.state
      const formData = {name, email, password}
      const user = await signUp(formData)
      console.log('User:',user)
      this.props.setUser(user); 
    } catch {
      this.setState({ error: 'Sign Up Failed: Try Again' })
    }
  }

  /*Overide the built-in render() method from the built-in Component class*/
  render() {
    const disable = this.state.password !== this.state.confirm; /* the 'disable' variable is being used as a validation to check if passward and confirmation are the same*/
    return (
      <>
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
              <Heading>Sign-Up</Heading>
              <Text>Enter the requested information to create a new account</Text>
            </VStack>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            </FormControl>
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            </FormControl>
            <HStack w='full' justify='space-between' >
              <Button type="submit" colorScheme='yellow' disabled={disable} onClick={this.handleSubmit} w={['full']}>Sign Up</Button>
            </HStack>
          </VStack>
          </Box>
        <p className="error-message">&nbsp;{this.state.error}</p>
</>
/*       <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div> */
    );
  }
}