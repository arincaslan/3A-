import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import ReportInfo from './ReportComponents/ReportInfo/ReportInfo';
import CompanyInfo from './ReportComponents/CompanyInfo/CompanyInfo';
import PropertyDetail from './ReportComponents/PopertyDetail/PropertyDetail';
import PropertyLegalInfo from './ReportComponents/PropertyLegalInfo/PropertyLegalInfo';
import LocationMarketInfo from './ReportComponents/LocationMarketInfo/LocationMarketInfo';
import PropertyPhysicalInfo from './ReportComponents/PropertyPhysicalInfo/PropertyPhysicalInfo';
import SWOTAnalysis from './ReportComponents/SWOTAnalysis/SWOTAnalysis';
import EvaluationAndConclusion from './ReportComponents/EvaluationAndConclusion/EvaluationAndConclusion';
import AttachmentsSection from './ReportComponents/AttachmentsSection/AttachmentsSection';
import CoverPage from './ReportComponents/CoverPage/CoverPage';
import IntroductionPage from './ReportComponents/IntroductionPage/IntroductionPage';
import ValuationMethodology from './ReportComponents/ValuationMethodology/ValuationMethodology';
import TableOfContents from './ReportComponents/TableOfContents/TableOfContents';
import Declaration from './ReportComponents/Declaration/Declaration';


const ReportContent = ({ report, profileData, sectionRefs, onBarImageUpdate, onRadarImageUpdate, onBase64Upload }) => {
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
            <CoverPage info={report} profileInfo={profileData} />
            <Declaration/>
            <TableOfContents evalPage={evalPage} currentPage={currentPage} newCurrentPage={newCurrentPage} ref={sectionRefs[1].ref} refs={sectionRefs} />
            <IntroductionPage renderPageFooter={renderPageFooter} info={report} />
            <ReportInfo renderPageFooter={renderPageFooter} info={report} profileInfo={profileData} />
            <CompanyInfo renderPageFooter={renderPageFooter} info={report} profileInfo={profileData} />
            <PropertyDetail renderPageFooter={renderPageFooter} info={report} />
            <PropertyLegalInfo renderPageFooter={renderPageFooter} info={report} />
            <LocationMarketInfo setPage={setPage} renderPageFooter={renderPageFooter} onBase64Upload={onBase64Upload} onBarImageUpdate={onBarImageUpdate}
                onRadarImageUpdate={onRadarImageUpdate} info={report} />
            <PropertyPhysicalInfo renderPageFooter={renderPageFooter} currentPage={currentPage} info={report} />
            <SWOTAnalysis currentPage={currentPage} renderPageFooter={renderPageFooter} info={report} />
            <ValuationMethodology setNewPage={setNewPage} currentPage={currentPage} renderPageFooter={renderPageFooter} info={report} />
            <EvaluationAndConclusion evalPage={evalPage} setNewEvalPage={setNewEvalPage} renderPageFooter={renderPageFooter} profileInfo={profileData} info={report} newCurrentPage={newCurrentPage} />
            <AttachmentsSection />
        </Box>
    );
}

export default ReportContent;
