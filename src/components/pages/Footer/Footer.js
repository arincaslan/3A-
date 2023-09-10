// src/components/Footer.js

import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';

function Footer() {
  return (
    <Box bg="gray.700" color="white" w="100%" p={4}>
      <Text textAlign="center">
        © 2023 3A+ Tüm Hakları Saklıdır. |
        <Link color="teal.300" href="/privacy-policy"> Gizlilik Politikası </Link> |
        <Link color="teal.300" href="/terms"> Kullanım Şartları </Link>
      </Text>
    </Box>
  );
}

export default Footer;
