import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ResidentialArea from './ComparableEnvs/ResidentialArea';
import IndustrialArea from './ComparableEnvs/IndustrialArea';
import SeperatedArea from './ComparableEnvs/SeperatedArea';

function ComparableMethod({ info, renderPageFooter , emsalPage, setEmsalResult }) {
    // info içindeki emsalData'yı alabilirsiniz
    const { cevreBilgisi } = info.valueData.emsalData;


    return (
        <Box >
            <Text fontFamily="heading" color="secondary.700" fontSize="xl" fontWeight="bold" mt={4}>Emsal Karşılaştırma Yaklaşımı Değerlemesi</Text>
            {cevreBilgisi === "yerlesim" && <ResidentialArea setEmsalResult={setEmsalResult} renderPageFooter={renderPageFooter} emsalPage={emsalPage} info={info} />}
            {cevreBilgisi === "sanayi" && <IndustrialArea setEmsalResult={setEmsalResult} renderPageFooter={renderPageFooter} emsalPage={emsalPage} info={info} />}
            {cevreBilgisi === "ayrik" && <SeperatedArea setEmsalResult={setEmsalResult} renderPageFooter={renderPageFooter} emsalPage={emsalPage} info={info} />}
        </Box>
    );
}

export default ComparableMethod;
