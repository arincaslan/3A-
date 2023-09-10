import { React, useState } from 'react';
import { VStack, FormControl, FormLabel, Input, Textarea, Button, HStack } from '@chakra-ui/react';
import YerleşimEmsalTable from './YerleşimEmsalTable';

const YerleşimForm = ({ index, handleYerleşimEmsalSubmit }) => {
  const [emsal, setEmsal] = useState({
    tasinmazAlani: '',
    taks: '',
    kaks: '',
    deger: '',
    tasinmazSahibi: '',
    aciklama: ''
  });

  const [emsaller, setEmsaller] = useState([]);

  const handleChange = (field, value) => {
    setEmsal({ ...emsal, [field]: value });
  };

  const handleEkle = () => {
    setEmsaller([...emsaller, emsal]);
    setEmsal({
      tasinmazAlani: '',
      taks: '',
      kaks: '',
      deger: '',
      tasinmazSahibi: '',
      aciklama: ''
    });
  };
  const handleEmsalSil = (indeks) => {
    const yeniEmsaller = [...emsaller];
    yeniEmsaller.splice(indeks, 1);
    setEmsaller(yeniEmsaller);
  };

  const handleKaydet = () => {
    handleYerleşimEmsalSubmit(emsaller);
  };


  return (
    <VStack mt={8} mb={8} spacing={5} align="stretch" w="95%">
      <FormControl isRequired>
        <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal_${index}_tasinmazAlani`} >Taşınmaz Alanı:</FormLabel>
        <Input
          type="number"
          id={`emsal_${index}_tasinmazAlani`}
          value={emsal.tasinmazAlani || ''}
          onChange={(event) => handleChange('tasinmazAlani', event.target.value)}
          borderRadius="md"
          boxShadow="sm"
          
          onKeyDown={(e) => {
            if (e.key === ',') {
              e.preventDefault();
            }
          }}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal_${index}_taks`}>TAKS:</FormLabel>
        <Input
          type="number"
          step="0.01"
          id={`emsal_${index}_taks`}
          value={emsal.taks || ''}
          onChange={(event) => handleChange('taks', event.target.value)}
          borderRadius="md"
          boxShadow="sm"
          
          onKeyDown={(e) => {
            if (e.key === ',') {
              e.preventDefault();
            }
          }}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal_${index}_kaks`}>KAKS:</FormLabel>
        <Input
          type="number"
          step="0.01"
          id={`emsal_${index}_kaks`}
          value={emsal.kaks || ''}
          onChange={(event) => handleChange('kaks', event.target.value)}
          borderRadius="md"
          boxShadow="sm"
          
          onKeyDown={(e) => {
            if (e.key === ',') {
              e.preventDefault();
            }
          }}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal_${index}_deger`}>Değer:</FormLabel>
        <Input
          type="number"
          id={`emsal_${index}_deger`}
          value={emsal.deger || ''}
          onChange={(event) => handleChange('deger', event.target.value)}
          borderRadius="md"
          boxShadow="sm"
          
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal_${index}_tasinmazSahibi`}>Taşınmaz Sahibi:</FormLabel>
        <Input
          type="text"
          id={`emsal_${index}_tasinmazSahibi`}
          value={emsal.tasinmazSahibi || ''}
          onChange={(event) => handleChange('tasinmazSahibi', event.target.value)}
          borderRadius="md"
          boxShadow="sm"
          
        />
      </FormControl>
      <FormControl >
        <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal_${index}_aciklama`}>Açıklama:</FormLabel>
        <Textarea
          id={`emsal_${index}_aciklama`}
          value={emsal.aciklama || ''}
          onChange={(event) => handleChange('aciklama', event.target.value)}
          borderRadius="md"
          boxShadow="sm"
         
        />
      </FormControl>
      <HStack spacing={4} w="100%" justifyContent="flex-start">
        <Button w={36} onClick={handleEkle} colorScheme="teal">Ekle</Button>
        <Button w={36} onClick={handleKaydet} colorScheme="blue">Kaydet</Button>
      </HStack>

      <YerleşimEmsalTable emsaller={emsaller} onEmsalSil={handleEmsalSil} />
    </VStack>
  );
};

export default YerleşimForm;
