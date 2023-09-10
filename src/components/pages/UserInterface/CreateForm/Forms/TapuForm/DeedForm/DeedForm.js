import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
    VStack, Box, FormControl, FormLabel, Input, Grid,
    Tooltip, IconButton, Heading, Text
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

const DeedForm = forwardRef((props, ref) => {
    const [sahibi, setSahibi] = useState("");
    const [yevmiyeNo, setYevmiyeNo] = useState("");
    const [ciltNo, setCiltNo] = useState("");
    const [sahifeNo, setSahifeNo] = useState("");
    const [tapuTarihi, setTapuTarihi] = useState("");
    const [arsaPayi, setArsaPayi] = useState("");
    const [ownershipMethod, setOwnershipMethod] = useState(""); // Mülkiyet Metodu
    const [ownershipInfo, setOwnershipInfo] = useState(""); // Mülkiyet Bilgileri
    const [ownershipDate, setOwnershipDate] = useState(""); // Mülkiyet Tarihi

    useImperativeHandle(ref, () => ({
        getData: () => ({
            sahibi,
            yevmiyeNo,
            ciltNo,
            sahifeNo,
            tapuTarihi,
            arsaPayi,
            ownershipMethod,
            ownershipInfo,
            ownershipDate
        })  // Mülkiyet Bilgileri ve Tarihi'nin eklendiği yer
    }));

    return (
        <VStack as="form" align="stretch" spacing={4}>
            <Box alignItems="center" textAlign="center" mb={5}>
                <Heading mt={4} color="secondary.500" fontFamily="heading2" size="md">Tapu Bilgileri Formu</Heading>
                <Text fontFamily="heading4" fontSize="sm" color="gray.500">Aşağıdaki Form'da kullanıcıdan tapu bilgileri istenmektedir.</Text>

                <Grid mt={8} templateColumns="repeat(2, 1fr)" gap={6} mx="auto">
                    <Box>
                        <FormControl isRequired mb={3} id="sahibi">
                            <FormLabel color="secondary.500" fontFamily="heading2">Sahibi</FormLabel>
                            <Input type="text" value={sahibi} onChange={(e) => setSahibi(e.target.value)} />
                        </FormControl>
                        <FormControl mb={3} id="yevmiyeNo">
                            <FormLabel color="secondary.500" fontFamily="heading2">Yevmiye No</FormLabel>
                            <Input type="text" value={yevmiyeNo} onChange={(e) => setYevmiyeNo(e.target.value)} />
                        </FormControl>
                        <FormControl mb={3} id="ciltNo">
                            <FormLabel color="secondary.500" fontFamily="heading2">Cilt No</FormLabel>
                            <Input type="text" value={ciltNo} onChange={(e) => setCiltNo(e.target.value)} />
                        </FormControl>
                        <FormControl mb={3} id="sahifeNo">
                            <FormLabel color="secondary.500" fontFamily="heading2">Sahife No</FormLabel>
                            <Input type="text" value={sahifeNo} onChange={(e) => setSahifeNo(e.target.value)} />
                        </FormControl>
                        <FormControl isRequired mb={3} id="tapuTarihi">
                            <FormLabel color="secondary.500" fontFamily="heading2">Tapu Tarihi</FormLabel>
                            <Input type="date" value={tapuTarihi} onChange={(e) => setTapuTarihi(e.target.value)} />
                        </FormControl>
                    </Box>

                    <Box>
                        <FormControl mb={3} id="arsaPayi">
                            <FormLabel color="secondary.500" fontFamily="heading2">
                                Arsa Payı
                                <Tooltip label="Örn: 1/400" aria-label="Arsa payı hakkında bilgi">
                                    <IconButton aria-label="Bilgi" variant="ghost" icon={<InfoOutlineIcon />} size="xs" ml={2} />
                                </Tooltip>
                            </FormLabel>
                            <Input type="text" value={arsaPayi} onChange={(e) => setArsaPayi(e.target.value)} />
                        </FormControl>
                        <FormControl mb={3} id="ownershipMethod">
                            <FormLabel color="secondary.500" fontFamily="heading2">Mülkiyet Metodu
                                <Tooltip label="Mülkiyet edinimi hakkında bilgi. Örn: Satın Alma " aria-label="Mülkiyet edinimi hakkında bilgi.">
                                    <IconButton aria-label="Bilgi" variant="ghost" icon={<InfoOutlineIcon />} size="xs" ml={2} />
                                </Tooltip>
                            </FormLabel>
                            <Input type="text" value={ownershipMethod} onChange={(e) => setOwnershipMethod(e.target.value)} />
                        </FormControl>
                        <FormControl mb={3} id="ownershipInfo">
                            <FormLabel color="secondary.500" fontFamily="heading2">
                                Mülkiyet Bilgileri
                                <Tooltip label="Mülkiyet durumuyla ilgili hukiki açıklama, kısıtlama yoksa boş bırakınız. " aria-label="Mülkiyet bilgileri hakkında bilgi">
                                    <IconButton aria-label="Bilgi" variant="ghost" icon={<InfoOutlineIcon />} size="xs" ml={2} />
                                </Tooltip>
                            </FormLabel>
                            <Input type="text" value={ownershipInfo} onChange={(e) => setOwnershipInfo(e.target.value)} />
                        </FormControl>
                        <FormControl mb={3} id="ownershipDate">
                            <FormLabel color="secondary.500" fontFamily="heading2">Mülkiyet Tarihi</FormLabel>
                            <Input type="date" value={ownershipDate} onChange={(e) => setOwnershipDate(e.target.value)} />
                        </FormControl>
                    </Box>
                </Grid>
            </Box>
        </VStack>
    );
});

export default DeedForm;
