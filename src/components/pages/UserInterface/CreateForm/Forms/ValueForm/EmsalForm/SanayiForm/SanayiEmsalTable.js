import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

function SanayiEmsalTable({ emsaller, onEmsalSil }) {
    return (
        <Box position="relative" width="100%" overflowX="auto">
            
            <Table variant="simple" size="md" colorScheme="primary">
                <Thead bg="primary.700">
                    <Tr>
                        <Th fontFamily="heading1" color="white">Taşınmaz Alanı </Th>
                        <Th fontFamily="heading1" color="white">Kat Sayısı</Th>
                        <Th fontFamily="heading1" color="white">Kat Yüksekliği</Th>
                        <Th fontFamily="heading1" color="white">TAKS</Th>
                        <Th fontFamily="heading1" color="white">KAKS</Th>
                        <Th fontFamily="heading1" color="white">Değer</Th>
                        <Th fontFamily="heading1" color="white">Taşınmaz Sahibi</Th>
                        <Th fontFamily="heading1" color="white">Açıklama</Th>
                        <Th fontFamily="heading1" color="white">İşlemler</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {emsaller.map((emsal, index) => (
                        <Tr key={index} _hover={{ bg: "primary.100" }}>
                            <Td><Text>{emsal.tasinmazAlani} </Text></Td>
                            <Td>{emsal.katSayisi}</Td>
                            <Td>{emsal.katYuksekligi}</Td>
                            <Td>{emsal.taks}</Td>
                            <Td>{emsal.kaks}</Td>
                            <Td>{emsal.deger}</Td>
                            <Td>{emsal.tasinmazSahibi}</Td>
                            <Td>{emsal.acıklama}</Td>
                            <Td>
                                {/* Sil butonu */}
                                <Button colorScheme="red" size="sm" onClick={() => onEmsalSil(index)}>Sil</Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
}

export default SanayiEmsalTable;
