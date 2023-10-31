import { Box, Heading, Text, Divider } from "@chakra-ui/react";

function ReportInfoEng({ info, profileInfo, renderPageFooter }) {
  const evaluator = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.evaluator);
  const inspector = profileInfo.appraisers.find(appraiser => appraiser.name === info.projectData.inspector);
  return (


    <Box
      style={{ position: "relative", pageBreakAfter: "always" }}
      height="auto"
      overflowY="auto"
      padding={6}
      borderRadius="lg"
      boxShadow="lg"
      bgColor="white"
      minHeight="1000px"
    >
      <Heading
        borderBottom="2px solid" borderColor="teal.500" pb={6}
        as="h2"
        size="lg"
        fontWeight="bold"
        color="teal"
        mb={6}
        fontFamily="heading2"  // Roboto
      >
        SECTION 1 - General Report Information
      </Heading>
      <Heading
        as="h3"
        size="md"
        mb={2}
        fontWeight="bold"
        fontFamily="heading2"  // Roboto
      >
        1.1) Report Date and Number
      </Heading>
      <Text mb={8} fontSize="16px" fontFamily="body">  {/* Raleway */}
        This report was prepared by our company on {new Date(info.projectData.valuationDate).toLocaleDateString()} with the report number {info.projectData.reportNo}.
      </Text>

      <Heading as="h3"
        size="md"
        mb={2}
        fontWeight="bold"
        fontFamily="heading2" >
        1.2) Type of the Report
      </Heading>
      <Text mb={8} fontSize="16px" fontFamily="body">
        Type of the Report: Valuation Report of the {info.projectData.valuationRequest} Property. Compliance with SPK standards has been ensured in the valuation study and report preparation. Further explanation goes here.
      </Text>

      <Heading as="h3"
        size="md"
        mb={2}
        fontWeight="bold"
        fontFamily="heading2" >
        1.3) Names of the Preparers and the Responsible Appraisal Expert
      </Heading>
      <Text mb={8} fontSize="16px" fontFamily="body">
        This report was prepared by our company's Responsible Appraisal Expert {info.projectData.evaluator} (SPK License No:{evaluator.spkNo}) and reviewed by our company's Responsible Appraisal Expert {info.projectData.inspector} (SPK License No:{inspector.spkNo}).
      </Text>

      <Heading as="h3"
        size="md"
        mb={2}
        fontWeight="bold"
        fontFamily="heading2" >
        1.4) Valuation Date and Value Concept
      </Heading>
      <Text mb={8} fontSize="16px" fontFamily="body">
        The valuation date is {new Date(info.projectData.valuationDate).toLocaleDateString()} and the effective date of the value is 3 months. The value concept valid in this report is; Market Value. Market Value represents the amount that could be obtained as a result of a transaction on a specific date when the property is put up for sale, where neither the buyer nor the seller is under any pressure, and both parties are informed about the subject.
      </Text>

      <Heading as="h3"
        size="md"
        mb={2}
        fontWeight="bold"
        fontFamily="heading2" >
        1.5) Underlying Contract
      </Heading>
      <Text mb={8} fontSize="16px" fontFamily="body">
        The basis of this valuation study and report is the contract with the number {profileInfo.companyInfo.agreementNo}, which was signed between {profileInfo.companyInfo.companyName} and {info.projectData.requestingCompany} on {new Date(profileInfo.companyInfo.agreementDate).toLocaleDateString()}.
      </Text>
      {renderPageFooter(2)}
    </Box>
  );
}

export default ReportInfoEng;
