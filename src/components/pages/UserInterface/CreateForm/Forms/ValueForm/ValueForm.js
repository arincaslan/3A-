import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, VStack, Select, useToast, Heading, Text } from '@chakra-ui/react';
import EmsalForm from './EmsalForm/EmsalForm';
import MaaliyetForm from './MaaliyetForm/MaaliyetForm';
import GelirForm from './GelirForm/GelirForm';


function ValueForm({ onNext, onBack }) {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [emsalData, setEmsalData] = useState({ cevreBilgisi: '', emsaller: [] });
  const [maaliyetData, setMaaliyetData] = useState({ secilenMetod: '', ikameler: [] });
  const [gelirData, setGelirData] = useState(null);
  const toast = useToast();

  const handleChangeMethod = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handleEmsalDataChange = (newEmsalData) => {
    setEmsalData(newEmsalData);
  };

  const handleMaaliyetDataChange = (newMaaliyetData) => {
    setMaaliyetData(newMaaliyetData);
  };

  const handleGelirDataChange = (newGelirData) => {
    setGelirData(newGelirData);
  };

  const handleSubmit = () => {
    if ((selectedMethod === 'method1' && emsalData.cevreBilgisi && emsalData.emsaller.length > 0) ||
      (selectedMethod === 'method2' &&  maaliyetData.yeniden) ||
      (selectedMethod === 'method3' && gelirData /* GelirData için uygun kontrol */)) {
      const valueData = {
        selectedMethod,
        emsalData,
        maaliyetData,
        gelirData,
      };
      onNext(valueData);
      console.log(valueData);
    } else {
      toast({
        title: "Hata.",
        description: "Eksik veya geçersiz veri girdiniz.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };


  return (
    <VStack maxW="1200px" width="100%" p={3} boxShadow="lg">
      <Box>
        <Heading mt={4} color="secondary.500" fontFamily="heading2" size="lg">4. Adım: Değerleme Metodu Seçimi ve Bilgileri</Heading>
      </Box>
      <Box w="60%">
        <FormControl>
          <FormLabel fontFamily="heading4" fontSize="sm" color="gray.500" htmlFor="method">Değerleme Metodu Seçiniz</FormLabel>
          <Select id="method" value={selectedMethod} onChange={handleChangeMethod} required>
            <option value="">Metod Seçin</option>
            <option value="method1">Emsal Karşılaştırma Metodu</option>
            <option value="method2">Maaliyet Yaklaşımı Metodu</option>
            <option value="method3">Gelir Yaklaşımı Metodu</option>
          </Select>
        </FormControl>
      </Box>
      {selectedMethod === 'method1' && (
        <EmsalForm emsalData={emsalData} onEmsalDataChange={handleEmsalDataChange} />
      )}
      {selectedMethod === 'method2' && (
        <MaaliyetForm emsalData={emsalData} selectedMethod={selectedMethod} maaliyetData={maaliyetData} onMaaliyetDataChange={handleMaaliyetDataChange} />
      )}
      {selectedMethod === 'method3' && (
        <GelirForm gelirData={gelirData} onGelirDataChange={handleGelirDataChange} />
      )}
      <Box display="flex" justifyContent="space-between" w="100%">
      {onBack && <Button colorScheme='red' onClick={onBack} mr={2}>Geri</Button>}
        <Button colorScheme="teal" type="button" onClick={handleSubmit}>Rapor Oluştur</Button>  
      </Box>

    </VStack>
  );
}

export default ValueForm;
