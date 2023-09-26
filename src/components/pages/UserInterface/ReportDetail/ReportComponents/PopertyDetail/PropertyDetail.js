import { Box, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'; // Eğer madde işareti olarak bu ikonu kullanmak istemezseniz değiştirebilirsiniz.

const PropertyDetail = ({ info }) => {
    const faktorAciklamalari = {
        1: 'Düşük Kalite/Durum',
        2: 'Ortalama Altı Kalite/Durum',
        3: 'Ortalama Kalite/Durum',
        4: 'Ortalama Üstü Kalite/Durum',
        5: 'Yüksek Kalite/Durum'
    };

    return (
        <Box p="5" borderRadius="md" boxShadow="lg">
            <Heading color="teal.600" fontFamily="heading2" fontWeight="bold" as="h1" size="lg" my={4}>BÖLÜM 3 - Değerleme Konusu Hakkında Genel Bilgiler</Heading>

            <Heading mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md" my={3}>3.1) Gayrimenkulün Yeri Konumu ve Tanımı</Heading>
            <Text my={2}>Değerleme konusu gayrimenkul; {info.tapuData.location.il} ili, {info.tapuData.location.ilce} ilçesi, {info.tapuData.location.mahalle} Mahallesi, sınırları içerisinde yer almaktadır.</Text>

            <Heading mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md" my={3}>3.2) Gayrimenkulün Fiziksel Özellikleri</Heading>
            <List mt={4} spacing={3}>
                {info.valueData?.maaliyetData?.yeniden?.bina_yasi &&
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Değerlemeye konu gayrimenkulün bina yaşı {info.valueData.maaliyetData.yeniden.bina_yasi} yıldır.</Text>
                    </ListItem>}
                {info.valueData?.maaliyetData?.yeniden?.ekonomik_omur &&
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Gayrimenkulün ekonomik ömrü {info.valueData.maaliyetData.yeniden.ekonomik_omur} yıldır.</Text>
                    </ListItem>}
                {info.zeminData.zeminHakimTitresimPeriyodu &&
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Gayrimenkulün zemin hakim titreşim periyodu {info.zeminData.zeminHakimTitresimPeriyodu} şeklindedir.</Text>
                    </ListItem>}
                {info.zeminData.zeminFormasyonCinsi &&
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Gayrimenkulün zemin formasyon cinsi {info.zeminData.zeminFormasyonCinsi} şeklindedir.</Text>
                    </ListItem>}
                {info.valueData?.maaliyetData?.yeniden?.faktorler?.malzemeKalitesi &&
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Yapının malzeme kalitesi {info.valueData.maaliyetData.yeniden.faktorler.malzemeKalitesi} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.malzemeKalitesi]}) olarak değerlendirilmiştir.</Text>
                    </ListItem>}
                {info.valueData?.maaliyetData?.yeniden?.faktorler?.insaatKalitesi &&
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Yapının inşaat kalitesi {info.valueData.maaliyetData.yeniden.faktorler.insaatKalitesi} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.insaatKalitesi]}) olarak değerlendirilmiştir.</Text>
                    </ListItem>}
                {info.valueData?.maaliyetData?.yeniden?.faktorler?.konum &&
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Gayrimenkulün konumu {info.valueData.maaliyetData.yeniden.faktorler.konum} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.konum]}) puanına sahiptir.</Text>
                    </ListItem>}
                {info.valueData?.maaliyetData?.yeniden?.faktorler?.bakimDurumu &&
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Gayrimenkulün bakım durumu {info.valueData.maaliyetData.yeniden.faktorler.bakimDurumu} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.bakimDurumu]}) puanına sahiptir.</Text>
                    </ListItem>}
                {
                    info.valueData.emsalData.cevreBilgisi && (

                        <ListItem display="flex" alignItems="center">
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <Text my={2}>
                                Gayrimenkul, çevresinin genel özellikleri olarak &nbsp;
                                {info.valueData.emsalData.cevreBilgisi === "yerlesim" || info.valueData.emsalData.cevreBilgisi === "sanayi"
                                    ? `${info.valueData.emsalData.cevreBilgisi} bölgesi`
                                    : ` ayrık nizam `}
                                &nbsp;özelliklerine sahiptir.
                            </Text>
                        </ListItem>
                    )
                }
            </List>
        </Box>
    );
}

export default PropertyDetail;
