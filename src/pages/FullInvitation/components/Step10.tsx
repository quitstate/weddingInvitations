import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Step10: React.FC = () => {
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
            marginBottom: '20px',
            lineHeight: 1.2,
          }}
        >
          Código de vestimenta
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: { xs: '1.3rem', md: '1.5rem' },
            color: '#2c3e50',
            fontWeight: 600,
            letterSpacing: '4px',
            marginBottom: '40px',
          }}
        >
          FORMAL
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30px',
          }}
        >
          <Box
            component="img"
            src="/iconodresscode.png"
            alt="Dress Code Icons"
            sx={{
              width: { xs: '200px', md: '250px' },
              height: 'auto',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Step10;
