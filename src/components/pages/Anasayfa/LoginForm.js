import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Checkbox, Stack, Text } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from '../../../services/auth';
import { Link } from 'react-router-dom';

function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(email, password);
      if (user) {
        onLoginSuccess();
        console.log(`Email: ${email}, Password: ${password}, Remember me: ${rememberMe}`);
      }
    } catch (error) {
      console.log('Giriş başarısız', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <Text fontSize="xl" fontWeight="semibold" >Giriş Yapınız</Text>
        <FormControl id="email">
          <FormLabel>Email Adresi</FormLabel>
          <Input type="email" value={email} onChange={handleEmailChange} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Parola</FormLabel>
          <Input type="password" value={password} onChange={handlePasswordChange} />
        </FormControl>
        <Checkbox isChecked={rememberMe} onChange={handleRememberMeChange}>
          Beni Hatırla
        </Checkbox>
        <Stack direction="row" spacing={4}>
          <Button colorScheme="teal" variant="solid" type="submit">
            Giriş Yap
          </Button>
          <Link to="/register">
            <Button colorScheme="gray">Kayıt Ol</Button>
          </Link>
        </Stack>
      </Stack>
    </form>
  );
}

export default LoginForm;
