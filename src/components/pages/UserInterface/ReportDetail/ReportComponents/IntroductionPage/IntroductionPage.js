import React from 'react';
import { Box, Text, VStack } from "@chakra-ui/react";

function IntroductionPage({ info }) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="auto"
            overflowY="auto"
            padding={4}
        >
            <VStack spacing={4}>
                <Text fontSize="2xl" fontWeight="bold">Değerlemeyi Talep Eden Firma</Text>
                <Text fontSize="xl">{info.projectData.requestingCompany}</Text>
                <Text fontSize="2xl" fontWeight="bold">Talep Tarihi</Text>
                <Text fontSize="xl">{new Date(info.projectData.reportDate).toLocaleDateString()}</Text>
                <Text fontSize="2xl" fontWeight="bold">Değerleme Konusu</Text>
                <Text fontSize="xl">{info.projectData.projectName} değerlemesi</Text>
                <Text fontSize="2xl" fontWeight="bold">Değerleme Konusu Gayr. Adresi</Text>
                <Text fontSize="xl">{info.tapuData.location.il} ili {info.tapuData.location.ilce} ilçesi {info.tapuData.location.mahalle} mahallesi </Text>
                <Text fontSize="2xl" fontWeight="bold">Değerleme Tarihi ve Rapor No</Text>
                <Text fontSize="xl">Değerleme Tarihi: {new Date(info.projectData.valuationDate).toLocaleDateString()},  Rapor No: {info.projectData.reportNo}</Text>
                <Text fontSize="2xl" fontWeight="bold">Değerlemeyi Yapan Uzman</Text>
                <Text fontSize="xl">{info.projectData.evaluator}</Text>
                <Text fontSize="2xl" fontWeight="bold">Değerlemeyi Kontrol Eden Sorumlu Değ. Uzmanı</Text>
                <Text fontSize="xl">{info.projectData.inspector}</Text>
                <Text fontSize="2xl" fontWeight="bold">Rapor Türü</Text>
                <Text fontSize="xl">{info.projectData.valuationRequest} Gayrimenkulün Değerleme Raporu</Text>
            </VStack>
        </Box>
    );
}

export default IntroductionPage;
