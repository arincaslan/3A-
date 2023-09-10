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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Heading
} from '@chakra-ui/react';

function useForm(initialState) {
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm({ ...form, [id]: value });
  };

  return [form, handleChange];
}

function GelirForm({ gelirData, onGelirDataChange }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, handleChange] = useForm(gelirData || { secilenYontem: '', ornekler: [], kiraCarpani: '', aylikKiraBedeli: '' });
  const [ornekler, setOrnekler] = useState([{ deger: "", kiraBedeli: "" }]);

  const handleOrnekEkle = () => {
    setOrnekler([...ornekler, { deger: "", kiraBedeli: "" }]);
  };

  useEffect(() => {
    onGelirDataChange(form);
  }, [form]);

  const handleInputChange = (index, event) => {
    const values = [...ornekler];
    values[index][event.target.name] = event.target.value;
    setOrnekler(values);
  };

  const calculateKiraCarpani = () => {
    const total = ornekler.reduce((sum, ornek) => {
      const oran = ornek.deger / ornek.kiraBedeli;
      return sum + oran;
    }, 0);
    const kiraCarpani = total / ornekler.length;
    handleChange({ target: { id: 'kiraCarpani', value: kiraCarpani } });
    onClose();
  };

  return (
    <Box>
      <FormControl>
        <FormLabel  ml={2} mt={8} fontSize="3xl" fontWeight="bold" color="secondary.500" fontFamily="heading1">Gelir Yöntemi</FormLabel>
        <Select id="secilenYontem" value={form.secilenYontem} onChange={handleChange}>
          <option value="">Yöntem Seçin</option>
          <option value="kiraCarpani">Kira Çarpanı Metodu</option>
          <option value="krediDegerNotu">Kredi-Değer Notu İle Hesaplama</option>
        </Select>
      </FormControl>

      {form.secilenYontem === "kiraCarpani" && (
        <VStack spacing={4}>
          <Heading ml={2} mt={8} fontSize="3xl" fontWeight="bold" color="primary.700" fontFamily="heading1">Kira Çarpanı Metodu Formu</Heading>
          <Text alignSelf="center" fontFamily="heading4" color="gray.500" >Değerlenecek gayrimenkul gerekli bilgileri giriniz. Kira çarpanı elinizde yoksa hesaplamak için aracı kullanabilirsiniz.</Text>
          <Text alignSelf="center" mb={8} fontFamily="heading4" color="gray.500" >Bilgileri doldurduktan sonra rapor oluştur butonu ile metodu raporuna ekleyip ödeme sayfasına yönlendirilirsiniz.</Text>

          <FormControl>
            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Kira Çarpanı</FormLabel>
            <Input type="number" id="kiraCarpani" value={form.kiraCarpani || ''} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Aylık Kira Bedeli</FormLabel>
            <Input isRequired type="number" id="aylikKiraBedeli" value={form.aylikKiraBedeli || ''} onChange={handleChange} />
          </FormControl>
          <Button onClick={onOpen}>Kira Çarpanı Hesapla</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader fontWeight="bold" color="secondary.700" fontFamily="heading1">Kira Çarpanı Hesapla</ModalHeader>
              <Text ml={6} fontFamily="heading4" color="gray.500">Örnekler ekleyip hesaplaya tıklayınız.</Text>
              <ModalCloseButton />
              <ModalBody>
                {ornekler.map((ornek, index) => (
                  <VStack key={index}>
                    <Text mt={4} fontWeight="bold" color="primary.700" fontFamily="heading1">{index + 1}. Örnek</Text>
                    <FormControl>
                      <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Satış Fiyatı</FormLabel>
                      <Input type="number" name="deger" value={ornek.deger} onChange={event => handleInputChange(index, event)} />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Kira Bedeli</FormLabel>
                      <Input type="number" name="kiraBedeli" value={ornek.kiraBedeli} onChange={event => handleInputChange(index, event)} />
                    </FormControl>
                  </VStack>
                ))}
                <Button mt={2} colorScheme='teal' onClick={handleOrnekEkle}>Örnek Ekle</Button>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={calculateKiraCarpani}>
                  Hesapla
                </Button>
                <Button variant="ghost" onClick={onClose}>Kapat</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      )}

      {form.secilenYontem === "krediDegerNotu" && (
        <VStack spacing={4}>
           <Heading ml={2} mt={8} fontSize="3xl" fontWeight="bold" color="primary.700" fontFamily="heading1">Kredi-Değer Metodu Formu</Heading>
           <Text alignSelf="center" fontFamily="heading4" color="gray.500" >İlgili bilgilere değerlenecek gayrimenkulun kredi raporundan ulaşabilirsiniz.</Text>
          <Text alignSelf="center" fontFamily="heading4" color="gray.500" >Değerlenecek gayrimenkul gerekli bilgileri giriniz. Rapor oluştur butonu ile gönderiniz.</Text>
          <FormControl isRequired>
            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Kredi Tutarı</FormLabel>
            <Input type="number" id="krediTutari" value={form.krediTutari || ''} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Kredi Değer Oranı</FormLabel>
            <Input type="number" id="krediDegerOrani" value={form.krediDegerOrani || ''} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Kredi Değerleme Tarihi</FormLabel>
            <Input type="date" id="degerlemeTarihi" value={form.degerlemeTarihi || ''} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Yıllık Faiz Oranı(%)</FormLabel>
            <Input type="number" id="faizOrani" value={form.faizOrani || ''} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Açıklama</FormLabel>
            <Textarea id="aciklama" value={form.aciklama || ''} onChange={handleChange} />
          </FormControl>
        </VStack>
      )}
    </Box>
  );
}

export default GelirForm;
