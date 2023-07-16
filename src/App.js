import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import { ChakraProvider } from '@chakra-ui/react'
import Anime from './Pages/Anime';

function App() {

  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/anime/:id' element={<Anime />} />
        </Routes>
       </ChakraProvider>
    </>
  );
}

export default App;
