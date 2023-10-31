import { Box, Text, Heading } from "@chakra-ui/react";

function CompanyInfoEng({ profileInfo, info, renderPageFooter }) {
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
    function formatCurrency(value) {
        return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(value);
    }

    return (
        <Box style={{ position: "relative", pageBreakAfter: "always" }} minHeight="1000px" p="6" borderRadius="lg" boxShadow="lg">
            <Heading borderBottom="2px solid" borderColor="teal.500" pb={6} color="teal" fontFamily="heading2" fontWeight="bold" as="h2" size="lg" mb="4">SECTION 2 - Company and Customer Information</Heading>

            <Heading fontFamily="Roboto" fontWeight="bold" as="h3" size="md" mt="4" mb={4}>2.1) Company Title and Address</Heading>
            <Box mb={4}>
                <Text fontSize="16px" fontFamily="body" fontWeight="bold" display="inline">Customer:</Text>
                <Text fontSize="16px" fontFamily="body" display="inline"> {profileInfo.companyInfo.companyName}</Text>
            </Box>
            <Box mb={4}>
                <Text fontFamily="body" fontWeight="bold" display="inline">Address:</Text>
                <Text fontFamily="body" display="inline"> {profileInfo.companyInfo.companyLocation}</Text>
            </Box>
            <Text fontSize="16px" fontFamily="body" mt="2">{profileInfo.companyInfo.companyName} was established on {formatDate(profileInfo.companyInfo.companyEstablishDate)}. The company has been included in the list of companies authorized to provide appraisal services by the SPK's decision dated {formatDate(profileInfo.companyInfo.agreementDate)}.</Text>

            <Heading fontFamily="Roboto" fontWeight="bold" as="h3" size="md" mt="4" mb={4}>2.2) Customer Identification Information and Address</Heading>
            <Text fontSize="16px" fontFamily="body" mt="2">{info.projectData.requestingCompany} was established on {formatDate(info.projectData.customerEstablishmentDate)}. Its registered capital is {formatCurrency(info.projectData.registeredCapital)} and its paid-up capital is {formatCurrency(info.projectData.paidCapital)}.</Text>
            <Text fontSize="16px" fontFamily="body" mt="2">The customer has requested the valuation of {info.projectData.valuationRequest} located in {info.tapuData.location.il} province, {info.tapuData.location.ilce} district, {info.tapuData.location.mahalle} neighborhood, with the address of map sheet {info.tapuData.parsel.paftaNo} and parcel {info.tapuData.parsel.parselNo}.</Text>
            {renderPageFooter(3)}
        </Box>
    );
}

export default CompanyInfoEng;
