import React from 'react';


function IncomeApproachForWordEng({ info }) {

    const { gelirData } = info.valueData;
    const { valuationDate } = info.projectData;

    const { secilenYontem, kiraCarpani, krediTutari, krediDegerOrani,
        aylikKiraBedeli, degerlemeTarihi, faizOrani, aciklama } = gelirData;

    let currentDate = new Date(valuationDate);
    let valuationDateObject = new Date(degerlemeTarihi);

    let differenceInTime = currentDate.getTime() - valuationDateObject.getTime();
    let differenceInYears = differenceInTime / (1000 * 3600 * 24 * 365);
    let gayrimenkulDegeriKredi = krediTutari / (krediDegerOrani / 100);



    let gayrimenkulDegeriKrediBugunku = gayrimenkulDegeriKredi / Math.pow((1 + (faizOrani / 100)), differenceInYears);


    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });


    let yillikKiraGeliri = aylikKiraBedeli * 12;

    let brütKiraÇarpanı = kiraCarpani;  // bu değer genellikle bölgedeki emlak piyasası ve ekonomik koşullara bağlıdır
    let gayrimenkulDegeriKira = brütKiraÇarpanı * yillikKiraGeliri;



    return (
        <div style={{ margin: '20px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Income Approach Valuation</h2>
            <p style={{ marginTop: '20px' }}>
                The income approach determines the value of a property based on the potential income that can be generated from it. This method is typically used for valuing income-producing properties.
            </p>
            <p style={{ marginTop: '20px' }}>
                Selected Valuation Method: {secilenYontem === 'kiraCarpani' ? 'Rent Multiplier Method' : 'Calculation with Credit Rating Score'}
            </p>
            {secilenYontem === 'kiraCarpani' && (
                <div style={{ marginTop: '20px' }}>
                    <p style={{ fontSize: '20px', marginBottom: '20px' }}>
                        In property valuation, we use the Rent Multiplier method. This method is used to estimate the sale price of a property and is usually suitable for investment properties or properties for rent.
                    </p>
                    <p style={{ fontSize: '20px', marginBottom: '20px' }}>
                        First, we calculate the annual rental income of the property.
                        When we perform this calculation, we find the monthly rental income ({formatter.format(Number(aylikKiraBedeli))}).
                        To find the annual rental income, we multiply this figure by 12 and find the result as {formatter.format(yillikKiraGeliri)}.
                        Then, we multiply this annual rental income by the gross rent multiplier.
                        This multiplier is generally determined based on the sale prices and rental yields of similar properties in the area.</p>

                    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', width: '100%' }}>
                        <span style={{ padding: '20px', backgroundColor: 'green', fontSize: '20px', color: 'white' }}>
                            The gross rent multiplier for this valuation is ({formatter.format(kiraCarpani)}).
                            As a result, we value the property at {formatter.format(gayrimenkulDegeriKira)} </span>
                    </div>
                </div>
            )}
            {secilenYontem === 'krediDegerNotu' && (
                <div style={{ marginTop: '20px' }}>
                    <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>
                        In property valuation, we use the Credit Rating Score method. This method is commonly used for properties valued with credit.
                    </h3>
                    <p style={{ marginTop: '20px' }}>
                        Additional Explanation: {aciklama}
                    </p>
                    <p style={{ fontSize: '20px', marginBottom: '20px' }}>
                        First, we use the credit amount ({formatter.format(krediTutari)}) and the Credit Value Ratio ({krediDegerOrani}%). With these values, we calculate the value of the property as {formatter.format(gayrimenkulDegeriKredi)}.
                    </p>
                    <p style={{ fontSize: '20px', marginBottom: '20px' }}>
                        Then, to find the present value of this valuation, we use the difference in years between the valuation date and today's date, along with the interest rate. The date of the valuation is {degerlemeTarihi}, today's date is {valuationDate}, and the interest rate is %{faizOrani}.
                    </p>
                    <p style={{ fontSize: '20px', marginBottom: '20px' }}>
                        As a result of these calculations, the value of the property calculated using the credit amount and the credit value ratio is {formatter.format(gayrimenkulDegeriKredi)}. This value has been adjusted with the interest rate to find today's value of the property, which is {formatter.format(gayrimenkulDegeriKrediBugunku)}.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', width: '100%' }}>
                        <span style={{ padding: '20px', backgroundColor: 'green', fontSize: '20px', color: 'white' }}>
                            As a result of these calculations, we value the present value of the property at <strong>{formatter.format(gayrimenkulDegeriKrediBugunku)}</strong> olarak değerliyoruz.
                        </span>
                    </div>
                </div>
            )}
            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>
    );
}

export default IncomeApproachForWordEng;
