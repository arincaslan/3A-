import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button, VStack, Box, Heading, useToast, Tooltip, Icon, Flex } from '@chakra-ui/react';
import { auth } from '../../../services/auth';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import instance from '../../../services/axios-firebase';
import { useNavigate } from 'react-router-dom';
import { InfoOutlineIcon } from '@chakra-ui/icons'; // Chakra UI'nin ikon kütüphanesinden bilgi ikonunu içe aktar
import AnimatedText from '../../Tools/AnimatedText/AnimatedText';
import Footer from '../Footer/Footer';


function RegisterForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [firm, setFirm] = useState('');
  const navigate = useNavigate();
  const toast = useToast(); // Olası hata mesajları için toast bildirimi

  const handleGoBack = () => {
    navigate('/');  // Ana sayfaya yönlendirme
  };


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleFirmChange = (event) => {
    setFirm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Set user's display name to name and surname
        userCredential.user.updateProfile({
          displayName: `${name} ${surname}`
        });

        // Send user data to server
        const userData = {
          uid: userCredential.user.uid,
          email: email,
          name: name,
          surname: surname,
          phone: phone,
          firm: firm
        };

        return instance.post(`users/${userCredential.user.uid}.json`, userData); // Promise döndürülmeli
      })
      .then((response) => {
        console.log('User created successfully');

        // Toast bildirimi ile kullanıcıya başarılı kayıt mesajı gösterilir.
        toast({
          title: "Başarılı!",
          description: "Kayıt başarılı, giriş için Anasayfaya yönlendiriliyorsunuz.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        // Kısa bir süre bekledikten sonra kullanıcıyı anasayfaya yönlendir.
        setTimeout(() => {
          navigate('/');
        }, 3200);
      })
      .catch((error) => {
        console.error('Error creating user', error);

        // Eğer bir hata oluşursa, kullanıcıya hata mesajı gösterilir.
        toast({
          title: "Hata!",
          description: "Kayıt sırasında bir hata oluştu.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const textPositions = [
    { text: "Kayıt olda başlayalım...", position: { top: '2%', left: '5%' } },
    { text: "Hoşgeldin!", position: { top: '23%', right: '5%' } },
    { text: "Raporla!!", position: { bottom: '20%', left: '5%' } },
    { text: "Kimler gelmiş.", position: { bottom: '42%', right: '5%' } },
    { text: "Hazır mıyız?", position: { top: '7%', left: '50%' } },
  ];

  return (
    <Box  width='100%'>
         
    <VStack  spacing={10} align="center" width="100%" position="relative">
      {textPositions.map((item, index) => (
        <AnimatedText position={item.position} key={index}>
          <Heading  fontSize={["sm", "md", "xl"]} fontFamily="heading2" color="primary.900">
            {item.text}
          </Heading>
        </AnimatedText>

      ))}
      <Flex
        direction={["column", "row"]}
        alignItems="center"
        justifyContent="space-between"
        spacing={8}
        width="100%"
        marginBottom="50px"
      >
        <Box
          w="32rem"
          maxW="600px"
          marginX="auto"
          padding="20px"
          marginTop="50px"
          marginBottom="50px"
          borderRadius="10px"
          boxShadow="2xl"
          bg="white.50"
          as="form"
          onSubmit={handleSubmit}
        >
          <VStack spacing={5} alignItems="start"> {/* Bu satırda değişiklik yapıldı */}
            <Heading as="h2" size="xl" fontFamily="heading1" color="primary.900">Kayıt Ol</Heading>
            <VStack spacing={4} w="100%" alignItems="start"> {/* Bu satırda değişiklik yapıldı */}
              <VStack w="90%" spacing={4} alignItems="start"> {/* Bu satırda değişiklik yapıldı */}
                <FormControl id="name">
                  <FormLabel fontFamily="heading1">Ad</FormLabel>
                  <Input type="text" value={name} onChange={handleNameChange} />
                </FormControl>
                <FormControl id="surname">
                  <FormLabel fontFamily="heading1">Soyad</FormLabel>
                  <Input type="text" value={surname} onChange={handleSurnameChange} />
                </FormControl>
                <FormControl id="email">
                  <FormLabel fontFamily="heading1">Email</FormLabel>
                  <Input type="email" value={email} onChange={handleEmailChange} />
                </FormControl>
                <FormControl id="password" position="relative">
                  <Flex justifyContent="start">
                    <FormLabel fontFamily="heading1">Parola</FormLabel>
                    <Tooltip label="Parola minimum 6 karakterli olmalıdır." aria-label="Parola bilgisi">
                      <Icon as={InfoOutlineIcon} color="gray.500" w={5} h={5} cursor="pointer" />
                    </Tooltip>
                  </Flex>
                  <Input type="password" value={password} onChange={handlePasswordChange} />
                </FormControl>
                <FormControl id="phone">
                  <FormLabel fontFamily="heading1">Telefon</FormLabel>
                  <Input type="tel" value={phone} onChange={handlePhoneChange} />
                </FormControl>
                <FormControl id="firm">
                  <FormLabel fontFamily="heading1">Firma Adı</FormLabel>
                  <Input type="text" value={firm} onChange={handleFirmChange} />
                </FormControl>
              </VStack>
            </VStack>
            <Button fontFamily="heading1" alignSelf="center" colorScheme="teal" w="40%" type="submit">Kayıt Ol</Button>
            <Button fontFamily="heading1" colorScheme="gray" alignSelf="center" onClick={handleGoBack} variant="link" >
              Anasayfaya Geri Dön
            </Button>
          </VStack>
        </Box>
      </Flex>
    </VStack>
    <Footer />
    </Box>
  );
}

export default RegisterForm;
