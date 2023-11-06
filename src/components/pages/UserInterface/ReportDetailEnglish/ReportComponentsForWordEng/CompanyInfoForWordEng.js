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

function CompanyInfoForWordEng({ profileInfo, info }) {
    
    function formatCurrency(value) {
        return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(value);
    }
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    return (
        <div style={styles.companyBox}>
            <h2 style={styles.headingLg}>SECTION 2 - Company and Customer Information</h2>

            <h3 style={styles.headingMd}>2.1) Company Title and Address</h3>
            <p style={styles.companyText}>Company Title: {profileInfo.companyInfo.companyName}</p>
            <p style={styles.companyText}>Address: {profileInfo.companyInfo.companyLocation}</p>
            <p style={styles.companyText}>{profileInfo.companyInfo.companyName} was established on {formatDate(profileInfo.companyInfo.companyEstablishDate)}. The company has been included in the list of companies authorized to provide appraisal services by the SPK's decision dated {formatDate(profileInfo.companyInfo.agreementDate)}.</p>

            <h3 style={styles.headingMd}>2.2) Customer Identification Information and Address</h3>
            <p style={styles.companyText}>{info.projectData.requestingCompany} was established on {formatDate(info.projectData.customerEstablishmentDate)}. Its registered capital is {formatCurrency(info.projectData.registeredCapital)} and its paid-up capital is {formatCurrency(info.projectData.paidCapital)}.</p>
            <p style={styles.companyText}>The customer has requested the valuation of {info.projectData.valuationRequest} located in {info.tapuData.location.il} province, {info.tapuData.location.ilce} district, {info.tapuData.location.mahalle} neighborhood, with the address of map sheet {info.tapuData.parsel.paftaNo} and parcel {info.tapuData.parsel.parselNo}.</p>
            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>
    );
}

export default CompanyInfoForWordEng;
