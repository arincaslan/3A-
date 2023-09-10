import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Text,
  Collapse, 
  Grid
} from '@chakra-ui/react';
import YerleşimForm from './YerleşimForm/YerleşimForm';
import SanayiForm from './SanayiForm/SanayiForm';
import AyrıkForm from './AyrıkForm/AyrıkForm';

function EmsalForm({ emsalData, onEmsalDataChange }) {
  const [form, setForm] = useState(emsalData || { cevreBilgisi: '', emsaller: [], menkulEkBilgi: {} });
  const [showForm, setShowForm] = useState(null);

  useEffect(() => {
    onEmsalDataChange(form);
  }, [form]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (['katYuksekligi', 'katSayisi', 'onBahceMesafesi', 'yanBahceMesafesi', 'cephe', 'derinlik', 'parselTuru'].includes(id)) {
      setForm({
        ...form,
        menkulEkBilgi: {
          ...form.menkulEkBilgi,
          [id]: value,
        },
      });
    } else {
      setForm({
        ...form,
        [id]: value,
      });
    }
  };

  const handleYerleşimEmsalSubmit = (emsallerFromYerlesim) => {
    setForm({ ...form, emsaller: [...form.emsaller, ...emsallerFromYerlesim] });
  };

  const handleSanayiEmsalSubmit = (emsallerFromSanayi) => {
    setForm({ ...form, emsaller: [...form.emsaller, ...emsallerFromSanayi] });
  }

  const handleAyrikEmsalSubmit = (emsallerFromAyrik) => {
    setForm({ ...form, emsaller: [...form.emsaller, ...emsallerFromAyrik] });
  }


  const handleShowForm = () => {
    setShowForm(form.cevreBilgisi);
  };



  return (
    <Box>
      <FormControl mb={4}>
        <FormLabel fontFamily="heading2" color="secondary.500" htmlFor="cevreBilgisi">Çevre Bilgisi:</FormLabel>
        <Select
          id="cevreBilgisi"
          value={form.cevreBilgisi}
          onChange={handleChange}
          required
        >
          <option value="">Çevre Seçin</option>
          <option value="yerlesim">Yerleşim Bölgesi</option>
          <option value="sanayi">Sanayi Bölgesi</option>
          <option value="ayrik">Ayrık Nizam</option>
        </Select>
      </FormControl>
      <Button mt={4} colorScheme="teal" onClick={handleShowForm}>
        Formu Göster
      </Button>
      <Box>
        {/* İşte eklediğimiz 'menkulEkBilgi' inputları: */}
        {form.cevreBilgisi === 'sanayi' && (
          // İlk form alanları için gerekli veri toplanma koşulları
          <VStack mt={4} spacing={4}>
            <Text fontFamily="body2" color="gray.500">Değerlemesi yapılacak gayrimenkulun ek bilgilerini  doğru şekilde giriniz.</Text>
            <FormControl>
              <FormLabel fontFamily="heading1" htmlFor="katYuksekligi">Kat Yüksekliği:</FormLabel>
              <Input type="number" id="katYuksekligi" value={form.menkulEkBilgi?.katYuksekligi || ''} onChange={(event) => handleChange(event)} required />
            </FormControl>
            <FormControl>
              <FormLabel fontFamily="heading1" htmlFor="katSayisi">Kat Sayısı:</FormLabel>
              <Input type="number" id="katSayisi" value={form.menkulEkBilgi?.katSayisi || ''} onChange={(event) => handleChange(event)} required />
            </FormControl>
          </VStack>
        )}

        {form.cevreBilgisi === 'ayrik' && (
          // İkinci form alanları için gerekli veri toplanma koşulları
          <Box mb={8} mt={4}>
             <Text mb={4} fontFamily="body2" color="gray.500">Değerlemesi yapılacak gayrimenkulun ek bilgilerini  doğru şekilde giriniz.</Text>
             <FormControl mb={3}>
              <FormLabel fontFamily="heading1" htmlFor="parselTuru">Parsel Türü</FormLabel>
              <Select
                id="parselTuru"
                value={form.menkulEkBilgi?.parselTuru || ''}
                onChange={(event) => handleChange(event)}
                required
              >
                <option value="">Parsel Türü Seçin</option>
                <option value="kose">Köşe Parsel</option>
                <option value="ara">Ara Parsel</option>
              </Select>
            </FormControl>
             <Grid templateColumns="repeat(2, 1fr)" gap={6}>
           
            <FormControl mb={3}>
              <FormLabel fontFamily="heading1" htmlFor="onBahceMesafesi">Ön Bahçe Mesafesi:</FormLabel>
              <Input type="number" id="onBahceMesafesi" value={form.menkulEkBilgi?.onBahceMesafesi || ''} onChange={(event) => handleChange(event)} required />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel fontFamily="heading1" htmlFor="yanBahceMesafesi">Yan Bahçe Mesafesi:</FormLabel>
              <Input type="number" id="yanBahceMesafesi" value={form.menkulEkBilgi?.yanBahceMesafesi || ''} onChange={(event) => handleChange(event)} required />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel fontFamily="heading1" htmlFor="katSayisi">Kat Sayısı:</FormLabel>
              <Input type="number" id="katSayisi" value={form.menkulEkBilgi?.katSayisi || ''} onChange={(event) => handleChange(event)} required />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel fontFamily="heading1" htmlFor="katYuksekligi">Kat Yüksekliği:</FormLabel>
              <Input type="number" id="katYuksekligi" value={form.menkulEkBilgi?.katYuksekligi || ''} onChange={(event) => handleChange(event)} required />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel fontFamily="heading1" htmlFor="cephe">Cephe:</FormLabel>
              <Input type="number" id="cephe" value={form.menkulEkBilgi?.cephe || ''} onChange={(event) => handleChange(event)} required />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel fontFamily="heading1" htmlFor="derinlik">Derinlik:</FormLabel>
              <Input type="number" id="derinlik" value={form.menkulEkBilgi?.derinlik || ''} onChange={(event) => handleChange(event)} required />
            </FormControl>
            </Grid>
          </Box>
        )}

        <Collapse in={showForm} animateOpacity>
          {
            showForm === 'yerlesim' && <YerleşimForm handleYerleşimEmsalSubmit={handleYerleşimEmsalSubmit} />
          }
          {
            showForm === 'sanayi' && <SanayiForm handleSanayiEmsalSubmit={handleSanayiEmsalSubmit} />
          }
          {
            showForm === 'ayrik' && <AyrıkForm handleAyrikEmsalSubmit={handleAyrikEmsalSubmit}/>
          }
        </Collapse>
      </Box>
    </Box>
  );
}

export default EmsalForm;
