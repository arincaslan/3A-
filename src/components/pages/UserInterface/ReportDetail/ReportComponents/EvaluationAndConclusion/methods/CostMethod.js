import React, { useEffect, useState } from 'react';
import { Box, Text, VStack, Flex, Badge } from '@chakra-ui/react';

function CostMethod({ info, renderPageFooter, maliyetPage, setMaliyetResult }) {
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
        <Box style={{ pageBreakAfter: 'always' }} minHeight="950px" paddingBottom="50px" position="relative">
            <Text fontFamily="heading" color="secondary.700" fontSize="xl" fontWeight="bold" mt={4}>Maliyet Yaklaşımı Değerlemesi</Text>
            <Box>
                <Text>
                    "Yeniden" üretim değerleme metodu ile gayrimenkul değerlemesi tercih edilmiştir. Bu yöntem, genellikle benzersiz ya da nadiren satılan gayrimenkuller (örneğin, özel yapılar, endüstriyel tesisler, vs.) için uygundur. Bu tür gayrimenkullerin piyasada karşılaştırılabilir örnekleri genellikle bulunmaz ve bu nedenle yeniden üretim maliyetine dayalı değerleme yöntemi kullanılır.
                </Text>

                <VStack mt={2} align="start" spacing={4}>
                    <Text fontFamily="heading4" fontSize="md" fontWeight="medium" color="secondary.500">
                        1. Arsa Değeri: Arsa birim maliyeti ile arsa alanının çarpımı ile elde edilir...
                    </Text>
                    <Box bg="primary.100" p={3} borderRadius="md">
                        <Text fontFamily="body2" fontSize="lg" color="primary.700" >
                            Arsa değeri = Alan ({alan} m²) x Ortalama emsal değeri/m² ({formatCurrency(avgLandValuePerM2)} /m²) = {formatCurrency(landValue)}
                        </Text>
                    </Box>

                    <Text fontFamily="heading4" fontSize="md" fontWeight="medium" color="secondary.500">
                        2. Bina Değeri: Bina değeri, inşaat maliyetleri ve amortisman miktarı göz önünde bulundurularak hesaplanır...
                    </Text>
                    <Box bg="primary.100" p={3} borderRadius="md">
                        <Text fontFamily="body2" fontSize="lg" color="primary.700" >
                            Amortisman oranı = ({Object.values(yeniden?.faktorler).join(' + ')}) / {Object.values(yeniden?.faktorler).length} = {depreciation.toFixed(2)} %
                        </Text>

                    </Box>
                    <Box bg="primary.100" p={3} borderRadius="md">
                        <Text fontFamily="body2" fontSize="lg" color="primary.700" >
                            Bina değeri = Yeniden yapım maliyeti ({formatCurrency(costYenidenYapim)}) - (Yeniden yapım maliyeti ({formatCurrency(costYenidenYapim)}) x Amortisman Oranı (%{depreciation.toFixed(2)}) / 100) = {formatCurrency(buildingValue)}
                        </Text>
                    </Box>
                    <Text fontFamily="heading4" fontSize="md" fontWeight="medium" color="secondary.500">
                        3. Gayrimenkul Değeri: Gayrimenkul değeri, arsa değeri ve bina değeri toplamıdır...
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
                                Değerlemesi yapılan gayrimenkulün değeri:
                            </Text>
                            <Text fontFamily="heading" color="secondary.700" fontSize="lg" mt={2} textAlign="center">
                                Arsa Değeri ({formatCurrency(landValue)}) + Bina Değeri ({formatCurrency(buildingValue)}) =
                                <Text fontFamily="heading" as="span" fontWeight="bold" color="secondary.900">
                                    {formatCurrency(propertyValue)}
                                </Text>
                            </Text>
                        </Box>
                    </Flex>
                </VStack>

                <Text mt={4}>
                    Yeniden üretim maliyet metodu, gayrimenkulün değerini belirlerken inşaat maliyetlerini,
                    arsa değerini ve amortismanı dikkate alır. Bu yöntem, mülkiyetin yeniden üretim veya
                    inşa maliyetlerinin, belirli bir amortisman miktarı düşüldükten sonra, arsa maliyeti ile
                    toplanmasına dayanır. Amortisman, gayrimenkulün yaşı, bakım durumu, malzeme kalitesi,
                    konumu ve inşaat & tasarım kalitesi gibi faktörler dikkate alınarak hesaplanmıştır.
                </Text>
            </Box>
            {renderPageFooter(maliyetPage)}
        </Box>
    );
}

export default CostMethod;
