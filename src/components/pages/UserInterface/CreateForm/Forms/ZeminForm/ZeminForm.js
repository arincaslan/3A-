import { useState } from 'react';
import { Box, VStack, Input, Button, FormControl, FormLabel, Select, Text, Heading, Grid } from '@chakra-ui/react';

function ZeminForm({ onNext, onBack }) {
  const [zeminFormasyonCinsi, setZeminFormasyonCinsi] = useState('');
  const [zeminEmniyetGerilmesi, setZeminEmniyetGerilmesi] = useState('');
  const [zeminYatakKatsayisi, setZeminYatakKatsayisi] = useState('');
  const [zeminKarakteristikPeriyotTA, setZeminKarakteristikPeriyotTA] = useState('');
  const [zeminKarakteristikPeriyotTB, setZeminKarakteristikPeriyotTB] = useState('');
  const [zeminHakimTitresimPeriyodu, setZeminHakimTitresimPeriyodu] = useState('');
  const [zeminGrubu, setZeminGrubu] = useState('');
  const [yerelZeminSinifi, setYerelZeminSinifi] = useState('');
  const [etkinYerIvmeKatsayisi, setEtkinYerIvmeKatsayisi] = useState('');
  const [binaOnemKatsayisi, setBinaOnemKatsayisi] = useState('');
  const [zeminDepremBolgeDerecesi, setZeminDepremBolgeDerecesi] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    const zeminData = {
      zeminFormasyonCinsi,
      zeminEmniyetGerilmesi,
      zeminYatakKatsayisi,
      zeminKarakteristikPeriyotTA,
      zeminKarakteristikPeriyotTB,
      zeminHakimTitresimPeriyodu,
      zeminGrubu,
      yerelZeminSinifi,
      etkinYerIvmeKatsayisi,
      binaOnemKatsayisi,
      zeminDepremBolgeDerecesi,
    };

    onNext(zeminData);
  }

  return (
    <Box width={[
      "800px", // base
      "30em", // 480px upwards
      "48em", // 768px upwards
      "800px", // 992px upwards
    ]} p={3} boxShadow="lg">
      <Heading mt={4} color="secondary.500" fontFamily="heading2" size="lg">3. Adım: Zemin Bilgileri Formu</Heading>
      <Text fontFamily="heading4" fontSize="sm" color="gray.500">
        Bu bilgilere değerlenecek gayrimenkulün zemin etüt raporunun sonuçlar kısmından ulaşabilirsiniz.
      </Text>
      <form onSubmit={handleSubmit}>
        <Grid mt={8} templateColumns="repeat(2, 1fr)" gap={6} mx="auto">
          <Box>
            <FormControl mb={3} id="zeminFormasyonCinsi">
              <FormLabel color="secondary.500" fontFamily="heading2">Zemin Formasyon Cinsi</FormLabel>
              <Select placeholder="Seçiniz" value={zeminFormasyonCinsi} onChange={(e) => setZeminFormasyonCinsi(e.target.value)}>
                <option value="Kum">Kum</option>
                <option value="Çakıl">Çakıl</option>
                <option value="Kil">Kil</option>
                <option value="Silt">Silt</option>
                <option value="Torf">Torf</option>
                <option value="Kaya">Kaya</option>
              </Select>
            </FormControl>
            <FormControl mb={3} id="zeminEmniyetGerilmesi">
              <FormLabel color="secondary.500" fontFamily="heading2">Zemin Emniyet Gerilmesi (Kg/cm2)</FormLabel>
              <Input type="number" value={zeminEmniyetGerilmesi} onChange={(e) => setZeminEmniyetGerilmesi(e.target.value)} />
            </FormControl>
            <FormControl mb={3} id="zeminYatakKatsayisi">
              <FormLabel color="secondary.500" fontFamily="heading2">Zemin Yatak Katsayısı (t/m3)</FormLabel>
              <Input type="number" value={zeminYatakKatsayisi} onChange={(e) => setZeminYatakKatsayisi(e.target.value)} />
            </FormControl>
            <FormControl mb={3} id="zeminKarakteristikPeriyotTA">
              <FormLabel color="secondary.500" fontFamily="heading2">Zemin Karakteristik Periyot Ta (sn)</FormLabel>
              <Input type="number" value={zeminKarakteristikPeriyotTA} onChange={(e) => setZeminKarakteristikPeriyotTA(e.target.value)} />
            </FormControl>
            <FormControl mb={3} id="zeminKarakteristikPeriyotTB">
              <FormLabel color="secondary.500" fontFamily="heading2">Zemin Karakteristik Periyot Tb (sn)</FormLabel>
              <Input type="number" value={zeminKarakteristikPeriyotTB} onChange={(e) => setZeminKarakteristikPeriyotTB(e.target.value)} />
            </FormControl>
            <FormControl mb={3} id="zeminHakimTitresimPeriyodu">
              <FormLabel color="secondary.500" fontFamily="heading2">Zemin Hakim Titreşim Periyodu (sn)</FormLabel>
              <Input type="number" value={zeminHakimTitresimPeriyodu} onChange={(e) => setZeminHakimTitresimPeriyodu(e.target.value)} />
            </FormControl>
          </Box>
          <Box>
            <FormControl mb={3} id="zeminGrubu">
              <FormLabel color="secondary.500" fontFamily="heading2">Zemin Grubu</FormLabel>
              <Select placeholder="Zemin Grubunu Seçiniz" value={zeminGrubu} onChange={(e) => setZeminGrubu(e.target.value)}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </Select>
            </FormControl>
            <FormControl mb={3} id="yerelZeminSinifi">
              <FormLabel color="secondary.500" fontFamily="heading2">Yerel Zemin Sınıfı</FormLabel>
              <Select placeholder="Seçiniz" value={yerelZeminSinifi} onChange={(e) => setYerelZeminSinifi(e.target.value)}>
                <option value="Z1">Z1</option>
                <option value="Z2">Z2</option>
                <option value="Z3">Z3</option>
                <option value="Z4">Z4</option>
              </Select>
            </FormControl>
            <FormControl mb={3} id="etkinYerIvmeKatsayisi">
              <FormLabel color="secondary.500" fontFamily="heading2">Etkin Yer İvme Katsayısı (g)</FormLabel>
              <Input type="number" value={etkinYerIvmeKatsayisi} onChange={(e) => setEtkinYerIvmeKatsayisi(e.target.value)} />
            </FormControl>
            <FormControl mb={3} id="binaOnemKatsayisi">
              <FormLabel color="secondary.500" fontFamily="heading2">Bina Önem Katsayısı</FormLabel>
              <Select placeholder="Bina Önem Katsayısını seçin" value={binaOnemKatsayisi} onChange={(e) => setBinaOnemKatsayisi(e.target.value)}>
                <option value="1">1</option>
                <option value="1.2">1.2 </option>
                <option value="1.5">1.5 </option>
              </Select>
            </FormControl>
            <FormControl mb={3} id="zeminDepremBolgeDerecesi">
              <FormLabel color="secondary.500" fontFamily="heading2">Zemin Deprem Bölge Derecesi</FormLabel>
              <Select placeholder="Zemin Deprem Bölge Derecesini Seçin" onChange={(e) => setZeminDepremBolgeDerecesi(e.target.value)}>
                <option value="1">1. Derece Deprem Bölgesi</option>
                <option value="2">2. Derece Deprem Bölgesi</option>
                <option value="3">3. Derece Deprem Bölgesi</option>
                <option value="4">4. Derece Deprem Bölgesi</option>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <VStack align="center" spacing={4} mt={4}>
          <Button w={24} colorScheme="teal" type="submit">İleri</Button>
          {onBack && <Button w={24} colorScheme='red' onClick={onBack}>Geri</Button>}
        </VStack>

      </form>
    </Box>
  );
}

export default ZeminForm;
