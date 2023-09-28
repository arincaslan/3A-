import { Box, Heading, List, ListItem, Icon, ListIcon, Image, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const PropertyLegalInfo = ({ info, renderPageFooter }) => {
    const imageSrc = info.tapuData.parsel.imarResmi;
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }


    return (
        <Box minHeight="1000px" p="5" borderRadius="md" boxShadow="lg">

            <div style={{ pageBreakAfter: "always" , paddingBottom: "50px", position:"relative" }} >
                <Heading fontFamily="heading2" color="teal" fontWeight="bold" as="h1" size="lg" mt={2}>BÖLÜM 4 - Gayrimenkulün Mülkiyet İmar ve Yasal Durumuna İlişkin Bilgiler </Heading>

                <Heading mb={4} mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md" >4.1) Gayrimenkulün Mülkiyet Bilgileri</Heading>
                <List spacing={4}>
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Mülkiyet Sahibi: {info.tapuData.deed.sahibi}</Text>
                    </ListItem>
                    {info.tapuData.deed.ownershipInfo && (
                        <ListItem display="flex" alignItems="center">
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <Text my={2}>Mülkiyet Bilgisi: {info.tapuData.deed.ownershipInfo}</Text>
                        </ListItem>
                    )}

                    {info.tapuData.deed.ownershipMethod && (
                        <ListItem display="flex" alignItems="center">
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <Text my={2}>Mülkiyet Edinme Yöntemi: {info.tapuData.deed.ownershipMethod}</Text>
                        </ListItem>
                    )}

                    {info.tapuData.deed.ownershipDate && (
                        <ListItem display="flex" alignItems="center">
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <Text my={2}>Mülkiyet Edinme Tarihi: {formatDate(info.tapuData.deed.ownershipDate)}</Text>
                        </ListItem>
                    )}

                </List>
                <Heading mb={4} mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md" >4.2) Gayrimenkulün İmar Bilgileri</Heading>
                <List spacing={3}>
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Parsel Niteliği: {info.tapuData.parsel.nitelik}</Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Toplam Yüzölçümü: {info.tapuData.parsel.yuzolcumu}</Text>
                    </ListItem>
                    {info.tapuData.parsel.taks && (
                        <ListItem display="flex" alignItems="center">
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <Text my={2}>TAKS: {info.tapuData.parsel.taks}</Text>
                        </ListItem>
                    )}

                    {info.tapuData.parsel.kaks && (
                        <ListItem display="flex" alignItems="center">
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <Text my={2}>KAKS: {info.tapuData.parsel.kaks}</Text>
                        </ListItem>
                    )}

                </List>
                <Heading mb={4} mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md" >4.3) Gayrimenkulün Yasal Durumu</Heading>
                <List spacing={3}>
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Tapu Tarihi: {formatDate(info.tapuData.deed.tapuTarihi)}</Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Cilt No: {info.tapuData.deed.ciltNo}</Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Sahife No: {info.tapuData.deed.sahifeNo}</Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        <Text my={2}>Yevmiye No: {info.tapuData.deed.yevmiyeNo}</Text>
                    </ListItem>
                </List>
                <Heading mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md" >4.4) Yasal ve İmar Sorunları</Heading>
                {info.tapuData.parsel.imarDurumu != "İmarlı" ? (
                    <Text my={2}>Gayrimenkulün imar durumu: {info.tapuData.parsel.imarDurumu}. Bu durum çeşitli yasal ve imar sorunlarına neden olabilir.</Text>
                ) : (
                    <Text my={2}>Değerlemeye konu olan gayrimenkulün herhangi bir yasal veya imar sorunu bulunmamaktadır.</Text>
                )}
                <div style={{position: "absolute", bottom: "10px", width: "100%", textAlign: "center" }} >
                    {renderPageFooter(5)}
                </div>
            </div>
            <Box width="790px" maxH="1050px" height="1000px"> {/* A4 boyutu genişlik olarak 210mm ve yükseklik olarak 297mm'dir */}
                <Heading mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md" mb={6} >4.5) İmar Durumu Resmi</Heading>

                {/* maxHeight'tan otomatik olarak başlık yüksekliği çıkarılacaktır. */}
                <Image height="950px" src={imageSrc} alt="İmar Resmi" />
            </Box>

        </Box>
    );
}

export default PropertyLegalInfo;
