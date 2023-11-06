const PropertyLegalInfoForWordEng = ({ info }) => {
    const imageSrc = info.tapuData.parsel.imarResmi;
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    return (
        <div style={{ padding: '16px' }}>
            <h1 style={{ fontWeight: 'bold', fontSize: '24px', margin: '16px 0' }}>SECTION 4 - Information on the Ownership, Zoning, and Legal Status of the Property</h1>

            <h2 style={{ fontWeight: 'bold', fontSize: '20px', margin: '12px 0' }}>4.1) Ownership Information of the Property</h2>
            <p style={{ margin: '8px 0' }}>Property Owner: {info.tapuData.deed.sahibi}</p>
            <p style={{ margin: '8px 0' }}>Ownership Information: {info.tapuData.deed.ownershipInfo}</p>
            <p style={{ margin: '8px 0' }}>Method of Acquisition: {info.tapuData.deed.ownershipMethod}</p>
            <p style={{ margin: '8px 0' }}>Date of Acquisition: {info.tapuData.deed.ownershipDate}</p>

            <h2 style={{ fontWeight: 'bold', fontSize: '20px', margin: '12px 0' }}>4.2) Zoning Information of the Property</h2>
            <p style={{ margin: '8px 0' }}>Parcel Characteristic: {info.tapuData.parsel.nitelik}</p>
            <p style={{ margin: '8px 0' }}>Total Area: {info.tapuData.parsel.yuzolcumu}</p>
            <p style={{ margin: '8px 0' }}>TAKS (Floor Area Ratio): {info.tapuData.parsel.taks}</p>
            <p style={{ margin: '8px 0' }}>KAKS (Building Coverage Ratio): {info.tapuData.parsel.kaks}</p>

            <h2 style={{ fontWeight: 'bold', fontSize: '20px', margin: '12px 0' }}>4.3) Legal Status of the Property</h2>
            <p style={{ margin: '8px 0' }}>Title Deed Date: {formatDate(info.tapuData.deed.tapuTarihi)}</p>
            <p style={{ margin: '8px 0' }}>Volume No: {info.tapuData.deed.ciltNo}</p>
            <p style={{ margin: '8px 0' }}>Page No:{info.tapuData.deed.sahifeNo}</p>
            <p style={{ margin: '8px 0' }}>Daily No:  {info.tapuData.deed.yevmiyeNo}</p>

            <h2 style={{ fontWeight: 'bold', fontSize: '20px', margin: '12px 0' }}>4.4) Legal and Zoning Issues</h2>
            {info.tapuData.parsel.imarDurumu !== "İmarlı" ? (
                <p style={{ margin: '8px 0' }}>Zoning status of the property: {info.tapuData.parsel.imarDurumu}. This status can lead to various legal and zoning issues.</p>
            ) : (
                <p style={{ margin: '8px 0' }}>The property subject to the appraisal does not have any legal or zoning issues.</p>
            )}

            <h2 style={{ fontWeight: 'bold', fontSize: '20px', margin: '12px 0' }}>4.5) Zoning Status Image</h2>
            <img src={imageSrc} alt="İmar Resmi" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    );
}

export default PropertyLegalInfoForWordEng;
