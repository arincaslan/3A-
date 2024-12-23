import React from 'react';
import { Box } from '@chakra-ui/react';
import AttachmentsSectionForWord from '../ReportDetail/ReportComponentsForWord/AttachmentsSectionForWord';
import CoverPageForWordEng from './ReportComponentsForWordEng/CoverPageForWordEng';
import IntroductionPageForWordEng from './ReportComponentsForWordEng/IntroductionPageForWordEng';
import ReportInfoForWordEng from './ReportComponentsForWordEng/ReportInfoForWordEng';
import CompanyInfoForWordEng from './ReportComponentsForWordEng/CompanyInfoForWordEng';
import PropertyDetailForWordEng from './ReportComponentsForWordEng/PropertyDetailForWordEng';
import PropertyLegalInfoForWordEng from './ReportComponentsForWordEng/PropertyLegalInfoForWordEng';
import LocationMarketInfoForWordEng from './ReportComponentsForWordEng/LocationMarketInfoForWordEng';
import PropertyPhysicalInfoForWordEng from './ReportComponentsForWordEng/PropertyPhysicalInfoForWordEng';
import SWOTAnalysisForWordEng from './ReportComponentsForWordEng/SwotAnalysisForWordEng';
import ValuationMethodologyForWordEng from './ReportComponentsForWordEng/ValuationMethodologyForWordEng';
import EvaluationAndConclusionForWordEng from './ReportComponentsForWordEng/EvaluationAndConclusionForWordEng';
import TableOfContentsForWordEng from './ReportComponentsForWordEng/TableOfContentsForWordEng';
import DeclarationForWordEng from './ReportComponentsForWordEng/DeclarationForWordEng';



const ReportContentForWordEnglish = ({ report, profileData, sectionRefs, barImage, radarImage, base64Img }) => {
    return (
        <Box>
            <div ref={sectionRefs[0].ref} style={{ marginBottom: "30px", pageBreakAfter: "always" }}>
                <CoverPageForWordEng info={report} profileInfo={profileData} />
            </div>
            <div style={{ marginBottom: "30px" }}>
                <DeclarationForWordEng />
            </div>
            <TableOfContentsForWordEng ref={sectionRefs[1].ref} refs={sectionRefs} />
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[2].ref}>
                <IntroductionPageForWordEng info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[3].ref}>
                <ReportInfoForWordEng info={report} profileInfo={profileData} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[4].ref}>
                <CompanyInfoForWordEng info={report} profileInfo={profileData} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[5].ref}>
                <PropertyDetailForWordEng info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[6].ref}>
                <PropertyLegalInfoForWordEng info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[7].ref}>
                <LocationMarketInfoForWordEng base64Img={base64Img} barImage={barImage} radarImage={radarImage} info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[8].ref}>
                <PropertyPhysicalInfoForWordEng info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[9].ref}>
                <SWOTAnalysisForWordEng info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[10].ref}>
                <ValuationMethodologyForWordEng info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[11].ref}>
                <EvaluationAndConclusionForWordEng profileInfo={profileData} info={report} />
            </div>
            <div style={{ marginBottom: "30px" }} ref={sectionRefs[12].ref}>
                <AttachmentsSectionForWord />
            </div>
        </Box>
    );
}

export default ReportContentForWordEnglish;
