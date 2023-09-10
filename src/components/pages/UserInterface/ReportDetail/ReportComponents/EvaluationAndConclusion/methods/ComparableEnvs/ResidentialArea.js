import React from 'react';
import { Box, Text, Table, Thead, Tr, Th, Tbody, Td, VStack, Flex ,Badge } from '@chakra-ui/react';

function ResidentialArea({ info }) {
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
        <Box>
            <Text my={4}>
                Çevre bilgisi "yerleşim bölgesi" olan gayrimenkulün emsal karşılaştırma metodu ile değerlemesi aşağıdaki gibi gerçekleştirilecektir.
                İlk olarak tüm emsallerin detaylı bilgileri aşağıda tablo halinde sunulmaktadır:
            </Text>
            <Box bg="white" boxShadow="sm" p={4} rounded="md" border="1px" borderColor="gray.300">
                <Table variant="striped" colorScheme="teal">
                    <Thead>
                        <Tr>
                            <Th border="1px" borderColor="gray.300">Taşınmaz Sahibi</Th>
                            <Th border="1px" borderColor="gray.300">Değer</Th>
                            <Th border="1px" borderColor="gray.300">Taşınmaz Alanı</Th>
                            <Th border="1px" borderColor="gray.300">Açıklama</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {emsaller.map((emsal, index) => (
                            <Tr key={index}>
                                <Td border="1px" borderColor="gray.300">{emsal.tasinmazSahibi}</Td>
                                <Td border="1px" borderColor="gray.300">{formatter.format(emsal.deger)} TL</Td>
                                <Td border="1px" borderColor="gray.300">{emsal.tasinmazAlani} m²</Td>
                                <Td border="1px" borderColor="gray.300">{emsal.aciklama}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
           
            <Text fontSize="xl" fontWeight="bold" mt={4}>Değerleme Sürecinde Yapılan İşlemler</Text>
            <Text my={4}>Değerleme sürecinde yapılan işlemler aşağıdaki gibidir. Karşılaştırma kriteri olarak m² kullanılmıştır. Bölgede bulunan emsal olarak alınan gayrimenkuller uyarınca bölgedeki m² başına düşen ortalama fiyat {formatter.format(avgEmsalValuePerM2)} olarak hesaplanmıştır. Değerlemesi yapılan gayrimenkulun değeri, bu ortalama fiyatın gayrimenkulün m² ile çarpılması sonucu {formatter.format(ourPropertyValue)} olarak bulunmuştur.</Text>
            <VStack align="start" spacing={4}>
                {emsaller.map((emsal, index) => (
                    <Text key={index}>
                        Emsal ({emsal.tasinmazSahibi}): {formatter.format(emsal.deger)} / {emsal.tasinmazAlani} m² = {formatter.format(emsal.deger / emsal.tasinmazAlani)} / m²
                    </Text>
                ))}
                <Text>
                    Ortalama m² başına değer:
                    ({emsaller.map((_, index) => `Emsal ${index + 1} değer/m²`).join(' + ')}) / {emsaller.length} =
                    {formatter.format(avgEmsalValuePerM2)} / m²
                </Text>
                <Flex my={4} w="100%" justifyContent="center">
                        <Badge colorScheme="green" p="4" fontSize="xl">
                        Değerlemesi yapılan gayrimenkulün değeri: Ortalama m² başına değer {formatter.format(avgEmsalValuePerM2)} * Gayrimenkul alanı {Number(info.tapuData.parsel.yuzolcumu)} m² = <strong>{formatter.format(ourPropertyValue)}</strong>
                        </Badge>
                    </Flex>
          
                  
                
            </VStack>
        </Box>
    );
}

export default ResidentialArea;


