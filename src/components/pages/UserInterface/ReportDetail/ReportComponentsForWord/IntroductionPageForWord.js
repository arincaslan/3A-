import React from 'react';

function IntroductionPageForWord({ info }) {
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
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Değerlemeyi Talep Eden Firma</p>
                <p>{info.projectData.requestingCompany}</p>

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Talep Tarihi</p>
                <p>{new Date(info.projectData.reportDate).toLocaleDateString()}</p>

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Değerleme Konusu</p>
                <p>{info.projectData.projectName} değerlemesi</p>

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Değerleme Konusu Gayr. Adresi</p>
                <p>{info.tapuData.location.il} ili {info.tapuData.location.ilce} ilçesi {info.tapuData.location.mahalle} mahallesi </p>

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Değerleme Tarihi ve Rapor No</p>
                <p>Değerleme Tarihi: {new Date(info.projectData.valuationDate).toLocaleDateString()},  Rapor No: {info.projectData.reportNo}</p>

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Değerlemeyi Yapan Uzman</p>
                <p>{info.projectData.evaluator}</p>

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Değerlemeyi Kontrol Eden Sorumlu Değ. Uzmanı</p>
                <p>{info.projectData.inspector}</p>

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Rapor Türü</p>
                <p>{info.projectData.valuationRequest} Gayrimenkulün Değerleme Raporu</p>
            </div>
            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>
    );
}

export default IntroductionPageForWord;
