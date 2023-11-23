import React, { useEffect, useState } from 'react';


function CostMethodForWordEng({ info }) {

    const { yeniden } = info.valueData?.maaliyetData;
    const alan = Number(info.tapuData?.parsel?.yuzolcumu?.replace(",", "."));
    const costYenidenYapim = Number(yeniden?.yapim_maliyeti?.replace(",", "."));
    const { emsaller } = info.valueData.emsalData;

    // Her bir emsalin değerini m2'sine bölme işlemi
    const emsalValuesPerM2 = emsaller.map(emsal => Number(emsal.deger) / Number(emsal.tasinmazAlani));

    // Bu değerlerin ortalamasını alma işlemi
    const avgEmsalValuePerM2 = emsalValuesPerM2.reduce((a, b) => a + b, 0) / emsalValuesPerM2.length;
    const [landValue, setLandValue] = useState(0);
    const [buildingValue, setBuildingValue] = useState(0);
    const [propertyValue, setPropertyValue] = useState(0);
    const [depreciation, setDepreciation] = useState(0); // depreciation için state tanımlama
    const [avgLandValuePerM2, setAvgLandValuePerM2] = useState(0);

    const calculateDepreciation = (factors) => {
        // Object.values ile faktorler nesnesinin değerlerini bir diziye dönüştür
        let factorsArray = Object.values(factors).map(Number);
        let totalScore = factorsArray.reduce((total, current) => total + current, 0);
        let depreciation = totalScore / factorsArray.length;
        return depreciation;
    }

    function formatCurrency(value) {
        return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(value);
    }

    const calculateValues = () => {
        // piyasaBirimM2Fiyati var mı kontrol et ve varsa kullan, yoksa avgEmsalValuePerM2 kullan
        let landValuePerM2 = info.valueData.maaliyetData.yeniden.piyasaBirimM2Fiyati
            ? Number(info.valueData.maaliyetData.yeniden.piyasaBirimM2Fiyati.replace(",", "."))
            : avgEmsalValuePerM2;

        setAvgLandValuePerM2(landValuePerM2);

        let landValue = alan * landValuePerM2;
        setLandValue(landValue);
        let depreciationValue = calculateDepreciation(yeniden.faktorler);
        setDepreciation(depreciationValue);
        let costBeforeDepreciation = costYenidenYapim;
        let buildingValue = costBeforeDepreciation - (costBeforeDepreciation * depreciation / 100);
        setBuildingValue(buildingValue);

        setPropertyValue(landValue + buildingValue);
    }

    useEffect(() => {
        calculateValues();
    }, [yeniden]);

    return (
        <div>
            <h2>Cost Approach Valuation</h2>
            <div>
                <p>
                    The reproduction cost valuation method has been preferred. This method is usually suitable for properties that are unique or not sold frequently (for example, special buildings, industrial facilities, etc.). It is often not possible to find comparable examples in the market for such properties, therefore the valuation method based on reproduction cost is utilized.

                </p>

                <div style={{ margin: '16px 0' }}>
                    <p>
                    1. Land Value: The land value is obtained by multiplying the unit cost of the land by the area of the land...

                    </p>
                    <p>
                    Land value = Area ({alan} m²) x Average benchmark value/m² ({formatCurrency(avgLandValuePerM2)} /m²) = {formatCurrency(landValue)}
                    </p>
                    <p>
                    2. Building Value: The building value is calculated by taking into account construction costs and the amount of depreciation...
                    </p>
                    <p>
                    Depreciation rate = ({Object.values(yeniden?.faktorler).join(' + ')}) / {Object.values(yeniden?.faktorler).length} = {depreciation.toFixed(2)}%
                    </p>
                    <p>
                    Building value = Reconstruction cost ({formatCurrency(costYenidenYapim)}) - (Reconstruction cost ({formatCurrency(costYenidenYapim)}) x Depreciation Rate (%{depreciation.toFixed(2)}) / 100) = {formatCurrency(buildingValue)}
                    </p>
                    <p>
                    3. Property Value: The property value is the sum of the land value and the building value...
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
                        <span style={{ padding: '8px 16px', backgroundColor: '#48BB78', color: 'white', fontSize: '20px' }}>
                        The value of the property being appraised =   Land Value ({formatCurrency(landValue)}) + Building Value ({formatCurrency(buildingValue)})  = <strong>{formatCurrency(propertyValue)}</strong>
                        </span>
                    </div>
                </div>

                <p>
                The reproduction cost method takes into account construction costs, land value, and depreciation to determine the value of the property. This method is based on adding the cost of the land to the reproduction or construction costs after deducting a certain amount of depreciation. Depreciation is calculated considering factors such as the age of the property, its maintenance condition, material quality, location, and the quality of construction & design.

                </p>
            </div>
            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>
    );
}

export default CostMethodForWordEng;
