import React from 'react';


const LocationMarketInfoForWordEng = ({ info, barImage, radarImage, base64Img }) => {
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
            <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>SECTION 5 - Location and Market Analysis</h2>
            <p style={{ marginTop: "16px" }}>
                Turkey possesses an expansive real estate market, and the property sector typically grows due to factors like population growth, urban transformation, and the proliferation of investments. The real estate market, especially in major cities, is divided into four main segments: residential, office, retail, and industrial.
                In recent years, the rise in housing prices, population density in major cities, increasing interest from foreign investors, and the geopolitical advantages of Turkey have led to significant growth in the real estate sector.
                Particularly, large cities like Istanbul, Ankara, and Izmir have the most active real estate markets due to high demand.
                However, Turkey's real estate market is influenced by various factors such as local and global economic conditions, interest rates, and demographic changes.
            </p>

            <p style={{ marginTop: "16px" }}>
                The graph below shows the average price per square meter for housing in Turkey. This chart helps us understand how variable housing prices are across Turkey and how they differ from region to region.
            </p>
            <div style={{ marginTop: "40px", marginBottom: "40px", display: "flex", justifyContent: "center" }}>
                <img src={base64Img} alt="Gayrimenkul Piyasası Grafiği" style={{ maxWidth: "100%", height: "auto" }} />
            </div>
            <p style={{ marginTop: "16px" }}>
                In the graph, a comparison of housing prices in Turkey between the years 2015 - 2022 is made, considering the average values in Istanbul and Turkey overall based on the exchange rate.
                Analyzing the time-based changes in the graph, it can be inferred that the demand trend in the real estate sector is generally on the rise.
                However, fluctuations based on the currency, interest rates, and time are observed.
                This depicts the dynamic nature of Turkey's real estate market and the impact of economic conditions in different regions on property prices.
            </p>


            {isDataLoading ? (
                <p>Veriler yükleniyor...</p>
            ) : (
                <>
                    <p style={{ marginTop: "16px" }}>
                        According to land registry data, project location is in {info.tapuData.location.il} / {info.tapuData.location.ilce} / {info.tapuData.location.mahalle}. Based on the general structure and settlement conditions of the region, the surrounding area is defined as the "{info.valueData.emsalData.cevreBilgisi}" area.
                    </p>
                    <p style={{ marginTop: "16px" }}>
                        A general overview of the real estate market in the area shows that the average property price in the neighborhood is {formattedVal}. This is an important indicator of the general economic condition of the region and trends in the real estate market.
                    </p>
                    <p style={{ marginTop: "16px" }}>
                        Also, the average price per square meter for real estate in the area is {formattedM2Val}. This reflects the general property values in the region and the market standing of the value of real estate per square meter.
                    </p>
                    <p style={{ marginTop: "16px" }}>
                        The following graphs display the values of comparables in the area and projections of value per square meter.
                    </p>
                    <p>1. The bar graph shows the comparables and their values. The market values of these comparables as of {new Date(info.projectData.valuationDate).toLocaleDateString()} are stated below.</p>
                    <p>2. The radar graph displays the valuation projection of comparables based on the market price per square meter. Valuations of these comparables according to these projections are stated below.</p>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>

                        <img src={barImage} alt="Bar Image" style={{ width: "100%", marginTop: "20px" }} />

                        <img src={radarImage} alt="Radar Image" style={{ width: "100%", marginTop: "20px" }} />
                    </div>

                </>
            )}

            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>
    );
}

export default LocationMarketInfoForWordEng;
