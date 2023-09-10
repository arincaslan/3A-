import React from 'react';
import { Box, Text, Flex, Grid, VStack } from '@chakra-ui/react';
import ComparableMethod from './methods/ComparableMethod';
import CostMethod from './methods/CostMethod';
import IncomeApproach from './methods/IncomeApproach';

function EvaluationAndConclusion({ info, profileInfo }) {
    const { emsalData, maaliyetData, gelirData } = info.valueData;
    const evaluator = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.evaluator);
    const inspector = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.inspector);

    return (
        <Box>
            <Text fontSize="xl" fontWeight="bold">9. Bölüm - Analiz Sonuçlarının Değerlendirilmesi ve Sonuç</Text>
            {
                emsalData && <ComparableMethod info={info} />
            }
            {
                maaliyetData && maaliyetData.secilenMetod && <CostMethod info={info} />
            }

            {
                gelirData && <IncomeApproach info={info} />
            }

            <Text fontSize="md">
                Raporumuzu bilgi ve incelemelerinize sunarız.
                Saygılarımızla,
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
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
        </Box>
    );
}

export default EvaluationAndConclusion;
