import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import { Flex, Container } from '@chakra-ui/react';

const MainLayout = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex flex="1" direction="column">
        <Sidebar />
        <Container
          flex="1"
          overflow="auto"
          p={4}
          bg="gray.50"
          className="overflow-auto"
          mt={10}
          ml={{ base: '10vw', md: '15vw' }}
          w={{ base: '90vw', md: '85vw' }}
        >
          <Outlet />
        </Container>
      </Flex>
    </Flex>
  );
};

export default MainLayout;