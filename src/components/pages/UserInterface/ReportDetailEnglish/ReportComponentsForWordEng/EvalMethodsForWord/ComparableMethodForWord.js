import React from 'react';
import { Text } from '@chakra-ui/react';
import IndustrialAreaForWord from './ComparableEnvsForWord/IndustrialAreaForWord';
import ResidentialAreaForWord from './ComparableEnvsForWord/ResidentialAreaForWord';
import SeperatedAreaForWord from './ComparableEnvsForWord/SeperatedAreaForWord';

function ComparableMethodForWord({ info }) {
    // info içindeki emsalData'yı alabilirsiniz
    const { cevreBilgisi } = info.valueData.emsalData;


    return (
        <div>
            <p style={{ fontSize: "lg", fontWeight: "bold"}}>Emsal Karşılaştırma Yaklaşımı Değerlemesi</p>
            {cevreBilgisi === "yerlesim" && <ResidentialAreaForWord info={info} />}
            {cevreBilgisi === "sanayi" && <IndustrialAreaForWord info={info} />}
            {cevreBilgisi === "ayrik" && <SeperatedAreaForWord info={info} />}
            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>
    );
}

export default ComparableMethodForWord;
