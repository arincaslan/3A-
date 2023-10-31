import React, { useEffect, useRef, useState } from 'react';
import { Box, Heading, Text, Flex, Image as ChakraImage } from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, CartesianGrid, Legend } from 'recharts';
import imageURL from '../../../../../../grafik.jpg';
import html2canvas from 'html2canvas';

function imageToBase64(imgUrl, callback) {
    let img = new Image();
    img.crossOrigin = 'Anonymous'; // Bu CORS sorunlarını engellemeye yardımcı olur.
    img.onload = function () {
        let canvas = document.createElement('CANVAS');
        let ctx = canvas.getContext('2d');
        canvas.height = this.naturalHeight;
        canvas.width = this.naturalWidth;
        ctx.drawImage(this, 0, 0);
        let dataURL = canvas.toDataURL('image/jpeg');
        callback(dataURL.split(',')[1]);
        canvas = null;
    };
    img.src = imgUrl;
}

const LocationMarketInfoEng = ({ info, onBarImageUpdate, onRadarImageUpdate, onBase64Upload, renderPageFooter, setPage }) => {
    const isDataLoading = !info?.valueData?.emsalData?.emsaller;
    const barChartRef = useRef(null);
    const radarChartRef = useRef(null);
    let barData, radarData, formattedVal, formattedM2Val, formattedPropertyEstimation, maxDeger, maxRadarValue;
    const nextPageNumber = isDataLoading ? 8 : 9;

    if (isDataLoading) {
        setPage(8);
    } else {
        setPage(10);
    }

    useEffect(() => {
        if (barChartRef.current) {
            setTimeout(() => {
                html2canvas(barChartRef.current).then(canvas => {
                    const image = canvas.toDataURL();
                    onBarImageUpdate(image);
                });
            }, 1000); // 1 saniye gecikme

        }

        if (radarChartRef.current) {
            setTimeout(() => {
                html2canvas(radarChartRef.current).then(canvas => {
                    const image = canvas.toDataURL();
                    onRadarImageUpdate(image); // Radar grafiğini parent bileşene gönderir.
                });
            }, 1000); // 1 saniye gecikme
        }
        if (imageURL) {
            imageToBase64(imageURL, (base64) => {
                onBase64Upload("data:image/jpeg;base64," + base64);
            });
        }


    }, [barData, radarData]);




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
        <Box p="5" borderRadius="md" boxShadow="lg" position="relative">
            <Box style={{ pageBreakAfter: "always" }} minHeight="1000px" position="relative" paddingBottom="50px">
                <Heading borderBottom="2px solid" borderColor="teal.500" pb={6} fontFamily="heading2" color="teal" fontWeight="bold" as="h2" size="xl">SECTION 5 - Location and Market Analysis</Heading>

                <Text fontFamily="body" mt={4}>
                    Turkey possesses an expansive real estate market, and the property sector typically grows due to factors like population growth, urban transformation, and the proliferation of investments. The real estate market, especially in major cities, is divided into four main segments: residential, office, retail, and industrial.
                    In recent years, the rise in housing prices, population density in major cities, increasing interest from foreign investors, and the geopolitical advantages of Turkey have led to significant growth in the real estate sector.
                    Particularly, large cities like Istanbul, Ankara, and Izmir have the most active real estate markets due to high demand.
                    However, Turkey's real estate market is influenced by various factors such as local and global economic conditions, interest rates, and demographic changes.
                </Text>

                <Text fontFamily="body" mt={2}>
                    The graph below shows the average price per square meter for housing in Turkey. This chart helps us understand how variable housing prices are across Turkey and how they differ from region to region.
                </Text>
                <Box mt={10} mb={6} display="flex" justifyContent="center">
                    <ChakraImage src={imageURL} alt="Real Estate Market Graph" />
                </Box>

                <Text fontFamily="body">
                    In the graph, a comparison of housing prices in Turkey between the years 2015 - 2022 is made, considering the average values in Istanbul and Turkey overall based on the exchange rate.
                    Analyzing the time-based changes in the graph, it can be inferred that the demand trend in the real estate sector is generally on the rise.
                    However, fluctuations based on the currency, interest rates, and time are observed.
                    This depicts the dynamic nature of Turkey's real estate market and the impact of economic conditions in different regions on property prices.
                </Text>

                {renderPageFooter(7)}
            </Box>




            {isDataLoading ? (
                <Box></Box>
            ) : (
                <>
                    <Box style={{ pageBreakAfter: "always" }} minHeight="1000px" position="relative" paddingBottom="50px">
                        <Text fontFamily="body" mt={12}>
                            According to land registry data, project location is in {info.tapuData.location.il} / {info.tapuData.location.ilce} / {info.tapuData.location.mahalle}. Based on the general structure and settlement conditions of the region, the surrounding area is defined as the "{info.valueData.emsalData.cevreBilgisi}" area.
                        </Text>
                        <Text fontFamily="body" mt={4}>
                            A general overview of the real estate market in the area shows that the average property price in the neighborhood is {formattedVal}. This is an important indicator of the general economic condition of the region and trends in the real estate market.
                        </Text>
                        <Text fontFamily="body" mt={4}>
                            Also, the average price per square meter for real estate in the area is {formattedM2Val}. This reflects the general property values in the region and the market standing of the value of real estate per square meter.
                        </Text>
                        <Text fontFamily="body" mt={4}>
                            The following graphs display the values of comparables in the area and projections of value per square meter.
                        </Text>
                        <Text fontFamily="body" mt={4}>1. The bar graph shows the comparables and their values. The market values of these comparables as of {new Date(info.projectData.valuationDate).toLocaleDateString()} are stated below.</Text>
                        <Text fontFamily="body">2. The radar graph displays the valuation projection of comparables based on the market price per square meter. Valuations of these comparables according to these projections are stated below.</Text>

                        {renderPageFooter(8)}

                    </Box>

                    <Box style={{ pageBreakAfter: "always" }} paddingBottom="50px" maxHeight="1000px" minHeight="1000px" position="relative" >
                        <Flex flexDirection="column" alignItems="center" justifyContent="center">
                            <Box mt={6} width="800px" ref={barChartRef}>
                                <Text mb={4} fontFamily="heading2" align="center" fontWeight="bold" color="primary.900">Comparable m2 and Value Distribution</Text>
                                <BarChart width={700} height={450} data={barData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis fontWeight="bold" dataKey="name" interval={0} angle={-45} textAnchor="end" height={80} fontSize={8} />
                                    <YAxis fontWeight="bold" width={120} tickFormatter={formatAxis} domain={[0, maxDeger]} fontSize={10} />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="deger" fill="#82ca9d" />
                                </BarChart>
                            </Box>

                            <Box mt={8} maxWidth="800px" ref={radarChartRef}>
                                <Text fontFamily="heading2" align="center" fontWeight="bold" color="primary.900">Projection Distribution of Value per Comparable m2</Text>
                                <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={450} data={radarData}>
                                    <PolarGrid />
                                    <PolarAngleAxis fontWeight="bold" height={80} fontSize={10} dataKey="subject" />
                                    <PolarRadiusAxis angle={150} domain={[0, maxRadarValue]} tickFormatter={formatAxis} />
                                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                </RadarChart>
                            </Box>
                        </Flex>

                        {renderPageFooter(nextPageNumber)}

                    </Box>

                </>
            )}

        </Box>
    );
}

export default LocationMarketInfoEng;