import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

function YerleşimEmsalTable({ emsaller, onEmsalSil }) {
  return (
    <Box overflowX="auto">
      <Table variant="simple" size="md" colorScheme="primary">
        <Thead bg="primary.700">
          <Tr>
            <Th fontFamily="heading1" color="white">Taşınmaz Alanı</Th>
            <Th fontFamily="heading1" color="white">TAKS</Th>
            <Th fontFamily="heading1" color="white">KAKS</Th>
            <Th fontFamily="heading1" color="white">Değer</Th>
            <Th fontFamily="heading1" color="white">Taşınmaz Sahibi</Th>
            <Th fontFamily="heading1" color="white">Açıklama</Th>
            <Th fontFamily="heading1" color="white">İşlemler</Th> {/* Yeni başlık */}
          </Tr>
        </Thead>
        <Tbody>
          {emsaller.map((emsal, index) => (
            <Tr key={index} _hover={{ bg: "primary.100" }}>
              <Td><Text fontFamily="body2">{emsal.tasinmazAlani}</Text></Td>
              <Td><Text fontFamily="body2">{emsal.taks}</Text></Td>
              <Td><Text fontFamily="body2">{emsal.kaks}</Text></Td>
              <Td><Text fontFamily="body2">{emsal.deger}</Text></Td>
              <Td><Text fontFamily="body2">{emsal.tasinmazSahibi}</Text></Td>
              <Td><Text fontFamily="body2">{emsal.aciklama}</Text></Td>
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

export default YerleşimEmsalTable;
