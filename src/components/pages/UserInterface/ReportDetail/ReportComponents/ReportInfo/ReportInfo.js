import { Box, Heading, Text, Divider } from "@chakra-ui/react";

function ReportInfo({ info, profileInfo, renderPageFooter }) {
  const evaluator = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.evaluator);
  const inspector = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.inspector);
  return (


    <Box
      style={{ position: "relative", pageBreakAfter: "always" }}
      height="auto"
      overflowY="auto"
      padding={6}
      borderRadius="lg"
      boxShadow="lg"
      bgColor="white"
      minHeight="1000px"
    >
      <Heading
        borderBottom="2px solid" borderColor="teal.500" pb={6}
        as="h2"
        size="lg"
        fontWeight="bold"
        color="teal"
        mb={6}
        fontFamily="heading2"  // Roboto
      >
        BÖLÜM 1 - Genel Rapor Bilgileri
      </Heading>
      <Heading
        as="h3"
        size="md"
        mb={2}
        fontWeight="bold"
        fontFamily="heading2"  // Roboto
      >
        1.1) Rapor Tarihi ve Numarası
      </Heading>
      <Text mb={8} fontSize="16px" fontFamily="body">  {/* Raleway */}
        Bu rapor şirketimiz tarafından {new Date(info.projectData.valuationDate).toLocaleDateString()} tarihinde {info.projectData.reportNo} rapor numarası ile tanzim edilmiştir.
      </Text>

      <Heading as="h3"
        size="md"
        mb={2}
        fontWeight="bold"
        fontFamily="heading2" >
        1.2) Rapor Türü
      </Heading>
      <Text mb={8} fontSize="16px" fontFamily="body">
        Raporun Türü: {info.projectData.valuationRequest} Gayrimenkulün Değerleme Raporu. Değerleme çalışmasında ve raporun hazırlanmasında SPK standartları uygunluk sağlanmıştır. Buraya Açıklama gelcek.
      </Text>

      <Heading as="h3"
        size="md"
        mb={2}
        fontWeight="bold"
        fontFamily="heading2" >
        1.3) Raporu Hazırlayanlar ile Sorumlu Değerleme Uzmanı Adı Soyadı
      </Heading>
      <Text mb={8} fontSize="16px" fontFamily="body">
        Bu rapor, şirketimiz Sorumlu Değerleme Uzmanı {info.projectData.evaluator} (SPK Lisans No:{evaluator.spkNo}) tarafından hazırlanmış ve şirketimiz Sorumlu Değerleme Uzmanı {info.projectData.inspector} (SPK Lisans No:{inspector.spkNo}) tarafından kontrol edilmiştir.
      </Text>

      <Heading as="h3"
        size="md"
        mb={2}
        fontWeight="bold"
        fontFamily="heading2" >
        1.4) Değerleme Tarihi ve Değer Kavramı
      </Heading>
      <Text mb={8} fontSize="16px" fontFamily="body">
        Değerleme tarihi {new Date(info.projectData.valuationDate).toLocaleDateString()} olup, değerin geçerli olduğu tarih 3 ay ‘dır. Bu raporda geçerli olan değer kavramı ; Piyasa Değeri'dir. Piyasa Değeri; belirli bir tarihte, emlakın satışa çıkarılması durumunda, alıcı ile satıcının hiçbir baskı altında olmadığı ve her iki tarafın da konu hakkında bilgili olduğu bir işlem sonucunda elde edilebilecek tutarı temsil eder.
      </Text>

      <Heading as="h3"
        size="md"
        mb={2}
        fontWeight="bold"
        fontFamily="heading2" >
        1.5) Dayanak Sözleşmesi
      </Heading>
      <Text mb={8} fontSize="16px" fontFamily="body">
        Bu değerleme çalışmasının ve raporunun dayanağı; {profileInfo.companyInfo.agreementNo} numaralı sözleşmedir, bu sözleşme {new Date(profileInfo.companyInfo.agreementDate).toLocaleDateString()} tarihinde {profileInfo.companyInfo.companyName} ve {info.projectData.requestingCompany} arasında imzalanmıştır.
      </Text>
      {renderPageFooter(2)}
    </Box>
  );
}

export default ReportInfo;
