import { Box, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'; // Eğer madde işareti olarak bu ikonu kullanmak istemezseniz değiştirebilirsiniz.

const PropertyDetailEng = ({ info, renderPageFooter }) => {
    const faktorAciklamalari = {
        1: 'Low Quality/Condition',
        2: 'Below Average Quality/Condition',
        3: 'Average Quality/Condition',
        4: 'Above Average Quality/Condition',
        5: 'High Quality/Condition'
    };

    return (
        <Box style={{ position: "relative", pageBreakAfter: "always" }} minHeight="1000px" p={5} borderRadius="md" boxShadow="lg">
            <Heading borderBottom="2px solid" borderColor="teal.500" pb={6} color="teal" fontFamily="heading2" fontWeight="bold" as="h1" size="lg" my={4}>SECTION 3 - General Information About the Valuation Subject</Heading>

            <Heading mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md" my={3}>3.1) Location and Description of the Property</Heading>
            <Text my={2}>The property subject to valuation is located within the boundaries of {info.tapuData.location.il} province, {info.tapuData.location.ilce} district, {info.tapuData.location.mahalle} neighborhood.</Text>

            <Heading mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md" my={3}>3.2) Physical Features of the Property</Heading>
            <List mt={4} spacing={3}>
                {info.valueData?.maaliyetData?.yeniden?.bina_yasi &&
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>The age of the building of the property subject to valuation is {info.valueData.maaliyetData.yeniden.bina_yasi} years.</Text>
                    </ListItem>}
                {info.valueData?.maaliyetData?.yeniden?.ekonomik_omur &&
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>The economic life of the property is {info.valueData.maaliyetData.yeniden.ekonomik_omur} years.</Text>
                    </ListItem>}
                {info.zeminData.zeminHakimTitresimPeriyodu &&
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>The dominant vibration period of the property's ground is {info.zeminData.zeminHakimTitresimPeriyodu}.</Text>
                    </ListItem>}
                {info.zeminData.zeminFormasyonCinsi &&
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>The formation type of the property's ground is {info.zeminData.zeminFormasyonCinsi}.</Text>
                    </ListItem>}
                {info.valueData?.maaliyetData?.yeniden?.faktorler?.malzemeKalitesi &&
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>The material quality of the structure is evaluated as {info.valueData.maaliyetData.yeniden.faktorler.malzemeKalitesi} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.malzemeKalitesi]}).</Text>
                    </ListItem>}
                {info.valueData?.maaliyetData?.yeniden?.faktorler?.insaatKalitesi &&
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>The construction quality of the structure is evaluated as {info.valueData.maaliyetData.yeniden.faktorler.insaatKalitesi} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.insaatKalitesi]}).</Text>
                    </ListItem>}
                {info.valueData?.maaliyetData?.yeniden?.faktorler?.konum &&
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>The location of the property has a score of {info.valueData.maaliyetData.yeniden.faktorler.konum} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.konum]}).</Text>
                    </ListItem>}
                {info.valueData?.maaliyetData?.yeniden?.faktorler?.bakimDurumu &&
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>The maintenance status of the property has a score of {info.valueData.maaliyetData.yeniden.faktorler.bakimDurumu} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.bakimDurumu]}).</Text>
                    </ListItem>}
                {
                    info.valueData.emsalData.cevreBilgisi && (
                        <ListItem display="flex" alignItems="center">
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <Text my={2}>
                                The property has general characteristics of its surroundings as &nbsp;
                                {info.valueData.emsalData.cevreBilgisi === "yerlesim" || info.valueData.emsalData.cevreBilgisi === "sanayi"
                                    ? `${info.valueData.emsalData.cevreBilgisi} area`
                                    : ` sparse pattern `}
                                .
                            </Text>
                        </ListItem>
                    )
                }
            </List>
            {renderPageFooter(4)}
        </Box>

    );
}

export default PropertyDetailEng;
