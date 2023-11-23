import React, { createRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Button, ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { useUser } from '../../../../services/HOC/UserProvider';
import htmlDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';
import { renderToString } from "react-dom/server";
import ReportContentEnglish from './ReportContentEnglish';
import html2pdf from 'html2pdf.js';
import ReportContentForWordEnglish from './ReportContentForWordEnglish';

function ReportDetailEnglish() {
    const userData = useUser();
    const location = useLocation();
    const reportEng = location.state.report;
    const profileData = userData.profile;
    const [base64Img, setBase64Image] = useState(null);
    const [barImage, setBarImage] = useState(null);
    const [radarImage, setRadarImage] = useState(null);
    const [isExportEnabled, setIsExportEnabled] = useState(false);

    const handleBarImageUpdate = (image) => {
        setBarImage(image);
        if (image && radarImage) setIsExportEnabled(true);
    };

    const handleRadarImageUpdate = (image) => {
        setRadarImage(image);
        if (image && barImage) setIsExportEnabled(true);
    };

    const handleBase64ImageUpdate = (image) => {
        setBase64Image(image);
        if (image && barImage && radarImage) setIsExportEnabled(true);
    };


    const sectionRefs = [
        { name: "Kapak Sayfası", ref: createRef() },
        { name: "İçindekiler", ref: createRef() },
        { name: "Genel Bilgiler", ref: createRef() },
        { name: "Rapor Bilgileri", ref: createRef() },
        { name: "Firma Bilgileri", ref: createRef() },
        { name: "Gayrimenkul Özellikleri", ref: createRef() },
        { name: "Gayrimenkul Hukuki Bilgileri", ref: createRef() },
        { name: "Konum-Pazar Bilgileri", ref: createRef() },
        { name: "Gayrimenkulun Fiziksel Özellikleri", ref: createRef() },
        { name: "SWOT Analizi", ref: createRef() },
        { name: "Değerleme Metodolojisi", ref: createRef() },
        { name: "Sonuçlar ve Değerleme", ref: createRef() },
        { name: "Ekler", ref: createRef() },
    ];
    const exportToPdf = () => {
        const element = document.getElementById('report-content');
        html2pdf(element, {
            margin: 0,
            filename: 'reportEng.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        });
    }


    const exportToWord = () => {
        // React component to HTML string
        let htmlString = renderToString(
            <ChakraProvider theme={extendTheme()}>
                <CSSReset />
                <ReportContentForWordEnglish base64Img={base64Img} barImage={barImage} radarImage={radarImage} report={reportEng} profileData={profileData} sectionRefs={sectionRefs} />
            </ChakraProvider>
        );

        htmlString = '<html><head><meta charset="UTF-8"></head><body>' + htmlString + '</body></html>';
        // HTML string to Word document
        let converted = htmlDocx.asBlob(htmlString);

        // Save as Word document
        saveAs(converted, 'documentEng.docx');
    };
    return (
        <Box >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                id="report-content">
                <ReportContentEnglish onBase64Upload={handleBase64ImageUpdate} onBarImageUpdate={handleBarImageUpdate}
                    onRadarImageUpdate={handleRadarImageUpdate} report={reportEng} profileData={profileData} sectionRefs={sectionRefs} />
            </Box>
            <Button disabled={!isExportEnabled} colorScheme='teal' mt="20px" onClick={exportToWord}>Word'e Dönüştür</Button>
            <Button colorScheme='blue' ml="10px" mt="20px" onClick={exportToPdf}>PDF'e Dönüştür</Button>
        </Box>
    );
}

export default ReportDetailEnglish;