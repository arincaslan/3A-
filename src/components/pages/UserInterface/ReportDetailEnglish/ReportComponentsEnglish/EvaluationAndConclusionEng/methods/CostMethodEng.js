import React, { useEffect, useState } from 'react';
import { Box, Text, VStack, Flex, Badge } from '@chakra-ui/react';

function CostMethodEng({ info, renderPageFooter, maliyetPage, setMaliyetResult }) {
    const { yeniden } = info.valueData?.maaliyetData;
    const alan = Number(info.tapuData?.parsel?.yuzolcumu?.replace(",", "."));
    const costYenidenYapim = Number(yeniden?.yapim_maliyeti?.replace(",", "."));
    let avgEmsalValuePerM2;

    if (info.valueData?.emsalData?.emsaller) {
        const { emsaller } = info.valueData.emsalData;
        const emsalValuesPerM2 = emsaller.map(emsal => Number(emsal.deger) / Number(emsal.tasinmazAlani));
        avgEmsalValuePerM2 = emsalValuesPerM2.reduce((a, b) => a + b, 0) / emsalValuesPerM2.length;
    }
    // Her bir emsalin değerini m2'sine bölme işlemi


    // Bu değerlerin ortalamasını alma işlemi
    const [landValue, setLandValue] = useState(0);
    const [buildingValue, setBuildingValue] = useState(0);
    const [propertyValue, setPropertyValue] = useState(0);
    const [depreciation, setDepreciation] = useState(0); // depreciation için state tanımlama
    const [avgLandValuePerM2, setAvgLandValuePerM2] = useState(0);

    const calculateDepreciation = (factors) => {
        // Object.values ile faktorler nesnesinin değerlerini bir diziye dönüştür
        let factorsArray = Object.values(factors).map(Number);
        let totalScore = factorsArray.reduce((total, current) => total + current, 0);
        let depreciation = totalScore / factorsArray.length;
        return depreciation;
    }

    function formatCurrency(value) {
        return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(value);
    }

    const calculateValues = () => {
        // piyasaBirimM2Fiyati var mı kontrol et ve varsa kullan, yoksa avgEmsalValuePerM2 kullan
        let landValuePerM2 = info.valueData.maaliyetData.yeniden.piyasaBirimM2Fiyati
            ? Number(info.valueData.maaliyetData.yeniden.piyasaBirimM2Fiyati.replace(",", "."))
            : avgEmsalValuePerM2;

        setAvgLandValuePerM2(landValuePerM2);

        let landValue = alan * landValuePerM2;
        setLandValue(landValue);
        let depreciationValue = calculateDepreciation(yeniden.faktorler);
        setDepreciation(depreciationValue);
        let costBeforeDepreciation = costYenidenYapim;
        let buildingValue = costBeforeDepreciation - (costBeforeDepreciation * depreciation / 100);
        setBuildingValue(buildingValue);

        setPropertyValue(landValue + buildingValue);
    }

    useEffect(() => {
        calculateValues();
        setMaliyetResult(propertyValue)
    }, [yeniden, propertyValue]);

    return (
        <Box p={5} style={{ pageBreakAfter: 'always' }} maxHeight="1000px" minHeight="950px" paddingBottom="50px" position="relative">
            <Text fontFamily="heading" color="secondary.700" fontSize="xl" fontWeight="bold" mt={4}>Cost Approach Valuation</Text>
            <Box>
                <Text>
                    The reproduction cost valuation method has been preferred. This method is usually suitable for properties that are unique or not sold frequently (for example, special buildings, industrial facilities, etc.). It is often not possible to find comparable examples in the market for such properties, therefore the valuation method based on reproduction cost is utilized.
                </Text>

                <VStack mt={2} align="start" spacing={4}>
                    <Text fontFamily="heading4" fontSize="md" fontWeight="medium" color="secondary.500">
                        1. Land Value: The land value is obtained by multiplying the unit cost of the land by the area of the land...
                    </Text>
                    <Box bg="primary.100" p={3} borderRadius="md">
                        <Text fontFamily="body2" fontSize="lg" color="primary.700">
                            Land value = Area ({alan} m²) x Average benchmark value/m² ({formatCurrency(avgLandValuePerM2)} /m²) = {formatCurrency(landValue)}
                        </Text>
                    </Box>

                    <Text fontFamily="heading4" fontSize="md" fontWeight="medium" color="secondary.500">
                        2. Building Value: The building value is calculated by taking into account construction costs and the amount of depreciation...
                    </Text>
                    <Box bg="primary.100" p={3} borderRadius="md">
                        <Text fontFamily="body2" fontSize="lg" color="primary.700">
                            Depreciation rate = ({Object.values(yeniden?.faktorler).join(' + ')}) / {Object.values(yeniden?.faktorler).length} = {depreciation.toFixed(2)}%
                        </Text>
                    </Box>
                    <Box bg="primary.100" p={3} borderRadius="md">
                        <Text fontFamily="body2" fontSize="lg" color="primary.700">
                            Building value = Reconstruction cost ({formatCurrency(costYenidenYapim)}) - (Reconstruction cost ({formatCurrency(costYenidenYapim)}) x Depreciation Rate (%{depreciation.toFixed(2)}) / 100) = {formatCurrency(buildingValue)}
                        </Text>
                    </Box>
                    <Text fontFamily="heading4" fontSize="md" fontWeight="medium" color="secondary.500">
                        3. Property Value: The property value is the sum of the land value and the building value...
                    </Text>
                    <Flex my={4} w="100%" justifyContent="center" alignItems="center">
                        <Box
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
                                Land Value ({formatCurrency(landValue)}) + Building Value ({formatCurrency(buildingValue)}) =
                                <Text fontFamily="heading" as="span" fontWeight="bold" color="secondary.900">
                                    {formatCurrency(propertyValue)}
                                </Text>
                            </Text>
                        </Box>
                    </Flex>
                </VStack>

                <Text mt={4}>
                    The reproduction cost method takes into account construction costs, land value, and depreciation to determine the value of the property. This method is based on adding the cost of the land to the reproduction or construction costs after deducting a certain amount of depreciation. Depreciation is calculated considering factors such as the age of the property, its maintenance condition, material quality, location, and the quality of construction & design.
                </Text>
            </Box>
            {renderPageFooter(maliyetPage)}
        </Box>

    );
}

export default CostMethodEng;