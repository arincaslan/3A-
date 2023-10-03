import React from 'react';
import { Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const PropertyPhysicalInfo = ({ info, currentPage, renderPageFooter }) => {
  let yerelZeminSinifiAciklama;
  let zeminGrubuAciklama;
  let zeminFormasyonCinsiAciklama;
  let zeminDepremBolgeDerecesiAciklama;

  switch (info.zeminData.zeminFormasyonCinsi) {
    case 'Silt':
      zeminFormasyonCinsiAciklama = "Silt, genellikle kum ve kil arasında boyutlarda olan ve su içerisinde kolayca süspansiyon halinde bulunabilen bir malzemedir. Bu tür bir zemin genellikle suyun hareketliliğini kısıtlar ve temel inşaatları için potansiyel problemler oluşturabilir";
      break;
    case 'Kil':
      zeminFormasyonCinsiAciklama = "Kil, genellikle çok küçük mineral parçacıklardan oluşan doğal bir malzemedir. Kil zeminler genellikle suyu içinde hapseder ve kuruduklarında çatlarlar. Bu, yapıları desteklemek için kullanıldığında potansiyel sorunlara yol açabilir";
      break;
    case 'Kum':
      zeminFormasyonCinsiAciklama = "Kum, genellikle sert, dirençli ve suya doygun bir malzemedir. Kumlu zeminler genellikle iyi drenaj özelliklerine sahip olup, inşaat projeleri için genellikle iyi bir zemin oluşturur";
      break;
    case 'Çakıl':
      zeminFormasyonCinsiAciklama = "Çakıl, genellikle suya doygun ve yüksek geçirgenliğe sahip bir malzemedir. Çakıllı zeminler genellikle iyi drenaj özelliklerine sahip olup, inşaat projeleri için genellikle iyi bir zemin oluşturur";
      break;
    case 'Torf':
      zeminFormasyonCinsiAciklama = "Torf, genellikle organik materyallerden oluşan yumuşak ve suyu hapseden bir malzemedir. Bu tür zeminler genellikle yapıları desteklemek için uygun olmayabilir";
      break;
    case 'Kaya':
      zeminFormasyonCinsiAciklama = "Kaya, genellikle yüksek mukavemet ve dayanıklılık özelliklerine sahip bir malzemeyi temsil eder. Kayalık zeminler genellikle yapıların temelleri için mükemmel bir zemin oluşturur";
      break;
  }

  switch (info.zeminData.zeminDepremBolgeDerecesi) {
    case '1':
      zeminDepremBolgeDerecesiAciklama = "1. derece deprem bölgesi, Türkiye'deki en yüksek sismik risk seviyesini temsil eder. Bu, bölgedeki binaların sismik aktiviteye karşı özellikle dayanıklı olmaları gerektiği anlamına gelir";
      break;
    case '2':
      zeminDepremBolgeDerecesiAciklama = "2. derece deprem bölgesi, Türkiye'deki orta seviye sismik risk seviyesini temsil eder. Bu bölgedeki binaların hala deprem standartlarına uygun olması gerekmektedir, ancak 1. derece bölgeye kıyasla sismik aktivite beklenenden daha düşüktür";
      break;
    case '3':
      zeminDepremBolgeDerecesiAciklama = "3. derece deprem bölgesi, Türkiye'deki en düşük sismik risk seviyesini temsil eder. Bu bölgedeki binaların sismik aktiviteye dayanıklı olmaları gerekmektedir, ancak diğer bölgelere kıyasla daha düşük bir seviyede";
      break;
    case '4':
      zeminDepremBolgeDerecesiAciklama = "4. derece deprem bölgesi, Türkiye'deki sismik riskin çok düşük olduğu bölgeyi temsil eder. Bu bölgedeki yapıların deprem standartlarına uygun olmaları gerekmektedir, ancak sismik aktivitenin nadir olduğu anlamına gelir";
      break;
  }
  if (info.zeminData.yerelZeminSinifi === 'Z1') {
    yerelZeminSinifiAciklama = 'Bu sınıf, zeminin en iyi sismik performansına sahip olduğunu gösterir'
  } else if (info.zeminData.yerelZeminSinifi === 'Z2') {
    yerelZeminSinifiAciklama = 'Bu sınıf, zeminin orta seviye sismik performansına sahip olduğunu gösterir'
  } else if (info.zeminData.yerelZeminSinifi === 'Z3') {
    yerelZeminSinifiAciklama = 'Bu sınıf, zeminin düşük sismik performansına sahip olduğunu gösterir'
  } else {
    yerelZeminSinifiAciklama = 'Bu sınıf, zeminin sismik performansını ifade eder'
  }

  if (info.zeminData.zeminGrubu === 'A') {
    zeminGrubuAciklama = 'Bu grup, zeminin en iyi performansına sahip olduğunu gösterir';
  } else if (info.zeminData.zeminGrubu === 'B') {
    zeminGrubuAciklama = 'Bu grup, zeminin orta seviye performansına sahip olduğunu gösterir';
  } else if (info.zeminData.zeminGrubu === 'C') {
    zeminGrubuAciklama = 'Bu grup, zeminin düşük performansına sahip olduğunu gösterir';
  } else {
    zeminGrubuAciklama = 'Bu grup, zeminin performansını ifade eder';
  }
  return (
    <Box p="5" borderRadius="md" boxShadow="lg" maxHeight="2000px" >

      <Box style={{pageBreakAfter: "always"}} paddingBottom="50px" position="relative" minHeight="950px" >
        <Heading borderBottom="2px solid" borderColor="teal.500" pb={6} fontFamily="heading2" color="teal" fontWeight="bold" as="h2" size="xl">BÖLÜM 6 - Gayrimenkul Fiziksel Bilgileri / Yapı ve Arazi Bilgileri</Heading>
        <Text fontFamily="body"  lineHeight="tall">Adres: {info.tapuData.location.il} / {info.tapuData.location.ilce} / {info.tapuData.location.mahalle}</Text>
        <Text fontFamily="body" lineHeight="tall">Arazi Alanı: {info.tapuData.parsel.yuzolcumu} m². Bu alan, arsanın toplam metre kare cinsinden büyüklüğünü ifade eder.</Text>
        <Heading fontFamily="heading" color="secondary.700" fontWeight="bold" as="h3" size="lg" mt={6}>Zemin Bilgileri</Heading>
        <Text mt={4}>Aşağıdaki tabloda verilen veriler aracılığıyla detaylı bir zemin analizi yapılmıştır. Her bir değer ve kıstas, zeminin farklı özelliklerini temsil eder ve bir arada değerlendirildiğinde zeminin genel durumunu ve yapı inşa etme potansiyelini anlaşılmasına yardımcı olur.</Text>
        <Table variant="simple" size="md" borderWidth="1px" borderColor="gray.300" my={4}>
          <Thead>
            <Tr>
              <Th borderColor="gray.300" borderWidth="1px" fontFamily="heading2">Veri</Th>
              <Th borderColor="gray.300" borderWidth="1px" fontFamily="heading2">Değer</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Bina Önem Katsayısı</Td>
              <Td Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.binaOnemKatsayisi}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Etkin Yer İvme Katsayısı</Td>
              <Td Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.etkinYerIvmeKatsayisi}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Yerel Zemin Sınıfı</Td>
              <Td Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.yerelZeminSinifi}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Zemin Deprem Bölge Derecesi</Td>
              <Td Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.zeminDepremBolgeDerecesi}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Zemin Emniyet Gerilmesi</Td>
              <Td Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.zeminEmniyetGerilmesi}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Zemin Formasyon Cinsi</Td>
              <Td Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.zeminFormasyonCinsi}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Zemin Grubu</Td>
              <Td Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.zeminGrubu}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Zemin Hakim Titreşim Periyodu</Td>
              <Td Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.zeminHakimTitresimPeriyodu}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Zemin Karakteristik Periyot TA</Td>
              <Td Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.zeminKarakteristikPeriyotTA}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Zemin Karakteristik Periyot TB</Td>
              <Td Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.zeminKarakteristikPeriyotTB}</Td>
            </Tr>
            <Tr>
              <Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" bg="gray.50">Zemin Yatak Katsayısı</Td>
              <Td Td borderColor="gray.300" borderWidth="1px" fontFamily="body2" color="secondary.700">{info.zeminData.zeminYatakKatsayisi}</Td>
            </Tr>
          </Tbody>
        </Table>

      
          {renderPageFooter(currentPage)}
      
      </Box>

      <Box style={{ pageBreakAfter:"always" }} paddingBottom="50px" position="relative" minHeight="950px" >
      <Text mt={4}>
        Bir binanın güvenli ve dayanıklı olmasını sağlamak için zemin bilgileri büyük önem taşır. Değerlenen binanın önem katsayısı {info.zeminData.binaOnemKatsayisi} çıkmıştır. Binanın Önem katsayısı binanın kullanım amacına göre değişir ve yapıyı destekleyen zeminin önem derecesini belirler. Zeminin deprem sırasında hareketine ne kadar direnç gösterebileceğini belirleyen bir unsur etkin yer ivme katsayısıdır. Değerlenen gayrimenkul için bu katsayı {info.zeminData.etkinYerIvmeKatsayisi} olarak belirlenmiştir, bu değişken zeminin genel yapısına ve sismik aktiviteye olan direncine bağlıdır.
        Yerel zemin sınıfı, {info.zeminData.yerelZeminSinifi} olarak belirlenmiştir. {yerelZeminSinifiAciklama}. Zeminin deprem bölge derecesi {info.zeminData.zeminDepremBolgeDerecesi} olarak belirlenmiştir. {zeminDepremBolgeDerecesiAciklama}.
        Zeminin emniyet gerilmesi {info.zeminData.zeminEmniyetGerilmesi} olarak tespit edilmiştir. Bu değer zeminin ne kadar güvenli olduğunu belirler.
        Zemin formasyon cinsi {info.zeminData.zeminFormasyonCinsi} olarak belirlenmiştir. {zeminFormasyonCinsiAciklama}. Zemin grubu ise {info.zeminData.zeminGrubu} olarak saptanmıştır. {zeminGrubuAciklama}.
        Zeminin hakim titreşim periyodu {info.zeminData.zeminHakimTitresimPeriyodu} olarak bulunmuştur. Bu değer, zeminin hangi periyotta titreşim göstereceğini belirler.
        Zeminin karakteristik periyotları TA ve TB {info.zeminData.zeminKarakteristikPeriyotTA} ve {info.zeminData.zeminKarakteristikPeriyotTB} olarak belirlenmiştir. Bu değerler, zeminin belirli periyotlardaki hareketlerini belirler.
        Zeminin yatak katsayısı {info.zeminData.zeminYatakKatsayisi} olarak belirlenmiştir. Bu katsayı, zeminin deprem sırasında ne kadar stabil kalabileceğini belirler.
      </Text>
      {renderPageFooter(currentPage+1)}
      </Box>
      

    </Box>
  );
}

export default PropertyPhysicalInfo;
