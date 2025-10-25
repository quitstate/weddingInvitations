import React, { useState } from 'react';
import InvitationCard from './pages/InvitationCard/InvitationCard';
import FullInvitation from './pages/FullInvitation/FullInvitation';
import './App.css';

function App(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenInvitation = (): void => {
    setIsOpen(true);
  };

  return (
    <div className="App">
      {!isOpen ? (
        <InvitationCard onOpen={handleOpenInvitation} />
      ) : (
        <FullInvitation />
      )}
    </div>
  );
}

export default App;
