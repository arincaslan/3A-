import React from 'react';


function IncomeApproachForWord({ info }) {
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
        <div style={{ margin: '20px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Gelir Yaklaşımı Değerlemesi</h2>
            <p style={{ marginTop: '20px' }}>
                Gelir yaklaşımı, bir gayrimenkulün değerini, gayrimenkulden elde edilebilecek potansiyel gelirler üzerinden belirler. Bu yöntem, genellikle gelir üreten gayrimenkullerin değerlemesi için kullanılır.
            </p>
            <p style={{ marginTop: '20px' }}>
                Seçilen Değerleme Yöntemi: {secilenYontem === 'kiraCarpani' ? 'Kira Çarpanı Metodu' : 'Kredi Değer Notu İle Hesaplama'}
            </p>
            {secilenYontem === 'kiraCarpani' && (
                <div style={{ marginTop: '20px' }}>
                    <p style={{ fontSize: '20px', marginBottom: '20px' }}>
                        Gayrimenkul değerlemesinde Kira Çarpanı yöntemini kullanıyoruz. Bu yöntem, bir gayrimenkulün satış fiyatını tahmin etmek için kullanılır ve genellikle yatırım amaçlı gayrimenkuller veya kiralık gayrimenkuller için uygundur.
                    </p>
                    <p style={{ fontSize: '20px', marginBottom: '20px' }}>
                        Öncelikle, gayrimenkulün yıllık kira gelirini hesaplıyoruz.
                        Bu hesaplamayı yaptığımızda aylık kira gelirini buluyoruz ({formatter.format(Number(aylikKiraBedeli))}).
                        Yıllık kira gelirini bulmak için bu değeri 12 ile çarpıyoruz ve sonucu {formatter.format(yillikKiraGeliri)} olarak buluyoruz.
                        Sonrasında, bu yıllık kira gelirini brüt kira çarpanı ile çarpıyoruz.
                        Bu çarpan genellikle bölgedeki benzer gayrimenkullerin satış fiyatları ve kira getirileri baz alınarak belirlenir.                </p>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', width: '100%' }}>
                        <span style={{ padding: '20px', backgroundColor: 'green', fontSize: '20px', color: 'white' }}>
                            Bu değerleme için brüt kira çarpanı ({formatter.format(kiraCarpani)}). Sonuç olarak gayrimenkulün değerini <strong>{formatter.format(gayrimenkulDegeriKira)}</strong> olarak tahmin ediyoruz.
                        </span>
                    </div>
                </div>
            )}
            {secilenYontem === 'krediDegerNotu' && (
                <div style={{ marginTop: '20px' }}>
                    <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>
                        Gayrimenkul değerlemesinde Kredi Değer Notu yöntemini kullanıyoruz. Bu yöntem, genellikle kredi ile değerlenmiş gayrimenkuller için kullanılır.
                    </h3>
                    <p style={{ marginTop: '20px' }}>
                        Ek Açıklama: {aciklama}
                    </p>
                    <p style={{ fontSize: '20px', marginBottom: '20px' }}>
                        İlk olarak, kredi tutarını ({formatter.format(krediTutari)}) ve Kredi Değer Oranını ({krediDegerOrani}%) kullanıyoruz. Bu değerlerle gayrimenkulün değerini {formatter.format(gayrimenkulDegeriKredi)} olarak hesaplıyoruz.
                    </p>
                    <p style={{ fontSize: '20px', marginBottom: '20px' }}>
                        Ardından, bu değerlemenin bugünkü değerini bulmak için, değerlemenin yapıldığı tarih ve bugünkü tarih arasındaki yıl farkını ve faiz oranını kullanıyoruz. Değerlemenin yapıldığı tarih {degerlemeTarihi}, bugünkü tarih {valuationDate} ve faiz oranı %{faizOrani}.
                    </p>
                    <p style={{ fontSize: '20px', marginBottom: '20px' }}>
                        Bu hesaplamalar sonucunda, kredi tutarı ve kredi değer oranı kullanılarak bulunan gayrimenkulün değeri {formatter.format(gayrimenkulDegeriKredi)} olarak hesaplanmıştır. Bu değer, bugünkü değeri {formatter.format(gayrimenkulDegeriKrediBugunku)} olarak bulunan gayrimenkulün değeri üzerinden faiz oranı ile düzeltilmiştir.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', width: '100%' }}>
                        <span style={{ padding: '20px', backgroundColor: 'green', fontSize: '20px', color: 'white' }}>
                            Bu hesaplamaların sonucunda, gayrimenkulün bugünkü değerini <strong>{formatter.format(gayrimenkulDegeriKrediBugunku)}</strong> olarak değerliyoruz.
                        </span>
                    </div>
                </div>
            )}
            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>
    );
}

export default IncomeApproachForWord;
