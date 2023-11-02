import React from 'react';
import { Box, Text, Flex, Badge } from '@chakra-ui/react';
import { useEffect } from 'react';

function IncomeApproachEng({ info, renderPageFooter, gelirPage, setGelirResult }) {
    const { gelirData } = info.valueData;
    const { valuationDate } = info.projectData;


    const { secilenYontem, kiraCarpani, krediTutari, krediDegerOrani,
        aylikKiraBedeli, degerlemeTarihi, faizOrani, aciklama } = gelirData;



    let currentDate = new Date(valuationDate);
    let valuationDateObject = new Date(degerlemeTarihi);

    let differenceInTime = currentDate.getTime() - valuationDateObject.getTime();
    let differenceInYears = differenceInTime / (1000 * 3600 * 24 * 365);
    let gayrimenkulDegeriKredi = krediTutari / (krediDegerOrani / 100);



    let gayrimenkulDegeriKrediBugunku = gayrimenkulDegeriKredi / Math.pow((1 + (faizOrani / 100)), differenceInYears);


    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });


    let yillikKiraGeliri = aylikKiraBedeli * 12;

    let brütKiraÇarpanı = kiraCarpani;  // bu değer genellikle bölgedeki emlak piyasası ve ekonomik koşullara bağlıdır
    let gayrimenkulDegeriKira = brütKiraÇarpanı * yillikKiraGeliri;

    const result = gayrimenkulDegeriKira ? gayrimenkulDegeriKira : gayrimenkulDegeriKrediBugunku;

    useEffect(() => {
        setGelirResult(result);
    }, []);

    return (
        <Box p={5} style={{ pageBreakAfter: 'always', position: "relative" }} maxHeight="1000px" minHeight="800px" paddingBottom="50px" >
            <Text fontFamily="heading" color="secondary.700" fontSize="xl" fontWeight="bold" mt={4}>Income Approach Valuation</Text>
            <Text mt={2}>
                The income approach determines the value of a property based on the potential income that can be generated from it. This method is typically used for valuing income-producing properties.
            </Text>
            <Text mt={2}>
                Selected Valuation Method: {secilenYontem === 'kiraCarpani' ? 'Rent Multiplier Method' : 'Calculation with Credit Rating Score'}
            </Text>
            {secilenYontem === 'kiraCarpani' && (
                <Box mt={2}>
                    <Text fontSize="lg" mb="4">
                        In property valuation, we use the Rent Multiplier method. This method is used to estimate the sale price of a property and is usually suitable for investment properties or properties for rent.
                    </Text>
                    <Text fontSize="lg" mb="4">
                        First, we calculate the annual rental income of the property.
                        When we perform this calculation, we find the monthly rental income ({formatter.format(Number(aylikKiraBedeli))}).
                        To find the annual rental income, we multiply this figure by 12 and find the result as {formatter.format(yillikKiraGeliri)}.
                        Then, we multiply this annual rental income by the gross rent multiplier.
                        This multiplier is generally determined based on the sale prices and rental yields of similar properties in the area.
                    </Text>
                    <Flex my={4} w="100%" justifyContent="center" alignItems="center">
                        <Box
                            bg="secondary.100"
                            boxShadow="lg"
                            p="4"
                            rounded="lg"
                            border="2px"
                            borderColor="secondary.500"
                        >
                            <Text fontFamily="heading2" color="secondary.800" fontSize="xl" fontWeight="bold" textAlign="center">
                                The gross rent multiplier for this valuation is ({formatter.format(kiraCarpani)}).
                                As a result, we value the property at
                            </Text>
                            <Text fontFamily="heading" color="secondary.700" fontSize="lg" mt={2} textAlign="center">
                                <Text fontFamily="heading" as="span" fontWeight="bold" color="secondary.900">
                                    {formatter.format(gayrimenkulDegeriKira)}
                                </Text>
                                .
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            )}
            {secilenYontem === 'krediDegerNotu' && (
                <Box mt={2}>
                    <Text fontSize="lg" mb="4">
                        In property valuation, we use the Credit Rating Score method. This method is commonly used for properties valued with credit.
                    </Text>
                    <Text mt={4}>
                        Additional Explanation: {aciklama}
                    </Text>
                    <Text fontSize="lg" mb="4">
                        First, we use the credit amount ({formatter.format(krediTutari)}) and the Credit Value Ratio ({krediDegerOrani}%). With these values, we calculate the value of the property as {formatter.format(gayrimenkulDegeriKredi)}.
                    </Text>
                    <Text fontSize="lg" mb="4">
                        Then, to find the present value of this valuation, we use the difference in years between the valuation date and today's date, along with the interest rate. The date of the valuation is {degerlemeTarihi}, today's date is {valuationDate}, and the interest rate is %{faizOrani}.
                    </Text>
                    <Text fontSize="lg" mb="4">
                        As a result of these calculations, the value of the property calculated using the credit amount and the credit value ratio is {formatter.format(gayrimenkulDegeriKredi)}. This value has been adjusted with the interest rate to find today's value of the property, which is {formatter.format(gayrimenkulDegeriKrediBugunku)}.
                    </Text>
                    <Flex my={4} w="100%" justifyContent="center" alignItems="center">
                        <Box
                            bg="secondary.100"
                            boxShadow="lg"
                            p="4"
                            rounded="lg"
                            border="2px"
                            borderColor="secondary.500"
                        >
                            <Text fontFamily="heading2" color="secondary.800" fontSize="xl" fontWeight="bold" textAlign="center">
                                As a result of these calculations, we value the present value of the property at:
                            </Text>
                            <Text fontFamily="heading" color="secondary.700" fontSize="lg" mt={2} textAlign="center">
                                <Text fontFamily="heading" as="span" fontWeight="bold" color="secondary.900">
                                    {formatter.format(gayrimenkulDegeriKrediBugunku)}
                                </Text>
                                .
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            )}
            {renderPageFooter(gelirPage)}
        </Box>

    );
}

export default IncomeApproachEng;
