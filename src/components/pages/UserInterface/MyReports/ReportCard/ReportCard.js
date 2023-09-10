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


    return (
        <Box 
            borderWidth="1px" 
            borderRadius="lg" 
            p={5} 
            my={4} 
            width={['100%', '80%', '60%', '400px']}
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
                <Button onClick={handleClick} colorScheme="teal">
                    Raporu Görüntüle
                </Button>
            </Flex>
        </Box>
    );
};

export default ReportCard;
