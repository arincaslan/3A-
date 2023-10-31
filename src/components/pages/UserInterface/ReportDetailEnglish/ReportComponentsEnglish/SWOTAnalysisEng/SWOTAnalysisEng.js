import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption, Heading, Flex, Text } from '@chakra-ui/react';

function SWOTAnalysisEng({ info, currentPage, renderPageFooter }) {
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
            swotDataFaktorler.strengths.push('High maintenance status');
        } else if (faktorler.bakimDurumu <= 2) {
            swotDataFaktorler.weaknesses.push('Low maintenance status');
        }

        if (faktorler.insaatKalitesi >= 4) {
            swotDataFaktorler.strengths.push('High construction quality');
        } else if (faktorler.insaatKalitesi <= 2) {
            swotDataFaktorler.weaknesses.push('Low construction quality');
        }

        if (faktorler.konum >= 4) {
            swotDataFaktorler.opportunities.push('Good location');
        } else if (faktorler.konum <= 2) {
            swotDataFaktorler.threats.push('Bad location');
        }

        if (faktorler.malzemeKalitesi >= 4) {
            swotDataFaktorler.opportunities.push('High material quality');
        } else if (faktorler.malzemeKalitesi <= 2) {
            swotDataFaktorler.threats.push('Low material quality');
        }

        if (faktorler.yas >= 4) {
            swotDataFaktorler.strengths.push('New building age');
        } else if (faktorler.yas <= 2) {
            swotDataFaktorler.weaknesses.push('Old building age');
        }
    }



    let swotDataCevre;
    // Çevre bilgisine göre SWOT analizi
    if (cevreBilgisi === 'yerlesim') {
        swotDataCevre = {
            strengths: ['High potential tenant count', 'Good public transportation access', 'Proximity to infrastructure services'],
            weaknesses: ['High property taxes', 'Strict building codes and regulations', 'Noise and crowding'],
            opportunities: ['Increasing population', 'Rising real estate demand', 'Urban transformation projects'],
            threats: ['Fluctuations in the real estate sector', 'Natural disaster risks', 'Legal regulations']
        };
    } else if (cevreBilgisi === 'sanayi') {
        swotDataCevre = {
            strengths: ['Lower property taxes', 'Expansive areas', 'Accessibility for heavy-duty vehicles'],
            weaknesses: ['Low potential tenant count', 'Restricted public transportation access', 'Fewer infrastructure services'],
            opportunities: ['Industrial developments', 'Access to new markets', 'Government incentives'],
            threats: ['Environmental regulations', 'Increasing operational costs', 'Market contractions']
        };
    } else if (cevreBilgisi === 'ayrık') {
        swotDataCevre = {
            strengths: ['Extensive land use', 'Low population density', 'Lower property taxes'],
            weaknesses: ['Limited infrastructure services', 'Distant public transportation access', 'Low potential tenant count'],
            opportunities: ['Touristic developments', 'Transformation into new residential areas', 'Utilization of natural resources'],
            threats: ['Transportation issues', 'Difficulties in accessing services', 'Legal regulations'],
        };
    } else {
        swotDataCevre = null;
    }


    let swotDataNitelik;
    // Nitelik değerlerine göre SWOT analizi
    if (nitelik === 'Tarla') {
        swotDataNitelik = {
            strengths: ['Wide usage areas', 'Low taxes', 'High yield potential'],
            weaknesses: ['Lack of infrastructure', 'Access difficulties', 'Usage restrictions'],
            opportunities: ['Agricultural incentives', 'Demand for organic farming', 'Rural development projects'],
            threats: ['Weather conditions', 'Market fluctuations', 'Environmental regulations']
        };
    } else if (nitelik === 'Bahçe') {
        swotDataNitelik = {
            strengths: ['High product yield', 'High demand', 'Environmentally friendly'],
            weaknesses: ['Continuous maintenance required', 'Seasonality', 'Sensitivity to diseases and pests'],
            opportunities: ['Demand for organic products', 'Touristic appeal', 'New product varieties'],
            threats: ['Weather conditions', 'Pesticide regulations', 'Diseases and pests'],
        };
    } else if (nitelik === 'Arazı') {
        swotDataNitelik = {
            strengths: ['Wide usage possibilities', 'Potential value increase', 'Low taxes'],
            weaknesses: ['Lack of infrastructure', 'Access difficulties', 'Usage restrictions'],
            opportunities: ['Zoning plans', 'New projects', 'Expansion of the real estate market'],
            threats: ['Fluctuations in the real estate market', 'Legal regulations', 'Environmental issues']
        };
    } else if (nitelik === 'İmarlı') {
        swotDataNitelik = {
            strengths: ['High potential value', 'Quick sale and rental', 'Access to infrastructure services'],
            weaknesses: ['High taxes', 'Strict regulations', 'High investment cost'],
            opportunities: ['Market expansion', 'Increasing population', 'Investment incentives'],
            threats: ['Fluctuations in the real estate market', 'Legal regulations', 'Economic fluctuations']
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
        <Box style={{ pageBreakAfter: "always" }} paddingBottom="50px" minHeight="1000px" p={5} borderRadius="md" boxShadow="lg" position="relative">

            <Heading fontFamily="heading2" color="teal" fontWeight="bold" as="h2" size="xl" borderBottom="2px solid" borderColor="teal.500" pb={6}>SECTION 7 - SWOT Analysis</Heading>
            <Flex direction="column" align="center" justify="center">

                <Text fontFamily="body" mt={4} mb={4}>The SWOT analysis is a strategic planning tool used to evaluate the internal and external environment of a situation. SWOT stands for Strengths, Weaknesses, Opportunities, and Threats.

                    Strengths: Represent the positive elements, capabilities, and resources within an organization. These are factors under the control of the organization and can be used to improve its performance.

                    Weaknesses: Represent the negative elements, deficiencies, and areas within an organization. These are factors under the control of the organization that can reduce performance or limit its competitive advantage.

                    Opportunities: Represent potential factors found in the external environment that can increase the growth, revenue, and/or productivity of a business.

                    Threats: Represent potential factors found in the external environment that can negatively affect the growth, revenue, and/or productivity of a business.

                    The SWOT analysis is used to perform a situation analysis of an organization and plan its future strategies. This analysis helps to identify a business's current situation, competitive advantages, and potential growth areas.</Text>
                <Text mb={4}>
                    Below is the SWOT analysis table based on environmental information and characteristic values.
                </Text>
                <Box>
                    <Table variant="simple" bgColor="primary.100" borderRadius="md" overflow="hidden">
                        <Thead>
                            <Tr bgColor="primary.700">
                                <Th borderWidth="1px" borderColor="primary.900" color="primary.100" fontFamily="heading1">Strengths</Th>
                                <Th borderWidth="1px" borderColor="primary.900" color="primary.100" fontFamily="heading1">Weaknesses</Th>
                                <Th borderWidth="1px" borderColor="primary.900" color="primary.100" fontFamily="heading1">Opportunities</Th>
                                <Th borderWidth="1px" borderColor="primary.900" color="primary.100" fontFamily="heading1">Threats</Th>
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
                    The strengths indicated in this table are: {swotData.strengths.join(', ')}.
                    Weaknesses: {swotData.weaknesses.join(', ')}.
                    Opportunities: {swotData.opportunities.join(', ')}.
                    Threats: {swotData.threats.join(', ')}.
                </Text>
            </Flex>

            {renderPageFooter(currentPage + 2)}

        </Box>

    );
}

export default SWOTAnalysisEng;
