import React from 'react';
import { VStack, Link, Box, Text, HStack, Spacer } from '@chakra-ui/react';

function TableOfContentsEng({evalPage, currentPage, newCurrentPage}) {
    const sections = [
        {
            title: "SECTION 1 - General Report Information",
            subSections: [
                "1.1) Report Date and Number",
                "1.2) Report Type",
                "1.3) Names of the Report Preparers and Responsible Valuation Expert",
                "1.4) Valuation Date and Value Concept",
                "1.5) Reference Contract",
            ],
            page: 2,
        },
        {
            title: "SECTION 2 - Company and Customer Information",
            subSections: [
                "2.1) Company Name and Address",
                "2.2) Customer Identifying Information and Address",
            ],
            page: 3,
        },
        {
            title: "SECTION 3 - General Information About the Subject of Valuation",
            subSections: [
                "3.1) Location, Position, and Description of the Real Estate",
                "3.2) Physical Features of the Real Estate",
            ],
            page: 4,
        },
        {
            title: "SECTION 4 - Information Related to Ownership, Zoning, and Legal Status of the Real Estate",
            subSections: [
                "4.1) Ownership Information of the Real Estate",
                "4.2) Zoning Information of the Real Estate",
                "4.3) Legal Status of the Real Estate",
                "4.4) Legal and Zoning Issues",
                "4.5) Zoning Status Document",
            ],
            page: 5,
        },
        { title: "SECTION 5 - Location and Market Analysis", subSections: [], page: 7, },
        { title: "SECTION 6 - Physical / Building and Land Information of the Real Estate", subSections: [], page: currentPage, },
        { title: "SECTION 7 - SWOT Analysis", subSections: [],  page: currentPage+2, },
        { title: "SECTION 8 - Valuation Methodology", subSections: [],  page: currentPage+3, },
        { title: "SECTION 9 - Evaluation of Analysis Results", subSections: [] , page: newCurrentPage, },
        { title: "SECTION 10 - Conclusion", subSections: [] ,  page: evalPage,},
        { title: "SECTION 11 - Appendices", subSections: [] ,  page: evalPage + 1,}
    ];
    

    return (
        <Box
        
        minHeight="1000px"
            maxHeight="1000px"
            overflowY="auto"
            padding={5} borderRadius="lg"
            boxShadow="lg">
            <Text mb="50px" display="flex" justifyContent="center" style={{ fontFamily: "Roboto, sans-serif", fontSize: "40px", fontWeight: "bold", color: "teal" }}>TABLE OF CONTENTS</Text>
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

export default TableOfContentsEng;
