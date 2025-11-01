import React, { useState, useEffect, useRef } from 'react';
import InvitationCard from './pages/InvitationCard/InvitationCard';
import FullInvitation from './pages/FullInvitation/FullInvitation';
import './App.css';

function App(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioSource = '/QueSuerteTenerte.mp3';

  const handleOpenInvitation = (): void => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log('Audio play prevented:', error);
      });
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log('Autoplay prevented, will play on user interaction:', error);
      });
    }
  }, []);

  return (
    <div className="App">
      {!isOpen ? (
        <InvitationCard onOpen={handleOpenInvitation} />
      ) : (
        <FullInvitation />
      )}
      <audio
        ref={audioRef}
        controls
        loop
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
      >
        <source src={audioSource} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
}

export default App;
