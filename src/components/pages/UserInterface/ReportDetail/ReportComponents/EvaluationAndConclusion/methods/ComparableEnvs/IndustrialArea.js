import React from 'react';
import { Box, Text, Table, Thead, Tr, Th, Tbody, Td, VStack, Flex , Badge } from '@chakra-ui/react';

function IndustrialArea({ info }) {
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


    return (
        <Box>
            <Text my={4}>
                Çevre bilgisi "sanayi bölgesi" olan gayrimenkulün emsal karşılaştırma metodu ile değerlemesi aşağıdaki gibi gerçekleştirilecektir.
                İlk olarak tüm emsallerin detaylı bilgileri aşağıda tablo halinde sunulmaktadır:
            </Text>
            <Box bg="white" boxShadow="sm" p={4} rounded="md" border="1px" borderColor="gray.300">
                <Table variant="striped" colorScheme="teal">
                    <Thead>
                        <Tr>
                            <Th border="1px" borderColor="gray.300">Taşınmaz Sahibi</Th>
                            <Th border="1px" borderColor="gray.300">Değer</Th>
                            <Th border="1px" borderColor="gray.300">Taşınmaz Alanı</Th>
                            <Th border="1px" borderColor="gray.300">Kat Sayısı</Th>
                            <Th border="1px" borderColor="gray.300">Kat Yüksekliği</Th>
                            <Th border="1px" borderColor="gray.300">Açıklama</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {emsaller.map((emsal, index) => (
                            <Tr key={index}>
                                <Td border="1px" borderColor="gray.300">{emsal.tasinmazSahibi}</Td>
                                <Td border="1px" borderColor="gray.300">{formatter.format(emsal.deger)} TL</Td>
                                <Td border="1px" borderColor="gray.300">{emsal.tasinmazAlani} m²</Td>
                                <Td border="1px" borderColor="gray.300">{emsal.katSayisi}</Td>
                                <Td border="1px" borderColor="gray.300">{emsal.yukseklik} m</Td>
                                <Td border="1px" borderColor="gray.300">{emsal.acıklama}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
            <Text my={4}>
                Değerlemesi yapılacak gayrimenkulün çevre bilgisi "Sanayi Bölgesi" olarak belirtilmiştir. Bu bağlamda, değerleme işlemi aşağıdaki hesaplamalar ile gerçekleştirilmiştir:
            </Text>
            <Text>
                Ortalama birim inşaat hacmi başına düşen fiyat: {formatter.format(avgValuePerVolume)} TL
            </Text>
            <Text>
                Değerlemesi yapılan gayrimenkulün değeri: {formatter.format(ourPropertyValue)}
            </Text>
            <VStack align="start" spacing={4}>
                {emsaller.map((emsal, index) => (
                    <Text key={index}>
                        {emsal.tasinmazSahibi}: {emsal.deger} TL / {constructionVolumes[index]} m³ = {valuePerVolume[index].toFixed(2)} TL/m³
                    </Text>
                ))}
                <Text>
                    Ortalama birim inşaat hacmi başına düşen fiyat: ({valuePerVolume.join(' + ')}) / {valuePerVolume.length} = {avgValuePerVolume.toFixed(2)} TL/m³
                </Text>
                <Flex my={4} w="100%" justifyContent="center">
                    <Badge colorScheme="green" p="4" fontSize="xl">
                        Değerlemesi yapılan gayrimenkulün değeri: Ortalama birim inşaat hacmi başına düşen fiyat {avgValuePerVolume.toFixed(2)} TL/m³ * Gayrimenkul alanı {alan} m² = <strong>{formatter.format(ourPropertyValue)}</strong>
                    </Badge>
                </Flex>
            </VStack>
        </Box>
    );
}

export default IndustrialArea;
