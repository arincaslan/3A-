import React from 'react';
import { Box } from '@chakra-ui/react';
import CoverPageForWord from "../ReportDetail/ReportComponentsForWord/CoverPageForWord";
import IntroductionPageForWord from '../ReportDetail/ReportComponentsForWord/IntroductionPageForWord';
import TableOfContentsForWord from '../ReportDetail/ReportComponentsForWord/TableOfContentsForWord';
import ReportInfoForWord from '../ReportDetail/ReportComponentsForWord/ReportInfoForWord';
import CompanyInfoForWord from '../ReportDetail/ReportComponentsForWord/CompanyInfoForWord';
import PropertyDetailForWord from '../ReportDetail/ReportComponentsForWord/PropertyDetailForWord';
import PropertyLegalInfoForWord from '../ReportDetail/ReportComponentsForWord/PropertyLegalInfoForWord';
import LocationMarketInfoForWord from '../ReportDetail/ReportComponentsForWord/LocationMarketInfoForWord';
import PropertyPhysicalInfoForWord from '../ReportDetail/ReportComponentsForWord/PropertyPhysicalInfoForWord';
import SWOTAnalysisForWord from '../ReportDetail/ReportComponentsForWord/SwotAnalysisForWord';
import ValuationMethodologyForWord from '../ReportDetail/ReportComponentsForWord/ValuationMethodologyForWord';
import EvaluationAndConclusionForWord from '../ReportDetail/ReportComponentsForWord/EvaluationAndConclusionForWord';
import AttachmentsSectionForWord from '../ReportDetail/ReportComponentsForWord/AttachmentsSectionForWord';



const ReportContentForWordEnglish = ({ report, profileData, sectionRefs, barImage, radarImage , base64Img}) => {
    return (
        <Box>
            <div ref={sectionRefs[0].ref} style={{ marginBottom: "30px", pageBreakAfter: "always" }}>
                <CoverPageForWord info={report} profileInfo={profileData} />
            </div>
            <TableOfContentsForWord ref={sectionRefs[1].ref} refs={sectionRefs} />
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[2].ref}>
                <IntroductionPageForWord info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[3].ref}>
                <ReportInfoForWord info={report} profileInfo={profileData} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[4].ref}>
                <CompanyInfoForWord info={report} profileInfo={profileData} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[5].ref}>
                <PropertyDetailForWord info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[6].ref}>
                <PropertyLegalInfoForWord info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[7].ref}>
                <LocationMarketInfoForWord base64Img={base64Img} barImage={barImage} radarImage={radarImage} info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[8].ref}>
                <PropertyPhysicalInfoForWord info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[9].ref}>
                <SWOTAnalysisForWord info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[10].ref}>
                <ValuationMethodologyForWord info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[11].ref}>
                <EvaluationAndConclusionForWord profileInfo={profileData} info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[12].ref}>
                <AttachmentsSectionForWord  />
            </div>
        </Box>
    );
}

export default ReportContentForWordEnglish;
