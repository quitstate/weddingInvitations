import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import InvitationCard from './pages/InvitationCard/InvitationCard';
import FullInvitation from './pages/FullInvitation/FullInvitation';
import './App.css';

const InvitationWithGroup: React.FC<{ audioRef: React.RefObject<HTMLAudioElement | null> }> = ({ audioRef }) => {
  const { idGroup } = useParams<{ idGroup: string }>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const groupId = idGroup ? parseInt(idGroup, 10) : undefined;

  const handleOpenInvitation = (): void => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log('Audio play prevented:', error);
      });
    }
  };

  return !isOpen ? (
    <InvitationCard onOpen={handleOpenInvitation} />
  ) : (
    <FullInvitation idGroup={groupId} />
  );
};

const InvitationHome: React.FC<{ audioRef: React.RefObject<HTMLAudioElement | null> }> = ({ audioRef }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenInvitation = (): void => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log('Audio play prevented:', error);
      });
    }
  };

  return !isOpen ? (
    <InvitationCard onOpen={handleOpenInvitation} />
  ) : (
    <FullInvitation />
  );
};

function App(): React.ReactElement {
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioSource = '/QueSuerteTenerte.mp3';

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log('Autoplay prevented, will play on user interaction:', error);
      });
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<InvitationHome audioRef={audioRef} />} />
          <Route path="/:idGroup" element={<InvitationWithGroup audioRef={audioRef} />} />
        </Routes>
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
    </Router>
  );
}

export default App;
