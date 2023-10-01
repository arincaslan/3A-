import React from 'react';
import { Box, Text, Table, Thead, Tr, Th, Tbody, Td, VStack, Flex, Badge } from '@chakra-ui/react';

function SeperatedArea({ info ,renderPageFooter, emsalPage }) {
    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });
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
                    Çevre bilgisi "ayrık nizam" olan gayrimenkulün emsal karşılaştırma metodu ile değerlemesi aşağıdaki gibi gerçekleştirilecektir.
                </Text>
                <Text my={4}>
                    İlk olarak tüm emsallerin detaylı bilgileri aşağıda tablo halinde sunulmaktadır:
                </Text>
                <Box bg="primary.100" boxShadow="md" p={4} rounded="md" border="1px" borderColor="secondary.700">
                    <Table variant="simple" colorScheme="secondary">
                        <Thead>
                            <Tr>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Taşınmaz Sahibi</Th>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Ön/Yan Bahçe Mesafesi</Th>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Derinlik</Th>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Cephe</Th>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Kat Sayısı</Th>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Kat Yüksekliği</Th>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Arka Bahçe Mesafesi</Th>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Toplam İnşaat Alanı</Th>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Emsal Değeri</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {emsaller.map((emsal, index) => (
                                <Tr key={index}>
                                    <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{emsal.sahibi}</Td>
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
                    Her bir emsal için bina cephesi ve derinliği hesaplanır. Bu değerler, menkulün cephesi, derinliği, ön ve yan bahçe mesafesi ile kat yüksekliğine bağlıdır.
                </Text>
                <Text my={4}>
                    Bina Cephesi = Cephe - Yan Bahçe Mesafesi - Ön Bahçe Mesafesi = {cephe} - {yanBahceMesafesi} - {onBahceMesafesi} = {binaCephe} m
                </Text>
                <Text my={4}>
                    Bina Derinliği = Derinlik - Ön Bahçe Mesafesi - Arka Bahçe Mesafesi = {derinlik} - {onBahceMesafesi} - {arkabahceMesafesi} = {binaDerinlik} m
                </Text>
                <Text my={4}>
                    Sonra, menkulün toplam inşaat alanı hesaplanır. Bu değer, bina cephesi, derinliği ve kat sayısı ile bulunur.
                </Text>
                <Text my={4}>
                    Toplam İnşaat Alanı = Bina Cephesi x Bina Derinliği x Kat Sayısı = {binaCephe} x {binaDerinlik} x {katSayisi} = {toplamInsaatAlani} m²
                </Text>
                <Text my={4}>
                    Sonraki adımda, her bir emsal için m² başına değer hesaplanır. Bu değer, emsalin değeri ile toplam inşaat alanının oranı olarak bulunur.
                </Text>
                {emsaller.map((emsal, index) => (
                    <Text key={index} my={4}>
                        Emsal {index + 1} İçin m² Başına Değer = Emsal Değeri / Toplam İnşaat Alanı = {formatter.format(emsal.deger)} / {toplamInsaatAlanlari[index]} = {formatter.format(emsalM2BasinaDegerleri[index])} /m²
                    </Text>
                ))}
                <Text my={4}>
                    Daha sonra tüm emsallerin m² başına değerlerinin ortalaması alınır. Bu değer, gayrimenkulün m² başına değerini temsil eder.
                </Text>
                <Text my={4}>
                    Ortalama m² Başına Değer = (Emsal 1 m² Başına Değer + Emsal 2 m² Başına Değer + ... + Emsal n m² Başına Değer) / n = {formatter.format(ortalamaM2BasinaDeger)} /m²
                </Text>
                <Text my={4}>
                    Son adımda, gayrimenkulün toplam değeri bulunur. Bu değer, gayrimenkulün toplam inşaat alanı ile ortalama m² başına değerin çarpımı ile elde edilir.
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
                            Gayrimenkul Değeri :
                        </Text>
                        <Text fontFamily="heading" color="secondary.700" fontSize="lg" mt={2} textAlign="center">
                            Ortalama m² Başına Değer x Toplam İnşaat Alanı = {formatter.format(ortalamaM2BasinaDeger)} x {toplamInsaatAlani} =
                            <Text fontFamily="heading" as="span" fontWeight="bold" color="secondary.900">
                                {formatter.format(gayrimenkulDeger)}
                            </Text>
                        </Text>
                    </Box>
                </Flex>
                {renderPageFooter(emsalPage+1)}
            </Box>
        </VStack>
    );
}

export default SeperatedArea;
