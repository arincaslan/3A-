import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption, Heading, Flex, Text } from '@chakra-ui/react';

function SWOTAnalysis({ info, currentPage, renderPageFooter }) {
    const cevreBilgisi = info.valueData.emsalData.cevreBilgisi;
    const nitelik = info.tapuData.parsel.nitelik;
    const faktorler = info.valueData?.maaliyetData?.yeniden?.faktorler;

    let swotDataFaktorler = {
        strengths: [],
        weaknesses: [],
        opportunities: [],
        threats: []
    };

    if (faktorler) {
        if (faktorler.bakimDurumu >= 4) {
            swotDataFaktorler.strengths.push('Yüksek bakım durumu');
        } else if (faktorler.bakimDurumu <= 2) {
            swotDataFaktorler.weaknesses.push('Düşük bakım durumu');
        }

        if (faktorler.insaatKalitesi >= 4) {
            swotDataFaktorler.strengths.push('Yüksek inşaat kalitesi');
        } else if (faktorler.insaatKalitesi <= 2) {
            swotDataFaktorler.weaknesses.push('Düşük inşaat kalitesi');
        }

        if (faktorler.konum >= 4) {
            swotDataFaktorler.opportunities.push('İyi konum');
        } else if (faktorler.konum <= 2) {
            swotDataFaktorler.threats.push('Kötü konum');
        }

        if (faktorler.malzemeKalitesi >= 4) {
            swotDataFaktorler.opportunities.push('Yüksek malzeme kalitesi');
        } else if (faktorler.malzemeKalitesi <= 2) {
            swotDataFaktorler.threats.push('Düşük malzeme kalitesi');
        }

        if (faktorler.yas >= 4) {
            swotDataFaktorler.strengths.push('Yeni bina yaşı');
        } else if (faktorler.yas <= 2) {
            swotDataFaktorler.weaknesses.push('Eski bina yaşı');
        }
    }




    let swotDataCevre;
    // Çevre bilgisine göre SWOT analizi
    if (cevreBilgisi === 'yerlesim') {
        swotDataCevre = {
            strengths: ['Yüksek potansiyel kiracı sayısı', 'İyi toplu taşıma erişimi', 'Altyapı hizmetlerine yakın olma'],
            weaknesses: ['Yüksek emlak vergileri', 'Sıkı bina kodları ve düzenlemeler', 'Gürültü ve kalabalık'],
            opportunities: ['Artan nüfus', 'Emlak talebinin yükselmesi', 'Kentsel dönüşüm projeleri'],
            threats: ['Emlak sektöründeki dalgalanmalar', 'Doğal afet riskleri', 'Yasal düzenlemeler']
        };
    } else if (cevreBilgisi === 'sanayi') {
        swotDataCevre = {
            strengths: ['Daha düşük emlak vergileri', 'Geniş alanlar', 'Yüksek tonajlı araçların erişimine uygunluk'],
            weaknesses: ['Potansiyel kiracı sayısının düşük olması', 'Toplu taşıma erişiminin kısıtlı olması', 'Daha az altyapı hizmeti'],
            opportunities: ['Sanayi gelişmeleri', 'Yeni pazarlara erişim', 'Hükümet teşvikleri'],
            threats: ['Çevre düzenlemeleri', 'Artan işletme maliyetleri', 'Pazar daralması']
        };
    } else if (cevreBilgisi === 'ayrık') {
        swotDataCevre = {
            strengths: ['Geniş arazi kullanımı', 'Az nüfus yoğunluğu', 'Daha düşük emlak vergisi'],
            weaknesses: ['Kısıtlı altyapı hizmetleri', 'Uzakta toplu taşıma erişimi', 'Düşük potansiyel kiracı sayısı'],
            opportunities: ['Turistik gelişmeler', 'Yeni yerleşim alanlarına dönüşme', 'Doğal kaynakların kullanımı'],
            threats: ['Ulaşım sorunları', 'Hizmetlere erişimde sıkıntılar', 'Yasal düzenlemeler'],
        };
    } else {
        swotDataCevre = null;
    }

    let swotDataNitelik;
    // Nitelik değerlerine göre SWOT analizi
    if (nitelik === 'Tarla') {
        swotDataNitelik = {
            strengths: ['Geniş kullanım alanları', 'Düşük vergiler', 'Yüksek verim potansiyeli'],
            weaknesses: ['Altyapı eksiklikleri', 'Erişim zorlukları', 'Kullanım kısıtlamaları'],
            opportunities: ['Tarım teşvikleri', 'Organik tarım talebi', 'Kırsal kalkınma projeleri'],
            threats: ['Hava koşulları', 'Pazar dalgalanmaları', 'Çevresel düzenlemeler']
        };
    } else if (nitelik === 'Bahçe') {
        swotDataNitelik = {
            strengths: ['Yüksek ürün verimi', 'Yüksek talep', 'Çevre dostu'],
            weaknesses: ['Sürekli bakım gerektirme', 'Mevsimlilik', 'Hastalık ve zararlılara karşı hassasiyet'],
            opportunities: ['Organik ürün talebi', 'Turistik çekicilik', 'Yeni ürün çeşitleri'],
            threats: ['Hava koşulları', 'Pestisit düzenlemeleri', 'Hastalık ve zararlılar'],
        };
    } else if (nitelik === 'Arazı') {
        swotDataNitelik = {
            strengths: ['Geniş kullanım olanakları', 'Potansiyel değer artışı', 'Düşük vergiler'],
            weaknesses: ['Altyapı eksikliği', 'Erişim zorlukları', 'Kullanım kısıtlamaları'],
            opportunities: ['İmar planları', 'Yeni projeler', 'Emlak piyasasının genişlemesi'],
            threats: ['Emlak piyasasındaki dalgalanmalar', 'Yasal düzenlemeler', 'Çevresel sorunlar']
        };
    } else if (nitelik === 'İmarlı') {
        swotDataNitelik = {
            strengths: ['Yüksek potansiyel değer', 'Hızlı satış ve kiralama', 'Altyapı hizmetlerine erişim'],
            weaknesses: ['Yüksek vergiler', 'Sıkı düzenlemeler', 'Yüksek yatırım maliyeti'],
            opportunities: ['Piyasa genişlemesi', 'Artan nüfus', 'Yatırım teşvikleri'],
            threats: ['Emlak piyasasındaki dalgalanmalar', 'Yasal düzenlemeler', 'Ekonomik dalgalanmalar']
        };
    }

    // Çevre bilgisi ve nitelik değerlerine göre belirlenen SWOT analizlerini birleştirme
    const swotData = {
        strengths: [...(swotDataCevre?.strengths || []), ...(swotDataNitelik?.strengths || []), ...(swotDataFaktorler.strengths || [])],
        weaknesses: [...(swotDataCevre?.weaknesses || []), ...(swotDataNitelik?.weaknesses || []), ...(swotDataFaktorler.weaknesses || [])],
        opportunities: [...(swotDataCevre?.opportunities || []), ...(swotDataNitelik?.opportunities || []), ...(swotDataFaktorler.opportunities || [])],
        threats: [...(swotDataCevre?.threats || []), ...(swotDataNitelik?.threats || []), ...(swotDataFaktorler.threats || [])],
    };


    return (
        <Box paddingBottom="50px" minHeight="1000px" p="5" borderRadius="md" boxShadow="lg" position="relative">
          
            <Heading fontFamily="heading2" color="teal" fontWeight="bold" as="h2" size="xl">BÖLÜM 7 - SWOT Analizi</Heading>
            <Flex direction="column" align="center" justify="center">

                <Text fontFamily="body" mt={4} mb={4}>SWOT analizi, bir durumun iç ve dış çevresini değerlendirmek için kullanılan bir stratejik planlama aracıdır. SWOT, Strengths (Güçlü Yönler), Weaknesses (Zayıf Yönler), Opportunities (Fırsatlar) ve Threats (Tehditler) kelimelerinin baş harflerinden oluşur.

                    Güçlü Yönler (Strengths): Bir organizasyonun iç çevresindeki pozitif unsurları, yetenekleri ve kaynakları temsil eder. Bu, organizasyonun kontrolü altında olan ve performansını iyileştirmek için kullanılabilecek faktörlerdir.

                    Zayıf Yönler (Weaknesses): Organizasyonun iç çevresindeki olumsuz unsurları, eksiklikleri ve alanları temsil eder. Bu, organizasyonun kontrolü altında olan ve performansını düşürebilecek veya rekabet avantajını sınırlayabilecek faktörlerdir.

                    Fırsatlar (Opportunities): Organizasyonun dış çevresinde bulunan ve işin büyümesini, gelirini ve/veya verimliliğini artırabilecek potansiyel faktörleri temsil eder.

                    Tehditler (Threats): Organizasyonun dış çevresinde bulunan ve işin büyümesini, gelirini ve/veya verimliliğini olumsuz yönde etkileyebilecek potansiyel faktörleri temsil eder.

                    SWOT analizi, bir organizasyonun durum analizini yapmak ve gelecekteki stratejileri planlamak için kullanılır. Bu analiz, bir işletmenin mevcut durumunu, rekabet avantajlarını ve potansiyel büyüme alanlarını belirlemeye yardımcı olur.</Text>
                <Text mb={4}>
                    Aşağıda çevre bilgisi ve nitelik değerlerine dayalı olarak oluşturulan SWOT analizi tablosu yer almaktadır.
                </Text>
                <Box>
                    <Table variant="simple" bgColor="primary.100" borderRadius="md" overflow="hidden">
                        <Thead>
                            <Tr bgColor="primary.700">
                                <Th borderWidth="1px" borderColor="primary.900" color="primary.100" fontFamily="heading1">Avantajlar</Th>
                                <Th borderWidth="1px" borderColor="primary.900" color="primary.100" fontFamily="heading1">Zayıflıklar</Th>
                                <Th borderWidth="1px" borderColor="primary.900" color="primary.100" fontFamily="heading1">Fırsatlar</Th>
                                <Th borderWidth="1px" borderColor="primary.900" color="primary.100" fontFamily="heading1">Tehditler</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td fontSize="12px" borderWidth="1px" borderColor="primary.900" color="secondary.800" fontFamily="body2">{swotData.strengths.join(', ')}</Td>
                                <Td fontSize="12px" borderWidth="1px" borderColor="primary.900" color="secondary.800" fontFamily="body2">{swotData.weaknesses.join(', ')}</Td>
                                <Td fontSize="12px" borderWidth="1px" borderColor="primary.900" color="secondary.800" fontFamily="body2">{swotData.opportunities.join(', ')}</Td>
                                <Td fontSize="12px" borderWidth="1px" borderColor="primary.900" color="secondary.800" fontFamily="body2">{swotData.threats.join(', ')}</Td>
                            </Tr>
                        </Tbody>
                    </Table>

                </Box>
                <Text fontFamily="body" mb={4} mt={4}>
                    Bu tabloda belirtilen güçlü yönler şunlardır: {swotData.strengths.join(', ')}.
                    Zayıf yönler: {swotData.weaknesses.join(', ')}.
                    Fırsatlar: {swotData.opportunities.join(', ')}.
                    Tehditler: {swotData.threats.join(', ')}.
                </Text>
            </Flex>

                {renderPageFooter(currentPage + 2)}
           
        </Box>
    );
}

export default SWOTAnalysis;
