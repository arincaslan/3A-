import React from 'react';
import { Box, Text, Table, Thead, Tr, Th, Tbody, Td, VStack, Flex, Badge } from '@chakra-ui/react';

function ResidentialAreaForWordEng({ info }) {
    const { emsaller } = info.valueData.emsalData;


    // Her bir emsalin değerini m2'sine bölme işlemi
    const emsalValuesPerM2 = emsaller.map(emsal => Number(emsal.deger) / Number(emsal.tasinmazAlani));

    // Bu değerlerin ortalamasını alma işlemi
    const avgEmsalValuePerM2 = emsalValuesPerM2.reduce((a, b) => a + b, 0) / emsalValuesPerM2.length;

    // Ortalama m2 başına değeri kendi m2 değerimiz ile çarpma işlemi
    const ourPropertyValue = avgEmsalValuePerM2 * Number(info.tapuData.parsel.yuzolcumu);

    // Para birimi formatı
    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });
    return (
        <div style={{ padding: "16px" }}>
            <p style={{ margin: "16px 0" }}>
                The valuation of the property with the environmental information "settlement area" will be conducted as follows using the benchmark comparison method.
                First, the detailed information of all comparables is presented below in a table format:
            </p>
            <div style={{
                backgroundColor: "white",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                padding: "16px",
                borderRadius: "8px",
                border: "1px solid gray"
            }}>
                <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid gray", padding: "8px" }}>Property Owner</th>
                            <th style={{ border: "1px solid gray", padding: "8px" }}>Value</th>
                            <th style={{ border: "1px solid gray", padding: "8px" }}>Property Area</th>
                            <th style={{ border: "1px solid gray", padding: "8px" }}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emsaller.map((emsal, index) => (
                            <tr key={index}>
                                <td style={{ border: "1px solid gray", padding: "8px" }}>{emsal.tasinmazSahibi}</td>
                                <td style={{ border: "1px solid gray", padding: "8px" }}>{formatter.format(emsal.deger)} TL</td>
                                <td style={{ border: "1px solid gray", padding: "8px" }}>{emsal.tasinmazAlani} m²</td>
                                <td style={{ border: "1px solid gray", padding: "8px" }}>{emsal.aciklama}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold", margin: "16px 0" }}>Procedures Conducted During the Valuation Process</p>
            <p style={{ margin: "16px 0" }}>
            The procedures conducted during the valuation process are as follows. The comparison criterion is square meters (m²). The average price per square meter in the region has been calculated based on the properties selected as comparables. The value of the property being evaluated is determined by multiplying this average price by the property's square meters, resulting in {formatter.format(ourPropertyValue)}.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {emsaller.map((emsal, index) => (
                    <p key={index}>
                            Comparable ({emsal.tasinmazSahibi}): {formatter.format(emsal.deger)} / {emsal.tasinmazAlani} m² = {formatter.format(emsal.deger / emsal.tasinmazAlani)} TL/m²
                    </p>
                ))}
                <p>  Average value per m² =
                    ({emsaller.map((_, index) => `Emsal ${index + 1} değer/m²`).join(' + ')}) / {emsaller.length} =
                    {formatter.format(avgEmsalValuePerM2)} / m²</p>
                <div style={{ margin: "16px 0", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <span style={{ padding: "16px", backgroundColor: "green", fontSize: "20px", borderRadius: "8px" }}>
                    The estimated value of the property being evaluated: Average value per m² {formatter.format(avgEmsalValuePerM2)} * Property area {Number(info.tapuData.parsel.yuzolcumu)} m² = <strong>{formatter.format(ourPropertyValue)}</strong>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ResidentialAreaForWordEng;


