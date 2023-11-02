import React from 'react';
import { useEffect } from 'react';
import { Box, Text, Table, Thead, Tr, Th, Tbody, Td, VStack, Flex, Badge } from '@chakra-ui/react';

function IndustrialAreaEng({ info, renderPageFooter, emsalPage , setEmsalResult }) {
    const { emsaller } = info.valueData.emsalData;
    const { menkulEkBilgi } = info.valueData.emsalData;
    const taks = Number(info.tapuData.parsel.taks.replace(",", "."));
    const alan = Number(info.tapuData.parsel.yuzolcumu.replace(",", "."));
    const katSayisi = Number(menkulEkBilgi.katSayisi.replace(",", "."));
    const katYüksekligi = Number(menkulEkBilgi.katYuksekligi.replace(",", "."));


    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });

    // Her bir emsal için inşaat hacmi hesaplama
    const constructionVolumes = emsaller.map(emsal => Number(emsal.tasinmazAlani) * Number(emsal.katSayisi) * Number(emsal.yukseklik) * Number(emsal.taks));

    // Her emsal için "Emsal Değer / İnşaat Hacmi" hesaplama
    const valuePerVolume = emsaller.map((emsal, index) => Number(emsal.deger) / constructionVolumes[index]);

    // Bu değerlerin ortalamasını alma işlemi
    const avgValuePerVolume = valuePerVolume.reduce((a, b) => a + b, 0) / valuePerVolume.length;

    // Ortalama birim inşaat hacmine düşen değeri, kendi inşaat hacmimiz ile çarpma işlemi
    const ourPropertyValue = avgValuePerVolume * alan * taks * katSayisi * katYüksekligi;

    useEffect(() => {
        setEmsalResult(ourPropertyValue);
    }, []);
    
    return (
        <Box>
  <Box style={{ pageBreakAfter: 'always' }} minHeight="850px" paddingBottom="50px" position="relative">
    <Text my={4}>
      The valuation of the property with the environmental information "industrial zone" will be carried out as follows using the benchmark comparison method. 
      First, the detailed information of all comparables is presented below in table format:
    </Text>
    <Box bg="primary.100" boxShadow="md" p={4} rounded="md" border="1px" borderColor="secondary.700">
      <Table variant="simple" colorScheme="secondary">
        <Thead>
          <Tr>
            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Property Owner</Th>
            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Value</Th>
            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Property Area</Th>
            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Number of Floors</Th>
            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Floor Height</Th>
            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          {emsaller.map((emsal, index) => (
            <Tr key={index}>
              <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{emsal.tasinmazSahibi}</Td>
              <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{formatter.format(emsal.deger)} TL</Td>
              <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{emsal.tasinmazAlani} m²</Td>
              <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{emsal.katSayisi}</Td>
              <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{emsal.yukseklik} m</Td>
              <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{emsal.acıklama}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
    {renderPageFooter(emsalPage)}
  </Box>
  <Box style={{ pageBreakAfter: 'always' }} minHeight="950px" paddingBottom="50px" position="relative">
    <Text my={4}>
      The environmental information for the property to be appraised is stated as "Industrial Zone". In this context, the valuation process has been carried out with the following calculations:
    </Text>
    <Text>
      Average price per unit construction volume: {formatter.format(avgValuePerVolume)} TL
    </Text>
    <Text>
      The value of the property being appraised: {formatter.format(ourPropertyValue)}
    </Text>
    <VStack align="start" spacing={4}>
      {emsaller.map((emsal, index) => (
        <Text fontFamily="body2" fontWeight="bold" key={index}>
          {emsal.tasinmazSahibi}: {emsal.deger} TL / {constructionVolumes[index]} m³ = {valuePerVolume[index].toFixed(2)} TL/m³
        </Text>
      ))}
      <Text fontFamily="body2" fontWeight="bold">
        Average price per unit construction volume: ({valuePerVolume.join(' + ')}) / {valuePerVolume.length} = {avgValuePerVolume.toFixed(2)} TL/m³
      </Text>
      <Flex my={4} w="100%" justifyContent="center" alignItems="center">
        <Box
          mt={4}
          bg="secondary.100"
          boxShadow="lg"
          p="4"
          rounded="lg"
          border="2px"
          borderColor="secondary.500"
        >
          <Text fontFamily="heading2" color="secondary.800" fontSize="xl" fontWeight="bold" textAlign="center">
            The value of the property being appraised:
          </Text>
          <Text fontFamily="heading" color="secondary.700" fontSize="lg" mt={2} textAlign="center">
            Average price per unit construction volume {avgValuePerVolume.toFixed(2)} TL/m³ * Property area {alan} m² =
            <Text fontFamily="heading" as="span" fontWeight="bold" color="secondary.900">{formatter.format(ourPropertyValue)}
            </Text>
          </Text>
        </Box>
      </Flex>
    </VStack>
    {renderPageFooter(emsalPage + 1)}
  </Box>
</Box>

    );
}

export default IndustrialAreaEng;
