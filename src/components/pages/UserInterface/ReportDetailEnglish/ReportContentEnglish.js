import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import EvaluationAndConclusion from '../ReportDetail/ReportComponents/EvaluationAndConclusion/EvaluationAndConclusion';
import AttachmentsSection from '../ReportDetail/ReportComponents/AttachmentsSection/AttachmentsSection';
import ValuationMethodology from '../ReportDetail/ReportComponents/ValuationMethodology/ValuationMethodology';
import CoverPageEng from './ReportComponentsEnglish/CoverPageEng/CoverPageEng';
import TableOfContentsEng from './ReportComponentsEnglish/TableOfContentsEng/TableOfContentsEng';
import IntroductionPageEng from './ReportComponentsEnglish/IntroductionPageEng/IntroductionPageEng';
import ReportInfoEng from './ReportComponentsEnglish/ReportInfoEng/ReportInfoEng';
import CompanyInfoEng from './ReportComponentsEnglish/CompanyInfoEng/CompanyInfoEng';
import PropertyDetailEng from './ReportComponentsEnglish/PopertyDetailEng/PropertyDetailEng';
import PropertyLegalInfoEng from './ReportComponentsEnglish/PropertyLegalInfoEng/PropertyLegalInfoEng';
import LocationMarketInfoEng from './ReportComponentsEnglish/LocationMarketInfoEng/LocationMarketInfoEng';
import PropertyPhysicalInfoEng from './ReportComponentsEnglish/PropertyPhysicalInfoEng/PropertyPhysicalInfoEng';
import SWOTAnalysisEng from './ReportComponentsEnglish/SWOTAnalysisEng/SWOTAnalysisEng';


const ReportContentEnglish = ({ report, profileData, sectionRefs, onBarImageUpdate, onRadarImageUpdate, onBase64Upload }) => {
    const [currentPage, setCurrentPage] = useState();
    const [newCurrentPage, setNewCurrentPage] = useState();

    const [evalPage, setEvalPage] = useState();

    const setNewEvalPage = (page) => {
        setEvalPage(page);
    }


    const renderPageFooter = (pageNumber) => {
        return (
            <div style={{ position: "absolute", right: "10px", bottom: "10px" }}>
                <Text>{pageNumber}</Text>
            </div>
        );
    };
    const setPage = (page) => {
        setCurrentPage(page);
    }

    const setNewPage = (page) => {
        setNewCurrentPage(page);
    }

    return (
        <Box width="210mm"
            minHeight="297mm"
            boxShadow="0px 0px 8px rgba(0,0,0,0.5)"
            border="0px 1px 1px 1px solid #ccc"
            padding="5px" >
            <CoverPageEng info={report} profileInfo={profileData} />
            <TableOfContentsEng evalPage={evalPage} currentPage={currentPage} newCurrentPage={newCurrentPage} ref={sectionRefs[1].ref} refs={sectionRefs} />
            <IntroductionPageEng renderPageFooter={renderPageFooter} info={report} />
            <ReportInfoEng renderPageFooter={renderPageFooter} info={report} profileInfo={profileData} />
            <CompanyInfoEng renderPageFooter={renderPageFooter} info={report} profileInfo={profileData} />
            <PropertyDetailEng renderPageFooter={renderPageFooter} info={report} />
            <PropertyLegalInfoEng renderPageFooter={renderPageFooter} info={report} />
            <LocationMarketInfoEng setPage={setPage} renderPageFooter={renderPageFooter} onBase64Upload={onBase64Upload} onBarImageUpdate={onBarImageUpdate}
                onRadarImageUpdate={onRadarImageUpdate} info={report} />
            <PropertyPhysicalInfoEng renderPageFooter={renderPageFooter} currentPage={currentPage} info={report} />
            <SWOTAnalysisEng currentPage={currentPage} renderPageFooter={renderPageFooter} info={report} />
            <ValuationMethodology setNewPage={setNewPage} currentPage={currentPage} renderPageFooter={renderPageFooter} info={report} />
            <EvaluationAndConclusion evalPage={evalPage} setNewEvalPage={setNewEvalPage} renderPageFooter={renderPageFooter} profileInfo={profileData} info={report} newCurrentPage={newCurrentPage} />
            <AttachmentsSection />
        </Box>
    );
}

export default ReportContentEnglish;
