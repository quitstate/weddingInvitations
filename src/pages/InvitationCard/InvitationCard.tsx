import React from 'react';
import { Box, Typography } from '@mui/material';

interface InvitationCardProps {
  onOpen: () => void;
}

const InvitationCard: React.FC<InvitationCardProps> = ({ onOpen }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '100vh',
        paddingTop: '40px',
        gap: '20px',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: '"Cormorant Garamond", serif',
          color: '#5c5c5c',
          textAlign: 'center',
          marginBottom: '10px',
          fontSize: '26px',
          fontWeight: '400',
        }}
      >
        Haz click en abrir para ver el contenido del sobre
      </Typography>
      <Box
        sx={{
          position: 'relative',
          width: '400px',
          height: '500px',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
        onClick={onOpen}
      >
        <Box
          component="img"
          src="/sobre.png"
          alt="Sobre de invitación"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          }}
        />
      </Box>
    </Box>
  );
};

export default InvitationCard;
