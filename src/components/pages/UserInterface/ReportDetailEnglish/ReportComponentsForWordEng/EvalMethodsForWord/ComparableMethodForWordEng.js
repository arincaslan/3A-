import React from 'react';
import { Text } from '@chakra-ui/react';
import ResidentialAreaForWordEng from './ComparableEnvsForWordEng/ResidentialAreaForWordEng';
import IndustrialAreaForWordEng from './ComparableEnvsForWordEng/IndustrialAreaForWordEng';
import SeperatedAreaForWordEng from './ComparableEnvsForWordEng/SeperatedAreaForWordEng';

function ComparableMethodForWordEng({ info }) {
    // info içindeki emsalData'yı alabilirsiniz
    const { cevreBilgisi } = info.valueData.emsalData;



    return (
        <div>
            <p style={{ fontSize: "lg", fontWeight: "bold"}}>Comparable Method Valuation</p>
            {cevreBilgisi === "yerlesim" && <ResidentialAreaForWordEng info={info} />}
            {cevreBilgisi === "sanayi" && <IndustrialAreaForWordEng info={info} />}
            {cevreBilgisi === "ayrik" && <SeperatedAreaForWordEng info={info} />}
            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>
    );
}

export default ComparableMethodForWordEng;
