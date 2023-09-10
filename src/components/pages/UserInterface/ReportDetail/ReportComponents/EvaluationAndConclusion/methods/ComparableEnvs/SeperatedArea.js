import React from 'react';
import { Box, Text, Table, Thead, Tr, Th, Tbody, Td, VStack, Flex, Badge } from '@chakra-ui/react';

function SeperatedArea({ info }) {
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
            <Text my={4}>
                Çevre bilgisi "ayrık nizam" olan gayrimenkulün emsal karşılaştırma metodu ile değerlemesi aşağıdaki gibi gerçekleştirilecektir.
            </Text>
            <Text my={4}>
                İlk olarak tüm emsallerin detaylı bilgileri aşağıda tablo halinde sunulmaktadır:
            </Text>
            <Table variant="striped" colorScheme="gray" my={4} size="sm">
                <Thead>
                    <Tr>
                        <Th>Taşınmaz Sahibi</Th>
                        <Th>Ön/Yan Bahçe Mesafesi</Th>
                        <Th>Derinlik</Th>
                        <Th>Cephe</Th>
                        <Th>Kat Sayısı</Th>
                        <Th>Kat Yüksekliği</Th>
                        <Th>Arka Bahçe Mesafesi</Th>
                        <Th>Toplam İnşaat Alanı</Th>
                        <Th>Emsal Değeri</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {emsaller.map((emsal, index) => (
                        <Tr key={index}>
                            <Td>{emsal.sahibi}</Td>
                            <Td>{emsal.onBahceMesafesi} / {emsal.yanBahceMesafesi}</Td>
                            <Td>{emsal.derinlik}</Td>
                            <Td>{emsal.cephe}</Td>
                            <Td>{emsal.katSayisi}</Td>
                            <Td>{emsal.katYuksekligi}</Td>
                            <Td>{arkabahceMesafeleri[index]}</Td>
                            <Td>{toplamInsaatAlanlari[index]}</Td>
                            <Td>{formatter.format(emsal.deger)}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <Text my={4}>
                Ardından her bir emsal için bina cephesi ve derinliği hesaplanır. Bu değerler, menkulün cephesi, derinliği, ön ve yan bahçe mesafesi ile kat yüksekliğine bağlıdır.
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
                    Emsal {index+1} İçin m² Başına Değer = Emsal Değeri / Toplam İnşaat Alanı = {formatter.format(emsal.deger)} / {toplamInsaatAlanlari[index]} = {formatter.format(emsalM2BasinaDegerleri[index])} /m²
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
            <Flex my={4} w="100%" justifyContent="center">
                <Badge colorScheme="green" p="4" fontSize="xl">
                    Gayrimenkul Değeri = Ortalama m² Başına Değer x Toplam İnşaat Alanı = {formatter.format(ortalamaM2BasinaDeger)} x {toplamInsaatAlani} = <strong>{formatter.format(gayrimenkulDeger)}</strong>
                </Badge>
            </Flex>
        </VStack>
    );
}

export default SeperatedArea;
