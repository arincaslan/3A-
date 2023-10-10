import React from 'react';
import { Box, Text, VStack, HStack } from "@chakra-ui/react";

function IntroductionPage({ info, renderPageFooter }) {
    return (
        <Box
        style={{ position: "relative", pageBreakAfter: "always" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="auto"
            overflowY="auto"
            padding={5}
            borderRadius="lg"
            boxShadow="lg"
            minHeight="1000px"
        >
            <Text
            mb="20px" 
            fontSize="40px"
                fontWeight="semibold"
                color="teal"
                fontFamily="heading2">GENEL BİLGİLER</Text>
            <VStack align="start" spacing={5}>


                <HStack spacing={3}>
                    <Box as="span" color="primary.700">&#x2022;</Box>
                    <Text fontSize="2xl"
                        fontWeight="semibold"
                        color="primary.700"
                        fontFamily="heading2">Değerlemeyi Talep Eden Firma</Text>
                </HStack>
                <Text ml={20} fontSize="xl"
                    color="primary.900"
                    fontFamily="body">{info.projectData.requestingCompany}</Text>
                <HStack spacing={3}>
                    <Box as="span" color="primary.700">&#x2022;</Box>
                    <Text fontSize="2xl"
                        fontWeight="semibold"
                        color="primary.700"
                        fontFamily="heading2">Talep Tarihi</Text>
                </HStack>
                <Text fontSize="xl"
                    color="primary.900"
                    fontFamily="body">{new Date(info.projectData.reportDate).toLocaleDateString()}</Text>
                <HStack spacing={3}>
                    <Box as="span" color="primary.700">&#x2022;</Box>
                    <Text fontSize="2xl"
                        fontWeight="semibold"
                        color="primary.700"
                        fontFamily="heading2">Değerleme Konusu</Text>
                </HStack>
                <Text fontSize="xl"
                    color="primary.900"
                    fontFamily="body">{info.projectData.projectName} değerlemesi</Text>
                <HStack spacing={3}>
                    <Box as="span" color="primary.700">&#x2022;</Box>
                    <Text fontSize="2xl"
                        fontWeight="semibold"
                        color="primary.700"
                        fontFamily="heading2">Değerleme Konusu Gayrimenkul Adresi</Text>
                </HStack>
                <Text fontSize="xl"
                    color="primary.900"
                    fontFamily="body">{info.tapuData.location.il} ili {info.tapuData.location.ilce} ilçesi {info.tapuData.location.mahalle} mahallesi </Text>
                <HStack spacing={3}>
                    <Box as="span" color="primary.700">&#x2022;</Box>
                    <Text fontSize="2xl"
                        fontWeight="semibold"
                        color="primary.700"
                        fontFamily="heading2">Değerleme Tarihi ve Rapor No</Text>
                </HStack>
                <Text fontSize="xl"
                    color="primary.900"
                    fontFamily="body">Değerleme Tarihi: {new Date(info.projectData.valuationDate).toLocaleDateString()},  Rapor No: {info.projectData.reportNo}</Text>
                <HStack spacing={3}>
                    <Box as="span" color="primary.700">&#x2022;</Box>
                    <Text fontSize="2xl"
                        fontWeight="semibold"
                        color="primary.700"
                        fontFamily="heading2">Değerlemeyi Yapan Uzman</Text>
                </HStack>
                <Text fontSize="xl"
                    color="primary.900"
                    fontFamily="body">{info.projectData.evaluator}</Text>
                <HStack spacing={3}>
                    <Box as="span" color="primary.700">&#x2022;</Box>
                    <Text fontSize="2xl"
                        fontWeight="semibold"
                        color="primary.700"
                        fontFamily="heading2">Değerlemeyi Kontrol Eden Sorumlu Değ. Uzmanı</Text>
                </HStack>
                <Text fontSize="xl"
                    color="primary.900"
                    fontFamily="body">{info.projectData.inspector}</Text>
                <HStack spacing={3}>
                    <Box as="span" color="primary.700">&#x2022;</Box>
                    <Text fontSize="2xl"
                        fontWeight="semibold"
                        color="primary.700"
                        fontFamily="heading2">Rapor Türü</Text>
                </HStack>
                <Text fontSize="xl"
                    color="primary.900"
                    fontFamily="body">{info.projectData.valuationRequest} Gayrimenkulün Değerleme Raporu</Text>
            </VStack>
            {renderPageFooter(1)}
        </Box>
    );
}

export default IntroductionPage;
