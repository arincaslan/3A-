import React, { useState, useEffect } from 'react';
import DropzoneComponent, { useFileDrop } from '../../../../Tools/UseFileDrop/UseFileDrop';
import "@fontsource/josefin-sans";
import "@fontsource/nunito";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import "@fontsource/montserrat";

function CoverPageForWordEng({ info, profileInfo }) {
    const { files } = useFileDrop();
    const [logoLoaded, setLogoLoaded] = useState(false);
    const logoSrc = profileInfo?.logo;

    useEffect(() => {
        if (files.length > 0) {
            setLogoLoaded(true);
        }
    }, [files]);

    return (
        <div>
            <div 
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "846px",
                    padding: "16px",
                }}
            >
                <div style={{ textAlign: "center", alignItems:"center", display:"flex", flexDirection:"column" }}>
                    {logoSrc && <img src={logoSrc} alt="Company Logo" style={{  width: "200px", height: "200px" , marginBottom:"50px" }} />}
                    <h1 style={{ fontFamily: "Roboto, sans-serif", fontSize: "40px", fontWeight: "bold", color: "teal" }}>{info.projectData.projectName}</h1>
                    <h1 style={{ fontFamily: "Roboto, sans-serif", fontSize: "40px", fontWeight: "bold", color: "teal" }}>Real Estate Appraisal Report</h1>
                    <h2 style={{ fontFamily: "Nunito, sans-serif", fontSize: "30px", color: "black" }}>{profileInfo.companyInfo.companyName}</h2>
                    <h3 style={{ fontFamily: "Nunito, sans-serif", fontSize: "24px", color: "gray" }}>{info.tapuData.location.il} / {info.tapuData.location.ilce}</h3>
                    <h3 style={{ fontFamily: "Nunito, sans-serif", fontSize: "24px", color: "gray" }}>{info.tapuData.parsel.paftaNo} Pafta {info.tapuData.parsel.parselNo}</h3>
                    <h3 style={{ fontFamily: "Nunito, sans-serif", fontSize: "24px", color: "gray" }}>{new Date(info.projectData.reportDate).toLocaleDateString()}</h3>
                </div>
            </div>
            <br style={{ pageBreakAfter: 'always', clear: 'both' }}></br>
        </div>
    );
}

export default CoverPageForWordEng;
