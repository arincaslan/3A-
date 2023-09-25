import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem, List } from "@chakra-ui/react"

const ValuationMethodology = ({ info }) => {
  const { emsalData, maaliyetData, gelirData } = info.valueData;
  const methods = [];
  if (emsalData.emsaller) methods.push("Emsal Karşılaştırma Metodu");
  if (maaliyetData.yeniden.faktorler) methods.push("Maliyet Yaklaşımı Metodu");
  if (gelirData) methods.push("Gelir Yaklaşımı Metodu");

  return (
    <Box my={5}>
      <Heading fontWeight="bold" as="h2" size="xl" mb={5}>8.Bölüm - Değerlemede Kullanılan Yaklaşımların Analizi / Değerleme Metodolojisi</Heading>

      {emsalData.emsaller && (
        <Box mb={5}>
          <Heading as="h3" size="lg" mb={3}>Emsal Karşılaştırma Metodu</Heading>
          <Text mb={5}>
            Bu gayrimenkulün değerlemesinde {methods.join(', ')} kullanılmıştır. Bu bölüm kullanılan metodları detaylıca açıklar ve anlatır.
          </Text>
          <Text mb={3}>
            Bu değerleme raporunda Emsal Karşılaştırma Metodu kullanılmıştır. Bu seçim, taşınmazın piyasa koşullarını ve diğer benzer taşınmazların değerini en doğru şekilde yansıtacağı düşünüldüğü için yapılmıştır.
          </Text>
          <Text mb={2}>
            Emsal Karşılaştırma Metodu, genellikle gayrimenkul değerleme sürecinde kullanılan bir tekniktir.
            Bu metod, satışa sunulan bir mülkün değerini belirlemek için benzer veya 'emsal' mülklerin satış fiyatlarını karşılaştırır.
            Bu yöntem, özellikle konut gayrimenkulleri değerlendirmek için yaygın olarak kullanılır çünkü genellikle çok sayıda benzer
            özellikli konutun satış verisi bulunur.
          </Text>
          <Heading as="h4" size="sm" mb={2}>Emsal Karşılaştırma Metodunun Nasıl Çalıştığına Dair Detaylı Açıklama:</Heading>
          <List spacing={3}>
            <ListItem>
              <Text as="em"><b>Emsal Seçimi:</b></Text>
              <Text>
                Değerlemesi yapılacak gayrimenkul ile benzer özelliklere sahip diğer gayrimenkuller seçilir.
                Bu benzer özellikler genellikle gayrimenkulün boyutu, konumu, yapının yaşı ve kalitesi gibi faktörleri içerir.
              </Text>
            </ListItem>
            <ListItem>
              <Text as="em"><b>Fiyat Karşılaştırması:</b></Text>
              <Text>
                Seçilen emsallerin satış fiyatları belirlenir ve birbirleriyle karşılaştırılır.
                Bu genellikle birim başına fiyat (örneğin, metrekare başına fiyat) olarak yapılır.
              </Text>
            </ListItem>
            <ListItem>
              <Text as="em"><b>Ayarlamalar:</b></Text>
              <Text>
                Her emsalin benzersiz özellikleri dikkate alınır ve bu özelliklerin değerlemesi yapılan gayrimenkulün değeri
                üzerindeki etkisi belirlenir. Örneğin, bir emsal gayrimenkulün mükemmel bir manzarası varsa ve değerlemesi
                yapılan gayrimenkulün manzarası yoksa, bu durum fiyat ayarlamasına yol açabilir.
              </Text>
            </ListItem>
            <ListItem>
              <Text as="em"><b>Sonuçların Analizi:</b></Text>
              <Text>
                Tüm emsaller ve ayarlamalar dikkate alındıktan sonra, elde edilen bilgiler analiz edilir ve değerlemesi
                yapılan gayrimenkul için bir değer tahmini yapılır.
              </Text>
            </ListItem>
          </List>
          <Text mt={2}>
            Bu yöntem, aynı bölgede benzer özelliklerde birçok gayrimenkulün olduğu durumlarda oldukça etkilidir.
            Ancak, benzersiz özelliklere sahip gayrimenkuller veya düşük likiditeye sahip piyasalar söz konusu olduğunda,
            bu metodun doğruluğu azalabilir. Bu tür durumlardaki zorluklar nedeniyle, değerlemeciler genellikle birden fazla
            değerleme yöntemini kullanmayı ve sonuçları birleştirmeyi tercih ederler.
          </Text>
          <Text mb={3}>
            Bu değerlemede kullanılan emsaller şunlardır:
            <UnorderedList>
              {emsalData?.emsaller?.map((emsal, index) => (
                <ListItem key={index}>
                  {emsal.tasinmazAlani} metrekarelik taşınmaz için istenilen değer: {emsal.deger}
                  Ek bilgiler: {emsal.aciklama}
                </ListItem>
              ))}
            </UnorderedList>
          </Text>
        </Box>
      )}

      {maaliyetData.yeniden.faktorler && (
        <Box mb={5}>
          <Heading as="h3" size="lg" mb={3}>Maaliyet Yaklaşımı Metodu</Heading>
          <Text mb={3}>
            Bu değerleme raporunda Maaliyet Yaklaşımı Metodu kullanılmıştır. Bu seçim, taşınmazın değerinin yapının maliyetine ve arsa değerine dayandığı durumlarda daha doğru bir değer sunacağı düşünüldüğü için yapılmıştır.
          </Text>
          <Text mb={2}>
            Maliyet yaklaşımı metodu gayrimenkul değerleme için kullanılan önemli bir tekniktir.
            Bu yöntem, özellikle eşsiz özelliklere sahip gayrimenkuller veya yeni inşa edilmiş mülkler için çok kullanışlıdır.
          </Text>
          <Heading as="h4" size="sm" mb={2}>Maliyet Yaklaşımı Metodunun Nasıl Çalıştığına Dair Unsurlar:</Heading>
          <List spacing={3}>
            <ListItem>
              <Text as="em"><b>Arsa Değeri:</b></Text>
              <Text>
                İlk adım, değerlemesi yapılan gayrimenkulün üzerinde yer aldığı arsanın değerini belirlemektir.
                Bu genellikle, arsanın emsal karşılaştırma metodu ile değerlendirilmesiyle yapılır.
              </Text>
            </ListItem>
            <ListItem>
              <Text as="em"><b>İnşaat Maliyetleri:</b></Text>
              <Text>
                İkinci adım, yapıyı bugünkü durumunda yeniden inşa etmek için ne kadar maliyet gerektiğini belirlemektir.
                Bu genellikle, yapı malzemelerinin maliyeti, işçilik maliyeti, geliştirme maliyetleri, ve benzeri unsurlar
                dikkate alınarak hesaplanır.
              </Text>
            </ListItem>
            <ListItem>
              <Text as="em"><b>Amortisman:</b></Text>
              <Text>
                Yapının yaşına ve durumuna bağlı olarak, belirli bir miktarda amortisman (değer kaybı) dikkate alınır.
                Bu, genellikle yapıya olan talebin zaman içinde azalması veya yapı malzemelerinin aşınması gibi
                faktörlerden kaynaklanır.
              </Text>
            </ListItem>
            <ListItem>
              <Text as="em"><b>Ekleme ve Çıkarımlar:</b></Text>
              <Text>
                Özel durumlar göz önünde bulundurularak eklemeler veya çıkarımlar yapılır.
                Örneğin, özel bir manzarası olan bir mülk daha yüksek bir değere sahip olabilir.
              </Text>
            </ListItem>
          </List>
          <Text mt={4}>
            Bu adımlar tamamlandıktan sonra, arsa değeri ile inşaat maliyetlerinin toplamı (amortisman düşüldükten sonra)
            gayrimenkulün toplam değerini verir.
          </Text>
          <Text mt={2}>
            Maliyet Yaklaşımı Metodu genellikle benzersiz veya özel amaçlı binalar, tarihi mülkler, yeni inşaatlar veya
            piyasadaki emsal satış verilerinin az olduğu durumlar gibi gayrimenkuller için kullanılır. Ancak, bu metodu
            uygulamak bazen karmaşık olabilir ve genellikle profesyonel bir değerlemeye ihtiyaç duyar.
          </Text>
          <Text mb={3}>
            Değerlemede Seçilen maaliyet metodu: 'Yeniden Üretim Maliyet Metodu'
              <Text>Yeniden üretim maliyet yöntemi, bir taşınmazın değerinin, aynı taşınmazın bugünkü maliyeti üzerinden belirlenmesini ifade eder.</Text>
          </Text>
        </Box>
      )}

      {gelirData && (
        <Box mb={5}>
          <Heading as="h3" size="lg" mb={3}>Gelir Yaklaşımı Metodu</Heading>
          <Text mb={2}>
            Gelir yaklaşımı, gayrimenkul değerlemesi için kullanılan bir başka popüler tekniktir.
            Bu yöntem, genellikle yatırım amaçlı gayrimenkuller için kullanılır, çünkü bu gayrimenkuller
            genellikle gelir üretir ve bu gelir, gayrimenkulün değerini belirlemek için kullanılabilir.
          </Text>
          <Heading as="h4" size="sm" mb={2}>Gelir Yaklaşımı Metodunun Nasıl Çalıştığına Dair Detaylı Açıklama:</Heading>
          <List spacing={3}>
            <ListItem>
              <Text as="em"><b>Gelirin Belirlenmesi:</b></Text>
              <Text>
                Bu yaklaşımda ilk adım, gayrimenkulün potansiyel brüt gelirini belirlemektir.
                Bu genellikle kira gelirleri, park yeri gelirleri veya diğer türdeki gelirlerden
                (örneğin, reklam alanlarından elde edilen gelirler) oluşur.
              </Text>
            </ListItem>
            <ListItem>
              <Text as="em"><b>Giderlerin Çıkarılması:</b></Text>
              <Text>
                Daha sonra, gayrimenkulün işletilmesi ve bakımıyla ilişkili giderler
                (örneğin, vergiler, sigorta, bakım ve onarım masrafları) brüt gelirden çıkarılır.
                Bu, gayrimenkulün net işletme gelirini verir.
              </Text>
            </ListItem>
            <ListItem>
              <Text as="em"><b>Kapitalizasyon Oranının Uygulanması:</b></Text>
              <Text>
                Net işletme geliri, genellikle bir kapitalizasyon oranı (veya "cap rate") ile çarpılır.
                Kapitalizasyon oranı, gayrimenkul yatırımlarının riskini ve dönüşünü değerlendirmek için kullanılır
                ve genellikle benzer gayrimenkullerin değerlemesinden elde edilir.
              </Text>
            </ListItem>
          </List>
          <Text mt={4}>
            Bu adımlar tamamlandığında, net işletme geliri kapitalizasyon oranına bölünür ve bu, gayrimenkulün değerini verir.
          </Text>
          <Text mt={2}>
            Gelir Yaklaşımı, genellikle kira geliri elde eden apartmanlar, ofis binaları veya alışveriş merkezleri gibi gayrimenkuller
            için kullanılır. Ancak, bu metodu uygulamak, gelir ve gider tahminlerini doğru bir şekilde yapmayı ve uygun bir kapitalizasyon
            oranı seçmeyi gerektirir. Bu nedenle, genellikle profesyonel bir değerlemeye ihtiyaç duyulur.
          </Text>
          <Text mb={3}>
            Bu değerleme raporunda Gelir Yaklaşımı Metodu kullanılmıştır. Bu seçim, taşınmazın gelecekteki kazançlarının değerlemeye etkili olacağı durumlarda daha doğru bir değer sunacağı düşünüldüğü için yapılmıştır.
          </Text>
          <Text mb={3}>
            Seçilen gelir metodu: {gelirData.secilenMetod === 'kiraCarpani' ? 'Kira Çarpanı Metodu' : 'Kredi-Değer Notu İle Hesaplama'}
            {gelirData.secilenMetod === 'kiraCarpani' ?
              <Text>Kira çarpanı metodu, bir taşınmazın değerinin, taşınmazdan elde edilecek olan kira gelirlerinin çarpanı üzerinden belirlenmesini ifade eder.</Text> :
              <Text>Kredi-Değer Notu İle Hesaplama metodu, bir taşınmazın değerinin, taşınmazın kredi riski ve gelir beklentisi üzerinden belirlenmesini ifade eder.</Text>
            }
          </Text>
        </Box>
      )}
    </Box>
  )
}

export default ValuationMethodology;
