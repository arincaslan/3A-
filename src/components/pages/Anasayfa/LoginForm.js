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
        <Text fontFamily="heading1" color="teal" fontSize="xl" fontWeight="bold" >Giriş Yapınız</Text>
        <FormControl id="email">
          <FormLabel fontFamily="heading1" color="teal">Email Adresi</FormLabel>
          <Input type="email" value={email} onChange={handleEmailChange} />
        </FormControl>
        <FormControl id="password">
          <FormLabel fontFamily="heading1" color="teal">Parola</FormLabel>
          <Input type="password" value={password} onChange={handlePasswordChange} />
        </FormControl>
        <Checkbox fontFamily="heading1" color="teal" isChecked={rememberMe} onChange={handleRememberMeChange}>
          Beni Hatırla
        </Checkbox>
        <Stack direction="row" spacing={4}>
          <Button fontFamily="heading1"  colorScheme="teal" variant="solid" type="submit">
            Giriş Yap
          </Button>
          <Link to="/register">
            <Button fontFamily="heading1" colorScheme="gray">Kayıt Ol</Button>
          </Link>
        </Stack>
      </Stack>
    </form>
  );
}

export default LoginForm;
