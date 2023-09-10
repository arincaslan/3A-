import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Textarea,
  Alert,
  AlertIcon,
  Grid,
  Heading,
  Text
} from '@chakra-ui/react';
import AmortismanForm from './AmortismanForm/AmortismanForm';

function useForm(initialState) {
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm({ ...form, [id]: value });
  };

  return [form, handleChange];
}

function MaaliyetForm({ maaliyetData, onMaaliyetDataChange, emsalData }) {
  const [form, handleChange] = useForm({
    yeniden: maaliyetData.yeniden || { yapim_maliyeti: '',  ekonomik_omur: '', aciklama: '', faktorler: {}, piyasaBirimM2Fiyati: '' }
  });

  const handleAmortismanDataChange = (amortismanData) => {
    handleChange({ target: { id: 'yeniden', value: { ...form.yeniden, faktorler: amortismanData } } });
  };

  const handleSave = () => {
    onMaaliyetDataChange(form);
    console.log(form);
  };

  const handleYenidenInputChange = (event) => {
    const newFormYeniden = { ...form.yeniden, [event.target.id]: event.target.value };
    handleChange({ target: { id: 'yeniden', value: newFormYeniden } });
  };

  return (
    <Box boxShadow="dark-lg" p={12}>
      <Heading ml={2} mt={8} fontSize="3xl" fontWeight="bold" color="primary.700" fontFamily="heading1">Yeniden Üretim Maliyet Metodu Formu</Heading>
      <AmortismanForm amortismanData={form.yeniden.faktorler} onAmortismanDataChange={handleAmortismanDataChange} />
      <Box mt={12}>
      <Text alignSelf="center" mb={8} fontFamily="heading4" color="gray.500" >Değerlenecek gayrimenkul için bilgileri giriniz. Bilgileri doldurduktan sonra değerleme için gönderiniz.</Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <FormControl isRequired>
            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Yeniden Yapım Maliyeti</FormLabel>
            <Input type="number" id="yapim_maliyeti" value={form.yeniden.yapim_maliyeti || ''} onChange={handleYenidenInputChange} />
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Ekonomik Ömür</FormLabel>
            <Input type="number" id="ekonomik_omur" value={form.yeniden.ekonomik_omur || ''} onChange={handleYenidenInputChange} />
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Piyasa Birim m2 Fiyatı</FormLabel>
            <Input type="number" id="piyasaBirimM2Fiyati" value={form.yeniden.piyasaBirimM2Fiyati || ''} onChange={handleYenidenInputChange} />
            {emsalData.emsaller && emsalData.emsaller.length > 0 && (
              <Alert mt={4} status="info">
                <AlertIcon />
                Emsal Karşılaştırma Metodu seçildiği için Piyasa Birim m2 Fiyatı girilmediği taktirde emsal karşılaştırmadan hesaplanacaktır.
              </Alert>
            )}
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Açıklama</FormLabel>
            <Textarea id="aciklama" value={form.yeniden.aciklama || ''} onChange={handleYenidenInputChange} />
          </FormControl>
        </Grid>

        <Box display="flex" justifyContent="center" mt={8}>
          <Button  w={24} mt={8} colorScheme="green" onClick={handleSave}>Gönder</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default MaaliyetForm;
