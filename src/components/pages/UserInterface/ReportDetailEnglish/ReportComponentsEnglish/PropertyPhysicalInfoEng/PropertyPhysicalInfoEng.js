import React from 'react';
import { Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const PropertyPhysicalInfoEng = ({ info, currentPage, renderPageFooter }) => {
  let yerelZeminSinifiAciklama;
  let zeminGrubuAciklama;
  let zeminFormasyonCinsiAciklama;
  let zeminDepremBolgeDerecesiAciklama;

  switch (info.zeminData.zeminFormasyonCinsi) {
    case 'Silt':
      zeminFormasyonCinsiAciklama = "Silt is a material that is typically between the sizes of sand and clay and can easily be suspended in water. Such soil usually restricts the mobility of water and can pose potential problems for foundational constructions";
      break;
    case 'Kil':
      zeminFormasyonCinsiAciklama = "Clay is a natural material typically composed of very fine mineral particles. Clayey soils tend to trap water and crack when they dry, which can lead to potential issues when used to support structures";
      break;
    case 'Kum':
      zeminFormasyonCinsiAciklama = "Sand is generally a hard, resistant, and water-saturated material. Sandy soils usually have good drainage properties and often provide a good base for construction projects";
      break;
    case 'Çakıl':
      zeminFormasyonCinsiAciklama = "Gravel is generally a water-saturated material with high permeability. Gravelly soils typically have good drainage properties and are often suitable bases for construction projects";
      break;
    case 'Torf':
      zeminFormasyonCinsiAciklama = "Peat is a soft material usually composed of organic materials and tends to trap water. Such soils might not be suitable to support structures";
      break;
    case 'Kaya':
      zeminFormasyonCinsiAciklama = "Rock typically represents a material with high strength and durability properties. Rocky grounds usually provide an excellent base for the foundations of structures";
      break;
  }


  switch (info.zeminData.zeminDepremBolgeDerecesi) {
    case '1':
      zeminDepremBolgeDerecesiAciklama = "The 1st-degree earthquake zone represents the highest seismic risk level in Turkey. This implies that buildings in this region need to be particularly resistant to seismic activity";
      break;
    case '2':
      zeminDepremBolgeDerecesiAciklama = "The 2nd-degree earthquake zone represents a medium seismic risk level in Turkey. Buildings in this region still need to comply with earthquake standards, but seismic activity is expected to be lower compared to the 1st-degree zone";
      break;
    case '3':
      zeminDepremBolgeDerecesiAciklama = "The 3rd-degree earthquake zone represents the lowest seismic risk level in Turkey. Buildings in this region need to be resistant to seismic activity but at a level lower than the other regions";
      break;
    case '4':
      zeminDepremBolgeDerecesiAciklama = "The 4th-degree earthquake zone represents an area in Turkey with very low seismic risk. Buildings in this region need to comply with earthquake standards, indicating that seismic activity is rare";
      break;
  }

  if (info.zeminData.yerelZeminSinifi === 'Z1') {
    yerelZeminSinifiAciklama = 'This class indicates that the soil has the best seismic performance';
  } else if (info.zeminData.yerelZeminSinifi === 'Z2') {
    yerelZeminSinifiAciklama = 'This class indicates that the soil has a medium level of seismic performance';
  } else if (info.zeminData.yerelZeminSinifi === 'Z3') {
    yerelZeminSinifiAciklama = 'This class indicates that the soil has a low level of seismic performance';
  } else {
    yerelZeminSinifiAciklama = 'This class represents the seismic performance of the soil';
  }

  if (info.zeminData.zeminGrubu === 'A') {
    zeminGrubuAciklama = 'This group indicates that the soil has the best performance';
  } else if (info.zeminData.zeminGrubu === 'B') {
    zeminGrubuAciklama = 'This group indicates that the soil has a medium level of performance';
  } else if (info.zeminData.zeminGrubu === 'C') {
    zeminGrubuAciklama = 'This group indicates that the soil has a low level of performance';
  } else {
    zeminGrubuAciklama = 'This group represents the performance of the soil';
  }

  return (
    <Box p="5" borderRadius="md" boxShadow="lg"  >

      <Box style={{ pageBreakAfter: "always" }} paddingBottom="50px" position="relative" minHeight="1000px" >
        <Heading borderBottom="2px solid" borderColor="teal.500" pb={6} fontFamily="heading2" color="teal" fontWeight="bold" as="h2" size="xl">SECTION 6 - Physical Property / Building and Land Information</Heading>
        <Text mt={4}>A detailed soil analysis has been conducted using the data provided in the table below. Each value and criterion represents different features of the soil, and when evaluated together, they help understand the overall condition of the soil and its potential for construction.</Text>
        <Table variant="simple" size="md" borderWidth="1px" borderColor="gray.300" my={4}>
          <Thead>
            <Tr>
              <Th borderColor="gray.300" borderWidth="1px" fontFamily="heading2">Data</Th>
              <Th borderColor="gray.300" borderWidth="1px" fontFamily="heading2">Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Building Importance Coefficient</Td>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.binaOnemKatsayisi}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Effective Ground Acceleration Coefficient</Td>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.etkinYerIvmeKatsayisi}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Local Soil Class</Td>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.yerelZeminSinifi}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Soil Earthquake Zone Degree</Td>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.zeminDepremBolgeDerecesi}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Soil Safety Stress</Td>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.zeminEmniyetGerilmesi}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Soil Formation Type</Td>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.zeminFormasyonCinsi}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Soil Group</Td>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.zeminGrubu}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Soil Dominant Vibration Period</Td>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.zeminHakimTitresimPeriyodu}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Soil Characteristic Period TA</Td>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.zeminKarakteristikPeriyotTA}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Soil Characteristic Period TB</Td>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.zeminKarakteristikPeriyotTB}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Soil Bed Coefficient</Td>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.zeminYatakKatsayisi}</Td>
            </Tr>
          </Tbody>
        </Table>

        {renderPageFooter(currentPage)}

      </Box>


      <Box p={5} style={{ pageBreakAfter: "always" }} paddingBottom="50px" position="relative" minHeight="1000px" >
        <Text mt={4}>
          Soil information is of great importance in ensuring that a building is safe and durable. The importance coefficient of the evaluated building has been determined as {info.zeminData.binaOnemKatsayisi}. The importance coefficient of the building varies according to the purpose of use of the building and determines the importance degree of the soil supporting the structure. An element that determines how much resistance the soil can show to its movement during an earthquake is the effective ground acceleration coefficient. For the evaluated property, this coefficient has been determined as {info.zeminData.etkinYerIvmeKatsayisi}, and this variable depends on the general structure of the soil and its resistance to seismic activity.
          The local soil class has been determined as {info.zeminData.yerelZeminSinifi}. {yerelZeminSinifiAciklama}. The earthquake zone degree of the soil has been determined as {info.zeminData.zeminDepremBolgeDerecesi}. {zeminDepremBolgeDerecesiAciklama}.
          The safety stress of the soil has been identified as {info.zeminData.zeminEmniyetGerilmesi}. This value determines how safe the soil is.
          The soil formation type has been determined as {info.zeminData.zeminFormasyonCinsi}. {zeminFormasyonCinsiAciklama}. The soil group has been identified as {info.zeminData.zeminGrubu}. {zeminGrubuAciklama}.
          The dominant vibration period of the soil has been found as {info.zeminData.zeminHakimTitresimPeriyodu}. This value determines at which period the soil will vibrate.
          The characteristic periods TA and TB of the soil have been determined as {info.zeminData.zeminKarakteristikPeriyotTA} and {info.zeminData.zeminKarakteristikPeriyotTB}. These values determine the movements of the soil in certain periods.
          The bed coefficient of the soil has been determined as {info.zeminData.zeminYatakKatsayisi}. This coefficient determines how stable the soil can remain during an earthquake.
        </Text>
        {renderPageFooter(currentPage + 1)}
      </Box>



    </Box>
  );
}

export default PropertyPhysicalInfoEng;