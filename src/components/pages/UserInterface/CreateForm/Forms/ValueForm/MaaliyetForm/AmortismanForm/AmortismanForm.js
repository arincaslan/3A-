import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Stack, useRadio, RadioGroup, Button, Heading, Text } from '@chakra-ui/react';

function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props);
    const inputProps = getInputProps();
    const checkboxProps = getCheckboxProps();

    const onChangeHandler = (event) => {
        props.onChange(event.target.value);
    };

    return (
        <Box as="label">
            <input {...inputProps} onChange={onChangeHandler} />
            <Box
                {...checkboxProps}
                cursor="pointer"
                borderWidth="1px"
                boxShadow="md"
                p={5}
                color="black"
                _checked={{
                    bg: "blue.600",
                    color: "white",
                    borderColor: "blue.600",
                }}
                _hover={{
                    bg: "gray.300",
                }}
                _focus={{
                    boxShadow: "outline",
                }}
            >
                {props.children}
            </Box>
        </Box>
    );
}

function AmortismanForm({ amortismanData, onAmortismanDataChange }) {
    const [form, setForm] = useState(amortismanData || {
        malzemeKalitesi: '',
        konum: '',
        bakimDurumu: '',
        yas: '',
        insaatKalitesi: '',
        faktorler: {}
    });


    const handleChange = (field) => (value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        onAmortismanDataChange(form);
        console.log(form);
    };

    return (
        <Box mt={16} p={20} boxShadow="lg" w="1000px">
            
                <Heading fontSize="2xl" fontWeight="bold" color="primary.700" fontFamily="heading1" mb={4}>Amortisman Formu</Heading>
                <Text fontFamily="heading4" color="gray.500" mb={6}>Amortisman hesabı için anketi doldurunuz. Kıstasları puanladıktan sonra Yeşil Kayıt Et butonu ile anket sonuçlarını göndermeyi unutmayınız.</Text>
                <FormControl mt={4} mb={3}>
                    <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Malzeme Kalitesi</FormLabel>
                    <RadioGroup value={form.malzemeKalitesi} onChange={handleChange("malzemeKalitesi")}>
                        <Stack direction="row" spacing={3}>
                            {["Çok Düşük", "Düşük", "Orta", "Yüksek", "Çok Yüksek"].map((label, index) => (
                                <RadioCard key={index} value={`${index + 1}`} onChange={handleChange("malzemeKalitesi")}>{`${index + 1}. ${label} Kalite`}</RadioCard>
                            ))}
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl mb={3}>
                    <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Konum</FormLabel>
                    <RadioGroup value={form.konum} onChange={handleChange("konum")}>
                        <Stack direction="row" spacing={3}>
                            {["Çok Kötü", "Kötü", "Orta", "İyi", "Çok İyi"].map((label, index) => (
                                <RadioCard key={index} value={`${index + 1}`} onChange={handleChange("konum")}>{`${index + 1}. ${label} Konum`}</RadioCard>
                            ))}
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl mb={3}>
                    <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Bakım Durumu</FormLabel>
                    <RadioGroup value={form.bakimDurumu} onChange={handleChange("bakimDurumu")}>
                        <Stack direction="row" spacing={3}>
                            {["Çok Kötü", "Kötü", "Orta", "İyi", "Çok İyi"].map((label, index) => (
                                <RadioCard key={index} value={`${index + 1}`} onChange={handleChange("bakimDurumu")}>{`${index + 1}. ${label} Bakım Durumu`}</RadioCard>
                            ))}
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl mb={3}>
                    <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Yaş</FormLabel>
                    <RadioGroup value={form.yas} onChange={handleChange("yas")}>
                        <Stack direction="row" spacing={3}>
                            {["40+ Yıl", "30-40 Yıl", "20-30 Yıl", "10-20 Yıl", "0-10 Yıl"].map((label, index) => (
                                <RadioCard key={index} value={`${index + 1}`} onChange={handleChange("yas")}>{`${index + 1}. ${label}`}</RadioCard>
                            ))}
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl mb={3}>
                    <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">İnşaat ve Tasarım Kalitesi</FormLabel>
                    <RadioGroup value={form.insaatKalitesi} onChange={handleChange("insaatKalitesi")}>
                        <Stack direction="row" spacing={3}>
                            {["Çok Düşük", "Düşük", "Orta", "Yüksek", "Çok Yüksek"].map((label, index) => (
                                <RadioCard key={index} value={`${index + 1}`} onChange={handleChange("insaatKalitesi")}>{`${index + 1}. ${label} Kalite`}</RadioCard>
                            ))}
                        </Stack>
                    </RadioGroup>
                </FormControl>
                <Box display="flex" justifyContent="center" mt={8} mb={8}>
                    <Button variant="outline" w={36} colorScheme='green' onClick={handleSubmit}>Kaydet</Button>
                </Box>
        </Box>
    );
}

export default AmortismanForm;
