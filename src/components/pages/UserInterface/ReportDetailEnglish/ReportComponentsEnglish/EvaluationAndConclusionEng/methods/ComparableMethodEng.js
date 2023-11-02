import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import IndustrialAreaEng from './ComparableEnvs/IndustrialAreaEng';
import ResidentialAreaEng from './ComparableEnvs/ResidentialAreaEng';
import SeperatedAreaEng from './ComparableEnvs/SeperatedAreaEng';

function ComparableMethodEng({ info, renderPageFooter , emsalPage, setEmsalResult }) {
    // info içindeki emsalData'yı alabilirsiniz
    const { cevreBilgisi } = info.valueData.emsalData;


    return (
        <Box >
            <Text fontFamily="heading" color="secondary.700" fontSize="xl" fontWeight="bold" mt={4}>Comparable Method Valuation</Text>
            {cevreBilgisi === "yerlesim" && <ResidentialAreaEng setEmsalResult={setEmsalResult} renderPageFooter={renderPageFooter} emsalPage={emsalPage} info={info} />}
            {cevreBilgisi === "sanayi" && <IndustrialAreaEng setEmsalResult={setEmsalResult} renderPageFooter={renderPageFooter} emsalPage={emsalPage} info={info} />}
            {cevreBilgisi === "ayrik" && <SeperatedAreaEng setEmsalResult={setEmsalResult} renderPageFooter={renderPageFooter} emsalPage={emsalPage} info={info} />}
        </Box>
    );
}

export default ComparableMethodEng;
