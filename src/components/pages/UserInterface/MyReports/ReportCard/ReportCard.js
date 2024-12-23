import React, { useState, useEffect } from 'react';
import { Box, Heading, Button, Text, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const ReportCard = ({ report }) => {
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/report-detail', { state: { report }, replace: true });
    };
    const handleEnglishClick = () => {
        navigate('/report-detail-english', { state: { report }, replace: true });
    };

    return (
        <Box 
            borderWidth="1px" 
            borderRadius="lg" 
            p={5} 
            my={4} 
            width={[
                "100%", // base
                "40%", // 480px upwards
                "85%", // 768px upwards
                "90%", // 992px upwards
              ]}
            mx="auto"
            bg="white"
            boxShadow="md" 
            _hover={{ boxShadow: 'xl' }} 
            transition="box-shadow 0.2s"
        >
            <Flex justifyContent="space-between" alignItems="center">
                <Box>
                    <Heading 
                        as="h3" 
                        size="md" 
                        mb={3} 
                        color="teal.500"
                        fontFamily="Arial"  // Fontu buraya ekledik
                    >
                        {report.projectData.projectName}
                    </Heading>
                    <Text 
                        fontSize="sm" 
                        color="gray.600" 
                        mb={4}
                        fontFamily="Arial"  // Fontu buraya ekledik
                    >
                        {formatDate(report.projectData.valuationDate)}
                    </Text>
                </Box>
                <Box p={5} display="flex"  flexDirection="column">
                <Button fontSize={["sm", "md", 'md', "xl"]} fontFamily="heading1" w='90%' onClick={handleClick} colorScheme="teal">
                    Raporu Görüntüle
                </Button>
                <Button fontSize={["sm", "md", 'md', "xl"]} fontFamily="heading1" mt={4} w='90%' onClick={handleEnglishClick} colorScheme="blue">
                    Display English 
                </Button>
                </Box>
            </Flex>
        </Box>
    );
};

export default ReportCard;
