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

const LocationMarketInfo = ({ info, onBarImageUpdate, onRadarImageUpdate, onBase64Upload, renderPageFooter, setPage }) => {
    const isDataLoading = !info?.valueData?.emsalData?.emsaller;
    const barChartRef = useRef(null);
    const radarChartRef = useRef(null);
    let barData, radarData, formattedVal, formattedM2Val, formattedPropertyEstimation, maxDeger, maxRadarValue;
    const nextPageNumber = isDataLoading ? 8 : 9;

    if (isDataLoading) {
        setPage(8);
    }else{
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
            <Box style={{pageBreakAfter: "always"}} minHeight="1000px" position="relative" paddingBottom="50px">
                <Heading borderBottom="2px solid" borderColor="teal.500" pb={6} fontFamily="heading2" color="teal" fontWeight="bold" as="h2" size="xl">BÖLÜM 5 - Konum ve Piyasa Analizi</Heading>
                
                <Text fontFamily="body" mt={4}>
                    Türkiye, geniş bir gayrimenkul piyasasına sahip olup, emlak sektörü genellikle nüfus artışı, kentsel dönüşüm ve yatırımların çoğalması gibi faktörlerle büyümektedir. Gayrimenkul piyasası, özellikle büyük şehirlerde olmak üzere, konut, ofis, perakende ve endüstriyel segmentler olarak dört ana segmente ayrılmaktadır.
                    Son yıllarda, konut fiyatlarındaki artış, büyük şehirlerdeki nüfus yoğunluğu, yabancı yatırımcıların artan ilgisi ve Türkiye'nin jeopolitik konumunun avantajları nedeniyle emlak sektörü önemli bir büyüme göstermiştir.
                    Özellikle İstanbul, Ankara ve İzmir gibi büyük şehirler, yüksek talep nedeniyle en aktif gayrimenkul piyasalarına sahiptir.
                    Ancak, Türkiye'nin gayrimenkul piyasası yerel ve küresel ekonomik koşullar, faiz oranları, demografik değişiklikler gibi çeşitli faktörlerden etkilenmektedir.
                </Text>
             
                <Text fontFamily="body" mt={2}>
                    Aşağıdaki grafik, Türkiye'deki ortalama metrekare başına konut fiyatlarını göstermektedir. Bu grafik, Türkiye genelindeki konut fiyatlarının ne kadar değişken olduğunu ve bölgeden bölgeye nasıl farklılık gösterdiğini anlamamızı sağlar.
                </Text>
                <Box mt={10} mb={6} display="flex" justifyContent="center">
                    <ChakraImage src={imageURL} alt="Gayrimenkul Piyasası Grafiği" />
                </Box>

                <Text fontFamily="body">
                    Grafikte, 2015 - 2022 yılları arasında Türkiye'deki konut fiyatlarının İstanbul ve Türkiye ortalamasının kura bağlı olarak karşılaştırması yapılmıştır.
                    Grafikteki zamana bağlı değişim incelenerek gayrimenkul sektöründeki talep trendinin genel olarak yükselişte olduğu çıkarılabilir.
                    Ancak kur, faiz ve zamana bağlı inişler ve çıkışlarda gözlemlenmektedir.
                    Bu, Türkiye'deki gayrimenkul piyasasının dinamik doğasını ve farklı bölgelerdeki ekonomik koşulların gayrimenkul fiyatları üzerindeki etkisini ifade eder.
                </Text>
            
                    {renderPageFooter(7)}
             

            </Box>



            {isDataLoading ? (
                <Box></Box>
            ) : (
                <>
                    <Box style={{pageBreakAfter: "always"}}  minHeight="1000px" position="relative" paddingBottom="50px">
                        <Text fontFamily="body" mt={12}>
                            Proje, {info.projectData.location} konumunda bulunmaktadır. Bu konum, tapu bilgilerine göre {info.tapuData.location.il} / {info.tapuData.location.ilce} / {info.tapuData.location.mahalle}'de yer almaktadır. Bölgenin genel yapısı ve yerleşim koşullarına göre çevre bilgisi "{info.valueData.emsalData.cevreBilgisi}" bölgesi olarak tanımlanmıştır.
                        </Text>
                        <Text fontFamily="body" mt={4}>
                            Bölgedeki emlak piyasasına genel bir bakış, mahalledeki ortalama gayrimenkul fiyatının {formattedVal} olduğunu göstermektedir. Bu, bölgenin genel ekonomik durumuna ve gayrimenkul piyasasındaki trendlere dair önemli bir göstergedir.
                        </Text>
                        <Text fontFamily="body" mt={4}>
                            Ayrıca, bölgede gayrimenkulün m2 başına düşen ortalama fiyatı {formattedM2Val}'dir. Bu, bölgenin genel emlak değerlerini ve m2 başına düşen gayrimenkul değerinin piyasadaki durumunu yansıtmaktadır.
                        </Text>
                        <Text fontFamily="body" mt={4}>
                            Aşağıdaki grafikler, bölgedeki emsallerin değerlerini ve m2 başına değer projeksiyonlarını göstermektedir.
                        </Text>
                        <Text fontFamily="body" mt={4}>1. Blok Grafikte emsallerin ve bu emsallerin değerleri görülmektedir. Bu emsallerin {new Date(info.projectData.valuationDate).toLocaleDateString()} tarihteki piyasa değerleri aşağıda belirtilmiştir.</Text>
                        <Text fontFamily="body">2. Radar grafikte, piyasa m2 başına fiyat üzerinden emsallerin değerleme projeksiyonu gösterilmektedir. Bu projeksiyonlara göre emsallerin değerlemeleri aşağıda belirtilmiştir.</Text>
                
                            {renderPageFooter(8)}
                   
                    </Box>
                    <Box style={{pageBreakAfter: "always"}}  paddingBottom="50px" maxHeight="1000px" minHeight="1000px" position="relative" >
                        <Flex flexDirection="column" alignItems="center" justifyContent="center">
                            <Box mt={6} width="800px" ref={barChartRef}>
                                <Text mb={4} fontFamily="heading2" align="center" fontWeight="bold" color="primary.900">Emsal M2 ve Değer Dağılımı</Text>
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
                                <Text  fontFamily="heading2" align="center" fontWeight="bold" color="primary.900">Emsal M2 Başına Değer Projeksiyon Dağılımı</Text>
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

export default LocationMarketInfo;