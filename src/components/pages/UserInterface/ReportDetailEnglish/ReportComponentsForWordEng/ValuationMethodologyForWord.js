import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem, List } from "@chakra-ui/react"

const ValuationMethodologyForWord = ({ info }) => {
    const { emsalData, maaliyetData, gelirData } = info.valueData;
    const methods = [];
    if (emsalData) methods.push("Emsal Karşılaştırma Metodu");
    if (maaliyetData) methods.push("Maliyet Yaklaşımı Metodu");
    if (gelirData) methods.push("Gelir Yaklaşımı Metodu");

    return (
        <div>
            <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '16px' }}>BÖLÜM 8 - Değerlemede Kullanılan Yaklaşımların Analizi / Değerleme Metodolojisi</h3>

            {emsalData && (
                <div style={{ marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>Emsal Karşılaştırma Metodu</h3>
                    <p >Bu gayrimenkulün değerlemesinde {methods.join(', ')} kullanılmıştır. Bu bölüm kullanılan metodları detaylıca açıklar ve anlatır.</p>
                    <p > Bu değerleme raporunda Emsal Karşılaştırma Metodu kullanılmıştır. Bu seçim, taşınmazın piyasa koşullarını ve diğer benzer taşınmazların değerini en doğru şekilde yansıtacağı düşünüldüğü için yapılmıştır.</p>
                    <p >Emsal Karşılaştırma Metodu, genellikle gayrimenkul değerleme sürecinde kullanılan bir tekniktir. Bu metod, satışa sunulan bir mülkün değerini belirlemek için benzer veya 'emsal' mülklerin satış fiyatlarını karşılaştırır. Bu yöntem, özellikle konut gayrimenkulleri değerlendirmek için yaygın olarak kullanılır çünkü genellikle çok sayıda benzer özellikli konutun satış verisi bulunur.</p>
                    <h4 >Emsal Karşılaştırma Metodunun Nasıl Çalıştığına Dair Detaylı Açıklama</h4>
                    <ul>
                        <li style={{ marginBottom: '5px' }}>
                            <strong>Emsal Seçimi:</strong>
                            <p>Değerlemesi yapılacak gayrimenkul ile benzer özelliklere sahip diğer gayrimenkuller seçilir. Bu benzer özellikler genellikle gayrimenkulün boyutu, konumu, yapının yaşı ve kalitesi gibi faktörleri içerir.</p>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <strong>Fiyat Karşılaştırması:</strong>
                            <p>Seçilen emsallerin satış fiyatları belirlenir ve birbirleriyle karşılaştırılır. Bu genellikle birim başına fiyat (örneğin, metrekare başına fiyat) olarak yapılır.</p>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <strong>Ayarlamalar:</strong>
                            <p>
                                Her emsalin benzersiz özellikleri dikkate alınır ve bu özelliklerin değerlemesi yapılan gayrimenkulün değeri
                                üzerindeki etkisi belirlenir. Örneğin, bir emsal gayrimenkulün mükemmel bir manzarası varsa ve değerlemesi
                                yapılan gayrimenkulün manzarası yoksa, bu durum fiyat ayarlamasına yol açabilir.
                            </p>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <strong>Sonuçların Analizi:</strong>
                            <p>Tüm emsaller ve ayarlamalar dikkate alındıktan sonra, elde edilen bilgiler analiz edilir ve değerlemesi yapılan gayrimenkul için bir değer tahmini yapılır.</p>
                        </li>
                    </ul>
                    <p style={{ marginTop: '10px' }}>
                        Bu yöntem, aynı bölgede benzer özelliklerde birçok gayrimenkulün olduğu durumlarda oldukça etkilidir.
                        Ancak, benzersiz özelliklere sahip gayrimenkuller veya düşük likiditeye sahip piyasalar söz konusu olduğunda,
                        bu metodun doğruluğu azalabilir. Bu tür durumlardaki zorluklar nedeniyle, uzmanlar genellikle birden fazla
                        değerleme yöntemini kullanmayı ve sonuçları birleştirmeyi tercih ederler.
                    </p>
                    <p style={{ marginBottom: '5px' }}>Bu değerlemede kullanılan emsaller şunlardır:
                        <ul>
                            {emsalData?.emsaller?.map((emsal, index) => (
                                <li key={index}>
                                    {emsal.tasinmazAlani} metrekarelik taşınmaz için istenilen değer: {emsal.deger}
                                    Ek bilgiler: {emsal.aciklama}
                                </li>
                            ))}
                        </ul>

                    </p>
                </div>

            )}

            {maaliyetData && (
                <div style={{ marginBottom: '5px' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>Maaliyet Yaklaşımı Metodu</h3>
                    <p style={{ marginBottom: '5px' }}>
                        Bu değerleme raporunda Maaliyet Yaklaşımı Metodu kullanılmıştır. Bu seçim, taşınmazın değerinin yapının maliyetine ve arsa değerine dayandığı durumlarda daha doğru bir değer sunacağı düşünüldüğü için yapılmıştır.
                    </p>
                    <p style={{ marginBottom: '5px' }}>
                        Maliyet yaklaşımı metodu gayrimenkul değerleme için kullanılan önemli bir tekniktir.
                        Bu yöntem, özellikle eşsiz özelliklere sahip gayrimenkuller veya yeni inşa edilmiş mülkler için çok kullanışlıdır.
                    </p>
                    <h4 style={{ marginBottom: '5px' }}>Maliyet Yaklaşımı Metodunun Nasıl Çalıştığına Dair Unsurlar:</h4>
                    <ul style={{ listStyleType: 'none', marginLeft: '10px' }}>
                        <li style={{ marginBottom: '5px' }}>
                            <p><strong>Arsa Değeri:</strong></p>
                            <p>İlk adım, değerlemesi yapılan gayrimenkulün üzerinde yer aldığı arsanın değerini belirlemektir. Bu genellikle, arsanın emsal karşılaştırma metodu ile değerlendirilmesiyle yapılır.</p>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <p><strong>İnşaat Maliyetleri:</strong></p>
                            <p>İkinci adım, yapıyı bugünkü durumunda yeniden inşa etmek için ne kadar maliyet gerektiğini belirlemektir. Bu genellikle, yapı malzemelerinin maliyeti, işçilik maliyeti, geliştirme maliyetleri, ve benzeri unsurlar dikkate alınarak hesaplanır.</p>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <p><strong>Amortisman:</strong></p>
                            <p>Yapının yaşına ve durumuna bağlı olarak, belirli bir miktarda amortisman (değer kaybı) dikkate alınır. Bu, genellikle yapıya olan talebin zaman içinde azalması veya yapı malzemelerinin aşınması gibi faktörlerden kaynaklanır.</p>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <p><strong>Ekleme ve Çıkarımlar:</strong></p>
                            <p>Özel durumlar göz önünde bulundurularak eklemeler veya çıkarımlar yapılır. Örneğin, özel bir manzarası olan bir mülk daha yüksek bir değere sahip olabilir.</p>
                        </li>
                    </ul>
                    <p style={{ marginTop: '10px' }}>
                        Bu adımlar tamamlandıktan sonra, arsa değeri ile inşaat maliyetlerinin toplamı (amortisman düşüldükten sonra) gayrimenkulün toplam değerini verir.
                    </p>
                    <p sstyle={{ marginTop: '5px' }}>
                        Maliyet Yaklaşımı Metodu genellikle benzersiz veya özel amaçlı binalar, tarihi mülkler, yeni inşaatlar veya piyasadaki emsal satış verilerinin az olduğu durumlar gibi gayrimenkuller için kullanılır. Ancak, bu metodu uygulamak bazen karmaşık olabilir ve genellikle profesyonel bir değerlemeye ihtiyaç duyar.
                    </p>
                    <p style={{ marginBottom: '5px' }}>
                        Değerlemede Seçilen maaliyet metodu: {maaliyetData.secilenMetod === 'ikame' ? 'İkame Maliyet Metodu' : 'Yeniden Üretim Maliyet Metodu'}
                        {maaliyetData.secilenMetod === 'ikame' ?
                            <span>İkame maliyet yöntemi, bir taşınmazın değerinin, benzer ya da eşdeğer bir taşınmazın maliyeti üzerinden belirlenmesini ifade eder.</span> :
                            <span>Yeniden üretim maliyet yöntemi, bir taşınmazın değerinin, aynı taşınmazın bugünkü maliyeti üzerinden belirlenmesini ifade eder.</span>
                        }
                    </p>
                </div>

            )}

            {gelirData && (
                <div style={{ marginBottom: '5px' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>Gelir Yaklaşımı Metodu</h3>
                    <p style={{ marginBottom: '5px' }}>
                        Gelir yaklaşımı, gayrimenkul değerlemesi için kullanılan bir başka popüler tekniktir.
                        Bu yöntem, genellikle yatırım amaçlı gayrimenkuller için kullanılır, çünkü bu gayrimenkuller
                        genellikle gelir üretir ve bu gelir, gayrimenkulün değerini belirlemek için kullanılabilir.
                    </p>
                    <h4 style={{ marginBottom: '5px' }}>Gelir Yaklaşımı Metodunun Nasıl Çalıştığına Dair Detaylı Açıklama:</h4>
                    <ul style={{ listStyleType: 'disc', marginLeft: '10px' }}>
                        <li style={{ marginBottom: '5px' }}>
                            <em><b>Gelirin Belirlenmesi:</b></em>
                            <p>
                                Bu yaklaşımda ilk adım, gayrimenkulün potansiyel brüt gelirini belirlemektir.
                                Bu genellikle kira gelirleri, park yeri gelirleri veya diğer türdeki gelirlerden
                                (örneğin, reklam alanlarından elde edilen gelirler) oluşur.
                            </p>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <em><b>Giderlerin Çıkarılması:</b></em>
                            <p>
                                Daha sonra, gayrimenkulün işletilmesi ve bakımıyla ilişkili giderler
                                (örneğin, vergiler, sigorta, bakım ve onarım masrafları) brüt gelirden çıkarılır.
                                Bu, gayrimenkulün net işletme gelirini verir.
                            </p>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <em><b>Kapitalizasyon Oranının Uygulanması:</b></em>
                            <p>
                                Net işletme geliri, genellikle bir kapitalizasyon oranı (veya "cap rate") ile çarpılır.
                                Kapitalizasyon oranı, gayrimenkul yatırımlarının riskini ve dönüşünü değerlendirmek için kullanılır
                                ve genellikle benzer gayrimenkullerin değerlemesinden elde edilir.
                            </p>
                        </li>
                    </ul>
                    <p style={{ marginTop: '10px' }}>
                        Bu adımlar tamamlandığında, net işletme geliri kapitalizasyon oranına bölünür ve bu, gayrimenkulün değerini verir.
                    </p>
                    <p style={{ marginTop: '5px' }}>
                        Gelir Yaklaşımı, genellikle kira geliri elde eden apartmanlar, ofis binaları veya alışveriş merkezleri gibi gayrimenkuller
                        için kullanılır. Ancak, bu metodu uygulamak, gelir ve gider tahminlerini doğru bir şekilde yapmayı ve uygun bir kapitalizasyon
                        oranı seçmeyi gerektirir. Bu nedenle, genellikle profesyonel bir değerlemeye ihtiyaç duyulur.
                    </p>
                    <p style={{ marginBottom: '5px' }}>
                        Bu değerleme raporunda Gelir Yaklaşımı Metodu kullanılmıştır. Bu seçim, taşınmazın gelecekteki kazançlarının değerlemeye etkili olacağı durumlarda daha doğru bir değer sunacağı düşünüldüğü için yapılmıştır.
                    </p>
                    <p style={{ marginBottom: '5px' }}>
                        Seçilen gelir metodu: {gelirData.secilenMetod === 'kiraCarpani' ? 'Kira Çarpanı Metodu' : 'Kredi-Değer Notu İle Hesaplama'}
                        {gelirData.secilenMetod === 'kiraCarpani' ?
                            <p>Kira çarpanı metodu, bir taşınmazın değerinin, taşınmazdan elde edilecek olan kira gelirlerinin çarpanı üzerinden belirlenmesini ifade eder.</p> :
                            <p>Kredi-Değer Notu İle Hesaplama metodu, bir taşınmazın değerinin, taşınmazın kredi riski ve gelir beklentisi üzerinden belirlenmesini ifade eder.</p>
                        }
                    </p>
                </div>

            )}
            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>
    )
}

export default ValuationMethodologyForWord;
