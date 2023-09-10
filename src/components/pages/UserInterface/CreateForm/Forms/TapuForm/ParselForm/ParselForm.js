import React, { forwardRef, useImperativeHandle, useState } from "react";
import { VStack, Box, FormControl, FormLabel, Input, Select, Heading, Text, Grid, Tooltip } from '@chakra-ui/react';
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { storage } from '../../../../../../../services/FireConfig';

const ParselForm = forwardRef((props, ref) => {
  const [paftaNo, setPaftaNo] = useState("");
  const [parselNo, setParselNo] = useState("");
  const [nitelik, setNitelik] = useState("");
  const [yuzolcumu, setYuzolcumu] = useState("");
  const [imarDurumu, setImarDurumu] = useState("");
  const [taks, setTaks] = useState("");
  const [kaks, setKaks] = useState("");
  const [imarResmi, setImarResmi] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImarResmi(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const uploadAndGetUrl = async (base64String) => {
    if (!base64String) return null;

    const blob = await fetch(base64String).then(res => res.blob());

    const fileRef = storage.ref(`/imar-resmi/${new Date().getTime()}.png`);

    const snapshot = await fileRef.put(blob);

    const url = await snapshot.ref.getDownloadURL();

    return url;
  };


  useImperativeHandle(ref, () => ({
    getData: async () => {
      const imarResmiUrl = await uploadAndGetUrl(imarResmi);
      return { paftaNo, parselNo, nitelik, yuzolcumu, imarDurumu, taks, kaks, imarResmi: imarResmi, imarResmiUrl }
    }
  }));




  return (
    <VStack as="form" align="stretch" spacing={4}>
      <Box alignItems="center" textAlign="center" mb={5}>
        <Heading  mt={4} color="secondary.500" fontFamily="heading2" size="md">Parsel Bilgisi Formu</Heading>
        <Text fontFamily="heading4" fontSize="sm" color="gray.500">
          Bu formda değerlenecek gayrimenkulun parsel bilgileri alınır.
        </Text>
        <Text fontFamily="heading4" fontSize="sm" color="gray.500">
          Bu bilgilere değerlenecek gayrimenkulun E-İmar sayfasından veya tapusundan ulaşabilirsiniz.
        </Text>
      </Box>
      <Grid  templateColumns="repeat(2, 1fr)" gap={6}  mx="auto">
        <Box>
          <FormControl isRequired  mb={3} id="paftaNo">
            <FormLabel color="secondary.500" fontFamily="heading2">Pafta No
            <Tooltip label="Pafta olarak giriniz. Örn: 105" aria-label="Pafta numarası bilgisi">
              <InfoOutlineIcon ml="2" color="gray.400" />
            </Tooltip>
            </FormLabel>
            <Input type="text" value={paftaNo} onChange={(e) => setPaftaNo(e.target.value)} />
          </FormControl>
          <FormControl isRequired  mb={3} id="parselNo">
            <FormLabel color="secondary.500" fontFamily="heading2">Ada/Parsel No
            <Tooltip label="Ada/Parsel olarak giriniz. Örn: 105/105" aria-label="Ada/Parsel numarası bilgisi">
              <InfoOutlineIcon ml="2" color="gray.400" />
            </Tooltip>
            </FormLabel>
            <Input type="text" value={parselNo} onChange={(e) => setParselNo(e.target.value)} />
          </FormControl>
          <FormControl isRequired  mb={3} id="nitelik">
            <FormLabel color="secondary.500" fontFamily="heading2">Nitelik</FormLabel>
            <Select placeholder="Seçiniz" value={nitelik} onChange={(e) => setNitelik(e.target.value)}>
              <option value="Tarla">Tarla</option>
              <option value="Bahçe">Bahçe</option>
              <option value="Arazı">Arazı</option>
              <option value="İmarlı">İmarlı</option>
            </Select>
          </FormControl>
          <FormControl mb={3} id="imarDurumu">
            <FormLabel color="secondary.500" fontFamily="heading2">İmar Durumu</FormLabel>
            <Select placeholder="Seçiniz" value={imarDurumu} onChange={(e) => setImarDurumu(e.target.value)}>
              <option value="İmarlı">İmarlı</option>
              <option value="İmarsız">İmarsız</option>
              <option value="Kısmen İmarlı">Kısmen İmarlı</option>
              <option value="Hisseli İmarlı">Hisseli İmarlı</option>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl isRequired  mb={3} id="yuzolcumu">
            <FormLabel color="secondary.500" fontFamily="heading2">Yüzölçümü (m2)
              <Tooltip label="Sadece sayı giriniz. Örn: 325 veya 325.2" aria-label="Yüzölçümü bilgisi">
              <InfoOutlineIcon ml="2" color="gray.400" />
            </Tooltip>
            </FormLabel>
            <Input
            onKeyDown={(e) => {
              if (e.key === ',') {
                e.preventDefault();
              }
            }}
             type="text" value={yuzolcumu} onChange={(e) => setYuzolcumu(e.target.value)} />
          </FormControl>
          <FormControl mb={3} id="taks">
            <FormLabel color="secondary.500" fontFamily="heading2">TAKS
            <Tooltip label="Örn: 0.35" aria-label="Taks bilgisi">
              <InfoOutlineIcon ml="2" color="gray.400" />
            </Tooltip>
            </FormLabel>
            <Input onKeyDown={(e) => {
              if (e.key === ',') {
                e.preventDefault();
              }
            }} type="number" step="0.01" value={taks} onChange={(e) => setTaks(e.target.value)} />
          </FormControl>
          <FormControl mb={3} id="kaks">
            <FormLabel color="secondary.500" fontFamily="heading2">KAKS
            <Tooltip label="Örn: 2.07" aria-label="Kaks bilgisi">
              <InfoOutlineIcon ml="2" color="gray.400" />
            </Tooltip>
            </FormLabel>
            <Input onKeyDown={(e) => {
              if (e.key === ',') {
                e.preventDefault();
              }
            }} type="number" step="0.01" value={kaks} onChange={(e) => setKaks(e.target.value)} />
          </FormControl>
          <FormControl mb={3} id="imarResmi">
            <FormLabel color="secondary.500" fontFamily="heading2">İmar Resmi 
              <Tooltip label="E-İmar sayfasından Snipping Tool ile alabilirsiniz. (JPEG/JPG/PNG)" aria-label="İmar Resmi">
              <InfoOutlineIcon ml="2" color="gray.400" />
            </Tooltip></FormLabel>
            <Input type="file" onChange={handleFileChange} />
          </FormControl>
        </Box>
      </Grid>
    </VStack>
  );
});

export default ParselForm;
