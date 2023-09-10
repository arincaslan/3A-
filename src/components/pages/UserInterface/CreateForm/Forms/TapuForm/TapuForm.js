import React, { useState, useRef } from "react";
import LocationForm from "./LocationForm/LocationForm";
import ParselForm from "./ParselForm/ParselForm";
import DeedForm from "./DeedForm/DeedForm";
import { Box, VStack, Button, Text, Center } from '@chakra-ui/react';

const TapuForm = ({ onNext , onBack }) => {
  const [step, setStep] = useState(1);
  const [locationData, setLocationData] = useState(null);
  const [parselData, setParselData] = useState(null);
  const locationRef = useRef();
  const parselRef = useRef();
  const deedRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const deedData = await deedRef.current.getData();
  
    const tapuData = {
      location: locationData,
      parsel: parselData,
      deed: deedData,
    };
  
    onNext(tapuData);
  };
  
  const handleNextLocation = () => {
    setLocationData(locationRef.current.getData());
    setStep(2);
  };

  const handleNextParsel = async () => {
    const parselData = await parselRef.current.getData();
    setParselData(parselData);
    setStep(3);
  };

  const handleBack = () => {
    setStep(step - 1);
  };
  
  return (
    <Box width="800px" p={6} boxShadow="2xl" bg="white" rounded="md">
    <Text fontFamily="heading1" fontSize="2xl" fontWeight="bold" color="primary.700" mb={4}>
      2. Adım: Tapu Bilgileri Formu
    </Text>
    <Text fontFamily="heading4" color="primary.500" mb={6}>
      Bu formda tapu bilgileri toplanır. Her adımda ilgili bilgileri doldurarak ilerleyiniz.
    </Text>
    <form onSubmit={handleSubmit}>
    <VStack align="stretch" spacing={6}>
          {step === 1 && <LocationForm ref={locationRef} />}
          {step === 1 && (
            <Center>
              <Button w={72} colorScheme="teal" onClick={handleNextLocation}>Kaydet ve İlerle</Button>
            </Center>
          )}
          {step === 1 && (
            <Center>
              <Button w={72} colorScheme="red" onClick={onBack}>Proje Formuna Geri Dön</Button>
            </Center>
          )}
          {step === 2 && <ParselForm ref={parselRef} />}
          {step === 2 && (
            <Center>
              <Button w={72} colorScheme="teal" onClick={handleNextParsel}>Kaydet ve İlerle</Button>
            </Center>
          )}
          {step === 2 && (
            <Center>
              <Button w={72} colorScheme="red" onClick={handleBack}>Geri</Button>
            </Center>
          )}
          {step === 3 && <DeedForm ref={deedRef} />}
          {step === 3 && (
            <Center>
              <Button  w={72} colorScheme="teal" type="submit">Kaydet ve İlerle</Button>
            </Center>
          )}
          {step === 3 && (
            <Center>
              <Button w={72} colorScheme="red" onClick={handleBack}>Geri</Button>
            </Center>
          )}
        </VStack>
    </form>
  </Box>
  );
};

export default TapuForm;
