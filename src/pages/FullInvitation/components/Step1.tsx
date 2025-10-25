import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Step1: React.FC = () => {
  return (
    <Container 
      sx={{ 
        background: `url('/portada-flores.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '0px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        padding: { xs: '40px 20px', md: '60px 40px' },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '600px',
        width: { xs: '100%', md: '500px' },
        maxWidth: { xs: '100%', md: '500px' },
        margin: '0 auto',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          zIndex: 1,
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            width: '60px',
            height: '2px',
            backgroundColor: '#d4af37',
            margin: '0 auto 40px auto',
            borderRadius: '1px',
            mt: "80px",
          }}
        />
      <Typography 
        variant="h3" 
        sx={{ 
          fontFamily: '"Cormorant Garamond", serif',
          color: '#d4af37',
          fontWeight: 500,
          fontSize: { xs: '1.5rem', md: '2rem' },
          marginBottom: '20px',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        ¡Nos Casamos!
      </Typography>
      <Typography 
        variant="h2" 
        sx={{ 
          fontFamily: '"Alex Brush", cursive',
          color: '#2c3e50',
          fontSize: { xs: '3.5rem', md: '5rem' },
          marginBottom: '10px',
          fontWeight: 400,
          lineHeight: 1.2,
        }}
      >
        Ronald & Avigail
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <Box sx={{ width: '50px', height: '1px', backgroundColor: '#d4af37' }} />
        <Typography sx={{ margin: '0 15px', fontSize: '20px', color: '#d4af37' }}>♥</Typography>
        <Box sx={{ width: '50px', height: '1px', backgroundColor: '#d4af37' }} />
      </Box>
      <Typography 
        variant="h6" 
        sx={{ 
          fontFamily: '"Cormorant Garamond", serif',
          color: '#5a6c7d',
          fontSize: '18px',
          marginBottom: '20px',
          fontStyle: 'italic',
          lineHeight: 1.6,
        }}
      >
        Tenemos el placer de invitarte a celebrar
        <br />
        nuestro día más especial
      </Typography>
      <Box sx={{ marginBottom: '20px' }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontFamily: '"Cormorant Garamond", serif',
            color: '#2c3e50',
            fontSize: '28px',
            fontWeight: 600,
            marginBottom: '10px',
          }}
        >
          Sábado
        </Typography>
        <Typography 
          variant="h3" 
          sx={{ 
            fontFamily: '"Cormorant Garamond", serif',
            color: '#d4af37',
            fontSize: '36px',
            fontWeight: 700,
            marginBottom: '5px',
          }}
        >
          27 de Diciembre
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            fontFamily: '"Cormorant Garamond", serif',
            color: '#2c3e50',
            fontSize: '26px',
            fontWeight: 400,
            marginBottom: '10px',
          }}
        >
          2025
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: '"Cormorant Garamond", serif',
            color: '#5a6c7d',
            fontSize: '21px',
            marginBottom: '10px',
            fontWeight: 600,
          }}
        >
          7:00 pm
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            fontFamily: '"Cormorant Garamond", serif',
            color: '#5a6c7d',
            fontSize: '20px',
            fontStyle: 'italic',
            fontWeight: 600,
            paddingBottom: '30px',
          }}
        >
          La Basilica, Maracaibo, Venezuela
        </Typography>
      </Box>
            <Box
        sx={{
          width: '80px',
          height: '2px',
          backgroundColor: '#d4af37',
          margin: '40px auto',
          borderRadius: '1px',
        }}
      />
      </Box>
    </Container>
  );
};

export default Step1;
