import React, { useState } from 'react';
import { Box, Text, Flex, Grid, VStack, Heading } from '@chakra-ui/react';
import ComparableMethod from './methods/ComparableMethod';
import CostMethod from './methods/CostMethod';
import IncomeApproach from './methods/IncomeApproach';

function EvaluationAndConclusion({ info, profileInfo, newCurrentPage, renderPageFooter, setNewEvalPage, evalPage }) {
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
      <Heading fontFamily="heading2" color="teal" fontWeight="bold" as="h2" size="xl" mb={2} borderBottom="2px solid" borderColor="teal.500" pb={6}>BÖLÜM 9 - Analiz Sonuçlarının Değerlendirilmesi</Heading>

        
        {
          emsalData.emsaller && <ComparableMethod setEmsalResult={setEmsalResult} renderPageFooter={renderPageFooter} emsalPage={emsalPage} info={info} />
        }
        {
          maaliyetData.yeniden.faktorler && <CostMethod setMaliyetResult={setMaliyetResult} renderPageFooter={renderPageFooter} maliyetPage={maliyetPage} info={info} />
        }

        {
          gelirData && <IncomeApproach renderPageFooter={renderPageFooter} setGelirResult={setGelirResult} gelirPage={gelirPage} info={info} />
        }
 
      <Box p={5} minHeight="950px" >
        
        <Heading fontFamily="heading2" color="teal" fontWeight="bold" as="h2" size="xl" mb={4} borderBottom="2px solid" borderColor="teal.500" pb={8}>BÖLÜM 10 - Sonuç</Heading>
        <Text mt={2} >
          Bu raporda bulunan veriler, gayrimenkulün bulunduğu mahale gidilerek yapılan çalışmalar sonucu elde edilmiştir. Bu verilerden hareketle yapılan analizler, uygulanan değerleme metotları ve takdir usulü doğrudur ve Profesyonel Değerleme Mesleği İlkeleri ile bağdaşık ve Şirketimiz İlke ve Vizyonuna uygun olarak yapılmıştır.
        </Text>
        <Text mt={4} >
          Bu rapor; değerlemeyi yapan kişinin ve şirketimizin tarafsız, ön yargısız, profesyonel analizleri ve fikirleri sonucudur.
        </Text>
        <Text mt={4} fontWeight="bold" fontSize="lg">
          Rapor tarihi olan {new Date(info.projectData.valuationDate).toLocaleDateString()} tarihi itibariyle, değerleme konusu gayrimenkulün değerlemesi aşağıdaki gibidir:
        </Text>

        {emsalResult && <Text mt={4}>Emsal Karşılaştırma değerlemesi sonucu: <strong>{formatCurrency(emsalResult)}</strong></Text>}
        {maliyetResult && <Text mt={4}>Maliyet Yaklaşımı değerlemesi sonucu: <strong>{formatCurrency(maliyetResult)}</strong></Text>}
        {gelirResult && <Text mt={4}>Gelir Yaklaşımı değerlemesi sonucu: <strong>{formatCurrency(gelirResult)}</strong></Text>}

        <Box mt={4} bg="gray.100" p="4" rounded="lg">
          <Text mb={2}>Nihai Gayrimenkul Değeri (KDV Hariç): <strong>{formatCurrency(averageResult)}</strong></Text>
          <Text mb={2}>KDV Değeri (20%): <strong>{formatCurrency(averageResult * 0.20)}</strong></Text>
          <Text>KDV Dahil Cari Pazar Değeri: <strong>{formatCurrency(averageResult * 1.20)}</strong></Text>
        </Box>
        <Text mt={4} fontSize="md">
          Raporumuzu bilgi ve incelemelerinize sunarız.
        </Text>
        <Text>Saygılarımızla,</Text>
        <Grid mt={8} templateColumns="repeat(2, 1fr)" gap={6} >
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
    </Box>
  );
}

export default EvaluationAndConclusion;
