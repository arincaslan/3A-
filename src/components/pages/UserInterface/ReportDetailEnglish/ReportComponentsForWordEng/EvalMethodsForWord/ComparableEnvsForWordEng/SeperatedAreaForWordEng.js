import React from 'react';

function SeperatedAreaForWordEng({ info }) {

    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });
    const { emsaller } = info.valueData.emsalData;
    const { menkulEkBilgi } = info.valueData.emsalData;
    const { cephe, derinlik, yanBahceMesafesi, onBahceMesafesi, parselTuru, katSayisi, katYuksekligi } = menkulEkBilgi;
    const arkabahceMesafesi = (Number(katSayisi) * Number(katYuksekligi)) / 2;

    let binaCephe, binaDerinlik;
    if (parselTuru === 'kose') {
        binaCephe = Number(cephe) - Number(yanBahceMesafesi) - Number(onBahceMesafesi);
        binaDerinlik = Number(derinlik) - Number(onBahceMesafesi) - arkabahceMesafesi;
    } else if (parselTuru === 'ara') {
        binaCephe = Number(cephe) - 2 * Number(yanBahceMesafesi);
        binaDerinlik = Number(derinlik) - Number(onBahceMesafesi) - arkabahceMesafesi;
    }

    const toplamInsaatAlani = binaDerinlik * binaCephe * Number(katSayisi);
    let emsalM2BasinaDegerleri = [];
    let toplamInsaatAlanlari = [];
    let arkabahceMesafeleri = [];

    emsaller.forEach((emsal) => {
        const emsalArkabahceMesafesi = (Number(emsal.katSayisi) * Number(emsal.katYuksekligi)) / 2;
        arkabahceMesafeleri.push(emsalArkabahceMesafesi);
        let emsalBinaCephe, emsalBinaDerinlik;
        if (parselTuru === 'kose') {
            emsalBinaCephe = Number(emsal.cephe) - Number(emsal.yanBahceMesafesi) - Number(emsal.onBahceMesafesi);
            emsalBinaDerinlik = Number(emsal.derinlik) - Number(emsal.onBahceMesafesi) - emsalArkabahceMesafesi;
        } else if (parselTuru === 'ara') {
            emsalBinaCephe = Number(emsal.cephe) - 2 * Number(emsal.yanBahceMesafesi);
            emsalBinaDerinlik = Number(emsal.derinlik) - Number(emsal.onBahceMesafesi) - emsalArkabahceMesafesi;
        }
        const emsalToplamInsaatAlani = emsalBinaDerinlik * emsalBinaCephe * Number(emsal.katSayisi);
        toplamInsaatAlanlari.push(emsalToplamInsaatAlani);
        const emsalM2BasinaDeger = Number(emsal.deger) / emsalToplamInsaatAlani;
        emsalM2BasinaDegerleri.push(emsalM2BasinaDeger);
    });

    const ortalamaM2BasinaDeger = emsalM2BasinaDegerleri.reduce((a, b) => a + b, 0) / emsalM2BasinaDegerleri.length;
    const gayrimenkulDeger = ortalamaM2BasinaDeger * toplamInsaatAlani;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '16px' }}>
            <p style={{ marginBottom: '16px' }}>
                The appraisal of the property with "discrete order" environmental knowledge will be conducted as follows using the comparative sales method.
            </p>
            <p style={{ marginBottom: '16px' }}>
                First, all comparables detailed information is presented below in table format:
            </p>
            <table style={{ width: '100%', margin: '16px 0', borderCollapse: 'collapse', borderSpacing: '0', fontSize: 'small' }}>
                <thead>
                    <tr style={{ background: '#edf2f7' }}>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Property Owner</th>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Front/Side Garden Distance</th>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Depth</th>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Frontage</th>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Number of Floors</th>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Floor Height</th>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Back Garden Distance</th>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Total Construction Area</th>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Comparative Value</th>
                    </tr>
                </thead>
                <tbody>
                    {emsaller.map((emsal, index) => (
                        <tr key={index} style={{ background: index % 2 === 0 ? '#f7fafc' : '#ffffff' }}>
                            <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>{emsal.sahibi}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>{emsal.onBahceMesafesi} / {emsal.yanBahceMesafesi}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>{emsal.derinlik}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>{emsal.cephe}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>{emsal.katSayisi}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>{emsal.katYuksekligi}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>{arkabahceMesafeleri[index]}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>{toplamInsaatAlanlari[index]}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>{formatter.format(emsal.deger)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <p>
                The frontage and depth of each comparable building are calculated. These values depend on the property's frontage, depth, front and side garden distances, and floor height.
            </p>
            <p>
                Building Frontage = Frontage - Side Garden Distance - Front Garden Distance = {cephe} - {yanBahceMesafesi} - {onBahceMesafesi} = {binaCephe} m
            </p>
            <p>
                Building Depth = Depth - Front Garden Distance - Back Garden Distance = {derinlik} - {onBahceMesafesi} - {arkabahceMesafesi} = {binaDerinlik} m
            </p>
            <p>
                Then, the total construction area of the property is calculated. This value is found by the building frontage, depth, and number of floors.
            </p>
            <p>
                Total Construction Area = Building Frontage x Building Depth x Number of Floors = {binaCephe} x {binaDerinlik} x {katSayisi} = {toplamInsaatAlani} m²
            </p>
            <p>
                Next, the value per square meter for each comparable is calculated. This value is found as the ratio of the comparable's value to its total construction area.
            </p>
            {emsaller.map((emsal, index) => (
                <p key={index}>
                    Value per m² for Comparable {index + 1} = Comparative Value / Total Construction Area = {formatter.format(emsal.deger)} / {toplamInsaatAlanlari[index]} = {formatter.format(emsalM2BasinaDegerleri[index])} /m²
                </p>
            ))}
            <p>
                Then, the average value per square meter of all comparables is calculated. This value represents the property's value per square meter.
            </p>
            <p>
                Average Value per m² = (Comparable 1 Value per m² + Comparable 2 Value per m² + ... + Comparable n Value per m²) / n = {formatter.format(ortalamaM2BasinaDeger)} /m²
            </p>
            <p>
                In the final step, the total value of the property is found. This value is obtained by multiplying the property's total construction area by the average value per square meter.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '16px 0', padding: '16px', background: '#28a745', color: '#fff', fontSize: '18px' }}>
                Property Value = Total Construction Area x Average Value per m² = {toplamInsaatAlani} m² x {formatter.format(ortalamaM2BasinaDeger)} = {formatter.format(gayrimenkulDeger)}
            </div>
        </div>

    );
}

export default SeperatedAreaForWordEng;
