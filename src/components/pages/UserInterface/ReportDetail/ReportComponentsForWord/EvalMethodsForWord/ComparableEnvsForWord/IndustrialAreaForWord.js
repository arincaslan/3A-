import React from 'react';

function IndustrialAreaForWord({ info }) {
    const { emsaller } = info.valueData.emsalData;
    const { menkulEkBilgi } = info.valueData.emsalData;
    const taks = Number(info.tapuData.parsel.taks.replace(",", "."));
    const alan = Number(info.tapuData.parsel.yuzolcumu.replace(",", "."));
    const katSayisi = Number(menkulEkBilgi.katSayisi.replace(",", "."));
    const katYüksekligi = Number(menkulEkBilgi.katYuksekligi.replace(",", "."));


    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });

    // Her bir emsal için inşaat hacmi hesaplama
    const constructionVolumes = emsaller.map(emsal => Number(emsal.tasinmazAlani) * Number(emsal.katSayisi) * Number(emsal.yukseklik) * Number(emsal.taks));

    // Her emsal için "Emsal Değer / İnşaat Hacmi" hesaplama
    const valuePerVolume = emsaller.map((emsal, index) => Number(emsal.deger) / constructionVolumes[index]);

    // Bu değerlerin ortalamasını alma işlemi
    const avgValuePerVolume = valuePerVolume.reduce((a, b) => a + b, 0) / valuePerVolume.length;

    // Ortalama birim inşaat hacmine düşen değeri, kendi inşaat hacmimiz ile çarpma işlemi
    const ourPropertyValue = avgValuePerVolume * alan * taks * katSayisi * katYüksekligi;


    return (
        <div style={{ padding: "1rem" }}>
            <p style={{ marginBottom: "16px" }}>
                Çevre bilgisi "sanayi bölgesi" olan gayrimenkulün emsal karşılaştırma metodu ile değerlemesi aşağıdaki gibi gerçekleştirilecektir.
                İlk olarak tüm emsallerin detaylı bilgileri aşağıda tablo halinde sunulmaktadır:
            </p>
            <div style={{
                backgroundColor: "white",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                padding: "16px",
                borderRadius: "8px",
                border: "1px solid gray"
            }}>
                <table style={{
                    borderCollapse: "collapse",
                    width: "100%"
                }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid gray", padding: "8px" }}>Taşınmaz Sahibi</th>
                            <th style={{ border: "1px solid gray", padding: "8px" }}>Değer</th>
                            <th style={{ border: "1px solid gray", padding: "8px" }}>Taşınmaz Alanı</th>
                            <th style={{ border: "1px solid gray", padding: "8px" }}>Kat Sayısı</th>
                            <th style={{ border: "1px solid gray", padding: "8px" }}>Kat Yüksekliği</th>
                            <th style={{ border: "1px solid gray", padding: "8px" }}>Açıklama</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emsaller.map((emsal, index) => (
                            <tr key={index}>
                                <td style={{ border: "1px solid gray", padding: "8px" }}>{emsal.tasinmazSahibi}</td>
                                <td style={{ border: "1px solid gray", padding: "8px" }}>{formatter.format(emsal.deger)} TL</td>
                                <td style={{ border: "1px solid gray", padding: "8px" }}>{emsal.tasinmazAlani} m²</td>
                                <td style={{ border: "1px solid gray", padding: "8px" }}>{emsal.katSayisi}</td>
                                <td style={{ border: "1px solid gray", padding: "8px" }}>{emsal.yukseklik} m</td>
                                <td style={{ border: "1px solid gray", padding: "8px" }}>{emsal.acıklama}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p style={{ marginBottom: "16px" }}>
                Değerlemesi yapılacak gayrimenkulün çevre bilgisi "Sanayi Bölgesi" olarak belirtilmiştir. Bu bağlamda, değerleme işlemi aşağıdaki hesaplamalar ile gerçekleştirilmiştir:
            </p>
            <p>
                Ortalama birim inşaat hacmi başına düşen fiyat: {formatter.format(avgValuePerVolume)} TL
            </p>
            <p>
                Değerlemesi yapılan gayrimenkulün değeri: {formatter.format(ourPropertyValue)}
            </p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
                {emsaller.map((emsal, index) => (
                    <p key={index}>
                        {emsal.tasinmazSahibi}: {emsal.deger} TL / {constructionVolumes[index]} m³ = {valuePerVolume[index].toFixed(2)} TL/m³
                    </p>
                ))}
                <p>
                    Ortalama birim inşaat hacmi başına düşen fiyat: ({valuePerVolume.join(' + ')}) / {valuePerVolume.length} = {avgValuePerVolume.toFixed(2)} TL/m³
                </p>
                <div style={{ margin: "16px 0", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "green", padding: "16px", fontSize: "24px", color: "white", borderRadius: "8px" }}>
                    Değerlemesi yapılan gayrimenkulün değeri: Ortalama birim inşaat hacmi başına düşen fiyat {avgValuePerVolume.toFixed(2)} TL/m³ * Gayrimenkul alanı {alan} m² = <strong>{formatter.format(ourPropertyValue)}</strong>
                </div>
            </div>
        </div>
    );
}

export default IndustrialAreaForWord;
