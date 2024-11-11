import React, { useState, useEffect } from 'react';
import { Box, Input, Button, Table, Thead, Tbody, Tr, Th, Td, Select, Text, Image, VStack, Flex } from "@chakra-ui/react";
import instance from '../../../../services/axios-firebase';
import { getCurrentUser } from '../../../../services/auth';

function MyProfile() {
    const [userID, setUserID] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [logo, setLogo] = useState("");
    const [companyInfo, setCompanyInfo] = useState({
        companyName: "",
        companyLocation: "",
        companyEstablishDate: "",
        agreementDate: "",
        agreementNo: ""
    });
    const [appraiser, setAppraiser] = useState({ name: "", title: "", spkNo: "" });
    const [appraisers, setAppraisers] = useState([]);
    const [showAppraiserForm, setShowAppraiserForm] = useState(false);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            const user = await getCurrentUser();
            if (user) {
                setUserID(user.uid);
                fetchProfileData(user.uid);
            }
        };
        fetchCurrentUser();
    }, []);

    useEffect(() => {
        updateProfileData(appraisers);
    }, [appraisers]);

    const fetchProfileData = async (userID) => {
        try {
            const response = await instance.get(`users/${userID}/profile.json`);
            if (response.data) {
                setLogo(response.data.logo);
                setCompanyInfo(response.data.companyInfo);
                setAppraisers(response.data.appraisers || []);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const updateProfileData = async (newAppraisers = []) => {
        try {
            const response = await instance.put(`users/${userID}/profile.json`, { logo, companyInfo, appraisers: newAppraisers });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };


    const handleLogoUpload = event => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setLogo(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleChange = event => {
        setCompanyInfo(prevInfo => ({ ...prevInfo, [event.target.name]: event.target.value }));
    };

    const handleEdit = () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            // When editing is finished, save the changes
            updateProfileData();
        }
    };

    const handleChangeAppraiser = event => {
        setAppraiser(prevAppraiser => ({ ...prevAppraiser, [event.target.name]: event.target.value }));
    };

    const handleAddAppraiser = () => {
        const updatedAppraisers = [...appraisers, appraiser];
        setAppraisers(updatedAppraisers);
        setAppraiser({ name: "", title: "", spkNo: "" });
        setShowAppraiserForm(false); // Hide the form after adding an appraiser
        updateProfileData(updatedAppraisers); // Update profile data in the database after adding an appraiser
    };

    return (
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" fontFamily="body">
            <Flex flexDirection={['column', 'row']}>
                <Image ml={24} mt={8} boxSize="180px" src={logo} alt="Company Logo" borderRadius="full" objectFit="cover" mb={[5, 0]} mr={[10, 5]} />

                <Box flex={1} p={4} shadow="xl" borderWidth="1px" borderRadius="lg" bg="white" display="flex" flexDirection={['column', 'row']} justifyContent="space-between" alignItems="center">
                    {/* Bilgiler kısmı */}
                    <VStack spacing={5} flex={1}>
                        {isEditing ? (
                            <Box>
                                <Input
                                    type="file"
                                    onChange={handleLogoUpload}
                                    accept="image/*"
                                    hidden
                                    id="upload"
                                />
                                <label htmlFor="upload">
                                    <Text as="span" colorScheme="blue" cursor="pointer" textDecoration="underline">Logo Yükle</Text>
                                </label>
                                <Input fontFamily="heading1" fontSize="md" type="text" name="companyName" value={companyInfo.companyName} onChange={handleChange} placeholder="Company Name" />
                                <Input fontFamily="heading1" fontSize="md" type="text" name="companyLocation" value={companyInfo.companyLocation} onChange={handleChange} placeholder="Company Location" />
                                <Input fontFamily="heading1" fontSize="md" type="date" name="companyEstablishDate" value={companyInfo.companyEstablishDate} onChange={handleChange} />
                                <Input fontFamily="heading1" fontSize="md" type="date" name="agreementDate" value={companyInfo.agreementDate} onChange={handleChange} />
                                <Input fontFamily="heading1" fontSize="md" type="text" name="agreementNo" value={companyInfo.agreementNo} onChange={handleChange} placeholder="Agreement No" />
                                <Button mt='0.5em' fontFamily="heading1" colorScheme="primary.900" variant="outline" onClick={handleEdit}>Kaydet</Button>
                            </Box>
                        ) : (
                            <Box>
                                <Box alignItems='center' justifyContent='baseline' display='flex'>
                                    <Text fontFamily="heading1" fontSize="lg">Company Name:</Text><Text ml='0.5em' color='teal.800' fontFamily="heading1" fontWeight='bold' fontSize="xl">{companyInfo.companyName}</Text>
                                </Box>
                                <Box alignItems='center' justifyContent='baseline' display='flex'>
                                    <Text fontFamily="heading1" fontSize="lg">Company Location:</Text><Text ml='0.5em' color='teal.800' fontFamily="heading1" fontWeight='bold' fontSize="xl">{companyInfo.companyLocation}</Text>
                                </Box>
                                <Box alignItems='center' justifyContent='baseline' display='flex'>
                                    <Text fontFamily="heading1" fontSize="lg">Company Establish Date:</Text><Text ml='0.5em' color='teal.800' fontFamily="heading1" fontWeight='bold' fontSize="xl">{new Date(companyInfo.companyEstablishDate).toLocaleDateString()}</Text>
                                </Box>
                                <Box alignItems='center' justifyContent='baseline' display='flex'>
                                    <Text fontFamily="heading1" fontSize="lg">Agreement Date:</Text><Text ml='0.5em' color='teal.800' fontFamily="heading1" fontWeight='bold' fontSize="xl">{new Date(companyInfo.agreementDate).toLocaleDateString()}</Text>
                                </Box>
                                <Box alignItems='center' justifyContent='baseline' display='flex'>
                                    <Text fontFamily="heading1" fontSize="lg">Agreement No:</Text><Text ml='0.5em' color='teal.800' fontFamily="heading1" fontWeight='bold' fontSize="xl">{companyInfo.agreementNo}</Text>
                                </Box>
                            </Box>
                        )}
                    </VStack>

                    {/* Sağdaki Düzenle butonu */}
                    {!isEditing && (
                        <Button _hover={{
                            borderColor: 'teal.300',
                            backgroundColor: 'transparent',
                            color: 'teal.300',
                            transition: 'all 0.3s'
                        }} colorScheme="primary.900" variant="outline" onClick={handleEdit} mr='1em' ml={[0, 5]} fontFamily="heading1">Düzenle</Button>
                    )}

                </Box>
            </Flex>

            <Box borderRadius="md" mt="20px" bg="secondary.900" p={5} >
                <Button
                    fontFamily="heading1" borderColor="white"
                    color="white"
                    colorScheme="secondary"
                    variant="outline"
                    onClick={() => setShowAppraiserForm(true)}
                    _hover={{
                        borderColor: 'teal.300',
                        backgroundColor: 'transparent',
                        color: 'teal.300',
                        transition: 'all 0.3s'
                    }}
                >Değerleme Uzmanı Ekle</Button>

                {showAppraiserForm && (
                    <VStack borderRadius="md" p={8} mt={8} backgroundColor="white" spacing={5}>
                        <Input type="text" name="name" value={appraiser.name} onChange={handleChangeAppraiser} />
                        <Select name="title" value={appraiser.title} onChange={handleChangeAppraiser}>
                            <option value="Gayrimenkul Değerleme Uzmanı">Gayrimenkul Değerleme Uzmanı</option>
                            <option value="Sorumlu Gayrimenkul Değerleme Uzmanı">Sorumlu Gayrimenkul Değerleme Uzmanı</option>
                            <option value="Konut Değerleme Uzmanı">Konut Değerleme Uzmanı</option>
                            <option value="Gayrimenkul Değerleme Uzman Yardımcısı">Gayrimenkul Değerleme Uzman Yardımcısı</option>
                        </Select>
                        <Input type="number" name="spkNo" value={appraiser.spkNo} onChange={handleChangeAppraiser} />
                        <Button colorScheme="secondary.900" variant="outline" onClick={handleAddAppraiser}>Uzmanı Ekle</Button>
                    </VStack>
                )}

                {appraisers.length > 0 && (
                    <Table p={4} borderRadius="md" variant="simple" mt={5} backgroundColor="white">
                        <Thead>
                            <Tr>
                                <Th>AD-SOYAD</Th>
                                <Th>ÜNVAN</Th>
                                <Th>SPK NO.</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {appraisers.map((appraiser, index) => (
                                <Tr key={index}>
                                    <Td>{appraiser.name}</Td>
                                    <Td>{appraiser.title}</Td>
                                    <Td>{appraiser.spkNo}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                )}
            </Box>
        </Box>

    );
}

export default MyProfile;
