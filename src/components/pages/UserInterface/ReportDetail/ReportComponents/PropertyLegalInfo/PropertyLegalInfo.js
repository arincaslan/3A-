import { Box, Heading, Text, Image } from '@chakra-ui/react';

const PropertyLegalInfo = ({ info }) => {
    const imageSrc = info.tapuData.parsel.imarResmi
    
    
    return (
        <Box>
            <Heading fontWeight="bold" as="h1" size="lg" my={4}>BÖLÜM 4 - GAYRİMENKULLERİN MÜLKİYET HAKKI VE İMAR BİLGİLERİ / GAYRİMENKULÜN YASAL DURUMUNA İLİŞKİN BİLGİLER / YASAL VE İMAR BİLGİLERİ:</Heading>

            <Heading fontWeight="bold" as="h2" size="md" my={3}>4–1 Gayrimenkulün Mülkiyet Bilgileri</Heading>
            <Text my={2}>Mülkiyet Sahibi: {info.tapuData.deed.sahibi}</Text>
            <Text my={2}>Mülkiyet Bilgisi: {info.tapuData.deed.ownershipInfo}</Text>
            <Text my={2}>Mülkiyet Edinme Yöntemi: {info.tapuData.deed.ownershipMethod}</Text>
            <Text my={2}>Mülkiyet Edinme Tarihi: {info.tapuData.deed.ownershipDate}</Text>

            <Heading fontWeight="bold" as="h2" size="md" my={3}>4–2 Gayrimenkulün İmar Bilgileri</Heading>
            <Text my={2}>Parsel Niteliği: {info.tapuData.parsel.nitelik}</Text>
            <Text my={2}>Toplam Yüzölçümü: {info.tapuData.parsel.yuzolcumu}</Text>
            <Text my={2}>TAKS: {info.tapuData.parsel.taks}</Text>
            <Text my={2}>KAKS: {info.tapuData.parsel.kaks}</Text>

            <Heading fontWeight="bold" as="h2" size="md" my={3}>4–3 Gayrimenkulün Yasal Durumu</Heading>
            <Text my={2}>Tapu Tarihi: {info.tapuData.deed.tapuTarihi}</Text>
            <Text my={2}>Cilt No: {info.tapuData.deed.ciltNo}</Text>
            <Text my={2}>Sahife No: {info.tapuData.deed.sahifeNo}</Text>
            <Text my={2}>Yevmiye No: {info.tapuData.deed.yevmiyeNo}</Text>
            <Heading fontWeight="bold" as="h2" size="md" my={3}>4–4 Yasal ve İmar Sorunları</Heading>
            {info.tapuData.parsel.imarDurumu != "İmarlı" ? (
                <Text my={2}>Gayrimenkulün imar durumu: {info.tapuData.parsel.imarDurumu}. Bu durum çeşitli yasal ve imar sorunlarına neden olabilir.</Text>
            ) : (
                <Text my={2}>Değerlemeye konu olan gayrimenkulün herhangi bir yasal veya imar sorunu bulunmamaktadır.</Text>
            )}

            <Heading fontWeight="bold" as="h2" size="md" my={3}>4–5 İmar Durumu Resmi</Heading>
            <Image src={imageSrc} alt="İmar Resmi"   />
        </Box>
    );
}

export default PropertyLegalInfo;
