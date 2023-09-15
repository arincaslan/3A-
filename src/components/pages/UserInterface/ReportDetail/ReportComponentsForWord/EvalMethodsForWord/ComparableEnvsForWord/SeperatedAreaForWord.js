import React from 'react';

function SeperatedAreaForWord({ info }) {
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
                Çevre bilgisi "ayrık nizam" olan gayrimenkulün emsal karşılaştırma metodu ile değerlemesi aşağıdaki gibi gerçekleştirilecektir.
            </p>
            <p style={{ marginBottom: '16px' }}>
                İlk olarak tüm emsallerin detaylı bilgileri aşağıda tablo halinde sunulmaktadır:
            </p>
            <table style={{ width: '100%', margin: '16px 0', borderCollapse: 'collapse', borderSpacing: '0', fontSize: 'small' }}>
                <thead>
                    <tr style={{ background: '#edf2f7' }}>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Taşınmaz Sahibi</th>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Ön/Yan Bahçe Mesafesi</th>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Derinlik</th>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Cephe</th>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Kat Sayısı</th>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Kat Yüksekliği</th>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Arka Bahçe Mesafesi</th>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Toplam İnşaat Alanı</th>
                        <th style={{ padding: '8px', borderBottom: '1px solid #e2e8f0' }}>Emsal Değeri</th>
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
                Ardından her bir emsal için bina cephesi ve derinliği hesaplanır. Bu değerler, menkulün cephesi, derinliği, ön ve yan bahçe mesafesi ile kat yüksekliğine bağlıdır.
            </p>
            <p>
                Bina Cephesi = Cephe - Yan Bahçe Mesafesi - Ön Bahçe Mesafesi = {cephe} - {yanBahceMesafesi} - {onBahceMesafesi} = {binaCephe} m
            </p>
            <p>
                Bina Derinliği = Derinlik - Ön Bahçe Mesafesi - Arka Bahçe Mesafesi = {derinlik} - {onBahceMesafesi} - {arkabahceMesafesi} = {binaDerinlik} m
            </p>
            <p>
                Sonra, menkulün toplam inşaat alanı hesaplanır. Bu değer, bina cephesi, derinliği ve kat sayısı ile bulunur.
            </p>
            <p>
                Toplam İnşaat Alanı = Bina Cephesi x Bina Derinliği x Kat Sayısı = {binaCephe} x {binaDerinlik} x {katSayisi} = {toplamInsaatAlani} m²
            </p>
            <p>
                Sonraki adımda, her bir emsal için m² başına değer hesaplanır. Bu değer, emsalin değeri ile toplam inşaat alanının oranı olarak bulunur.
            </p>
            {emsaller.map((emsal, index) => (
                <p key={index}>
                    Emsal {index + 1} İçin m² Başına Değer = Emsal Değeri / Toplam İnşaat Alanı = {formatter.format(emsal.deger)} / {toplamInsaatAlanlari[index]} = {formatter.format(emsalM2BasinaDegerleri[index])} /m²
                </p>
            ))}
            <p>
                Daha sonra tüm emsallerin m² başına değerlerinin ortalaması alınır. Bu değer, gayrimenkulün m² başına değerini temsil eder.
            </p>
            <p>
                Ortalama m² Başına Değer = (Emsal 1 m² Başına Değer + Emsal 2 m² Başına Değer + ... + Emsal n m² Başına Değer) / n = {formatter.format(ortalamaM2BasinaDeger)} /m²
            </p>
            <p>
                Son adımda, gayrimenkulün toplam değeri bulunur. Bu değer, gayrimenkulün toplam inşaat alanı ile ortalama m² başına değerin çarpımı ile elde edilir.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '16px 0', padding: '16px', background: '#28a745', color: '#fff', fontSize: '18px' }}>
                Gayrimenkul Değeri = Ortalama m² Başına Değer x Toplam İnşaat Alanı = {formatter.format(ortalamaM2BasinaDeger)} x {toplamInsaatAlani} = <strong>{formatter.format(gayrimenkulDeger)}</strong>
            </div>
        </div>

    );
}

export default SeperatedAreaForWord;
