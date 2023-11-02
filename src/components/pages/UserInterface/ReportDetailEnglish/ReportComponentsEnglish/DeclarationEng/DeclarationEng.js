import { Box, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'; // Eğer madde işareti olarak bu ikonu kullanmak istemezseniz değiştirebilirsiniz.

const DeclarationEng = () => {


    return (
        <Box style={{ position: "relative", pageBreakAfter: "always" }} minHeight="1000px" p={5} borderRadius="md" boxShadow="lg">
            <Heading borderBottom="2px solid" borderColor="teal.500" pb={6} color="teal" fontFamily="heading2" fontWeight="bold" as="h1" size="lg" my={4}>
                DECLARATIONS, ACCEPTANCE, AND ASSUMPTIONS
            </Heading>

            <Heading mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md" my={3}>
                OUR DECLARATIONS
            </Heading>
            <List mt={4} spacing={3}>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>The findings presented in the report are accurate within the information obtained by the valuation expert.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>The analyses and conclusions in the report are limited to the stated assumptions and conditions.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>The valuation expert has no relationship with the property subject to the valuation report or the Client requesting the valuation.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>The valuation expert has no bias regarding the property subject to the valuation report or the Client requesting the valuation.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>The valuation expert has personally inspected the property subject to the valuation report.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>The valuation expert possesses the necessary professional training, knowledge, and experience to prepare this report.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>The fee for the valuation service is not contingent upon the outcomes of the valuation report.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>The valuation report has been prepared in accordance with International Valuation Standards (IVSC).</Text>
                </ListItem>

            </List>

            <Heading mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md" my={3}>
                ACCEPTANCES AND ASSUMPTIONS
            </Heading>
            <List mt={4} spacing={3}>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>It is assumed that the information and documents obtained from official institutions are correct and reliable; their accuracy has not been independently verified.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>Maps, sketches, drawings, and figures used in the valuation report are included for ease of understanding and are not to be taken as references.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>Unless otherwise stated in the valuation report, subsoil riches have not been considered.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>Projections included in the valuation report are made assuming current economic conditions will remain stable in the future.</Text>
                </ListItem>

            </List>

        </Box>
    );
}

export default DeclarationEng;
