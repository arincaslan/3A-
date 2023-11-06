import React from 'react';
import { Box, Text, Table, Thead, Tr, Th, Tbody, Td, VStack, Flex, Badge } from '@chakra-ui/react';

function ResidentialAreaForWord({ info }) {
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
                Çevre bilgisi "yerleşim bölgesi" olan gayrimenkulün emsal karşılaştırma metodu ile değerlemesi aşağıdaki gibi gerçekleştirilecektir.
                İlk olarak tüm emsallerin detaylı bilgileri aşağıda tablo halinde sunulmaktadır:
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
                            <th style={{ border: "1px solid gray", padding: "8px" }}>Taşınmaz Sahibi</th>
                            <th style={{ border: "1px solid gray", padding: "8px" }}>Değer</th>
                            <th style={{ border: "1px solid gray", padding: "8px" }}>Taşınmaz Alanı</th>
                            <th style={{ border: "1px solid gray", padding: "8px" }}>Açıklama</th>
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
            <p style={{ fontSize: "20px", fontWeight: "bold", margin: "16px 0" }}>Değerleme Sürecinde Yapılan İşlemler</p>
            <p style={{ margin: "16px 0" }}>
                Değerleme sürecinde yapılan işlemler aşağıdaki gibidir. Karşılaştırma kriteri olarak m² kullanılmıştır. Bölgede bulunan emsal olarak alınan gayrimenkuller uyarınca bölgedeki m² başına düşen ortalama fiyat {formatter.format(avgEmsalValuePerM2)} olarak hesaplanmıştır.
                Değerlemesi yapılan gayrimenkulun değeri, bu ortalama fiyatın gayrimenkulün m² ile çarpılması sonucu {formatter.format(ourPropertyValue)} olarak bulunmuştur.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {emsaller.map((emsal, index) => (
                    <p key={index}>
                        Emsal ({emsal.tasinmazSahibi}): {formatter.format(emsal.deger)} / {emsal.tasinmazAlani} m² = {formatter.format(emsal.deger / emsal.tasinmazAlani)} / m²
                    </p>
                ))}
                <p>   Ortalama m² başına değer:
                    ({emsaller.map((_, index) => `Emsal ${index + 1} değer/m²`).join(' + ')}) / {emsaller.length} =
                    {formatter.format(avgEmsalValuePerM2)} / m²</p>
                <div style={{ margin: "16px 0", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <span style={{ padding: "16px", backgroundColor: "green", fontSize: "20px", borderRadius: "8px" }}>
                        Değerlemesi yapılan gayrimenkulün değeri: Ortalama m² başına değer {formatter.format(avgEmsalValuePerM2)} * Gayrimenkul alanı {Number(info.tapuData.parsel.yuzolcumu)} m² = <strong>{formatter.format(ourPropertyValue)}</strong>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ResidentialAreaForWord;


