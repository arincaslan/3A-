import { Box, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'; // Eğer madde işareti olarak bu ikonu kullanmak istemezseniz değiştirebilirsiniz.

const Declaration = () => {
    

    return (
        <Box style={{ position: "relative", pageBreakAfter: "always" }} minHeight="1000px" p={5} borderRadius="md" boxShadow="lg">
            <Heading borderBottom="2px solid" borderColor="teal.500" pb={6} color="teal" fontFamily="heading2" fontWeight="bold" as="h1" size="lg" my={4}>DEĞERLEME RAPORU BEYAN, KABUL VE ÖNGÖRÜLERİ</Heading>

            <Heading mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md" my={3}>BEYANLARIMIZ</Heading>
            <List mt={4} spacing={3}>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>Raporda sunulan bulgular, değerleme uzmanının elde ettiği bilgiler çerçevesinde doğrudur.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>Raporda yer alan analizler ve sonuçlar, belirtilen varsayımlar ve koşullarla sınırlıdır.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>Değerleme uzmanının, değerleme raporunun konusu olan gayrimenkul ve değerlemeyi
                        talep eden Müşteri ile herhangi bir ilişkisi bulunmamaktadır.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>Değerleme uzmanının, değerleme raporunun konusu olan gayrimenkul ve değerlemeyi
                        talep eden Müşteri hakkında hiç bir önyargısı bulunmamaktadır.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>Değerleme uzmanı, değerleme raporunun konusu olan gayrimenkulü kişisel olarak
                        incelemiştir.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>Değerleme uzmanı, bu raporun düzenlenmesi için gerekli mesleki eğitim, bilgi ve deneyime
                        sahiptir.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>Değerleme hizmetinin bedeli, değerleme raporu ile ilgili her hangi bir şarta bağlı değildir.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>Değerleme raporu, Uluslararası Değerleme Standartları’na (IVSC) uygun olarak
                        hazırlanmıştır.</Text>
                </ListItem>
            </List>

            <Heading mt={4} fontFamily="heading2" fontWeight="bold" as="h2" size="md" my={3}>KABULLER VE ÖNGÖRÜLER</Heading>
            <List mt={4} spacing={3}>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>Resmi kurumlardan temin edilen bilgi ve belgelerin doğru olduğu ve güvenilir olduğu kabul
                        edilmiş, bilgilerin doğruluğu teyit edilmemiştir.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>Değerleme raporu içerisinde kullanılan harita, kroki, çizim ve şekiller, konuların
                        kavranmasında kolaylık sağlamak amacı ile değerleme raporuna eklenmiştir. Referans
                        olarak kabul edilemezler.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>Değerleme raporu içerisinde aksi belirtilmediği sürece yer altı zenginlikleri dikkate
                        alınmamıştır.</Text>
                </ListItem>

                <ListItem display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text my={2}>Değerleme raporu içerisinde yer alan projeksiyonlar, mevcut ekonomik koşullar dikkate
                        alınarak, gelecekte ekonomik koşulların istikrarlı olacağı kabul edilerek yapılmıştır.</Text>
                </ListItem>

            </List>

        </Box>
    );
}

export default Declaration;
