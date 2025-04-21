import React from 'react';
import RSVPForm from './components/RSVPForm';
import MapComponent from './components/MapComponent';

function App() {
  return (
    <div className="container">
      <h1>🎉 Nani's Wedding Invitation 🎉</h1>
      <video width="90%" controls autoPlay loop>
        <source src="/Nani Wedding Invitation Video.mp4" type="video/mp4" />
      </video>
      <RSVPForm />
      <MapComponent />
    </div>
  );
}

export default App;
