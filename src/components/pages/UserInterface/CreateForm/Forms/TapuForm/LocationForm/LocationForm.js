import React, { forwardRef, useImperativeHandle, useState } from "react";
import { VStack, Box, FormControl, FormLabel, Input, Text, Heading } from '@chakra-ui/react';

const LocationForm = forwardRef((props, ref) => {
  const [il, setIl] = useState("");
  const [ilce, setIlce] = useState("");
  const [mahalle, setMahalle] = useState("");

  useImperativeHandle(ref, () => ({
    getData: () => ({ il, ilce, mahalle })
  }));

  return (
    <VStack as="form" align="stretch" spacing={4}>
      <Box mt={8} display="flex" flexDirection="column" alignItems="center">
        <Heading mt={4} color="secondary.500" fontFamily="heading2" size="md">Lokasyon Bilgisi Formu</Heading>
        <Text fontFamily="heading4" mb={4}>Bu formda değerlenecek gayrimenkulun konum bilgileri alınır.</Text>

        <FormControl isRequired id="il" mb={3} w="70%">
          <FormLabel color="secondary.500" fontFamily="heading2">İl</FormLabel>
          <Input type="text"  value={il} onChange={(e) => setIl(e.target.value)} />
        </FormControl>
        
        <FormControl isRequired id="ilce" mb={3} w="70%">
          <FormLabel color="secondary.500" fontFamily="heading2">İlçe</FormLabel>
          <Input type="text" value={ilce} onChange={(e) => setIlce(e.target.value)} />
        </FormControl>
        
        <FormControl isRequired id="mahalle" mb={3} w="70%">
          <FormLabel color="secondary.500" fontFamily="heading2">Mahalle</FormLabel>
          <Input type="text" value={mahalle} onChange={(e) => setMahalle(e.target.value)} />
        </FormControl>
      </Box>
    </VStack>
  );
});

export default LocationForm;
