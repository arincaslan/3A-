import React from 'react';
import { VStack, Link, Box, Text, HStack, Spacer } from '@chakra-ui/react';

function TableOfContents({evalPage, currentPage, newCurrentPage}) {
    const sections = [
        {
            title: "BÖLÜM 1 - Genel Rapor Bilgileri",
            subSections: [
                "1.1) Rapor Tarihi ve Numarası",
                "1.2) Rapor Türü",
                "1.3) Raporu Hazırlayanlar ile Sorumlu Değerleme Uzmanı Adı Soyadı",
                "1.4) Değerleme Tarihi ve Değer Kavramı",
                "1.5) Dayanak Sözleşmesi",
            ],
            page: 2,
        },
        {
            title: "BÖLÜM 2 - Şirket ve Müşteri Bilgileri",
            subSections: [
                "2.1) Şirketin Unvanı ve Adresi",
                "2.2) Müşteriyi Tanıtıcı Bilgiler ve Adresi",

            ],
            page: 3,
        },
        {
            title: "BÖLÜM 3 - Değerleme Konusu Hakkında Genel Bilgiler",
            subSections: [
                "3.1) Gayrimenkulün Yeri Konumu ve Tanımı",
                "3.2) Gayrimenkulün Fiziksel Özellikleri",

            ]
            ,
            page: 4,
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
            ,
            page: 5,
        },
        { title: "BÖLÜM 5 - Konum ve Piyasa Analizi", subSections: [] , page: 7, },
        { title: "BÖLÜM 6 - Gayrimenkul Fiziksel / Yapı ve Arazi Bilgileri", subSections: [], page: currentPage, },
        { title: "BÖLÜM 7 - SWOT Analizi", subSections: [],  page: currentPage+2, },
        { title: "BÖLÜM 8 - Değerleme Metodolojisi", subSections: [],  page: currentPage+3, },
        { title: "BÖLÜM 9 - Analiz Sonuçlarının Değerlendirilmesi", subSections: [] , page: newCurrentPage, },
        { title: "BÖLÜM 10 - Sonuç", subSections: [] ,  page: evalPage,},
        { title: "BÖLÜM 11 - Ekler", subSections: [] ,  page: evalPage + 1,}
    ];

    return (
        <Box
        
        minHeight="1000px"
            maxHeight="1000px"
            overflowY="auto"
            padding={5} borderRadius="lg"
            boxShadow="lg">
            <Text mb="50px" display="flex" justifyContent="center" style={{ fontFamily: "Roboto, sans-serif", fontSize: "40px", fontWeight: "bold", color: "teal" }}>İÇİNDEKİLER</Text>
            <VStack width="100%"  align="start" spacing={2}>
                {sections.map((section, index) => (
                    <VStack align="start" spacing={1} key={index}>
                        <HStack width="700px">
                            <Link
                                style={{ fontFamily: "Roboto, sans-serif", fontSize: "16px" }}
                                cursor="pointer"
                                color="blue.500">
                                {section.title}
                            </Link>
                            <Spacer />
                            {section.page && <Text style={{ fontFamily: "Roboto, sans-serif", fontSize: "14px" }}>{section.page}</Text>}
                        </HStack>
                        {section.subSections.map((subSection, subIndex) => (
                            <HStack width="100%" key={subIndex}>
                                <Link
                                    style={{ fontFamily: "Roboto, sans-serif", fontSize: "14px", marginLeft: "20px" }}
                                    cursor="pointer"
                                    color="blue.500">
                                    {subSection}
                                </Link>
                              
                            </HStack>
                        ))}
                    </VStack>
                ))}
            </VStack>
        </Box>
    );
}

export default TableOfContents;
