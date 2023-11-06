import React from 'react';
import ComparableMethodForWord from './EvalMethodsForWord/ComparableMethodForWord';
import CostMethodForWord from './EvalMethodsForWord/CostMethodForWord';
import IncomeApproachForWord from './EvalMethodsForWord/IncomeApproachForWord';

function EvaluationAndConclusionForWord({ info, profileInfo }) {
    const { emsalData, maaliyetData, gelirData } = info.valueData;
    const evaluator = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.evaluator);
    const inspector = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.inspector);

    return (
        <div style={{ padding: "1rem" }}>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>BÖLÜM 9 - Analiz Sonuçlarının Değerlendirilmesi ve Sonuç</p>
            {
                emsalData && <ComparableMethodForWord info={info} />
            }
            {
                maaliyetData && maaliyetData.secilenMetod && <CostMethodForWord info={info} />
            }

            {
                gelirData && <IncomeApproachForWord info={info} />
            }

            <p style={{ fontSize: "16px" }}>
                BURAYA KENDİ SONUÇ CÜMLELERİNİZİ YAZINIZ!!!!!!
            </p>
            <p style={{ fontSize: "16px" }}>
                Raporumuzu bilgi ve incelemelerinize sunarız.
                Saygılarımızla,
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "6px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                    <p style={{ fontSize: "medium" }}>Değerlemeyi Yapan</p>
                    <p style={{ fontSize: "small" }}>{evaluator.name}</p>
                    <p style={{ fontSize: "small" }}>SPK Lisans No: {evaluator.spkNo}</p>
                    <p style={{ fontSize: "small" }}>{evaluator.title}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                    <p style={{ fontSize: "medium" }}>Değerlemeyi Kontrol Eden</p>
                    <p style={{ fontSize: "small" }}>{inspector.name}</p>
                    <p style={{ fontSize: "small" }}>SPK Lisans No: {inspector.spkNo}</p>
                    <p style={{ fontSize: "small" }}>{inspector.title}</p>
                </div>
            </div>

        </div>
    );
}

export default EvaluationAndConclusionForWord;
