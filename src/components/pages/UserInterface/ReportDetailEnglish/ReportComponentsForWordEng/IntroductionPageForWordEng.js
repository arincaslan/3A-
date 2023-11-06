import React from 'react';


function IntroductionPageForWordEng({ info }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
            overflowY: "auto",
            padding: "16px"
        }}>
            <div style={{ marginBottom: "20px" }}>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Company Requesting the Valuation</p>
                <p>{info.projectData.requestingCompany}</p>

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Request Date</p>
                <p>{new Date(info.projectData.reportDate).toLocaleDateString()}</p>

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Subject of the Valuation</p>
                <p>{info.projectData.projectName} değerlemesi</p>

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Address of the Property Being Valued</p>
                <p>{info.tapuData.location.il} province {info.tapuData.location.ilce} district {info.tapuData.location.mahalle} neighborhood</p>

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Valuation Date and Report No</p>
                <p>Valuation Date: {new Date(info.projectData.valuationDate).toLocaleDateString()},  Report No: {info.projectData.reportNo}</p>

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Expert Conducting the Valuation</p>
                <p>{info.projectData.evaluator}</p>

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Responsible Expert Checking the Valuation</p>
                <p>{info.projectData.inspector}</p>

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Report Type</p>
                <p>Valuation Report of the {info.projectData.valuationRequest} Property</p>
            </div>
            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>
    );
}

export default IntroductionPageForWordEng;
