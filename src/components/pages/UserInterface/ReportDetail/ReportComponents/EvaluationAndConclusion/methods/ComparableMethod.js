import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ResidentialArea from './ComparableEnvs/ResidentialArea';
import IndustrialArea from './ComparableEnvs/IndustrialArea';
import SeperatedArea from './ComparableEnvs/SeperatedArea';

function ComparableMethod({ info, renderPageFooter , emsalPage }) {
    // info içindeki emsalData'yı alabilirsiniz
    const { cevreBilgisi } = info.valueData.emsalData;


    return (
        <Box>
            <Text fontFamily="heading" color="secondary.700" fontSize="xl" fontWeight="bold" mt={4}>Emsal Karşılaştırma Yaklaşımı Değerlemesi</Text>
            {cevreBilgisi === "yerlesim" && <ResidentialArea renderPageFooter={renderPageFooter} emsalPage={emsalPage} info={info} />}
            {cevreBilgisi === "sanayi" && <IndustrialArea renderPageFooter={renderPageFooter} emsalPage={emsalPage} info={info} />}
            {cevreBilgisi === "ayrik" && <SeperatedArea renderPageFooter={renderPageFooter} emsalPage={emsalPage} info={info} />}
        </Box>
    );
}

export default ComparableMethod;
