import React from 'react';

const ValuationMethodologyForWordEng = ({ info }) => {
    const { emsalData, maaliyetData, gelirData } = info.valueData;
    function formatCurrency(value) {
        return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(value);
    }


    const methods = [];
    if (emsalData) methods.push("Emsal Karşılaştırma Metodu");
    if (maaliyetData) methods.push("Maliyet Yaklaşımı Metodu");
    if (gelirData) methods.push("Gelir Yaklaşımı Metodu");

    return (
        <div>

            <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '16px' }}>SECTION 8 - Valuation Methodology</h3>

            {emsalData && (
                <div style={{ marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>Comparative Market Analysis Method</h3>
                    <p >The valuation of this property has utilized {methods.join(', ')}. This section elaborates and explains the methods used in detail.</p>
                    <p >The Comparative Market Analysis Method has been employed in this valuation report. This approach was selected on the basis that it would most accurately reflect the market conditions and the value of other similar properties.</p>
                    <p >The Comparative Market Analysis Method is a frequently used technique in the real estate valuation process.
                        This method compares the sale prices of similar or 'comparable' properties to determine the value of a property on offer.
                        It is particularly prevalent in the assessment of residential real estate as there is often a substantial amount of sales data for properties with similar characteristics.</p>
                    <h4 >Elements of Comparative Market Analysis</h4>
                    <ul>
                        <li style={{ marginBottom: '5px' }}>
                            <strong>Selection of Comparables</strong>
                            <p>Other properties with similar characteristics to the property being valued are selected.
                                These similarities often include factors such as the size of the property, location, age, and quality of the structure.</p>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <strong>Price Comparison</strong>
                            <p>The sale prices of the selected comparables are determined and compared with each other.
                                This is typically done on a per-unit basis (e.g., price per square meter).</p>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <strong>Adjustments</strong>
                            <p>
                                The unique characteristics of each comparable are taken into account, and their impact on the value of the property being appraised is assessed.
                                For example, if a comparable property has an excellent view and the property being appraised does not, this can lead to a price adjustment.
                            </p>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <strong>Analysis of Results</strong>
                            <p>After considering all comparables and adjustments, the gathered information is analyzed, and an estimated value for the property being appraised is established.</p>
                        </li>
                    </ul>

                    <p style={{ marginBottom: '5px' }}>The comparables used in this valuation are:
                        <ul>
                            {emsalData?.emsaller?.map((emsal, index) => (
                                <li key={index}>
                                    Requested value for the property of {emsal.tasinmazAlani} square meters: {formatCurrency(emsal.deger)}
                                    Additional information: {emsal.aciklama}
                                </li>
                            ))}
                        </ul>

                    </p>
                </div>

            )}

            {maaliyetData && (
                <div style={{ marginBottom: '5px' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>Cost Approach Method</h3>
                    <p style={{ marginBottom: '5px' }}>
                        The Cost Approach Method has been utilized in this valuation report. This method was chosen because it is believed to provide a more accurate value in cases where the property's value is based on the cost of the structure and the value of the land.
                    </p>
                    <p style={{ marginBottom: '5px' }}>
                        The cost approach is an important technique for real estate valuation.
                        This method is particularly useful for properties with unique features or those that have been newly constructed.
                    </p>
                    <h4 style={{ marginBottom: '5px' }}>Elements of the Cost Approach Method</h4>
                    <ul style={{ listStyleType: 'none', marginLeft: '10px' }}>
                        <li style={{ marginBottom: '5px' }}>
                            <p><strong>Land Value</strong></p>
                            <p>The first step is to determine the value of the land on which the property being appraised is situated.
                                This is usually done by assessing the land using the comparative market analysis method.</p>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <p><strong>Construction Costs</strong></p>
                            <p>The second step involves determining how much it would cost to reconstruct the structure to its present state.
                                This typically takes into account the cost of building materials, labor costs, development costs, and the like.</p>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <p><strong>Depreciation</strong></p>
                            <p>Depending on the age and condition of the structure, a certain amount of depreciation (loss of value) is considered.
                                This often results from factors such as the decrease in demand for the structure over time or wear and tear on building materials.</p>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <p><strong>Additions and Deductions</strong></p>
                            <p>Additions or deductions are made considering special circumstances.
                                For example, a property with a special view may have a higher value.</p>
                        </li>
                    </ul>
                    <p style={{ marginTop: '10px' }}>
                        After these steps are completed, the total value of the property is given by the sum of the land value and construction costs (after accounting for depreciation).
                    </p>
                    <p sstyle={{ marginTop: '5px' }}>
                        The Cost Approach Method is often used for properties such as unique or special-purpose buildings, historic properties, new constructions, or where comparable sales data is scarce in the market. However, applying this method can sometimes be complex and often requires a professional appraisal.
                    </p>
                    <p style={{ marginBottom: '5px' }}>
                        Selected valuation cost method: 'Reproduction Cost Method'

                        <span>The reproduction cost method refers to determining the value of a property based on the current cost of constructing an equivalent property.</span>

                    </p>
                </div>

            )}

            {gelirData && (
                <div style={{ marginBottom: '5px' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>Income Approach Method</h3>
                    <p style={{ marginBottom: '5px' }}>
                        The income approach is another popular technique used in real estate valuation.
                        This method is generally used for investment properties since such properties often generate income,
                        which can be utilized to determine the value of the real estate.
                    </p>
                    <h4 style={{ marginBottom: '5px' }}>Elements of the Income Approach Method</h4>
                    <ul style={{ listStyleType: 'disc', marginLeft: '10px' }}>
                        <li style={{ marginBottom: '5px' }}>
                            <em><b>Determination of Income</b></em>
                            <p>
                                The first step in this approach is to determine the potential gross income of the property.
                                This usually comprises rental income, parking fees, or other types of income
                                (for example, income from advertising spaces).
                            </p>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <em><b>Deduction of Expenses</b></em>
                            <p>
                                Subsequently, expenses related to the operation and maintenance of the property
                                (for instance, taxes, insurance, maintenance, and repair costs) are deducted from the gross income.
                                This gives the net operating income of the property.
                            </p>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <em><b>Application of the Capitalization Rate</b></em>
                            <p>
                                The net operating income is typically multiplied by a capitalization rate (or "cap rate").
                                The capitalization rate is used to assess the risk and return of real estate investments
                                and is usually derived from the valuation of similar properties.
                            </p>
                        </li>
                    </ul>
                    <p style={{ marginTop: '10px' }}>
                        Once these steps are completed, the net operating income is divided by the capitalization rate, which gives the value of the property.
                    </p>
                    <p style={{ marginTop: '5px' }}>
                        The Income Approach is often used for properties such as apartment buildings, office buildings, or shopping centers that generate rental income. However, applying this method requires accurately estimating income and expenses and choosing an appropriate capitalization rate. Therefore, it usually necessitates a professional valuation.
                    </p>
                    <p style={{ marginBottom: '5px' }}>
                        The Income Approach Method has been used in this valuation report. This choice was made because it is thought to provide a more accurate value in situations where the property's future earnings will have an effective impact on the valuation.
                    </p>
                    <p style={{ marginBottom: '5px' }}>
                        Selected income method: {gelirData.secilenMetod === 'kiraCarpani' ? 'Kira Çarpanı Metodu' : 'Kredi-Değer Notu İle Hesaplama'}
                        {gelirData.secilenMetod === 'kiraCarpani' ?
                            <p>The rent multiplier method refers to determining the value of a property based on the multiplier of the rental income that will be generated from the property.</p> :
                            <p>The Calculation with Credit-Value Score method refers to determining the value of a property based on the property's credit risk and income expectation.</p>
                        }
                    </p>
                </div>

            )}
            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>
    )
}

export default ValuationMethodologyForWordEng;
