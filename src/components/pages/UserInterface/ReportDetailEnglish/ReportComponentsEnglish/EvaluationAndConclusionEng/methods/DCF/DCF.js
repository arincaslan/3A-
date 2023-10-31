import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const DCF = ({ netIncome, discountRate }) => {
    const years = [1, 2, 3, 4, 5];
    const netIncomes = netIncome;
    const discountRates = discountRate;

    const calculatePresentValue = (income, rate, year) => {
        return income / Math.pow((1 + rate / 100), year);
    };

    let totalPresentValue = 0;

    return (
        <Box>
            <Text fontSize="lg" fontWeight="bold">İndirgenmiş Nakit Akışları Yaklaşımı</Text>
            {years.map((year, index) => {
                const presentValue = calculatePresentValue(netIncomes[index], discountRates, year);
                totalPresentValue += presentValue;

                return (
                    <Text key={year}>
                        Yıl {year}: {netIncomes[index]} / (1 + {discountRates / 100}) ^ {year} = {presentValue.toFixed(2)} TL
                    </Text>
                );
            })}
            <Text mt={2}>
                İndirgenmiş Nakit Akışlarının Toplamı: {totalPresentValue.toFixed(2)} TL
            </Text>
        </Box>
    );
};

export default DCF;
