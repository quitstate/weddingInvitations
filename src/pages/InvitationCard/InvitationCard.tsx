import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

interface InvitationCardProps {
  onOpen: () => void;
}

const InvitationCard: React.FC<InvitationCardProps> = ({ onOpen }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100vh',
        paddingTop: '40px',
      }}
    >
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
