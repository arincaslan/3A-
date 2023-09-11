import React from 'react';

const styles = {
    reportBox: {
        border: '1px solid #000',
        borderRadius: '10px',
        padding: '20px',
        overflow: 'hidden'
    },
    headingLg: {
        fontSize: '24px',
        fontWeight: 'bold'
    },
    headingMd: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '8px'
    },
    reportText: {
        marginBottom: '20px'
    }
};

function ReportInfoForWord({ info, profileInfo }) {
    const evaluator = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.evaluator);
    const inspector = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.inspector);

    return (
        <div style={styles.reportBox}>
            <h2 style={styles.headingLg}>BÖLÜM 1 - Genel Rapor Bilgileri</h2>

            <h3 style={styles.headingMd}>1–1 Rapor Tarihi ve Numarası</h3>
            <p style={styles.reportText}>Bu rapor şirketimiz tarafından {new Date(info.projectData.valuationDate).toLocaleDateString()} tarihinde {info.projectData.reportNo} rapor numarası ile tanzim edilmiştir.</p>

            <h3 style={styles.headingMd}>1–2 Rapor Türü</h3>
            <p style={styles.reportText}>Bu raporun türü {info.tapuData.parsel.nitelik} gayrimenkul değerleme raporudur. Değerleme çalışmasında ve raporun hazırlanmasında SPK standartları uygunluk sağlanmıştır. Buraya Açıklama gelcek.</p>

            <h3 style={styles.headingMd}>1–3 Raporu Hazırlayanlar ile Sorumlu Değerleme Uzmanı Adı Soyadı</h3>
            <p style={styles.reportText}>Bu rapor, şirketimiz Sorumlu Değerleme Uzmanı {info.projectData.evaluator} (SPK Lisans No:{evaluator.spkNo}) tarafından hazırlanmış ve şirketimiz Sorumlu Değerleme Uzmanı {info.projectData.inspector} (SPK Lisans No:{inspector.spkNo}) tarafından kontrol edilmiştir.</p>

            <h3 style={styles.headingMd}>1–4 Değerleme Tarihi ve Değer Kavramı</h3>
            <p style={styles.reportText}>Değerleme tarihi {new Date(info.projectData.valuationDate).toLocaleDateString()} olup, değerin geçerli olduğu tarih 3 ay ‘dır. Bu raporda geçerli olan değer kavramı ; Piyasa Değeri'dir. Piyasa Değeri; belirli bir tarihte, emlakın satışa çıkarılması durumunda, alıcı ile satıcının hiçbir baskı altında olmadığı ve her iki tarafın da konu hakkında bilgili olduğu bir işlem sonucunda elde edilebilecek tutarı temsil eder.</p>

            <h3 style={styles.headingMd}>1–5 Dayanak Sözleşmesi</h3>
            <p style={styles.reportText}>Bu değerleme çalışmasının ve raporunun dayanağı; {profileInfo.companyInfo.agreementNo} numaralı sözleşmedir, bu sözleşme {new Date(profileInfo.companyInfo.agreementDate).toLocaleDateString()} tarihinde {profileInfo.companyInfo.companyName} ve {info.projectData.requestingCompany} arasında imzalanmıştır.</p>
            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>

    );
}

export default ReportInfoForWord;
