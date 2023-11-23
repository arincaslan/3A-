import { useEffect } from 'react';
import React from 'react';
import { Box, Text, Table, Thead, Tr, Th, Tbody, Td, VStack, Flex, Badge } from '@chakra-ui/react';

function ResidentialAreaEng({ info, renderPageFooter, emsalPage, setEmsalResult }) {
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
        <Box>
            <Box p={5} style={{ pageBreakAfter: 'always' }} minHeight="850px" paddingBottom="50px" position="relative">
                <Text my={4}>
                    The valuation of the property with the environmental information "settlement area" will be conducted as follows using the benchmark comparison method.
                    First, the detailed information of all comparables is presented below in a table format:
                </Text>
                <Box bg="primary.100" boxShadow="md" p={4} rounded="md" border="1px" borderColor="secondary.700">
                    <Table variant="simple" colorScheme="secondary">
                        <Thead>
                            <Tr>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Property Owner</Th>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Value</Th>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Property Area</Th>
                                <Th border="1px" borderColor="secondary.500" textAlign="center" bg="secondary.100" color="secondary.800" fontWeight="bold">Description</Th>
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

            <Box p={5} style={{ pageBreakAfter: 'always' }} minHeight="1000px" paddingBottom="50px" position="relative">
                <Text fontFamily="heading" color="secondary.700" fontSize="xl" fontWeight="bold" mt={4}>Procedures Conducted During the Valuation Process</Text>
                <Text my={4}>
                    The procedures conducted during the valuation process are as follows. The comparison criterion is square meters (m²). The average price per square meter in the region has been calculated based on the properties selected as comparables. The value of the property being evaluated is determined by multiplying this average price by the property's square meters, resulting in {formatter.format(ourPropertyValue)} .
                </Text>
                <VStack align="start" spacing={4}>
                    {emsaller.map((emsal, index) => (
                        <Text fontFamily="body2" fontWeight="bold" key={index}>
                            Comparable ({emsal.tasinmazSahibi}): {formatter.format(emsal.deger)} / {emsal.tasinmazAlani} m² = {formatter.format(emsal.deger / emsal.tasinmazAlani)} TL/m²
                        </Text>
                    ))}
                    <Text fontWeight="bold" fontFamily="body2">
                        Average value per m² =
                        {formatter.format(avgEmsalValuePerM2)} TL/m²
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
                                The estimated value of the property being evaluated:
                            </Text>
                            <Text fontFamily="heading" color="secondary.700" fontSize="lg" mt={2} textAlign="center">
                                Average value per m² {formatter.format(avgEmsalValuePerM2)} * Property area {Number(info.tapuData.parsel.yuzolcumu)} m² =
                                <Text fontFamily="heading" as="span" fontWeight="bold" color="secondary.900">
                                    {formatter.format(ourPropertyValue)} TL
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

export default ResidentialAreaEng;


