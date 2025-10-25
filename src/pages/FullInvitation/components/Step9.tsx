import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Step9: React.FC = () => {
  return (
    <Container
      sx={{
        background: 'linear-gradient(145deg, #fdfbf7 0%, #f9f6f2 100%)',
        backgroundImage: 'url(/portada-flores.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        padding: { xs: '60px 20px', md: '80px 40px' },
        textAlign: 'center',
        position: 'relative',
        overflow: 'visible',
        width: { xs: '100%', md: '500px' },
        maxWidth: { xs: '100%', md: '500px' },
        margin: '0 auto',
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(253, 251, 247, 0.85)',
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Alex Brush", cursive',
            fontSize: { xs: '2.5rem', md: '3rem' },
            color: '#2c3e50',
            marginBottom: '40px',
            lineHeight: 1.2,
          }}
        >
          Te agradecemos
        </Typography>

        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '8px',
            padding: { xs: '30px 20px', md: '40px 30px' },
            maxWidth: '400px',
            margin: '0 auto',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              color: '#2c3e50',
              lineHeight: 1.8,
              fontWeight: 500,
              letterSpacing: '0.3px',
            }}
          >
            ADORAMOS A SUS HIJOS, PERO CREEMOS QUE NECESITAN UNA NOCHE LIBRE. SÓLO ADULTOS, POR FAVOR
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Step9;
