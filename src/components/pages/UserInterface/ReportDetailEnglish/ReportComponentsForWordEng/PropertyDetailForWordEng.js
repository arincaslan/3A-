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

const PropertyDetailForWordEng = ({ info }) => {

    const faktorAciklamalari = {
        1: 'Düşük Kalite/Durum',
        2: 'Ortalama Altı Kalite/Durum',
        3: 'Ortalama Kalite/Durum',
        4: 'Ortalama Üstü Kalite/Durum',
        5: 'Yüksek Kalite/Durum'
    };

    return (
        <div style={styles.box}>
            <h1 style={styles.headingLg}>SECTION 3 - General Information About the Valuation Subjectr</h1>

            <h2 style={styles.headingMd}>3.1) Location and Description of the Property</h2>
            <p style={styles.text}>The property subject to valuation is located within the boundaries of {info.tapuData.location.il} province, {info.tapuData.location.ilce} district, {info.tapuData.location.mahalle} neighborhood.</p>

            <h2 style={styles.headingMd}>3.2) Physical Features of the Property</h2>

            {info.valueData?.maaliyetData?.yeniden?.bina_yasi && <p style={styles.text}>The age of the building of the property subject to valuation is {info.valueData.maaliyetData.yeniden.bina_yasi} years.</p>}
            {info.valueData?.maaliyetData?.yeniden?.ekonomik_omur && <p style={styles.text}>The economic life of the property is {info.valueData.maaliyetData.yeniden.ekonomik_omur} years.</p>}
            {info.zeminData.zeminHakimTitresimPeriyodu && <p style={styles.text}>The dominant vibration period of the property's ground is {info.zeminData.zeminHakimTitresimPeriyodu}.</p>}
            {info.zeminData.zeminFormasyonCinsi && <p style={styles.text}>The formation type of the property's ground is {info.zeminData.zeminFormasyonCinsi}.</p>}
            {info.valueData?.maaliyetData?.yeniden?.faktorler.malzemeKalitesi && <p style={styles.text}>The material quality of the structure is evaluated as {info.valueData.maaliyetData.yeniden.faktorler.malzemeKalitesi} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.malzemeKalitesi]}).</p>}
            {info.valueData?.maaliyetData?.yeniden?.faktorler.insaatKalitesi && <p style={styles.text}>The construction quality of the structure is evaluated as {info.valueData.maaliyetData.yeniden.faktorler.insaatKalitesi} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.insaatKalitesi]}).</p>}
            {info.valueData?.maaliyetData?.yeniden?.faktorler.konum && <p style={styles.text}>The location of the property has a score of {info.valueData.maaliyetData.yeniden.faktorler.konum} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.konum]}).</p>}
            {info.valueData?.maaliyetData?.yeniden?.faktorler.bakimDurumu && <p style={styles.text}>The maintenance status of the property has a score of {info.valueData.maaliyetData.yeniden.faktorler.bakimDurumu} ({faktorAciklamalari[info.valueData.maaliyetData.yeniden.faktorler.bakimDurumu]}).</p>}
            {
                info.valueData.emsalData.cevreBilgisi && (
                    <p style={styles.text}>
                        The property has general characteristics of its surroundings as &nbsp;
                        {info.valueData.emsalData.cevreBilgisi === "yerlesim" || info.valueData.emsalData.cevreBilgisi === "sanayi"
                            ? `${info.valueData.emsalData.cevreBilgisi} area`
                            : ` sparse pattern `}
                        .
                    </p>
                )
            }
            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>
    );
}

export default PropertyDetailForWordEng;
