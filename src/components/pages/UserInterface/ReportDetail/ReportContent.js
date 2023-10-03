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


const ReportContent = ({ report, profileData, sectionRefs, onBarImageUpdate, onRadarImageUpdate, onBase64Upload }) => {
    const [currentPage, setCurrentPage] = useState();
    const [newCurrentPage, setNewCurrentPage] =useState();

    const [evalPage, setEvalPage] =useState();

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
            <div style={{ pageBreakAfter: "always" }}>
                <CoverPage info={report} profileInfo={profileData} />
            </div>
            <div style={{ pageBreakAfter: "always" }}>
                <TableOfContents ref={sectionRefs[1].ref} refs={sectionRefs} />
            </div>

            <div style={{ position: "relative", pageBreakAfter: "always" }} ref={sectionRefs[2].ref}>
                <IntroductionPage info={report} />
                {renderPageFooter(1)}
            </div>

            <div style={{ position: "relative", pageBreakAfter: "always" }} ref={sectionRefs[3].ref}>
                <ReportInfo info={report} profileInfo={profileData} />
                {renderPageFooter(2)}
            </div>
            <div style={{position: "relative", pageBreakAfter: "always" }} ref={sectionRefs[4].ref}>
                <CompanyInfo info={report} profileInfo={profileData} />
                {renderPageFooter(3)}
            </div>
            <div style={{position: "relative", pageBreakAfter: "always" }} ref={sectionRefs[5].ref}>
                <PropertyDetail info={report} />
                {renderPageFooter(4)}
            </div>
            <div style={{position: "relative" }} ref={sectionRefs[6].ref}>
                <PropertyLegalInfo renderPageFooter={renderPageFooter} info={report} />
                {renderPageFooter(6)}
            </div>
            <div  ref={sectionRefs[7].ref}>
                <LocationMarketInfo setPage={setPage} renderPageFooter={renderPageFooter} onBase64Upload={onBase64Upload} onBarImageUpdate={onBarImageUpdate}
                    onRadarImageUpdate={onRadarImageUpdate} info={report} />
                    
            </div>
            <div style={{ pageBreakAfter:"always" }} ref={sectionRefs[8].ref}>
                <PropertyPhysicalInfo renderPageFooter={renderPageFooter} currentPage={currentPage} info={report} />
                
            </div>
            <div ref={sectionRefs[9].ref}>
                <SWOTAnalysis currentPage={currentPage} renderPageFooter={renderPageFooter} info={report} />
            </div>
            <div ref={sectionRefs[10].ref}>
                <ValuationMethodology setNewPage={setNewPage} currentPage={currentPage} renderPageFooter={renderPageFooter} info={report} />
            </div>
            <div style={{ marginBottom: "30px"}} ref={sectionRefs[11].ref}>
                <EvaluationAndConclusion evalPage={evalPage} setNewEvalPage={setNewEvalPage} renderPageFooter={renderPageFooter} profileInfo={profileData} info={report} newCurrentPage={newCurrentPage} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[12].ref}>
                <AttachmentsSection />
            </div>
        </Box>
    );
}

export default ReportContent;
