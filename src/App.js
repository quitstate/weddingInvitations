import { useState } from 'react';
import InvitationCard from './pages/InvitationCard/InvitationCard';
import FullInvitation from './pages/FullInvitation/FullInvitation';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenInvitation = () => {
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