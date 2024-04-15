import React from 'react';

const BIReport: React.FC = () => {
  // Replace 'YOUR_LOOKER_EMBED_URL' with the actual embed URL from Looker
  const lookerEmbedUrl = 'https://lookerstudio.google.com/embed/reporting/10ab188b-8c23-4a67-bc13-8ad71b7aaba5/page/kUswD';

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <iframe
        src={lookerEmbedUrl}
        title="Looker Report"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BIReport;

