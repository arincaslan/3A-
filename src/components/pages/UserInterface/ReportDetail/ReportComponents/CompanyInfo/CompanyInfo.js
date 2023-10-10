import { Box, Text, Heading } from "@chakra-ui/react";

function CompanyInfo({ profileInfo, info, renderPageFooter }) {
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
    function formatCurrency(value) {
        return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(value);
    }

    return (
        <Box style={{position: "relative", pageBreakAfter: "always" }} minHeight="1000px" p="6" borderRadius="lg" boxShadow="lg">
            <Heading borderBottom="2px solid" borderColor="teal.500" pb={6} color="teal" fontFamily="heading2" fontWeight="bold" as="h2" size="lg" mb="4">BÖLÜM 2 - Şirket ve Müşteri Bilgileri</Heading>

            <Heading fontFamily="Roboto" fontWeight="bold" as="h3" size="md" mt="4" mb={4}>2.1) Şirketin Unvanı ve Adresi</Heading>
            <Box mb={4}>
                <Text fontSize="16px" fontFamily="body" fontWeight="bold" display="inline">Müşteri:</Text>
                <Text fontSize="16px" fontFamily="body" display="inline"> {profileInfo.companyInfo.companyName}</Text>
            </Box>
            <Box mb={4}>
                <Text fontFamily="body" fontWeight="bold" display="inline">Adres:</Text>
                <Text fontFamily="body" display="inline"> {profileInfo.companyInfo.companyLocation}</Text>
            </Box>
            <Text fontSize="16px" fontFamily="body" mt="2">{profileInfo.companyInfo.companyName}, {formatDate(profileInfo.companyInfo.companyEstablishDate)} tarihinde kurulmuştur. Şirket, SPK'nın {formatDate(profileInfo.companyInfo.agreementDate)} tarihli kararı ile değerleme hizmeti verecek şirketler listesine alınmıştır.</Text>

            <Heading fontFamily="Roboto" fontWeight="bold" as="h3" size="md" mt="4" mb={4}>2.2) Müşteriyi Tanıtıcı Bilgiler ve Adresi</Heading>
            <Text fontSize="16px" fontFamily="body" mt="2">{info.projectData.requestingCompany}, {formatDate(info.projectData.customerEstablishmentDate)} tarihinde kurulmuştur. Kayıtlı sermayesi {formatCurrency(info.projectData.registeredCapital)} , ödenmiş sermayesi {formatCurrency(info.projectData.paidCapital)}  'dir.</Text>
            <Text fontSize="16px" fontFamily="body" mt="2">Müşteri, {info.tapuData.location.il} ili, {info.tapuData.location.ilce} ilçesi, {info.tapuData.location.mahalle} mahallesinde, {info.tapuData.parsel.paftaNo} pafta, {info.tapuData.parsel.parselNo} parsel adresindeki {info.projectData.valuationRequest} değerlemesini istemiştir.</Text>
            {renderPageFooter(3)}
        </Box>
    );
}

export default CompanyInfo;
