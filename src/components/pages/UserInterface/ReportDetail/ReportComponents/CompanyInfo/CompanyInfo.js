import { Box, Text, Heading } from "@chakra-ui/react";

function CompanyInfo({profileInfo , info}) {
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      }
      
 

    return (
        <Box p="5">
            <Heading fontWeight="bold" as="h2" size="lg" mb="3">Bölüm 2 - Şirket ve Müşteri Bilgileri</Heading>
            <Heading fontWeight="bold" as="h3" size="md" mt="3" mb="2">Şirketin Unvanı ve Adresi</Heading>
            <Text mt="1">Değerleme Şirketi: {profileInfo.companyInfo.companyName}</Text>
            <Text mt="1">Adresi: {profileInfo.companyInfo.companyLocation}</Text>
            <Text mt="1">{profileInfo.companyInfo.companyName}, {formatDate(profileInfo.companyInfo.companyEstablishDate)} tarihinde kurulmuştur. Şirket, SPK'nın {formatDate(profileInfo.companyInfo.agreementDate)} tarihli kararı ile değerleme hizmeti verecek şirketler listesine alınmıştır.</Text>

            
            <Heading fontWeight="bold" as="h3" size="md" mt="3" mb="2">Müşteriyi Tanıtıcı Bilgiler ve Adresi</Heading>
            <Text mt="1">{info.projectData.requestingCompany}, {formatDate(info.projectData.customerEstablishmentDate)} tarihinde kurulmuştur. Kayıtlı sermayesi {info.projectData.registeredCapital}, ödenmiş sermayesi {info.projectData.paidCapital} 'dir.</Text>
            <Text mt="1">Müşteri, {info.tapuData.location.il} ili, {info.tapuData.location.ilce} ilçesi, {info.tapuData.location.mahalle} mahallesinde, {info.tapuData.parsel.paftaNo} pafta, {info.tapuData.parsel.parselNo} parsel adresindeki {info.projectData.valuationRequest} değerlemesini istemiştir.</Text>
        </Box>
    );
}

export default CompanyInfo;
