import React, { useState, useEffect } from 'react';
import { auth, db } from '../../../../services/FireConfig';
import { Box, Heading, Select, Input, Flex, Text, Grid } from '@chakra-ui/react';
import ReportCard from './ReportCard/ReportCard';

function MyReports() {
    const [reports, setReports] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {
        const userID = auth.currentUser.uid;
        const reportsRef = db.ref(`users/${userID}/reports`);

        reportsRef.on('value', (snapshot) => {
            const data = snapshot.val();
            const processedData = Object.keys(data).map((id) => ({
                id: id,
                data: data[id]
            }));

            // Sort reports based on sortOrder
            if (sortOrder === 'asc') {
                processedData.sort((a, b) => new Date(a.data.projectData.valuationDate) - new Date(b.data.projectData.valuationDate));
            } else {
                processedData.sort((a, b) => new Date(b.data.projectData.valuationDate) - new Date(a.data.projectData.valuationDate));
            }

            setReports(processedData);
        });

        return () => {
            reportsRef.off();
        };
    }, [sortOrder]);

    const filteredReports = reports.filter((report) =>
        report.data.projectData.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box p={5}>
            <Flex justifyContent="space-between" alignItems="center" mb={6}>
                <Box>
                    <Heading mb={2} color="teal.500">Raporlarım</Heading>
                    <Text fontSize="lg" color="gray.600">Raporlarınızı bu sayfadan seçerek görüntüleyebilirsiniz.</Text>
                </Box>
                <Select width="200px" defaultValue={sortOrder} onChange={(e) => setSortOrder(e.target.value)} bg="white">
                    <option value="desc">En Yeni İlk</option>
                    <option value="asc">En Eski İlk</option>
                </Select>
            </Flex>

            <Box mb={4}>
                <Input
                    variant="flushed"
                    placeholder="Raporları ara..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Box>

            <Box backgroundColor="green.800" p={5}>
                <Grid templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']} gap={6}>
                    {filteredReports.map((report) => (
                        <ReportCard key={report.id} report={report.data} />
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default MyReports;
