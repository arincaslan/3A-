import React from 'react';
import { VStack, Link, Box, Text } from '@chakra-ui/react';

function TableOfContents({ refs }) {
    const handleClick = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        });
    };

    return (
        <Box height="auto"
            overflowY="auto"
            padding={6} borderRadius="lg"
            boxShadow="lg">
            <Text mb="50px" display="flex" justifyContent="center" style={{ fontFamily: "Roboto, sans-serif", fontSize: "40px", fontWeight: "bold", color: "teal" }}>İÇİNDEKİLER</Text>
            <VStack align="start" spacing={2}>

                {refs.map((section, index) => (
                    <Link style={{ fontFamily: "Roboto, sans-serif", fontSize: "20px" }} key={index} onClick={() => handleClick(section.ref)} cursor="pointer" color="blue.500">
                        {index} - {section.name}
                    </Link>
                ))}
            </VStack>
        </Box>
    );
}

export default TableOfContents;
