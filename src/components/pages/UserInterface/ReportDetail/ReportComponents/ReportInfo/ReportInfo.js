import { Box, Heading, Text } from "@chakra-ui/react";

function ReportInfo({ info, profileInfo }) {
  const evaluator = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.evaluator);
  const inspector = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.inspector);
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
      <Heading as="h2" size="lg" fontWeight="bold">Bölüm 1 - Genel Rapor Bilgileri</Heading>
      <Heading as="h3" size="md" mb={2} fontWeight="bold">
        1–1 Rapor Tarihi ve Numarası
      </Heading>
      <Text>
        Bu rapor şirketimiz tarafından {new Date(info.projectData.valuationDate).toLocaleDateString()} tarihinde {info.projectData.reportNo} rapor numarası ile tanzim edilmiştir.
      </Text>

      <Heading as="h3" size="md" mb={2} fontWeight="bold">
        1–2 Rapor Türü
      </Heading>
      <Text>
        Bu raporun türü {info.tapuData.parsel.nitelik} gayrimenkul değerleme raporudur. Değerleme çalışmasında ve raporun hazırlanmasında SPK standartları uygunluk sağlanmıştır. Buraya Açıklama gelcek.
      </Text>

      <Heading as="h3" size="md" mb={2} fontWeight="bold">
        1–3 Raporu Hazırlayanlar ile Sorumlu Değerleme Uzmanı Adı Soyadı
      </Heading>
      <Text>
        Bu rapor, şirketimiz Sorumlu Değerleme Uzmanı {info.projectData.evaluator} (SPK Lisans No:{evaluator.spkNo}) tarafından hazırlanmış ve şirketimiz Sorumlu Değerleme Uzmanı {info.projectData.inspector} (SPK Lisans No:{inspector.spkNo}) tarafından kontrol edilmiştir.
      </Text>

      <Heading as="h3" size="md" mb={2} fontWeight="bold">
        1–4 Değerleme Tarihi ve Değer Kavramı
      </Heading>
      <Text>
        Değerleme tarihi {new Date(info.projectData.valuationDate).toLocaleDateString()} olup, değerin geçerli olduğu tarih 3 ay ‘dır. Bu raporda geçerli olan değer kavramı ; Piyasa Değeri'dir. Piyasa Değeri; belirli bir tarihte, emlakın satışa çıkarılması durumunda, alıcı ile satıcının hiçbir baskı altında olmadığı ve her iki tarafın da konu hakkında bilgili olduğu bir işlem sonucunda elde edilebilecek tutarı temsil eder.
      </Text>

      <Heading as="h3" size="md" mb={2} fontWeight="bold">
        1–5 Dayanak Sözleşmesi
      </Heading>
      <Text>
        Bu değerleme çalışmasının ve raporunun dayanağı; {profileInfo.companyInfo.agreementNo} numaralı sözleşmedir, bu sözleşme {new Date(profileInfo.companyInfo.agreementDate).toLocaleDateString()} tarihinde {profileInfo.companyInfo.companyName} ve {info.projectData.requestingCompany} arasında imzalanmıştır.
      </Text>
    </Box>
  );
}

export default ReportInfo;
