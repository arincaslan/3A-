import React from 'react';

const styles = {
    box: {
        padding: '20px'
    },
    headingLg: {
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '20px 0'
    },
    headingMd: {
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '20px 0'
    },
    text: {
        margin: '16px 0'
    }
};

const PropertyDetailForWord = ({ info }) => {
    const faktorAciklamalari = {
        1: 'Düşük Kalite/Durum',
        2: 'Ortalama Altı Kalite/Durum',
        3: 'Ortalama Kalite/Durum',
        4: 'Ortalama Üstü Kalite/Durum',
        5: 'Yüksek Kalite/Durum'
    };

    return (
        <div style={styles.box}>
            <h1 style={styles.headingLg}>BÖLÜM 3 - DEĞERLEME KONUSU HAKKINDA GENEL BİLGİLER:</h1>

            <h2 style={styles.headingMd}>3–1 Gayrimenkulün Yeri Konumu ve Tanımı</h2>
            <p style={styles.text}>Değerleme konusu gayrimenkul; {info.tapuData.location.il} ili, {info.tapuData.location.ilce} ilçesi, {info.tapuData.location.mahalle} Mahallesi, sınırları içerisinde yer almaktadır.</p>

            <h2 style={styles.headingMd}>3–3 Gayrimenkulün Fiziksel Özellikleri</h2>

            {info.valueData?.maaliyetData?.yeniden?.bina_yasi && <p style={styles.text}>Değerlemeye konu gayrimenkulün bina yaşı {info.valueData.maaliyetData.yeniden.bina_yasi} yıldır.</p>}
            {info.valueData?.maaliyetData?.yeniden?.ekonomik_omur && <p style={styles.text}>Gayrimenkulün ekonomik ömrü {info.valueData.maaliyetData.yeniden.ekonomik_omur} yıldır.</p>}
            {info.zeminData.zeminHakimTitresimPeriyodu && <p style={styles.text}>Gayrimenkulün zemin hakim titreşim periyodu {info.zeminData.zeminHakimTitresimPeriyodu} şeklindedir.</p>}
            {info.zeminData.zeminFormasyonCinsi && <p style={styles.text}>Gayrimenkulün zemin formasyon cinsi {info.zeminData.zeminFormasyonCinsi} şeklindedir.</p>}
            {info.valueData?.maaliyetData?.yeniden?.faktorler.malzemeKalitesi && <p style={styles.text}>Yapının malzeme kalitesi {info.valueData.maaliyetData.yeniden.faktorler.malzemeKalitesi} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.malzemeKalitesi]}) olarak değerlendirilmiştir.</p>}
            {info.valueData?.maaliyetData?.yeniden?.faktorler.insaatKalitesi && <p style={styles.text}>Yapının inşaat kalitesi {info.valueData.maaliyetData.yeniden.faktorler.insaatKalitesi} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.insaatKalitesi]}) olarak değerlendirilmiştir.</p>}
            {info.valueData?.maaliyetData?.yeniden?.faktorler.konum && <p style={styles.text}>Gayrimenkulün konumu {info.valueData.maaliyetData.yeniden.faktorler.konum} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.konum]}) puanına sahiptir.</p>}
            {info.valueData?.maaliyetData?.yeniden?.faktorler.bakimDurumu && <p style={styles.text}>Gayrimenkulün bakım durumu {info.valueData.maaliyetData.yeniden.faktorler.bakimDurumu} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.bakimDurumu]}) puanına sahiptir.</p>}
            {
                info.valueData.emsalData.cevreBilgisi && (
                    <p style={styles.text}>
                        Gayrimenkul, çevresinin genel özellikleri olarak
                        {info.valueData.emsalData.cevreBilgisi === "yerlesim" || info.valueData.emsalData.cevreBilgisi === "sanayi"
                            ? `${info.valueData.emsalData.cevreBilgisi} bölgesi`
                            : ` ayrık nizam `}
                        özelliklerine sahiptir.
                    </p>
                )
            }
            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>
    );
}

export default PropertyDetailForWord;
