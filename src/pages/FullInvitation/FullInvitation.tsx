import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const FullInvitation: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#fdfaf6', borderRadius: '15px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)' }}>
      <Box
        sx={{
          border: '2px dashed #d4af37',
          padding: '30px',
          borderRadius: '15px',
        }}
      >
        <Typography variant="h2" sx={{ fontFamily: 'cursive', color: '#5c5c5c' }}>
          ¡Nos Casamos!
        </Typography>
        <Typography variant="h3" sx={{ fontFamily: 'serif', margin: '20px 0', color: '#d4af37' }}>
          María & Juan
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: 'serif', color: '#5c5c5c' }}>
          Tenemos el placer de invitarte a nuestra boda
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: 'serif', marginTop: '40px', color: '#5c5c5c' }}>
          Sábado, 15 de Marzo de 2026
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: 'serif', color: '#5c5c5c' }}>
          a las 18:00 horas
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '20px', fontFamily: 'serif', color: '#5c5c5c' }}>
          Finca La Marquesa, Madrid
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: '40px',
            backgroundColor: '#d4af37',
            color: 'white',
            fontFamily: 'serif',
            '&:hover': {
              backgroundColor: '#b89b30',
            },
          }}
          href="https://wa.me/TUNUMERODETELEFONO" // Reemplaza con tu número de WhatsApp
          target="_blank"
        >
          Confirmar Asistencia
        </Button>
      </Box>
    </Container>
  );
};

export default FullInvitation;
