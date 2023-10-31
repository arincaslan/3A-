import { Box, Heading, List, ListItem, Icon, ListIcon, Image, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const PropertyLegalInfoEng = ({ info, renderPageFooter }) => {
    const imageSrc = info.tapuData.parsel.imarResmi;
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }


    return (
        <Box p="5" borderRadius="md" boxShadow="lg">
            <div style={{ pageBreakAfter: "always", paddingBottom: "50px", position: "relative", minHeight: "1000px" }}>
                <Heading borderBottom="2px solid" borderColor="teal.500" pb={6} fontFamily="heading2" color="teal" fontWeight="bold" as="h1" size="lg" mt={2}>SECTION 4 - Information on the Ownership, Zoning, and Legal Status of the Property</Heading>

                <Heading mb={4} mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md">4.1) Ownership Information of the Property</Heading>
                <List spacing={4}>
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Property Owner: {info.tapuData.deed.sahibi}</Text>
                    </ListItem>
                    {info.tapuData.deed.ownershipInfo && (
                        <ListItem display="flex" alignItems="center">
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <Text my={2}>Ownership Information: {info.tapuData.deed.ownershipInfo}</Text>
                        </ListItem>
                    )}
                    {info.tapuData.deed.ownershipMethod && (
                        <ListItem display="flex" alignItems="center">
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <Text my={2}>Method of Acquisition: {info.tapuData.deed.ownershipMethod}</Text>
                        </ListItem>
                    )}
                    {info.tapuData.deed.ownershipDate && (
                        <ListItem display="flex" alignItems="center">
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <Text my={2}>Date of Acquisition: {formatDate(info.tapuData.deed.ownershipDate)}</Text>
                        </ListItem>
                    )}
                </List>

                <Heading mb={4} mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md">4.2) Zoning Information of the Property</Heading>
                <List spacing={3}>
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Parcel Characteristic: {info.tapuData.parsel.nitelik}</Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Total Area: {info.tapuData.parsel.yuzolcumu}</Text>
                    </ListItem>
                    {info.tapuData.parsel.taks && (
                        <ListItem display="flex" alignItems="center">
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <Text my={2}>TAKS (Floor Area Ratio): {info.tapuData.parsel.taks}</Text>
                        </ListItem>
                    )}
                    {info.tapuData.parsel.kaks && (
                        <ListItem display="flex" alignItems="center">
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <Text my={2}>KAKS (Building Coverage Ratio): {info.tapuData.parsel.kaks}</Text>
                        </ListItem>
                    )}
                </List>

                <Heading mb={4} mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md">4.3) Legal Status of the Property</Heading>
                <List spacing={3}>
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Title Deed Date: {formatDate(info.tapuData.deed.tapuTarihi)}</Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Volume No: {info.tapuData.deed.ciltNo}</Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Page No: {info.tapuData.deed.sahifeNo}</Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Daily No: {info.tapuData.deed.yevmiyeNo}</Text>
                    </ListItem>
                </List>

                <Heading mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md">4.4) Legal and Zoning Issues</Heading>
                {info.tapuData.parsel.imarDurumu != "İmarlı" ? (
                    <Text my={2}>Zoning status of the property: {info.tapuData.parsel.imarDurumu}. This status can lead to various legal and zoning issues.</Text>
                ) : (
                    <Text my={2}>The property subject to the appraisal does not have any legal or zoning issues.</Text>
                )}

                {renderPageFooter(5)}
            </div>

            <Box position="relative" width="770px" maxHeight="1000px" minHeight="1000px">
                <Heading mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md" mb={6}>4.5) Zoning Status Image</Heading>
                <Image height="950px" src={imageSrc} alt="Zoning Image" />
                {renderPageFooter(6)}
            </Box>
        </Box>

    );
}

export default PropertyLegalInfoEng;