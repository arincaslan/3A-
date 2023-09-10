import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import LoginForm from './LoginForm';
import backGroundImg from '../../../backGround.png';
import Footer from '../Footer/Footer';

function Homepage({ onLoginSuccess }) {
  return (
    <Box>
      <Box
        padding={4}
        backgroundImage={`url(${backGroundImg})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="right"
        minHeight="100vh"
      >
        <Flex direction="column" justifyContent="flex-end" height="100%" alignItems="flex-end">
          <Box

            maxW="400px"
            width="400px"
            backgroundColor="rgba(255, 255, 255)" // Opacity'yi biraz düşürdüm
            p={12}
            borderRadius="md"
            m={8}
            opacity={0.6}
            transition="opacity 0.3s"
            _hover={{ opacity: 1 }} // Hover olduğunda opacity tam olarak ayarlandı
          >
            <LoginForm onLoginSuccess={onLoginSuccess} />
          </Box>
        </Flex>
      </Box>
      <Box w="100%">
        <Footer />
      </Box>
    </Box>
  );
}

export default Homepage;
