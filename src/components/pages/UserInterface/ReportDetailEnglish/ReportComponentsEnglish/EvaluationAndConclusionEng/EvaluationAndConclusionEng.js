import React, { useState } from 'react';
import { Box, Text, Flex, Grid, VStack, Heading } from '@chakra-ui/react';
import ComparableMethodEng from './methods/ComparableMethodEng';
import CostMethodEng from './methods/CostMethodEng';
import IncomeApproachEng from './methods/IncomeApproachEng';

function EvaluationAndConclusionEng({ info, profileInfo, newCurrentPage, renderPageFooter, setNewEvalPage, evalPage }) {
  const { emsalData, maaliyetData, gelirData } = info.valueData;
  const evaluator = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.evaluator);
  const inspector = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.inspector);
  const [emsalResult, setEmsalResult] = useState(null);
  const [maliyetResult, setMaliyetResult] = useState(null);
  const [gelirResult, setGelirResult] = useState(null);

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

  const results = [emsalResult, maliyetResult, gelirResult].filter(result => result !== null && result !== undefined);
  const averageResult = results.reduce((sum, result) => sum + result, 0) / results.length;

  function formatCurrency(value) {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(value);
  }

  return (
    <Box borderRadius="md" boxShadow="lg" position="relative">
      <Heading fontFamily="heading2" color="teal" fontWeight="bold" as="h2" size="xl" mb={2} borderBottom="2px solid" borderColor="teal.500" pb={6}>CHAPTER 9 - Evaluation of Analysis Results</Heading>


      {
        emsalData.emsaller && <ComparableMethodEng setEmsalResult={setEmsalResult} renderPageFooter={renderPageFooter} emsalPage={emsalPage} info={info} />
      }
      {
        maaliyetData.yeniden.faktorler && <CostMethodEng setMaliyetResult={setMaliyetResult} renderPageFooter={renderPageFooter} maliyetPage={maliyetPage} info={info} />
      }

      {
        gelirData && <IncomeApproachEng renderPageFooter={renderPageFooter} setGelirResult={setGelirResult} gelirPage={gelirPage} info={info} />
      }

      <Box p={5} minHeight="950px" >

        <Heading fontFamily="heading2" color="teal" fontWeight="bold" as="h2" size="xl" mb={4} borderBottom="2px solid" borderColor="teal.500" pb={8}>CHAPTER 10 - Conclusion</Heading>
        <Text mt={2} >
          The data found in this report are the result of studies conducted by visiting the neighborhood where the real estate is located. The analyses made based on this data, the valuation methods applied, and the valuation procedures are correct and are carried out in accordance with the Principles of the Professional Valuation Occupation and in line with Our Company's Principles and Vision.
        </Text>
        <Text mt={4} >
          This report is the result of the unbiased, impartial, professional analyses and opinions of the valuer and our company.
        </Text>
        <Text mt={4} fontWeight="bold" fontSize="lg">
          As of the report date {new Date(info.projectData.valuationDate).toLocaleDateString()}, the valuation of the subject real estate is as follows:
        </Text>

        {emsalResult && <Text mt={4}>Comparable Sales Approach valuation result: <strong>{formatCurrency(emsalResult)}</strong></Text>}
        {maliyetResult && <Text mt={4}>Cost Approach valuation result: <strong>{formatCurrency(maliyetResult)}</strong></Text>}
        {gelirResult && <Text mt={4}>Income Approach valuation result: <strong>{formatCurrency(gelirResult)}</strong></Text>}

        <Box mt={4} bg="gray.100" p="4" rounded="lg">
          <Text mb={2}>Final Real Estate Value (Excluding VAT): <strong>{formatCurrency(averageResult)}</strong></Text>
          <Text mb={2}>VAT Value (20%): <strong>{formatCurrency(averageResult * 0.20)}</strong></Text>
          <Text>Inclusive of VAT Current Market Value: <strong>{formatCurrency(averageResult * 1.20)}</strong></Text>
        </Box>
        <Text mt={4} fontSize="md">
          We present our report for your information and review.
        </Text>
        <Text>Kind regards,</Text>
        <Grid mt={8} templateColumns="repeat(2, 1fr)" gap={6} >
          <VStack align="start">
            <Text fontSize="md">Valuator</Text>
            <Text fontSize="sm">{evaluator.name}</Text>
            <Text fontSize="sm">SPK License No: {evaluator.spkNo}</Text>
            <Text fontSize="sm">{evaluator.title}</Text>
          </VStack>
          <VStack align="start">
            <Text fontSize="md">Valuation Supervisor</Text>
            <Text fontSize="sm">{inspector.name}</Text>
            <Text fontSize="sm">SPK License No: {inspector.spkNo}</Text>
            <Text fontSize="sm">{inspector.title}</Text>
          </VStack>
        </Grid>
        {renderPageFooter(evalPage)}
      </Box>

    </Box>
  );
}

export default EvaluationAndConclusionEng;
