import React from 'react';
import { useEffect } from 'react';
import { Box, Text, Table, Thead, Tr, Th, Tbody, Td, VStack, Flex, Badge } from '@chakra-ui/react';

function IndustrialArea({ info, renderPageFooter, emsalPage , setEmsalResult }) {
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
                    Çevre bilgisi "sanayi bölgesi" olan gayrimenkulün emsal karşılaştırma metodu ile değerlemesi aşağıdaki gibi gerçekleştirilecektir.
                    İlk olarak tüm emsallerin detaylı bilgileri aşağıda tablo halinde sunulmaktadır:
                </Text>
                <Box bg="primary.100" boxShadow="md" p={4} rounded="md" border="1px" borderColor="secondary.700">
                    <Table variant="simple" colorScheme="secondary">
                        <Thead>
                            <Tr>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Taşınmaz Sahibi</Th>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Değer</Th>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Taşınmaz Alanı</Th>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Kat Sayısı</Th>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Kat Yüksekliği</Th>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Açıklama</Th>
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
                        <Text fontFamily="body2" fontWeight="bold" key={index}>
                            {emsal.tasinmazSahibi}: {emsal.deger} TL / {constructionVolumes[index]} m³ = {valuePerVolume[index].toFixed(2)} TL/m³
                        </Text>
                    ))}
                    <Text fontFamily="body2" fontWeight="bold">
                        Ortalama birim inşaat hacmi başına düşen fiyat: ({valuePerVolume.join(' + ')}) / {valuePerVolume.length} = {avgValuePerVolume.toFixed(2)} TL/m³
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
                                Değerlemesi yapılan gayrimenkulün değeri:
                            </Text>
                            <Text fontFamily="heading" color="secondary.700" fontSize="lg" mt={2} textAlign="center">
                                Ortalama birim inşaat hacmi başına düşen fiyat {avgValuePerVolume.toFixed(2)} TL/m³ * Gayrimenkul alanı {alan} m² =
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

export default IndustrialArea;
