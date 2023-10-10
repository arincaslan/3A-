import React from 'react';
import { VStack, Link, Box, Text } from '@chakra-ui/react';

function TableOfContents() {
    const sections = [
        {
            title: "BÖLÜM 1 - Genel Rapor Bilgileri",
            subSections: [
                "1.1) Rapor Tarihi ve Numarası",
                "1.2) Rapor Türü",
                "1.3) Raporu Hazırlayanlar ile Sorumlu Değerleme Uzmanı Adı Soyadı",
                "1.4) Değerleme Tarihi ve Değer Kavramı",
                "1.5) Dayanak Sözleşmesi",
            ]
        },
        {
            title: "BÖLÜM 2 - Şirket ve Müşteri Bilgileri",
            subSections: [
                "2.1) Şirketin Unvanı ve Adresi",
                "2.2) Müşteriyi Tanıtıcı Bilgiler ve Adresi",

            ]
        },
        {
            title: "BÖLÜM 3 - Değerleme Konusu Hakkında Genel Bilgiler",
            subSections: [
                "3.1) Gayrimenkulün Yeri Konumu ve Tanımı",
                "3.2) Gayrimenkulün Fiziksel Özellikleri",

            ]
        },
        {
            title: "BÖLÜM 4 - Gayrimenkulün Mülkiyet İmar ve Yasal Durumuna İlişkin Bilgiler",
            subSections: [
                "4.1) Gayrimenkulün Mülkiyet Bilgileri",
                "4.2) Gayrimenkulün İmar Bilgileri",
                "4.3) Gayrimenkulün Yasal Durumu",
                "4.4) Yasal ve İmar Sorunları",
                "4.5) İmar Durumu Resmi",
            ]
        },
        { title: "BÖLÜM 5 - Konum ve Piyasa Analizi", subSections: [] },
        { title: "BÖLÜM 6 - Gayrimenkul Fiziksel Bilgileri / Yapı ve Arazi Bilgileri", subSections: [] },
        { title: "BÖLÜM 7 - SWOT Analizi", subSections: [] },
        { title: "BÖLÜM 8 - Değerleme Metodolojisi", subSections: [] },
        { title: "BÖLÜM 9 - Analiz Sonuçlarının Değerlendirilmesi", subSections: [] },
        { title: "BÖLÜM 10 - Sonuç", subSections: [] },
        { title: "BÖLÜM 11 - Ekler", subSections: [] }
    ];

    return (
        <Box minHeight="1000px"
            maxHeight="1000px"
            overflowY="auto"
            padding={5} borderRadius="lg"
            boxShadow="lg">
            <Text mb="50px" display="flex" justifyContent="center" style={{ fontFamily: "Roboto, sans-serif", fontSize: "40px", fontWeight: "bold", color: "teal" }}>İÇİNDEKİLER</Text>
            <VStack align="start" spacing={2}>
                {sections.map((section, index) => (
                    <VStack align="start" spacing={1} key={index}>
                        <Link
                            style={{ fontFamily: "Roboto, sans-serif", fontSize: "16px" }}
                            cursor="pointer"
                            color="blue.500">
                            {section.title}
                        </Link>
                        {section.subSections.map((subSection, subIndex) => (
                            <Link
                                style={{ fontFamily: "Roboto, sans-serif", fontSize: "14px", marginLeft: "20px" }}
                                key={subIndex}
                                cursor="pointer"
                                color="blue.500">
                                {subSection}
                            </Link>
                        ))}
                    </VStack>
                ))}
            </VStack>
        </Box>
    );
}

export default TableOfContents;
