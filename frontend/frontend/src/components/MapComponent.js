import React from 'react';

function MapComponent() {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>📍 Venue Location</h2>
      <iframe
       title="Wedding Venue Location Map" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.899687199874!2d78.51525797385325!3d15.144046663543264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb45d917cb85e45%3A0xb1ff6387bd39f945!2sSri%20veerabadra%20swamy%20temple!5e1!3m2!1sen!2sin!4v1745214653993!5m2!1sen!2sin"// Add your real Google Maps embed URL here
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
}

export default MapComponent;
