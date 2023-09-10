import React from 'react';
import { Box, Text, Flex, Badge } from '@chakra-ui/react';

function IncomeApproach({ info }) {
    const { gelirData } = info.valueData;
    const { valuationDate } = info.projectData;

    const { secilenYontem, kiraCarpani, krediTutari, krediDegerOrani,
        aylikKiraBedeli, degerlemeTarihi, faizOrani, aciklama } = gelirData;

    let currentDate = new Date(valuationDate);
    let valuationDateObject = new Date(degerlemeTarihi);

    let differenceInTime = currentDate.getTime() - valuationDateObject.getTime();
    let differenceInYears = differenceInTime / (1000 * 3600 * 24 * 365);
    let gayrimenkulDegeriKredi = krediTutari / (krediDegerOrani / 100);



    let gayrimenkulDegeriKrediBugunku = gayrimenkulDegeriKredi / Math.pow((1 + (faizOrani / 100)), differenceInYears);


    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });


    let yillikKiraGeliri = aylikKiraBedeli * 12;

    let brütKiraÇarpanı = kiraCarpani;  // bu değer genellikle bölgedeki emlak piyasası ve ekonomik koşullara bağlıdır
    let gayrimenkulDegeriKira = brütKiraÇarpanı * yillikKiraGeliri;



    return (
        <Box>
            <Text fontSize="lg" fontWeight="bold">Gelir Yaklaşımı Değerlemesi</Text>
            <Text mt={2}>
                Gelir yaklaşımı, bir gayrimenkulün değerini, gayrimenkulden elde edilebilecek potansiyel gelirler üzerinden belirler. Bu yöntem, genellikle gelir üreten gayrimenkullerin değerlemesi için kullanılır.
            </Text>
            <Text mt={2}>
                Seçilen Değerleme Yöntemi: {secilenYontem === 'kiraCarpani' ? 'Kira Çarpanı Metodu' : 'Kredi Değer Notu İle Hesaplama'}
            </Text>
            {secilenYontem === 'kiraCarpani' && (
                <Box mt={2}>
                    <Text fontSize="lg" mb="4">
                        Gayrimenkul değerlemesinde Kira Çarpanı yöntemini kullanıyoruz. Bu yöntem, bir gayrimenkulün satış fiyatını tahmin etmek için kullanılır ve genellikle yatırım amaçlı gayrimenkuller veya kiralık gayrimenkuller için uygundur.
                    </Text>
                    <Text fontSize="lg" mb="4">
                        Öncelikle, gayrimenkulün yıllık kira gelirini hesaplıyoruz.
                        Bu hesaplamayı yaptığımızda aylık kira gelirini buluyoruz ({formatter.format(Number(aylikKiraBedeli))}).
                        Yıllık kira gelirini bulmak için bu değeri 12 ile çarpıyoruz ve sonucu {formatter.format(yillikKiraGeliri)} olarak buluyoruz.
                        Sonrasında, bu yıllık kira gelirini brüt kira çarpanı ile çarpıyoruz.
                        Bu çarpan genellikle bölgedeki benzer gayrimenkullerin satış fiyatları ve kira getirileri baz alınarak belirlenir.
                    </Text>
                    <Flex my={4} w="100%" justifyContent="center">
                        <Badge colorScheme="green" p="4" fontSize="xl">
                            Bu değerleme için brüt kira çarpanı ({formatter.format(kiraCarpani)}). Sonuç olarak gayrimenkulün değerini <strong>{formatter.format(gayrimenkulDegeriKira)}</strong> olarak tahmin ediyoruz.
                        </Badge>
                    </Flex>
                </Box>
            )}
            {secilenYontem === 'krediDegerNotu' && (
                <Box mt={2}>
                    <Text fontSize="lg" mb="4">
                        Gayrimenkul değerlemesinde Kredi Değer Notu yöntemini kullanıyoruz. Bu yöntem, genellikle kredi ile değerlenmiş gayrimenkuller için kullanılır.
                    </Text>
                    <Text mt={4}>
                        Ek Açıklama: {aciklama}
                    </Text>
                    <Text fontSize="lg" mb="4">
                        İlk olarak, kredi tutarını ({formatter.format(krediTutari)}) ve Kredi Değer Oranını ({krediDegerOrani}%) kullanıyoruz. Bu değerlerle gayrimenkulün değerini {formatter.format(gayrimenkulDegeriKredi)} olarak hesaplıyoruz.
                    </Text>
                    <Text fontSize="lg" mb="4">
                        Ardından, bu değerlemenin bugünkü değerini bulmak için, değerlemenin yapıldığı tarih ve bugünkü tarih arasındaki yıl farkını ve faiz oranını kullanıyoruz. Değerlemenin yapıldığı tarih {degerlemeTarihi}, bugünkü tarih {valuationDate} ve faiz oranı %{faizOrani}.
                    </Text>
                    <Text fontSize="lg" mb="4">
                        Bu hesaplamalar sonucunda, kredi tutarı ve kredi değer oranı kullanılarak bulunan gayrimenkulün değeri {formatter.format(gayrimenkulDegeriKredi)} olarak hesaplanmıştır. Bu değer, bugünkü değeri {formatter.format(gayrimenkulDegeriKrediBugunku)} olarak bulunan gayrimenkulün değeri üzerinden faiz oranı ile düzeltilmiştir.
                    </Text>
                    <Flex my={4} w="100%" justifyContent="center">
                        <Badge colorScheme="green" p="4" fontSize="xl">
                            Bu hesaplamaların sonucunda, gayrimenkulün bugünkü değerini <strong>{formatter.format(gayrimenkulDegeriKrediBugunku)}</strong> olarak değerliyoruz.
                        </Badge>
                    </Flex>
                </Box>
            )}

        </Box>
    );
}

export default IncomeApproach;