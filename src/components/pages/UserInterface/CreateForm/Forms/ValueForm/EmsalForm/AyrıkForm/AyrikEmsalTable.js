import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

function AyrikEmsalTable({ emsaller, onEmsalSil }) {
    return (
        <Box position="relative" width="100%" overflowX="auto" mt={8} mb={8}>
            
            <Table mb={8} variant="simple" size="md" colorScheme="primary">
                <Thead bg="primary.700">
                    <Tr>
                        <Th fontFamily="heading1" color="white">Ön Bahçe Mesafesi</Th>
                        <Th fontFamily="heading1" color="white">Yan Bahçe Mesafesi</Th>
                        <Th fontFamily="heading1" color="white">Kat Yüksekliği</Th>
                        <Th fontFamily="heading1" color="white">Kat Sayısı</Th>
                        <Th fontFamily="heading1" color="white">Derinlik</Th>
                        <Th fontFamily="heading1" color="white">Cephe</Th>
                        <Th fontFamily="heading1" color="white">Değer</Th>
                        <Th fontFamily="heading1" color="white">Taşınmaz Sahibi</Th>
                        <Th fontFamily="heading1" color="white">Açıklama</Th>
                        <Th fontFamily="heading1" color="white">İşlemler</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {emsaller.map((emsal, index) => (
                        <Tr key={index} _hover={{ bg: "primary.100" }}>
                            <Td><Text>{emsal.onBahceMesafesi} </Text></Td>
                            <Td>{emsal.yanBahceMesafesi}</Td>
                            <Td>{emsal.katYuksekligi}</Td>
                            <Td>{emsal.katSayisi}</Td>
                            <Td>{emsal.derinlik}</Td>
                            <Td>{emsal.cephe}</Td>
                            <Td>{emsal.deger}</Td>
                            <Td>{emsal.tasinmazSahibi}</Td>
                            <Td>{emsal.aciklama}</Td>
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

export default AyrikEmsalTable;
