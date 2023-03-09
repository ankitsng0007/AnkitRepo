import logo from './logo.svg';
import './App.css';
import {Link, Route,Routes} from "react-router-dom";
import { Home } from './Pages/Home';
import { Example } from './Pages/Example';
import {Flex,Spacer,Box,Heading,ButtonGroup,Button, Container, HStack} from "@chakra-ui/react"

function App() {
  return (
    <Container maxW="8xl">
    <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'>Chakra App</Heading>
  </Box>
  <Spacer />
  <HStack>
    <Link to="/">Home</Link>
    <Link to="/dashboard">Dashboard</Link>
  </HStack>
</Flex>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/dashboard' element={<Example/>}></Route>
    </Routes>
    </Container>
  );
}

export default App;
