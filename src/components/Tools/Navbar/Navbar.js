import React from 'react';
import { Box, Flex, Text, Button, Spacer, Image, useColorModeValue } from '@chakra-ui/react';
import logoSrc from '../../../LogoBeyaz.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
    const bg = useColorModeValue('rgba(6,86,102,0.8)', 'rgba(6,86,102,0.9)'); // primary.900
    const navigate = useNavigate();

    const hoverBg = useColorModeValue('gray.200', 'gray.700');
    const handleLogout = () => {
        // Diğer çıkış işlemleri (örn. token'ı temizleme, session sonlandırma vs.)
        onLogout();
        
        // Anasayfaya yönlendirme
        navigate('/');
    };
    
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1rem"
            bg={bg}
            color="white"
            boxShadow="md"
            position="sticky"
            top="0"
            zIndex="10"
        >
            <Flex align="center">
                <Link to="/">
                    <Image src={logoSrc} alt="Markanızın Logosu" boxSize="60px" mr="4" />
                </Link>
            </Flex>
            <Spacer />

            <Box display="flex" alignItems="center">
                <Text 
                  as={Link} 
                  to="/my-reports" 
                  marginRight="40px" 
                  textDecoration="none" 
                  color="white"
                  fontFamily="Josefin Sans, sans-serif"
                  _hover={{
                    color: "teal.300",
                    transition: "color 0.3s"
                  }}
                >
                    Raporlarım
                </Text>

                <Text 
                  as={Link} 
                  to="/my-profile" 
                  marginRight="40px" 
                  textDecoration="none" 
                  color="white"
                  fontFamily="Josefin Sans, sans-serif"
                  _hover={{
                    color: "teal.300",
                    transition: "color 0.3s"
                  }}
                >
                    Profilim
                </Text>

                <Button
                    onClick={handleLogout}
                    colorScheme="teal"
                    variant="outline"
                    borderColor="white"
                    color="white"
                    _hover={{
                        borderColor: 'teal.300',
                        backgroundColor: 'transparent',
                        color: 'teal.300',
                        transition: 'all 0.3s'
                    }}
                    marginRight="2"
                >
                    LogOut
                </Button>
            </Box>
        </Flex>
    );
};

export default Navbar;
