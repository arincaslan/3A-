const PropertyLegalInfoForWord = ({ info }) => {
    const imageSrc = info.tapuData.parsel.imarResmi;
    
    return (
        <div style={{ padding: '16px' }}>
            <h1 style={{ fontWeight: 'bold', fontSize: '24px', margin: '16px 0' }}>BÖLÜM 4 - Gayrimenkulün Mülkiyet İmar ve Yasal Durumuna İlişkin Bilgiler  </h1>

            <h2 style={{ fontWeight: 'bold', fontSize: '20px', margin: '12px 0' }}>4–1 Gayrimenkulün Mülkiyet Bilgileri</h2>
            <p style={{ margin: '8px 0' }}>Mülkiyet Sahibi: {info.tapuData.deed.sahibi}</p>
            <p style={{ margin: '8px 0' }}>Mülkiyet Bilgisi: {info.tapuData.deed.ownershipInfo}</p>
            <p style={{ margin: '8px 0' }}>Mülkiyet Edinme Yöntemi: {info.tapuData.deed.ownershipMethod}</p>
            <p style={{ margin: '8px 0' }}>Mülkiyet Edinme Tarihi: {info.tapuData.deed.ownershipDate}</p>

            <h2 style={{ fontWeight: 'bold', fontSize: '20px', margin: '12px 0' }}>4–2 Gayrimenkulün İmar Bilgileri</h2>
            <p style={{ margin: '8px 0' }}>Parsel Niteliği: {info.tapuData.parsel.nitelik}</p>
            <p style={{ margin: '8px 0' }}>Toplam Yüzölçümü: {info.tapuData.parsel.yuzolcumu}</p>
            <p style={{ margin: '8px 0' }}>TAKS: {info.tapuData.parsel.taks}</p>
            <p style={{ margin: '8px 0' }}>KAKS: {info.tapuData.parsel.kaks}</p>

            <h2 style={{ fontWeight: 'bold', fontSize: '20px', margin: '12px 0' }}>4–3 Gayrimenkulün Yasal Durumu</h2>
            <p style={{ margin: '8px 0' }}>Tapu Tarihi: {info.tapuData.deed.tapuTarihi}</p>
            <p style={{ margin: '8px 0' }}>Cilt No: {info.tapuData.deed.ciltNo}</p>
            <p style={{ margin: '8px 0' }}>Sahife No: {info.tapuData.deed.sahifeNo}</p>
            <p style={{ margin: '8px 0' }}>Yevmiye No: {info.tapuData.deed.yevmiyeNo}</p>

            <h2 style={{ fontWeight: 'bold', fontSize: '20px', margin: '12px 0' }}>4–4 Yasal ve İmar Sorunları</h2>
            {info.tapuData.parsel.imarDurumu !== "İmarlı" ? (
                <p style={{ margin: '8px 0' }}>Gayrimenkulün imar durumu: {info.tapuData.parsel.imarDurumu}. Bu durum çeşitli yasal ve imar sorunlarına neden olabilir.</p>
            ) : (
                <p style={{ margin: '8px 0' }}>Değerlemeye konu olan gayrimenkulün herhangi bir yasal veya imar sorunu bulunmamaktadır.</p>
            )}

            <h2 style={{ fontWeight: 'bold', fontSize: '20px', margin: '12px 0' }}>4–5 İmar Durumu Resmi</h2>
            <img src={imageSrc} alt="İmar Resmi" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    );
}

export default PropertyLegalInfoForWord;
