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

function ReportInfoForWordEng({ info, profileInfo }) {
    const evaluator = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.evaluator);
    const inspector = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.inspector);

    return (
        <div style={styles.reportBox}>
            <h2 style={styles.headingLg}> SECTION 1 - General Report Information</h2>

            <h3 style={styles.headingMd}>1.1) Report Date and Number</h3>
            <p style={styles.reportText}>This report was prepared by our company on {new Date(info.projectData.valuationDate).toLocaleDateString()} with the report number {info.projectData.reportNo}.</p>

            <h3 style={styles.headingMd}>1.2) Type of the Report</h3>
            <p style={styles.reportText}>Type of the Report: Valuation Report of the {info.projectData.valuationRequest} Property. Compliance with SPK standards has been ensured in the valuation study and report preparation. Further explanation goes here.</p>

            <h3 style={styles.headingMd}>1.3) Names of the Preparers and the Responsible Appraisal Expert</h3>
            <p style={styles.reportText}>This report was prepared by our company's Responsible Appraisal Expert {info.projectData.evaluator} (SPK License No:{evaluator.spkNo}) and reviewed by our company's Responsible Appraisal Expert {info.projectData.inspector} (SPK License No:{inspector.spkNo}).</p>

            <h3 style={styles.headingMd}>1.4) Valuation Date and Value Concept</h3>
            <p style={styles.reportText}> The valuation date is {new Date(info.projectData.valuationDate).toLocaleDateString()} and the effective date of the value is 3 months. The value concept valid in this report is; Market Value. Market Value represents the amount that could be obtained as a result of a transaction on a specific date when the property is put up for sale, where neither the buyer nor the seller is under any pressure, and both parties are informed about the subject.</p>

            <h3 style={styles.headingMd}>1.5) Underlying Contract</h3>
            <p style={styles.reportText}>The basis of this valuation study and report is the contract with the number {profileInfo.companyInfo.agreementNo}, which was signed between {profileInfo.companyInfo.companyName} and {info.projectData.requestingCompany} on {new Date(profileInfo.companyInfo.agreementDate).toLocaleDateString()}.</p>
            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>

    );
}

export default ReportInfoForWordEng;
