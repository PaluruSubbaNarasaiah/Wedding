// import React from 'react';
// import RSVPForm from './components/RSVPForm';
// import MapComponent from './components/MapComponent';

// function App() {
//   return (
//     <div className="container">
//       <h1>🎉 Paluru's Wedding Invitation 🎉</h1>
//       <video width="90%" controls autoPlay loop>
//         <source src="/Nani Wedding Invitation Video.mp4" type="video/mp4" />
//       </video>
//       <RSVPForm />
//       <MapComponent />
//     </div>
//   );
// }

// export default App;

import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import RSVPForm from './components/RSVPForm';
import MapComponent from './components/MapComponent';

function App() {
  const contentRef = useRef();

  const handleDownloadPDF = async () => {
    const element = contentRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(data, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('paluru-wedding-invitation.pdf');
  };

  return (
    <div className="container">
      <div ref={contentRef} style={{ backgroundColor: 'white', padding: '20px' }}>
        <h1>🎉 Paluru's Wedding Invitation 🎉</h1>
        <video width="90%" controls autoPlay loop>
          <source src="/naniwedding video1.mp4" type="video/mp4" />
        </video>
        <RSVPForm />
        <MapComponent />
      </div>

      {/* PDF Download Button */}
      <button
        onClick={handleDownloadPDF}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Download Wedding Invitation PDF
      </button>
    </div>
  );
}

export default App;
