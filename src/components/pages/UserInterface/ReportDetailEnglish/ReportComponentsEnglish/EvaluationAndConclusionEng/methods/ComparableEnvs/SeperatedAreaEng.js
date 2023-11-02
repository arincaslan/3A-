import React from 'react';
import { useEffect } from 'react';
import { Box, Text, Table, Thead, Tr, Th, Tbody, Td, VStack, Flex, Badge } from '@chakra-ui/react';

function SeperatedAreaEng({ info ,renderPageFooter, emsalPage, setEmsalResult  }) {
    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });
    useEffect(() => {
        setEmsalResult(gayrimenkulDeger);
    }, []);

    const { emsaller } = info.valueData.emsalData;
    const { menkulEkBilgi } = info.valueData.emsalData;
    const { cephe, derinlik, yanBahceMesafesi, onBahceMesafesi, parselTuru, katSayisi, katYuksekligi } = menkulEkBilgi;
    const arkabahceMesafesi = (Number(katSayisi) * Number(katYuksekligi)) / 2;

    let binaCephe, binaDerinlik;
    if (parselTuru === 'kose') {
        binaCephe = Number(cephe) - Number(yanBahceMesafesi) - Number(onBahceMesafesi);
        binaDerinlik = Number(derinlik) - Number(onBahceMesafesi) - arkabahceMesafesi;
    } else if (parselTuru === 'ara') {
        binaCephe = Number(cephe) - 2 * Number(yanBahceMesafesi);
        binaDerinlik = Number(derinlik) - Number(onBahceMesafesi) - arkabahceMesafesi;
    }

    const toplamInsaatAlani = binaDerinlik * binaCephe * Number(katSayisi);
    let emsalM2BasinaDegerleri = [];
    let toplamInsaatAlanlari = [];
    let arkabahceMesafeleri = [];

    emsaller.forEach((emsal) => {
        const emsalArkabahceMesafesi = (Number(emsal.katSayisi) * Number(emsal.katYuksekligi)) / 2;
        arkabahceMesafeleri.push(emsalArkabahceMesafesi);
        let emsalBinaCephe, emsalBinaDerinlik;
        if (parselTuru === 'kose') {
            emsalBinaCephe = Number(emsal.cephe) - Number(emsal.yanBahceMesafesi) - Number(emsal.onBahceMesafesi);
            emsalBinaDerinlik = Number(emsal.derinlik) - Number(emsal.onBahceMesafesi) - emsalArkabahceMesafesi;
        } else if (parselTuru === 'ara') {
            emsalBinaCephe = Number(emsal.cephe) - 2 * Number(emsal.yanBahceMesafesi);
            emsalBinaDerinlik = Number(emsal.derinlik) - Number(emsal.onBahceMesafesi) - emsalArkabahceMesafesi;
        }
        const emsalToplamInsaatAlani = emsalBinaDerinlik * emsalBinaCephe * Number(emsal.katSayisi);
        toplamInsaatAlanlari.push(emsalToplamInsaatAlani);
        const emsalM2BasinaDeger = Number(emsal.deger) / emsalToplamInsaatAlani;
        emsalM2BasinaDegerleri.push(emsalM2BasinaDeger);
    });

    const ortalamaM2BasinaDeger = emsalM2BasinaDegerleri.reduce((a, b) => a + b, 0) / emsalM2BasinaDegerleri.length;
    const gayrimenkulDeger = ortalamaM2BasinaDeger * toplamInsaatAlani;


    return (
        <VStack align="start">
  <Box style={{ pageBreakAfter: 'always' }} minHeight="850px" paddingBottom="50px" position="relative">
    <Text my={4}>
      The appraisal of the property with "discrete order" environmental knowledge will be conducted as follows using the comparative sales method.
    </Text>
    <Text my={4}>
      First, all comparables detailed information is presented below in table format:
    </Text>
    <Box bg="primary.100" boxShadow="md" p={4} rounded="md" border="1px" borderColor="secondary.700">
      <Table variant="simple" colorScheme="secondary">
        <Thead>
          <Tr>
            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Property Owner</Th>
            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Front/Side Garden Distance</Th>
            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Depth</Th>
            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Frontage</Th>
            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Number of Floors</Th>
            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Floor Height</Th>
            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Back Garden Distance</Th>
            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Total Construction Area</Th>
            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Comparative Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          {emsaller.map((emsal, index) => (
            <Tr key={index}>
              <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{emsal.tasinmazSahibi}</Td>
              <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{emsal.onBahceMesafesi} / {emsal.yanBahceMesafesi}</Td>
              <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{emsal.derinlik}</Td>
              <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{emsal.cephe}</Td>
              <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{emsal.katSayisi}</Td>
              <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{emsal.katYuksekligi}</Td>
              <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{arkabahceMesafeleri[index]}</Td>
              <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{toplamInsaatAlanlari[index]}</Td>
              <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{formatter.format(emsal.deger)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
    {renderPageFooter(emsalPage)}
  </Box>
  <Box style={{ pageBreakAfter: 'always' }} minHeight="950px" paddingBottom="50px" position="relative">
    <Text my={4}>
      The frontage and depth of each comparable building are calculated. These values depend on the property's frontage, depth, front and side garden distances, and floor height.
    </Text>
    <Text my={4}>
      Building Frontage = Frontage - Side Garden Distance - Front Garden Distance = {cephe} - {yanBahceMesafesi} - {onBahceMesafesi} = {binaCephe} m
    </Text>
    <Text my={4}>
      Building Depth = Depth - Front Garden Distance - Back Garden Distance = {derinlik} - {onBahceMesafesi} - {arkabahceMesafesi} = {binaDerinlik} m
    </Text>
    <Text my={4}>
      Then, the total construction area of the property is calculated. This value is found by the building frontage, depth, and number of floors.
    </Text>
    <Text my={4}>
      Total Construction Area = Building Frontage x Building Depth x Number of Floors = {binaCephe} x {binaDerinlik} x {katSayisi} = {toplamInsaatAlani} m²
    </Text>
    <Text my={4}>
      Next, the value per square meter for each comparable is calculated. This value is found as the ratio of the comparable's value to its total construction area.
    </Text>
    {emsaller.map((emsal, index) => (
      <Text key={index} my={4}>
        Value per m² for Comparable {index + 1} = Comparative Value / Total Construction Area = {formatter.format(emsal.deger)} / {toplamInsaatAlanlari[index]} = {formatter.format(emsalM2BasinaDegerleri[index])} /m²
      </Text>
    ))}
    <Text my={4}>
      Then, the average value per square meter of all comparables is calculated. This value represents the property's value per square meter.
    </Text>
    <Text my={4}>
      Average Value per m² = (Comparable 1 Value per m² + Comparable 2 Value per m² + ... + Comparable n Value per m²) / n = {formatter.format(ortalamaM2BasinaDeger)} /m²
    </Text>
    <Text my={4}>
      In the final step, the total value of the property is found. This value is obtained by multiplying the property's total construction area by the average value per square meter.
    </Text>
    <Flex my={4} w="100%" justifyContent="center" alignItems="center">
      <Box
        mt={4}
        bg="secondary.100"
        w="100%"
        p={4}
        rounded="md"
        border="1px"
        borderColor="secondary.700"
        textAlign="center"
        boxShadow="md"
      >
        <Text fontSize="2xl" fontFamily="heading" fontWeight="bold">
          Property Value = Total Construction Area x Average Value per m² = {toplamInsaatAlani} m² x {formatter.format(ortalamaM2BasinaDeger)} = {formatter.format(gayrimenkulDeger)}
        </Text>
      </Box>
    </Flex>
    {renderPageFooter(emsalPage + 1)}
  </Box>
</VStack>

    );
}

export default SeperatedAreaEng;
