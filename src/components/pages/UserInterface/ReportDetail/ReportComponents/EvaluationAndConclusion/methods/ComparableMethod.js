import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ResidentialArea from './ComparableEnvs/ResidentialArea';
import IndustrialArea from './ComparableEnvs/IndustrialArea';
import SeperatedArea from './ComparableEnvs/SeperatedArea';

function ComparableMethod({ info }) {
    // info içindeki emsalData'yı alabilirsiniz
    const { cevreBilgisi } = info.valueData.emsalData;


    return (
        <Box>
            <Text fontSize="lg" fontWeight="bold">Emsal Karşılaştırma Yaklaşımı Değerlemesi</Text>
            {cevreBilgisi === "yerlesim" && <ResidentialArea info={info} />}
            {cevreBilgisi === "sanayi" && <IndustrialArea info={info} />}
            {cevreBilgisi === "ayrik" && <SeperatedArea info={info} />}
        </Box>
    );
}

export default ComparableMethod;
