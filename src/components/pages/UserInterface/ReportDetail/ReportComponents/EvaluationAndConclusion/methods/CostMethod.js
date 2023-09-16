import React, { useEffect, useState } from 'react';
import { Box, Text, VStack, Flex , Badge } from '@chakra-ui/react';

function CostMethod({ info }) {
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
    }, [yeniden]);

    return (
        <Box>
            <Text fontSize="lg" fontWeight="bold">Maliyet Yaklaşımı Değerlemesi</Text>
            <Box>
                <Text>
                    "Yeniden" üretim değerleme metodu ile gayrimenkul değerlemesi tercih edilmiştir. Bu yöntem, genellikle benzersiz ya da nadiren satılan gayrimenkuller (örneğin, özel yapılar, endüstriyel tesisler, vs.) için uygundur. Bu tür gayrimenkullerin piyasada karşılaştırılabilir örnekleri genellikle bulunmaz ve bu nedenle yeniden üretim maliyetine dayalı değerleme yöntemi kullanılır.
                </Text>

                <VStack align="start" spacing={4}>
                    <Text>
                        1. Arsa Değeri: Arsa birim maliyeti ile arsa alanının çarpımı ile elde edilir. Bu, gayrimenkulün üzerinde bulunduğu arsanın güncel piyasa değerini temsil eder.
                    </Text>
                    <Text>
                        Arsa değeri = Alan ({alan} m²) * Ortalama emsal değeri/m² ({formatCurrency(avgLandValuePerM2)} /m²) = {formatCurrency(landValue)};
                    </Text>
                    <Text>
                        2. Bina Değeri: Bina değeri, inşaat maliyetleri ve amortisman miktarı göz önünde bulundurularak hesaplanır. İlk olarak, toplam inşaat alanı ile yeniden üretim birim maliyeti çarpılır. Ardından, bu değerden belirli bir amortisman miktarı çıkarılır. Amortisman oranı, gayrimenkulün yaşı, bakım durumu, malzeme kalitesi, konumu ve inşaat & tasarım kalitesi gibi faktörler dikkate alınarak hesaplanır.
                    </Text>
                    <Text>
                        Amortisman oranı = ({Object.values(yeniden?.faktorler).join(' + ')}) / {Object.values(yeniden?.faktorler).length} = {depreciation.toFixed(2)} %
                    </Text>
                    <Text>
                        Bina değeri = Yeniden yapım maliyeti ({formatCurrency(costYenidenYapim)}) - (Yeniden yapım maliyeti ({formatCurrency(costYenidenYapim)}) * Amortisman Oranı ({depreciation.toFixed(2)}) / 100) = {formatCurrency(buildingValue)}
                    </Text>
                    <Text>
                        3. Gayrimenkul Değeri: Gayrimenkul değeri, arsa değeri ve bina değeri toplamıdır. Bu değer, gayrimenkulün bugünkü piyasa koşullarında yeniden üretilebilme maliyetini temsil eder.
                    </Text>
                    <Flex my={4} w="100%" justifyContent="center">
                        <Badge colorScheme="green" p="4" fontSize="xl">
                            Gayrimenkul Değeri = Arsa Değeri ({formatCurrency(landValue)}) + Bina Değeri ({formatCurrency(buildingValue)}) = <strong>{formatCurrency(propertyValue)}</strong>
                        </Badge>
                    </Flex>
                </VStack>

                <Text>
                    Yeniden üretim maliyet metodu, gayrimenkulün değerini belirlerken inşaat maliyetlerini,
                    arsa değerini ve amortismanı dikkate alır. Bu yöntem, mülkiyetin yeniden üretim veya
                    inşa maliyetlerinin, belirli bir amortisman miktarı düşüldükten sonra, arsa maliyeti ile
                    toplanmasına dayanır. Amortisman, gayrimenkulün yaşı, bakım durumu, malzeme kalitesi,
                    konumu ve inşaat & tasarım kalitesi gibi faktörler dikkate alınarak hesaplanır.
                </Text>
            </Box>
        </Box>
    );
}

export default CostMethod;
