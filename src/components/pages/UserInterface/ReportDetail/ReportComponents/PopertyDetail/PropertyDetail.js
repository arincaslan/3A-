import { Box, Heading, Text } from '@chakra-ui/react';

const PropertyDetail = ({ info }) => {
    const faktorAciklamalari = {
        1: 'Düşük Kalite/Durum',
        2: 'Ortalama Altı Kalite/Durum',
        3: 'Ortalama Kalite/Durum',
        4: 'Ortalama Üstü Kalite/Durum',
        5: 'Yüksek Kalite/Durum'
    };

    return (
        <Box>
            <Heading fontWeight="bold" as="h1" size="lg" my={4}>BÖLÜM 3 - DEĞERLEME KONUSU HAKKINDA GENEL BİLGİLER:</Heading>

            <Heading fontWeight="bold" as="h2" size="md" my={3}>3–1 Gayrimenkulün Yeri Konumu ve Tanımı</Heading>
            <Text my={2}>Değerleme konusu gayrimenkul; {info.tapuData.location.il} ili, {info.tapuData.location.ilce} ilçesi, {info.tapuData.location.mahalle} Mahallesi, sınırları içerisinde yer almaktadır.</Text>

            <Heading fontWeight="bold" as="h2" size="md" my={3}>3–3 Gayrimenkulün Fiziksel Özellikleri</Heading>

            {info.valueData?.maaliyetData?.yeniden?.bina_yasi && <Text my={2}>Değerlemeye konu gayrimenkulün bina yaşı {info.valueData.maaliyetData.yeniden.bina_yasi} yıldır.</Text>}
            {info.valueData?.maaliyetData?.yeniden?.ekonomik_omur && <Text my={2}>Gayrimenkulün ekonomik ömrü {info.valueData.maaliyetData.yeniden.ekonomik_omur} yıldır.</Text>}
            {info.zeminData.zeminHakimTitresimPeriyodu && <Text my={2}>Gayrimenkulün zemin hakim titreşim periyodu {info.zeminData.zeminHakimTitresimPeriyodu} şeklindedir.</Text>}
            {info.zeminData.zeminFormasyonCinsi && <Text my={2}>Gayrimenkulün zemin formasyon cinsi {info.zeminData.zeminFormasyonCinsi} şeklindedir.</Text>}
            {info.valueData?.maaliyetData?.yeniden?.faktorler?.malzemeKalitesi && <Text my={2}>Yapının malzeme kalitesi {info.valueData.maaliyetData.yeniden.faktorler.malzemeKalitesi} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.malzemeKalitesi]}) olarak değerlendirilmiştir.</Text>}
            {info.valueData?.maaliyetData?.yeniden?.faktorler?.insaatKalitesi && <Text my={2}>Yapının inşaat kalitesi {info.valueData.maaliyetData.yeniden.faktorler.insaatKalitesi} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.insaatKalitesi]}) olarak değerlendirilmiştir.</Text>}
            {info.valueData?.maaliyetData?.yeniden?.faktorler?.konum && <Text my={2}>Gayrimenkulün konumu {info.valueData.maaliyetData.yeniden.faktorler.konum} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.konum]}) puanına sahiptir.</Text>}
            {info.valueData?.maaliyetData?.yeniden?.faktorler?.bakimDurumu && <Text my={2}>Gayrimenkulün bakım durumu {info.valueData.maaliyetData.yeniden.faktorler.bakimDurumu} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.bakimDurumu]}) puanına sahiptir.</Text>}
            {
                info.valueData.emsalData.cevreBilgisi && (
                    <Text my={2}>
                        Gayrimenkul, çevresinin genel özellikleri olarak 
                        {info.valueData.emsalData.cevreBilgisi === "yerlesim" || info.valueData.emsalData.cevreBilgisi === "sanayi"
                            ? `${info.valueData.emsalData.cevreBilgisi} bölgesi`
                            : ` ayrık nizam `}
                        özelliklerine sahiptir.
                    </Text>
                )
            }

        </Box>
    );
}

export default PropertyDetail;
