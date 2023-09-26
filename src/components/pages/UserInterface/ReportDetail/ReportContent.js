import React from 'react';
import { Box } from '@chakra-ui/react';
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
    return (
        <Box width="210mm"
            minHeight="297mm"
            boxShadow="0px 0px 8px rgba(0,0,0,0.5)"
            border="0px 1px 1px 1px solid #ccc"
            padding="5px" >
            <div ref={sectionRefs[0].ref} style={{  pageBreakAfter: "always" }}>
                <CoverPage info={report} profileInfo={profileData} />
            </div>
            <div style={{ pageBreakAfter: "always" }}>
                <TableOfContents ref={sectionRefs[1].ref} refs={sectionRefs} />
            </div>

            <div style={{ marginBottom: "30px", pageBreakAfter: "always" }} ref={sectionRefs[2].ref}>
                <IntroductionPage info={report} />
            </div>
            <div style={{ marginBottom: "30px", pageBreakAfter: "always"  }} ref={sectionRefs[3].ref}>
                <ReportInfo info={report} profileInfo={profileData} />
            </div>
            <div style={{ marginBottom: "30px",  pageBreakAfter: "always" }} ref={sectionRefs[4].ref}>
                <CompanyInfo info={report} profileInfo={profileData} />
            </div>
            <div style={{ marginBottom: "30px",  pageBreakAfter: "always"  }} ref={sectionRefs[5].ref}>
                <PropertyDetail info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[6].ref}>
                <PropertyLegalInfo info={report} />
            </div>
            <div style={{ marginBottom: "30px",  pageBreakAfter: "always"  }} ref={sectionRefs[7].ref}>
                <LocationMarketInfo onBase64Upload={onBase64Upload} onBarImageUpdate={onBarImageUpdate}
                    onRadarImageUpdate={onRadarImageUpdate} info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[8].ref}>
                <PropertyPhysicalInfo info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[9].ref}>
                <SWOTAnalysis info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[10].ref}>
                <ValuationMethodology info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[11].ref}>
                <EvaluationAndConclusion profileInfo={profileData} info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[12].ref}>
                <AttachmentsSection />
            </div>
        </Box>
    );
}

export default ReportContent;
