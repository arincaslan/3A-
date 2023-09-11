import React from 'react';


const LocationMarketInfoForWord = ({ info, barImage, radarImage, base64Img }) => {
    const isDataLoading = !info?.valueData?.emsalData?.emsaller;

    let barData, radarData, formattedVal, formattedM2Val, formattedPropertyEstimation, maxDeger, maxRadarValue;
    if (!isDataLoading) {
        const yuzolcumu = info.tapuData.parsel.yuzolcumu.replace(',', '.');
        const yuzolcumuAsNumber = parseFloat(yuzolcumu);

        const totalValue = info.valueData.emsalData.emsaller.reduce((acc, curr) => acc + Number(curr.deger), 0);
        const avgValue = totalValue / info.valueData.emsalData.emsaller.length;

        const totalPerM2Value = info.valueData.emsalData.emsaller.reduce((acc, curr) => acc + (Number(curr.deger) / Number(curr.tasinmazAlani)), 0);
        const avgPerM2Value = totalPerM2Value / info.valueData.emsalData.emsaller.length;

        formattedM2Val = avgPerM2Value.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' });
        formattedVal = avgValue.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' });

        barData = info.valueData.emsalData.emsaller.map((emsal, index) => ({
            name: emsal.tasinmazSahibi,
            deger: emsal.deger
        }));

        maxDeger = Math.max(...barData.map(item => item.deger));

        radarData = info.valueData.emsalData.emsaller.map((emsal, index) => {
            return {
                subject: emsal.tasinmazSahibi,
                A: avgPerM2Value * emsal.tasinmazAlani
            }
        });

        maxRadarValue = Math.max(...radarData.map(item => item.A));

        const propertyEstimation = yuzolcumuAsNumber * avgPerM2Value;
        formattedPropertyEstimation = propertyEstimation.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' });
    }
    const formatAxis = (tickItem) => {
        return tickItem.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' });
    }

    return (
        <div style={{ overflow: "hidden", padding: "6px" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>BÖLÜM 5 - Konum ve Piyasa Analizi</h2>
            <p style={{ marginTop: "16px" }}>
                Genel olarak Türkiye'deki gayrimenkul piyasası hakkında birkaç bilgi verelim:
            </p>
            <p style={{ marginTop: "16px" }}>
                Türkiye, geniş bir gayrimenkul piyasasına sahip olup, emlak sektörü genellikle nüfus artışı, kentsel dönüşüm ve yatırımların çoğalması gibi faktörlerle büyümektedir. Gayrimenkul piyasası, özellikle büyük şehirlerde olmak üzere, konut, ofis, perakende ve endüstriyel segmentler olarak dört ana segmente ayrılmaktadır.
            </p>
            <p style={{ marginTop: "16px" }}>
                Son yıllarda, konut fiyatlarındaki artış, büyük şehirlerdeki nüfus yoğunluğu, yabancı yatırımcıların artan ilgisi ve Türkiye'nin jeopolitik konumunun avantajları nedeniyle emlak sektörü önemli bir büyüme göstermiştir.
            </p>
            <p style={{ marginTop: "16px" }}>
                Özellikle İstanbul, Ankara ve İzmir gibi büyük şehirler, yüksek talep nedeniyle en aktif gayrimenkul piyasalarına sahiptir.
            </p>
            <p style={{ marginTop: "16px" }}>
                Ancak, Türkiye'nin gayrimenkul piyasası yerel ve küresel ekonomik koşullar, faiz oranları, demografik değişiklikler ve hükümet politikaları gibi çeşitli faktörlerden etkilenmektedir.
            </p>
            <p style={{ marginTop: "16px" }}>
                Aşağıdaki grafik, Türkiye'deki ortalama metrekare başına konut fiyatlarını göstermektedir. Bu grafik, Türkiye genelindeki konut fiyatlarının ne kadar değişken olduğunu ve bölgeden bölgeye nasıl farklılık gösterdiğini anlamamızı sağlar.
            </p>
            <div style={{ marginTop: "40px", marginBottom: "40px", display: "flex", justifyContent: "center" }}>
                <img src={base64Img} alt="Gayrimenkul Piyasası Grafiği" style={{ maxWidth: "100%", height: "auto" }} />
            </div>
            <p style={{ marginTop: "16px" }}>
                Grafikte, 2015 - 2022 yılları arasında Türkiye'deki konut fiyatlarının İstanbul ve Türkiye ortalamasının kura bağlı olarak karşılaştırması yapılmıştır. Grafikteki zamana bağlı değişim incelenerek gayrimenkul sektöründeki talep trendinin genel olarak yükselişte olduğu çıkarılabilir. Ancak kur, faiz ve zamana bağlı inişler ve çıkışlarda gözlemlenmektedir. Bu, Türkiye'deki gayrimenkul piyasasının dinamik doğasını ve farklı bölgelerdeki ekonomik koşulların gayrimenkul fiyatları üzerindeki etkisini ifade eder.
            </p>


            {isDataLoading ? (
                <p>Veriler yükleniyor...</p>
            ) : (
                <>
                    <p style={{ marginTop: "16px" }}>
                        Proje, {info.projectData.location} konumunda bulunmaktadır. Bu konum, tapu bilgilerine göre {info.tapuData.location.il} / {info.tapuData.location.ilce} / {info.tapuData.location.mahalle}'de yer almaktadır. Bölgenin genel yapısı ve yerleşim koşullarına göre çevre bilgisi "{info.valueData.emsalData.cevreBilgisi}" bölgesi olarak tanımlanmıştır.
                    </p>
                    <p style={{ marginTop: "16px" }}>
                        Bölgedeki emlak piyasasına genel bir bakış, mahalledeki ortalama gayrimenkul fiyatının {formattedVal} olduğunu göstermektedir. Bu, bölgenin genel ekonomik durumuna ve gayrimenkul piyasasındaki trendlere dair önemli bir göstergedir.
                    </p>
                    <p style={{ marginTop: "16px" }}>
                        Ayrıca, bölgede gayrimenkulün m2 başına düşen ortalama fiyatı {formattedM2Val}'dir. Bu, bölgenin genel emlak değerlerini ve m2 başına düşen gayrimenkul değerinin piyasadaki durumunu yansıtmaktadır.
                    </p>
                    <p style={{ marginTop: "16px" }}>
                        Aşağıdaki grafikler, bölgedeki emsallerin değerlerini ve m2 başına değer projeksiyonlarını göstermektedir.
                    </p>
                    <p>1. Blok Grafikte emsallerin ve bu emsallerin değerleri görülmektedir. Bu emsallerin {new Date(info.projectData.valuationDate).toLocaleDateString()} tarihteki piyasa değerleri aşağıda belirtilmiştir.</p>
                    <p>2. Radar grafikte, piyasa m2 başına fiyat üzerinden emsallerin değerleme projeksiyonu gösterilmektedir. Bu projeksiyonlara göre emsallerin değerlemeleri aşağıda belirtilmiştir.</p>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>

                        <img src={barImage} alt="Bar Image" style={{ width: "100%", marginTop: "20px" }} />

                        <img src={radarImage} alt="Radar Image" style={{ width: "100%", marginTop: "20px" }} />
                    </div>
                    <p style={{ marginTop: "16px" }}>
                        Bu bilgilere göre, değerlemesi yapılan gayrimenkulün değeri {formattedPropertyEstimation} olarak hesaplanmıştır.
                    </p>
                </>
            )}

            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>
    );
}

export default LocationMarketInfoForWord;
