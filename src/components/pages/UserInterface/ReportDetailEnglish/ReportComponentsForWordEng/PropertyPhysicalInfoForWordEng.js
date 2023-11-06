import React from 'react';


const PropertyPhysicalInfoForWordEng = ({ info }) => {

  let yerelZeminSinifiAciklama;
  let zeminGrubuAciklama;
  let zeminFormasyonCinsiAciklama;
  let zeminDepremBolgeDerecesiAciklama;

  switch (info.zeminData.zeminFormasyonCinsi) {
    case 'Silt':
      zeminFormasyonCinsiAciklama = "Silt is a material that is typically between the sizes of sand and clay and can easily be suspended in water. Such soil usually restricts the mobility of water and can pose potential problems for foundational constructions";
      break;
    case 'Kil':
      zeminFormasyonCinsiAciklama = "Clay is a natural material typically composed of very fine mineral particles. Clayey soils tend to trap water and crack when they dry, which can lead to potential issues when used to support structures";
      break;
    case 'Kum':
      zeminFormasyonCinsiAciklama = "Sand is generally a hard, resistant, and water-saturated material. Sandy soils usually have good drainage properties and often provide a good base for construction projects";
      break;
    case 'Çakıl':
      zeminFormasyonCinsiAciklama = "Gravel is generally a water-saturated material with high permeability. Gravelly soils typically have good drainage properties and are often suitable bases for construction projects";
      break;
    case 'Torf':
      zeminFormasyonCinsiAciklama = "Peat is a soft material usually composed of organic materials and tends to trap water. Such soils might not be suitable to support structures";
      break;
    case 'Kaya':
      zeminFormasyonCinsiAciklama = "Rock typically represents a material with high strength and durability properties. Rocky grounds usually provide an excellent base for the foundations of structures";
      break;
  }


  switch (info.zeminData.zeminDepremBolgeDerecesi) {
    case '1':
      zeminDepremBolgeDerecesiAciklama = "The 1st-degree earthquake zone represents the highest seismic risk level in Turkey. This implies that buildings in this region need to be particularly resistant to seismic activity";
      break;
    case '2':
      zeminDepremBolgeDerecesiAciklama = "The 2nd-degree earthquake zone represents a medium seismic risk level in Turkey. Buildings in this region still need to comply with earthquake standards, but seismic activity is expected to be lower compared to the 1st-degree zone";
      break;
    case '3':
      zeminDepremBolgeDerecesiAciklama = "The 3rd-degree earthquake zone represents the lowest seismic risk level in Turkey. Buildings in this region need to be resistant to seismic activity but at a level lower than the other regions";
      break;
    case '4':
      zeminDepremBolgeDerecesiAciklama = "The 4th-degree earthquake zone represents an area in Turkey with very low seismic risk. Buildings in this region need to comply with earthquake standards, indicating that seismic activity is rare";
      break;
  }

  if (info.zeminData.yerelZeminSinifi === 'Z1') {
    yerelZeminSinifiAciklama = 'This class indicates that the soil has the best seismic performance';
  } else if (info.zeminData.yerelZeminSinifi === 'Z2') {
    yerelZeminSinifiAciklama = 'This class indicates that the soil has a medium level of seismic performance';
  } else if (info.zeminData.yerelZeminSinifi === 'Z3') {
    yerelZeminSinifiAciklama = 'This class indicates that the soil has a low level of seismic performance';
  } else {
    yerelZeminSinifiAciklama = 'This class represents the seismic performance of the soil';
  }

  if (info.zeminData.zeminGrubu === 'A') {
    zeminGrubuAciklama = 'This group indicates that the soil has the best performance';
  } else if (info.zeminData.zeminGrubu === 'B') {
    zeminGrubuAciklama = 'This group indicates that the soil has a medium level of performance';
  } else if (info.zeminData.zeminGrubu === 'C') {
    zeminGrubuAciklama = 'This group indicates that the soil has a low level of performance';
  } else {
    zeminGrubuAciklama = 'This group represents the performance of the soil';

  }
  return (
    <div style={{ border: "1px solid", borderRadius: "10px", overflow: "hidden", padding: "6px" }}>
      <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>SECTION 6 - Physical Property / Building and Land Information</h2>

      <h3 style={{ fontWeight: "bold", fontSize: "20px", marginTop: "24px" }}>Zemin Bilgileri</h3>
      <p style={{ marginTop: "16px" }}>A detailed soil analysis has been conducted using the data provided in the table below. Each value and criterion represents different features of the soil, and when evaluated together, they help understand the overall condition of the soil and its potential for construction.</p>
      <table style={{ borderWidth: "1px", borderColor: "gray", marginTop: "16px", marginBottom: "16px" }}>
        <thead>
          <tr>
            <th style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>Data</th>
            <th style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>Building Importance Coefficient</td>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>{info.zeminData.binaOnemKatsayisi}</td>
          </tr>
          <tr>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>Effective Ground Acceleration Coefficient</td>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>{info.zeminData.etkinYerIvmeKatsayisi}</td>
          </tr>
          <tr>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>Local Soil Class</td>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>{info.zeminData.yerelZeminSinifi}</td>
          </tr>
          <tr>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>Soil Earthquake Zone Degree</td>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>{info.zeminData.zeminDepremBolgeDerecesi}</td>
          </tr>
          <tr>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>Soil Safety Stress</td>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>{info.zeminData.zeminEmniyetGerilmesi}</td>
          </tr>
          <tr>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>Soil Formation Type</td>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>{info.zeminData.zeminFormasyonCinsi}</td>
          </tr>
          <tr>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>Soil Group</td>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>{info.zeminData.zeminGrubu}</td>
          </tr>
          <tr>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>Soil Dominant Vibration Period</td>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>{info.zeminData.zeminHakimTitresimPeriyodu}</td>
          </tr>
          <tr>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>Soil Characteristic Period TA</td>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>{info.zeminData.zeminKarakteristikPeriyotTA}</td>
          </tr>
          <tr>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>Soil Characteristic Period TB</td>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>{info.zeminData.zeminKarakteristikPeriyotTB}</td>
          </tr>
          <tr>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>Soil Bed Coefficient</td>
            <td style={{ borderColor: "black", borderWidth: "1px", backgroundColor: "gray" }}>{info.zeminData.zeminYatakKatsayisi}</td>
          </tr>
        </tbody>
      </table>



      <p style={{ marginTop: "16px" }}>
        Soil information is of great importance in ensuring that a building is safe and durable. The importance coefficient of the evaluated building has been determined as {info.zeminData.binaOnemKatsayisi}. The importance coefficient of the building varies according to the purpose of use of the building and determines the importance degree of the soil supporting the structure. An element that determines how much resistance the soil can show to its movement during an earthquake is the effective ground acceleration coefficient. For the evaluated property, this coefficient has been determined as {info.zeminData.etkinYerIvmeKatsayisi}, and this variable depends on the general structure of the soil and its resistance to seismic activity.
        The local soil class has been determined as {info.zeminData.yerelZeminSinifi}. {yerelZeminSinifiAciklama}. The earthquake zone degree of the soil has been determined as {info.zeminData.zeminDepremBolgeDerecesi}. {zeminDepremBolgeDerecesiAciklama}.
        The safety stress of the soil has been identified as {info.zeminData.zeminEmniyetGerilmesi}. This value determines how safe the soil is.
        The soil formation type has been determined as {info.zeminData.zeminFormasyonCinsi}. {zeminFormasyonCinsiAciklama}. The soil group has been identified as {info.zeminData.zeminGrubu}. {zeminGrubuAciklama}.
        The dominant vibration period of the soil has been found as {info.zeminData.zeminHakimTitresimPeriyodu}. This value determines at which period the soil will vibrate.
        The characteristic periods TA and TB of the soil have been determined as {info.zeminData.zeminKarakteristikPeriyotTA} and {info.zeminData.zeminKarakteristikPeriyotTB}. These values determine the movements of the soil in certain periods.
        The bed coefficient of the soil has been determined as {info.zeminData.zeminYatakKatsayisi}. This coefficient determines how stable the soil can remain during an earthquake.
      </p>
      <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
    </div>

  );
}

export default PropertyPhysicalInfoForWordEng;
