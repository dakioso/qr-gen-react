import QRCode from 'qrcode';
import { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [qrCode, setQRcode] = useState('');

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        errorCorrectionLevel: 'H',
        width: 800,
        margin: 2,
        color: {
          dark: '#335383FF',
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        setQRcode(url);
      }
    );
  };

  const urlValid = url.startsWith('http://');

  return (
    <div className='app'>
      <h1>QR gen</h1>
      <input
        type='text'
        placeholder='Skriv in din URL'
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}
      />
      {urlValid && (
        <>
          <button onClick={GenerateQRCode}>Generera</button>
        </>
      )}
      <img src={qrCode} />
    </div>
  );
}

export default App;
