import React from 'react';
import ComparableMethodForWordEng from './EvalMethodsForWord/ComparableMethodForWordEng';
import CostMethodForWordEng from './EvalMethodsForWord/CostMethodForWordEng';
import IncomeApproachForWordEng from './EvalMethodsForWord/IncomeApproachForWordEng';

function EvaluationAndConclusionForWordEng({ info, profileInfo }) {
    const { emsalData, maaliyetData, gelirData } = info.valueData;
    const evaluator = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.evaluator);
    const inspector = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.inspector);

    return (

        <div style={{ padding: "1rem" }}>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>CHAPTER 9 - Evaluation of Analysis Results</p>
            {
                emsalData && <ComparableMethodForWordEng info={info} />
            }
            {
                maaliyetData && maaliyetData.secilenMetod && <CostMethodForWordEng info={info} />
            }

            {
                gelirData && <IncomeApproachForWordEng info={info} />
            }

            <p style={{ fontSize: "24px", fontWeight: "bold" }}>CHAPTER 10 - Conclusion</p>
            <p style={{ fontSize: "16px" }}>
                BURAYA KENDİ SONUÇ CÜMLELERİNİZİ YAZINIZ!!!!!!
            </p>
            <p style={{ fontSize: "16px" }}>
                We present our report for your information and review.
                Kind regards,
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "6px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                    <p style={{ fontSize: "medium" }}>Valuator</p>
                    <p style={{ fontSize: "small" }}>{evaluator.name}</p>
                    <p style={{ fontSize: "small" }}>SPK License No: {evaluator.spkNo}</p>
                    <p style={{ fontSize: "small" }}>{evaluator.title}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                    <p style={{ fontSize: "medium" }}>Valuation Supervisor</p>
                    <p style={{ fontSize: "small" }}>{inspector.name}</p>
                    <p style={{ fontSize: "small" }}>SPK License No: {inspector.spkNo}</p>
                    <p style={{ fontSize: "small" }}>{inspector.title}</p>
                </div>
            </div>

        </div>
    );
}

export default EvaluationAndConclusionForWordEng;
