import React , {useState} from 'react';
import { Box, Text, Flex, Grid, VStack, Heading } from '@chakra-ui/react';
import ComparableMethod from './methods/ComparableMethod';
import CostMethod from './methods/CostMethod';
import IncomeApproach from './methods/IncomeApproach';

function EvaluationAndConclusion({ info, profileInfo, newCurrentPage, renderPageFooter, setNewEvalPage, evalPage }) {
    const { emsalData, maaliyetData, gelirData } = info.valueData;
    const evaluator = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.evaluator);
    const inspector = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.inspector);

    
      const calculatePageNumbers = (newCurrentPage, emsalData, maliyetData, gelirData) => {
        let emsalPage = null;
        let maliyetPage = null;
        let gelirPage = null;
        let finalPage = newCurrentPage;
    
        if (emsalData.emsaller) {
          emsalPage = finalPage;
          finalPage = finalPage + 2;
        }
    
        if (maliyetData.yeniden.faktorler) {
          maliyetPage = finalPage;
          finalPage++;
        }
    
        if (gelirData) {
          gelirPage = finalPage;
          finalPage++;
        }
    
        return { emsalPage, maliyetPage, gelirPage, finalPage };
      }
    
      const { emsalPage, maliyetPage, gelirPage, finalPage } = calculatePageNumbers(newCurrentPage, emsalData, maaliyetData, gelirData);
      setNewEvalPage(finalPage);

    return (
        <Box p="5" borderRadius="md" boxShadow="lg" position="relative">
            <Heading fontFamily="heading2" color="teal" fontWeight="bold" as="h2" size="xl" mb={2}>BÖLÜM 9 - Analiz Sonuçlarının Değerlendirilmesi</Heading>
            {
                emsalData.emsaller && <ComparableMethod renderPageFooter={renderPageFooter} emsalPage={emsalPage} info={info} />
            }
            {
                maaliyetData.yeniden.faktorler && <CostMethod renderPageFooter={renderPageFooter} maliyetPage={maliyetPage} info={info} />
            }

            {
                gelirData && <IncomeApproach gelirPage={gelirPage} info={info} />
            }

            <Heading fontFamily="heading2" color="teal" fontWeight="bold" as="h2" size="xl" mb={2}>BÖLÜM 10 - Sonuç</Heading>
            <Text fontSize="md">
                Raporumuzu bilgi ve incelemelerinize sunarız.
                Saygılarımızla,
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} borderTop="1px solid" borderColor="primary.500" pt={4}>
                <VStack align="start">
                    <Text fontSize="md">Değerlemeyi Yapan</Text>
                    <Text fontSize="sm">{evaluator.name}</Text>
                    <Text fontSize="sm">SPK Lisans No: {evaluator.spkNo}</Text>
                    <Text fontSize="sm">{evaluator.title}</Text>
                </VStack>
                <VStack align="start">
                    <Text fontSize="md">Değerlemeyi Kontrol Eden</Text>
                    <Text fontSize="sm">{inspector.name}</Text>
                    <Text fontSize="sm">SPK Lisans No: {inspector.spkNo}</Text>
                    <Text fontSize="sm">{inspector.title}</Text>
                </VStack>
            </Grid>
            {renderPageFooter(evalPage)}
        </Box>
    );
}

export default EvaluationAndConclusion;
