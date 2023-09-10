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
        <Box p={5}>
            <Text>İÇİNDEKİLER</Text>
            <VStack align="start" spacing={2}>
                {refs.map((section, index) => (
                    <Link key={index} onClick={() => handleClick(section.ref)} cursor="pointer" color="blue.500">
                        {section.name}
                    </Link>
                ))}
            </VStack>
        </Box>
    );
}

export default TableOfContents;
