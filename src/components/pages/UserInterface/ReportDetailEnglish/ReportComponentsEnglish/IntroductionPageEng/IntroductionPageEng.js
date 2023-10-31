import React from 'react';
import { Box, Text, VStack, HStack } from "@chakra-ui/react";

function IntroductionPageEng({ info, renderPageFooter }) {
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
                fontFamily="heading2">GENERAL INFORMATION</Text>
            <VStack align="start" spacing={5}>

                <HStack spacing={3}>
                    <Box as="span" color="primary.700">&#x2022;</Box>
                    <Text fontSize="2xl"
                        fontWeight="semibold"
                        color="primary.700"
                        fontFamily="heading2">Company Requesting the Valuation</Text>
                </HStack>
                <Text ml={20} fontSize="xl"
                    color="primary.900"
                    fontFamily="body">{info.projectData.requestingCompany}</Text>
                <HStack spacing={3}>
                    <Box as="span" color="primary.700">&#x2022;</Box>
                    <Text fontSize="2xl"
                        fontWeight="semibold"
                        color="primary.700"
                        fontFamily="heading2">Request Date</Text>
                </HStack>
                <Text fontSize="xl"
                    color="primary.900"
                    fontFamily="body">{new Date(info.projectData.reportDate).toLocaleDateString()}</Text>
                <HStack spacing={3}>
                    <Box as="span" color="primary.700">&#x2022;</Box>
                    <Text fontSize="2xl"
                        fontWeight="semibold"
                        color="primary.700"
                        fontFamily="heading2">Subject of the Valuation</Text>
                </HStack>
                <Text fontSize="xl"
                    color="primary.900"
                    fontFamily="body">{info.projectData.projectName} valuation</Text>
                <HStack spacing={3}>
                    <Box as="span" color="primary.700">&#x2022;</Box>
                    <Text fontSize="2xl"
                        fontWeight="semibold"
                        color="primary.700"
                        fontFamily="heading2">Address of the Property Being Valued</Text>
                </HStack>
                <Text fontSize="xl"
                    color="primary.900"
                    fontFamily="body">{info.tapuData.location.il} province {info.tapuData.location.ilce} district {info.tapuData.location.mahalle} neighborhood</Text>
                <HStack spacing={3}>
                    <Box as="span" color="primary.700">&#x2022;</Box>
                    <Text fontSize="2xl"
                        fontWeight="semibold"
                        color="primary.700"
                        fontFamily="heading2">Valuation Date and Report No</Text>
                </HStack>
                <Text fontSize="xl"
                    color="primary.900"
                    fontFamily="body">Valuation Date: {new Date(info.projectData.valuationDate).toLocaleDateString()},  Report No: {info.projectData.reportNo}</Text>
                <HStack spacing={3}>
                    <Box as="span" color="primary.700">&#x2022;</Box>
                    <Text fontSize="2xl"
                        fontWeight="semibold"
                        color="primary.700"
                        fontFamily="heading2">Expert Conducting the Valuation</Text>
                </HStack>
                <Text fontSize="xl"
                    color="primary.900"
                    fontFamily="body">{info.projectData.evaluator}</Text>
                <HStack spacing={3}>
                    <Box as="span" color="primary.700">&#x2022;</Box>
                    <Text fontSize="2xl"
                        fontWeight="semibold"
                        color="primary.700"
                        fontFamily="heading2">Responsible Expert Checking the Valuation</Text>
                </HStack>
                <Text fontSize="xl"
                    color="primary.900"
                    fontFamily="body">{info.projectData.inspector}</Text>
                <HStack spacing={3}>
                    <Box as="span" color="primary.700">&#x2022;</Box>
                    <Text fontSize="2xl"
                        fontWeight="semibold"
                        color="primary.700"
                        fontFamily="heading2">Report Type</Text>
                </HStack>
                <Text fontSize="xl"
                    color="primary.900"
                    fontFamily="body">Valuation Report of the {info.projectData.valuationRequest} Property</Text>
            </VStack>
            {renderPageFooter(1)}
        </Box>
    );
}

export default IntroductionPageEng;
