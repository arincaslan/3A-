import { React, useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Textarea, HStack, Button, Grid, Box
} from '@chakra-ui/react';
import AyrikEmsalTable from './AyrikEmsalTable';

const AyrıkForm = ({ index, handleAyrikEmsalSubmit }) => {
  const [emsal, setEmsal] = useState({
    onBahceMesafesi: '',
    yanBahceMesafesi: '',
    derinlik: '',
    cephe: '',
    tasinmazSahibi: '',
    katSayisi: '',
    katYuksekligi: '',
    deger: '',
    aciklama: ''
  });

  const [emsaller, setEmsaller] = useState([]);

  const handleChange = (field, value) => {
    setEmsal({ ...emsal, [field]: value });
  };

  const handleEkle = () => {
    setEmsaller([...emsaller, emsal]);
    setEmsal({
      onBahceMesafesi: '',
      yanBahceMesafesi: '',
      derinlik: '',
      cephe: '',
      tasinmazSahibi: '',
      katSayisi: '',
      katYuksekligi: '',
      deger: '',
      aciklama: ''
    });
  };
  const handleEmsalSil = (indeks) => {
    const yeniEmsaller = [...emsaller];
    yeniEmsaller.splice(indeks, 1);
    setEmsaller(yeniEmsaller);
  };

  const handleKaydet = () => {
    handleAyrikEmsalSubmit(emsaller);
  };
  return (
    <VStack spacing={4}>

      <Heading fontFamily="heading1" color="secondary.500">Ayrık Nizam Emsal Form Alanları</Heading>
      <Text fontFamily="body2" color="gray.500">Değerleme için gerekli form alanlarını lütfen eksiksiz doldurunuz.</Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <FormControl isRequired>
          <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal${index}OnBahceMesafesi`}>Ön Bahçe Mesafesi</FormLabel>
          <Input
            type="number"
            name="onBahceMesafesi"
            value={emsal.onBahceMesafesi}
            id={`emsal${index}OnBahceMesafesi`}
            onChange={(event) => handleChange(event.target.name, event.target.value)} required />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal${index}YanBahceMesafesi`}>Yan Bahçe Mesafesi</FormLabel>
          <Input value={emsal.yanBahceMesafesi} type="number" name="yanBahceMesafesi" id={`emsal${index}YanBahceMesafesi`}
            onChange={(event) => handleChange(event.target.name, event.target.value)} required />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal${index}Derinlik`}>Arsa Derinlik</FormLabel>
          <Input value={emsal.derinlik} type="number" name="derinlik" id={`emsal${index}Derinlik`} onChange={(event) => handleChange(event.target.name, event.target.value)} required />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal${index}Cephe`}>Arsa Cephe</FormLabel>
          <Input value={emsal.cephe} type="number" name="cephe" id={`emsal${index}Cephe`} onChange={(event) => handleChange(event.target.name, event.target.value)} required />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal${index}katYuksekligi`}>Kat Yüksekliği</FormLabel>
          <Input value={emsal.katYuksekligi} type="number" name="katYuksekligi" id={`emsal${index}katYuksekligi`} onChange={(event) => handleChange(event.target.name, event.target.value)} required />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal${index}KatSayısı`}>Kat Sayisi</FormLabel>
          <Input type="number" value={emsal.katSayisi} name="katSayisi" id={`emsal${index}katSayisi`} onChange={(event) => handleChange(event.target.name, event.target.value)} required />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal_${index}_deger`}>Değer</FormLabel>
          <Input value={emsal.deger} type="number" name="deger" id={`emsal_${index}_deger`} onChange={(event) => handleChange(event.target.name, event.target.value)} required />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal_${index}_tasinmazSahibi`}>Taşınmaz Sahibi</FormLabel>
          <Input value={emsal.tasinmazSahibi} type="text" name="tasinmazSahibi" id={`emsal_${index}_tasinmazSahibi`} onChange={(event) => handleChange(event.target.name, event.target.value)} required />
        </FormControl>

      </Grid>
      <FormControl width="80%" >
        <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal_${index}_aciklama`}>Açıklama</FormLabel>
        <Textarea value={emsal.aciklama} name="aciklama" id={`emsal_${index}_aciklama`} onChange={(event) => handleChange(event.target.name, event.target.value)} required />
      </FormControl>

      <HStack mb={24} spacing={4}>
        <Button w={36} colorScheme='teal' onClick={handleEkle}>Ekle</Button>
        <Button w={36} onClick={handleKaydet} colorScheme="blue">Kaydet</Button>
      </HStack>

      <AyrikEmsalTable emsaller={emsaller} onEmsalSil={handleEmsalSil} />
    </VStack>
  )
}

export default AyrıkForm;
