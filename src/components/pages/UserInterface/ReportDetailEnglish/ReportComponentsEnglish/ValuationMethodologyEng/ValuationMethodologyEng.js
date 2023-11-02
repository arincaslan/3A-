import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem, List } from "@chakra-ui/react"

const ValuationMethodologyEng = ({ info, currentPage, setNewPage, renderPageFooter }) => {

  const { emsalData, maaliyetData, gelirData } = info.valueData;
  const methods = [];
  if (emsalData.emsaller) methods.push("Emsal Karşılaştırma Metodu");
  if (maaliyetData.yeniden.faktorler) methods.push("Maliyet Yaklaşımı Metodu");
  if (gelirData) methods.push("Gelir Yaklaşımı Metodu");
  function formatCurrency(value) {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(value);
  }

  const calculatePageNumbers = (currentPage, emsalData, maliyetData, gelirData) => {
    let emsalPage = null;
    let maliyetPage = null;
    let gelirPage = null;
    let finalPage = currentPage + 3;

    if (emsalData.emsaller) {
      emsalPage = finalPage;
      finalPage = finalPage + 2;
    }

    if (maliyetData.yeniden.faktorler) {
      maliyetPage = finalPage;
      finalPage++;
    }

    if (gelirData) {
      gelirPage = finalPage;
      finalPage++;
    }

    return { emsalPage, maliyetPage, gelirPage, finalPage };
  }

  const { emsalPage, maliyetPage, gelirPage, finalPage } = calculatePageNumbers(currentPage, emsalData, maaliyetData, gelirData);
  setNewPage(finalPage);

  return (
    <Box p="5" borderRadius="md" boxShadow="lg">
      <Heading fontFamily="heading2" color="teal" fontWeight="bold" as="h2" size="xl" mb={2} borderBottom="2px solid" borderColor="teal.500" pb={6}>SECTION 8 - Valuation Methodology</Heading>
      {emsalData.emsaller && (
        <Box>
          <Heading color="secondary.700" as="h3" size="lg" mb={2}>Comparative Market Analysis Method</Heading>
          <Box style={{ pageBreakAfter: "always" }} paddingBottom="50px" position="relative" minHeight="850px">

            <Text mb={2}>
              The valuation of this property has utilized {methods.join(', ')}. This section elaborates and explains the methods used in detail.
            </Text>
            <Text mb={2}>
              The Comparative Market Analysis Method has been employed in this valuation report. This approach was selected on the basis that it would most accurately reflect the market conditions and the value of other similar properties.
            </Text>
            <Text mb={2}>
              The Comparative Market Analysis Method is a frequently used technique in the real estate valuation process.
              This method compares the sale prices of similar or 'comparable' properties to determine the value of a property on offer.
              It is particularly prevalent in the assessment of residential real estate as there is often a substantial amount of sales data for properties with similar characteristics.
            </Text>
            <Heading color="secondary.700" fontSize="20px" as="h4" size="sm" mb={2}>Elements of Comparative Market Analysis</Heading>
            <List spacing={3}>
              <ListItem>
                <Text color="secondary.700" as="em"><b>Selection of Comparables</b></Text>
                <Text>
                  Other properties with similar characteristics to the property being valued are selected.
                  These similarities often include factors such as the size of the property, location, age, and quality of the structure.
                </Text>
              </ListItem>
              <ListItem>
                <Text color="secondary.700" as="em"><b>Price Comparison</b></Text>
                <Text>
                  The sale prices of the selected comparables are determined and compared with each other.
                  This is typically done on a per-unit basis (e.g., price per square meter).
                </Text>
              </ListItem>
              <ListItem>
                <Text color="secondary.700" as="em"><b>Adjustments</b></Text>
                <Text>
                  The unique characteristics of each comparable are taken into account, and their impact on the value of the property being appraised is assessed.
                  For example, if a comparable property has an excellent view and the property being appraised does not, this can lead to a price adjustment.
                </Text>
              </ListItem>
              <ListItem>
                <Text color="secondary.700" as="em"><b>Analysis of Results</b></Text>
                <Text>
                  After considering all comparables and adjustments, the gathered information is analyzed, and an estimated value for the property being appraised is established.
                </Text>
              </ListItem>
            </List>

            {renderPageFooter(emsalPage)}
          </Box>
          <Box p={5} style={{ pageBreakAfter: "always" }} minHeight="1000px" position="relative">
            <Box marginTop="50px" p={6} border="1px solid" borderRadius="md" borderColor="primary.900" backgroundColor="white" height="auto">
              <Text mb={2}>
                The comparables used in this valuation are:
                <UnorderedList mt={4} spacing={3}>
                  {emsalData?.emsaller?.map((emsal, index) => (
                    <ListItem key={index}>
                      <Box
                        padding="10px"
                        borderRadius="md"
                        backgroundColor="primary.100"
                        border="1px solid"
                        borderColor="secondary.700"
                        mb={2}
                      >
                        <Text fontFamily="body2" fontWeight="bold">
                          Requested value for the property of {emsal.tasinmazAlani} square meters: <Text as="span" color="secondary.500">{formatCurrency(emsal.deger)}</Text>
                        </Text>
                        <Text mt={1} fontSize="sm" color="primary.700">
                          Additional information: {emsal.aciklama}
                        </Text>

                      </Box>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Text>

            </Box>
            <Text mt={8}>
              This method is highly effective in cases where there are many real estates with similar characteristics in the same region.
              However, the accuracy of this method may decrease for properties with unique features or in markets with low liquidity.
              Due to the challenges in such situations, appraisers often prefer to use multiple valuation methods and combine the results.
            </Text>
            {renderPageFooter(emsalPage + 1)}

          </Box>

        </Box>
      )}

      {maaliyetData.yeniden.faktorler && (
        <Box style={{ pageBreakAfter: "always" }} paddingBottom="50px" position="relative" minHeight="900px" >
          <Heading color="secondary.700" as="h3" size="lg" mb={3}>Cost Approach Method</Heading>
          <Text mb={3}>
            The Cost Approach Method has been utilized in this valuation report. This method was chosen because it is believed to provide a more accurate value in cases where the property's value is based on the cost of the structure and the value of the land.
          </Text>
          <Text mb={2}>
            The cost approach is an important technique for real estate valuation.
            This method is particularly useful for properties with unique features or those that have been newly constructed.
          </Text>
          <Heading color="secondary.700" fontSize="20px" as="h4" size="sm" mb={2}>Elements of the Cost Approach Method</Heading>
          <List spacing={3}>
            <ListItem>
              <Text color="secondary.700" as="em"><b>Land Value</b></Text>
              <Text>
                The first step is to determine the value of the land on which the property being appraised is situated.
                This is usually done by assessing the land using the comparative market analysis method.
              </Text>
            </ListItem>
            <ListItem>
              <Text color="secondary.700" as="em"><b>Construction Costs</b></Text>
              <Text>
                The second step involves determining how much it would cost to reconstruct the structure to its present state.
                This typically takes into account the cost of building materials, labor costs, development costs, and the like.
              </Text>
            </ListItem>
            <ListItem>
              <Text color="secondary.700" as="em"><b>Depreciation</b></Text>
              <Text>
                Depending on the age and condition of the structure, a certain amount of depreciation (loss of value) is considered.
                This often results from factors such as the decrease in demand for the structure over time or wear and tear on building materials.
              </Text>
            </ListItem>
            <ListItem>
              <Text color="secondary.700" as="em"><b>Additions and Deductions</b></Text>
              <Text>
                Additions or deductions are made considering special circumstances.
                For example, a property with a special view may have a higher value.
              </Text>
            </ListItem>
          </List>
          <Text mt={4}>
            After these steps are completed, the total value of the property is given by the sum of the land value and construction costs (after accounting for depreciation).
          </Text>
          <Text mt={2}>
            The Cost Approach Method is often used for properties such as unique or special-purpose buildings, historic properties, new constructions, or where comparable sales data is scarce in the market. However, applying this method can sometimes be complex and often requires a professional appraisal.
          </Text>
          <Text mb={3}>
            Selected valuation cost method: 'Reproduction Cost Method'
            <Text>The reproduction cost method refers to determining the value of a property based on the current cost of constructing an equivalent property.</Text>
          </Text>
          {renderPageFooter(maliyetPage)}
        </Box>


      )}

      {gelirData && (
        <Box p={5} style={{ pageBreakAfter: "always" }} paddingBottom="50px" position="relative" maxHeight="1000px" minHeight="850px" >
          <Heading color="secondary.700" as="h3" size="lg" mb={3}>Income Approach Method</Heading>
          <Text mb={2}>
            The income approach is another popular technique used in real estate valuation.
            This method is generally used for investment properties since such properties often generate income,
            which can be utilized to determine the value of the real estate.
          </Text>
          <Heading color="secondary.700" fontSize="20px" as="h4" size="sm" mb={2}>Elements of the Income Approach Method</Heading>
          <List spacing={3}>
            <ListItem>
              <Text color="secondary.700" as="em"><b>Determination of Income</b></Text>
              <Text>
                The first step in this approach is to determine the potential gross income of the property.
                This usually comprises rental income, parking fees, or other types of income
                (for example, income from advertising spaces).
              </Text>
            </ListItem>
            <ListItem>
              <Text color="secondary.700" as="em"><b>Deduction of Expenses</b></Text>
              <Text>
                Subsequently, expenses related to the operation and maintenance of the property
                (for instance, taxes, insurance, maintenance, and repair costs) are deducted from the gross income.
                This gives the net operating income of the property.
              </Text>
            </ListItem>
            <ListItem>
              <Text color="secondary.700" as="em"><b>Application of the Capitalization Rate</b></Text>
              <Text>
                The net operating income is typically multiplied by a capitalization rate (or "cap rate").
                The capitalization rate is used to assess the risk and return of real estate investments
                and is usually derived from the valuation of similar properties.
              </Text>
            </ListItem>
          </List>
          <Text mt={4}>
            Once these steps are completed, the net operating income is divided by the capitalization rate, which gives the value of the property.
          </Text>
          <Text mt={2}>
            The Income Approach is often used for properties such as apartment buildings, office buildings, or shopping centers that generate rental income. However, applying this method requires accurately estimating income and expenses and choosing an appropriate capitalization rate. Therefore, it usually necessitates a professional valuation.
          </Text>
          <Text mb={3}>
            The Income Approach Method has been used in this valuation report. This choice was made because it is thought to provide a more accurate value in situations where the property's future earnings will have an effective impact on the valuation.
          </Text>
          <Text mb={3}>
            Selected income method: {gelirData.secilenMetod === 'kiraCarpani' ? 'Rent Multiplier Method' : 'Calculation with Credit-Value Score'}
            {gelirData.secilenMetod === 'kiraCarpani' ?
              <Text>The rent multiplier method refers to determining the value of a property based on the multiplier of the rental income that will be generated from the property.</Text> :
              <Text>The Calculation with Credit-Value Score method refers to determining the value of a property based on the property's credit risk and income expectation.</Text>
            }
          </Text>

          {renderPageFooter(gelirPage)}
        </Box>

      )}
    </Box>
  )
}

export default ValuationMethodologyEng;
