import {React, useState} from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  Heading,
  Text
} from '@chakra-ui/react';
import SanayiEmsalTable from './SanayiEmsalTable';

const SanayiForm = ({ index, handleSanayiEmsalSubmit }) => {
  const [emsal, setEmsal] = useState({
    tasinmazAlani: '',
    taks: '',
    kaks: '',
    deger: '',
    tasinmazSahibi: '',
    katSayisi: '',
    katYuksekligi: '',
    acıklama: ''
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
      katSayisi: '',
      katYuksekligi: '',
      acıklama: ''
    });
  };
  const handleEmsalSil = (indeks) => {
    const yeniEmsaller = [...emsaller];
    yeniEmsaller.splice(indeks, 1);
    setEmsaller(yeniEmsaller);
  };

  const handleKaydet = () => {
    handleSanayiEmsalSubmit(emsaller);
  };

  return (
    <VStack mt={8} mb={8} spacing={4} maxWidth="1000px">
      <Heading fontFamily="heading1" color="secondary.500">Sanayi Bölgesi Emsal Form Alanları</Heading>
      <Text fontFamily="body2" color="gray.500">Değerleme için gerekli form alanlarını lütfen eksiksiz doldurunuz.</Text>
      {/* Sanayi Bölgesi için emsal form alanları */}
      <FormControl isRequired>
        <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal_${index}_tasinmazAlani`}>Taşınmaz Alanı</FormLabel>
        <Input value={emsal.tasinmazAlani} type="number" name="tasinmazAlani" id={`emsal_${index}_tasinmazAlani`}  onChange={(event) => handleChange(event.target.name, event.target.value)} required />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal_${index}_katSayisi`}>Kat Sayısı</FormLabel>
        <Input value={emsal.katSayisi} type="number" name="katSayisi" id={`emsal_${index}_katSayisi`}  onChange={(event) => handleChange(event.target.name, event.target.value)} required />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal${index}katYuksekligi`}>Kat Yüksekliği</FormLabel>
        <Input type="number" value={emsal.katYuksekligi} name="katYuksekligi" id={`emsal${index}katYuksekligi`}  onChange={(event) => handleChange(event.target.name, event.target.value)} required />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal_${index}_taks`}>TAKS</FormLabel>
        <Input value={emsal.taks} type="number" step="0.01" name="taks" id={`emsal_${index}_taks`}  onChange={(event) => handleChange(event.target.name, event.target.value)} required />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal_${index}_kaks`}>KAKS</FormLabel>
        <Input type="number" value={emsal.kaks} step="0.01" name="kaks" id={`emsal_${index}_kaks`}  onChange={(event) => handleChange(event.target.name, event.target.value)} required />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal_${index}_deger`}>Değer</FormLabel>
        <Input type="number" value={emsal.deger} name="deger" id={`emsal_${index}_deger`}  onChange={(event) => handleChange(event.target.name, event.target.value)} required />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal_${index}_tasinmazSahibi`}>Taşınmaz Sahibi</FormLabel>
        <Input type="text" name="tasinmazSahibi" value={emsal.tasinmazSahibi} id={`emsal_${index}_tasinmazSahibi`}  onChange={(event) => handleChange(event.target.name, event.target.value)} required />
      </FormControl>
      <FormControl>
        <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2" htmlFor={`emsal_${index}acıklama`}>Açıklama</FormLabel>
        <Input type="text" value={emsal.acıklama} name="acıklama" id={`emsal_${index}acıklama`}  onChange={(event) => handleChange(event.target.name, event.target.value)} required />
      </FormControl>
      <HStack spacing={4}>
        <Button w={36} colorScheme='teal' onClick={handleEkle}>Ekle</Button>
        <Button w={36} onClick={handleKaydet} colorScheme="blue">Kaydet</Button>
      </HStack>

      <VStack mt={8} spacing={4} overflowX="auto" maxWidth="800px"> {/* maxHeight değeri örnek olarak verilmiştir, ihtiyacınıza göre ayarlayabilirsiniz */}
        <SanayiEmsalTable w="100%" emsaller={emsaller} onEmsalSil={handleEmsalSil} />
      </VStack>
    </VStack>
  )
}

export default SanayiForm;
