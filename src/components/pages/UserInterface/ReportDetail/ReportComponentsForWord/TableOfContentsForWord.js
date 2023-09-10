import React from 'react';

function TableOfContentsForWord({ refs }) {
    return (
        <div style={{ padding: '20px' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>İÇİNDEKİLER</p>
            <ul style={{ paddingLeft: 0 }}>
                {refs.map((section, index) => (
                    <li key={index} >
                        <div style={{ width:"90%", marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>{section.name}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <br style={{ pageBreakAfter: 'always' }} />
        </div>
    );
}

export default TableOfContentsForWord;
