import React from 'react';

const styles = {
    companyBox: {
        padding: '20px'
    },
    headingLg: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '24px'
    },
    headingMd: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '20px',
        marginBottom: '8px'
    },
    companyText: {
        marginTop: '8px',
        marginBottom: '20px'
    }
};

function CompanyInfoForWord({ profileInfo, info }) {
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    return (
        <div style={styles.companyBox}>
            <h2 style={styles.headingLg}>Bölüm 2 - Şirket ve Müşteri Bilgileri</h2>

            <h3 style={styles.headingMd}>Şirketin Unvanı ve Adresi</h3>
            <p style={styles.companyText}>Değerleme Şirketi: {profileInfo.companyInfo.companyName}</p>
            <p style={styles.companyText}>Adresi: {profileInfo.companyInfo.companyLocation}</p>
            <p style={styles.companyText}>{profileInfo.companyInfo.companyName}, {formatDate(profileInfo.companyInfo.companyEstablishDate)} tarihinde kurulmuştur. Şirket, SPK'nın {formatDate(profileInfo.companyInfo.agreementDate)} tarihli kararı ile değerleme hizmeti verecek şirketler listesine alınmıştır.</p>

            <h3 style={styles.headingMd}>Müşteriyi Tanıtıcı Bilgiler ve Adresi</h3>
            <p style={styles.companyText}>{info.projectData.requestingCompany}, {formatDate(info.projectData.customerEstablishmentDate)} tarihinde kurulmuştur. Kayıtlı sermayesi {info.projectData.registeredCapital}, ödenmiş sermayesi {info.projectData.paidCapital} 'dir.</p>
            <p style={styles.companyText}>Müşteri, {info.tapuData.location.il} ili, {info.tapuData.location.ilce} ilçesi, {info.tapuData.location.mahalle} mahallesinde, {info.tapuData.parsel.paftaNo} pafta, {info.tapuData.parsel.parselNo} parsel adresindeki {info.projectData.valuationRequest} değerlemesini istemiştir.</p>
            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>
    );
}

export default CompanyInfoForWord;
