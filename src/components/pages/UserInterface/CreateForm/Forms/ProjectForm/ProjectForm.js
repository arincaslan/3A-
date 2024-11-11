import { useState } from 'react';
import {
    Box,
    Grid,
    GridItem,
    Input,
    Button,
    FormControl,
    FormLabel,
    Select,
    Text,
    Tooltip,
    Icon,
    Flex
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

function ProjectForm({ onNext, profileData }) {
    const [projectName, setProjectName] = useState('');
    const [location, setLocation] = useState('');
    const [requestingCompany, setRequestingCompany] = useState('');
    const [valuationDate, setValuationDate] = useState('');
    const [reportDate, setReportDate] = useState('');
    const [reportNo, setReportNo] = useState('');
    const [evaluator, setEvaluator] = useState('');
    const [inspector, setInspector] = useState('');
    const [customerEstablishmentDate, setCustomerEstablishmentDate] = useState('');
    const [registeredCapital, setRegisteredCapital] = useState('');
    const [paidCapital, setPaidCapital] = useState('');
    const [valuationRequest, setValuationRequest] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const projectData = {
            projectName,
            requestingCompany,
            valuationDate,
            reportDate,
            reportNo,
            evaluator,
            inspector,
            customerEstablishmentDate,
            registeredCapital,
            paidCapital,
            valuationRequest
        };

        onNext(projectData);
    }
    return (
        <Box width={[
            "800px", // base
            "30em", // 480px upwards
            "48em", // 768px upwards
            "800px", // 992px upwards
          ]} p={6} boxShadow="2xl" bg="white" rounded="md">
            <Text fontSize="2xl" fontWeight="bold" color="primary.700" fontFamily="heading1" mb={4}>
                1. Adım: Proje Bilgileri Formu
            </Text>
            <Text fontFamily="heading4" color="primary.500" mb={6}>
                Bu form'da rapor için genel müşteri ve proje bilgileri toplanır. Bu bilgileri müşterinizden talep edebilirsiniz.
                Kırmızı yıldızlı işaretlenmiş bilgiler doldurmanız gerekmektedir.
            </Text>

            <form onSubmit={handleSubmit}>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    {/* Sol Kolon */}
                    <GridItem>
                        <FormControl id="projectName" isRequired>
                            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Proje Adı</FormLabel>
                            <Input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                        </FormControl>


                        <FormControl mt={4} id="valuationDate" isRequired>
                            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Değerleme Tarihi</FormLabel>
                            <Input type="date" value={valuationDate} onChange={(e) => setValuationDate(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4} id="reportDate" isRequired>
                            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Rapor Tarihi</FormLabel>
                            <Input type="date" value={reportDate} onChange={(e) => setReportDate(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4} id="reportNo" isRequired>
                            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Rapor No</FormLabel>
                            <Input type="number" value={reportNo} onChange={(e) => setReportNo(e.target.value)} />
                        </FormControl>
                    </GridItem>

                    {/* Sağ Kolon */}
                    <GridItem>
                        <FormControl id="requestingCompany" isRequired>
                            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">
                                Değerlemeyi Talep Eden Firma (Müşteri)
                                <Tooltip label="Şahıs talebi ise müşteri Ad Soyad Giriniz" aria-label="A tooltip">
                                    <Icon as={InfoOutlineIcon} ml={2} color="secondary.500" />
                                </Tooltip>
                            </FormLabel>
                            <Input type="text" value={requestingCompany} onChange={(e) => setRequestingCompany(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4} id="customerEstablishmentDate">
                            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">
                                Müşteri Kuruluş Tarihi
                                <Tooltip label="Müşteri şahıs ise doldurmanıza gerek yoktur." aria-label="A tooltip">
                                    <Icon as={InfoOutlineIcon} ml={2} color="secondary.500" />
                                </Tooltip>
                            </FormLabel>
                            <Input type="date" value={customerEstablishmentDate} onChange={(e) => setCustomerEstablishmentDate(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4} id="registeredCapital" >
                            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Müşteri Kayıtlı Sermaye
                                <Tooltip label="Müşteri şahıs ise doldurmanıza gerek yoktur." aria-label="A tooltip">
                                    <Icon as={InfoOutlineIcon} ml={2} color="secondary.500" />
                                </Tooltip>
                            </FormLabel>
                            <Input type="number" value={registeredCapital} onChange={(e) => setRegisteredCapital(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4} id="paidCapital" >
                            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Müşteri Ödenmiş Sermaye
                                <Tooltip label="Müşteri şahıs ise doldurmanıza gerek yoktur." aria-label="A tooltip">
                                    <Icon as={InfoOutlineIcon} ml={2} color="secondary.500" />
                                </Tooltip>
                            </FormLabel>
                            <Input type="number" value={paidCapital} onChange={(e) => setPaidCapital(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4} id="valuationRequest" isRequired>
                            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Müşteri Değerleme Talebi
                                <Tooltip label="Örn: Betonarme Karkas Bina Değerlemesi" aria-label="A tooltip">
                                    <Icon as={InfoOutlineIcon} ml={2} color="secondary.500" />
                                </Tooltip></FormLabel>
                            <Input type="text" value={valuationRequest} onChange={(e) => setValuationRequest(e.target.value)} />
                        </FormControl>
                    </GridItem>
                </Grid>

                <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={6}>
                    {/* Sol Kolon */}
                    <GridItem>
                        <FormControl id="evaluator" isRequired>
                            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Değerleme Uzmanı</FormLabel>
                            <Select placeholder="Seçiniz" value={evaluator} onChange={(e) => setEvaluator(e.target.value)}>
                                {profileData.appraisers.map((appraiser, index) => (
                                    <option key={index} value={appraiser.name}>{appraiser.name}</option>
                                ))}
                            </Select>
                        </FormControl>
                    </GridItem>

                    {/* Sağ Kolon */}
                    <GridItem>
                        <FormControl id="inspector" isRequired>
                            <FormLabel fontWeight="bold" color="primary.700" fontFamily="heading2">Kontrol Uzmanı</FormLabel>
                            <Select placeholder="Seçiniz" value={inspector} onChange={(e) => setInspector(e.target.value)}>
                                {profileData.appraisers.map((appraiser, index) => (
                                    <option key={index} value={appraiser.name}>{appraiser.name}</option>
                                ))}
                            </Select>
                        </FormControl>
                    </GridItem>
                </Grid>

                <Flex justifyContent="center" mt={6}>
                    <Button colorScheme="teal" w={24} type="submit" fontFamily="body">İleri</Button>
                </Flex>
            </form>
        </Box>
    );
}

export default ProjectForm;
