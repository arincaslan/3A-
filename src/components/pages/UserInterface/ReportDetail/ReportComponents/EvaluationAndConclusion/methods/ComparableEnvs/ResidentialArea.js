import { useEffect } from 'react';
import React from 'react';
import { Box, Text, Table, Thead, Tr, Th, Tbody, Td, VStack, Flex, Badge } from '@chakra-ui/react';

function ResidentialArea({ info ,renderPageFooter, emsalPage, setEmsalResult }) {
    useEffect(() => {
        setEmsalResult(ourPropertyValue);
    }, []);
    
    const { emsaller } = info.valueData.emsalData;

    // Her bir emsalin değerini m2'sine bölme işlemi
    const emsalValuesPerM2 = emsaller.map(emsal => Number(emsal.deger) / Number(emsal.tasinmazAlani));

    // Bu değerlerin ortalamasını alma işlemi
    const avgEmsalValuePerM2 = emsalValuesPerM2.reduce((a, b) => a + b, 0) / emsalValuesPerM2.length;

    // Ortalama m2 başına değeri kendi m2 değerimiz ile çarpma işlemi
    const ourPropertyValue = avgEmsalValuePerM2 * Number(info.tapuData.parsel.yuzolcumu);

    // Para birimi formatı
    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });
    return (
        <Box >
            <Box style={{pageBreakAfter: 'always'}} minHeight="850px" paddingBottom="50px" position="relative">
            <Text my={4}>
                Çevre bilgisi "yerleşim bölgesi" olan gayrimenkulün emsal karşılaştırma metodu ile değerlemesi aşağıdaki gibi gerçekleştirilecektir.
                İlk olarak tüm emsallerin detaylı bilgileri aşağıda tablo halinde sunulmaktadır:
            </Text>
            <Box bg="primary.100" boxShadow="md" p={4} rounded="md" border="1px" borderColor="secondary.700">
                <Table variant="simple" colorScheme="secondary">
                    <Thead>
                        <Tr>
                            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Taşınmaz Sahibi</Th>
                            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Değer</Th>
                            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Taşınmaz Alanı</Th>
                            <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Açıklama</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {emsaller.map((emsal, index) => (
                            <Tr key={index} bg={index % 2 === 0 ? "primary.100" : "white"}>
                                <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{emsal.tasinmazSahibi}</Td>
                                <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{formatter.format(emsal.deger)} TL</Td>
                                <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{emsal.tasinmazAlani} m²</Td>
                                <Td fontFamily="heading" border="1px" borderColor="secondary.500" textAlign="center">{emsal.aciklama}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
            {renderPageFooter(emsalPage)}
            </Box>


        <Box style={{pageBreakAfter: 'always'}} minHeight="950px" paddingBottom="50px" position="relative">
            <Text fontFamily="heading" color="secondary.700" fontSize="xl" fontWeight="bold" mt={4}>Değerleme Sürecinde Yapılan İşlemler</Text>
            <Text my={4}>Değerleme sürecinde yapılan işlemler aşağıdaki gibidir. Karşılaştırma kriteri olarak m² kullanılmıştır. Bölgede bulunan emsal olarak alınan gayrimenkuller uyarınca bölgedeki m² başına düşen ortalama fiyat {formatter.format(avgEmsalValuePerM2)} olarak hesaplanmıştır. Değerlemesi yapılan gayrimenkulun değeri, bu ortalama fiyatın gayrimenkulün m² ile çarpılması sonucu {formatter.format(ourPropertyValue)} olarak bulunmuştur.</Text>
            <VStack align="start" spacing={4}>
                {emsaller.map((emsal, index) => (
                    <Text fontFamily="body2" fontWeight="bold" key={index}>
                        Emsal ({emsal.tasinmazSahibi}): {formatter.format(emsal.deger)} / {emsal.tasinmazAlani} m² = {formatter.format(emsal.deger / emsal.tasinmazAlani)} / m²
                    </Text>
                ))}
                <Text fontWeight="bold" fontFamily="body2">
                    Ortalama m² başına değer = 
                    {formatter.format(avgEmsalValuePerM2)} / m²
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
                        <Text  fontFamily="heading" color="secondary.700" fontSize="lg" mt={2} textAlign="center">
                            Ortalama m² başına değer {formatter.format(avgEmsalValuePerM2)} * Gayrimenkul alanı {Number(info.tapuData.parsel.yuzolcumu)} m² = 
                            <Text fontFamily="heading" as="span" fontWeight="bold" color="secondary.900">
                                {formatter.format(ourPropertyValue)}
                            </Text>
                        </Text>
                    </Box>
                </Flex>
            </VStack>
            {renderPageFooter(emsalPage+1)}
            </Box>
        </Box>
    );
}

export default ResidentialArea;


