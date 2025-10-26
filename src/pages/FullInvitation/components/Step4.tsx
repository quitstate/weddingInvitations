import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Step4: React.FC = () => {
  return (
    <Container 
      sx={{ 
        background: 'linear-gradient(145deg, #fdfbf7 0%, #f9f6f2 100%)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        padding: { xs: '50px 30px', md: '70px 50px' },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        width: { xs: '100%', md: '500px' },
        maxWidth: { xs: '100%', md: '500px' },
        margin: '0 auto',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          right: '20px',
          bottom: '20px',
          border: '2px solid #d4af37',
          borderRadius: '0px',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
      <Typography 
        sx={{ 
          fontFamily: '"Alex Brush", cursive',
          color: '#5a6c7d',
          fontSize: { xs: '1.5rem', md: '1.8rem' },
          marginBottom: '40px',
          lineHeight: 1.6,
        }}
      >
        Con la bendición de Dios y en
        <br />
        compañía de nuestros padres
      </Typography>
      <Box sx={{ marginBottom: '40px' }}>
        <Typography 
          sx={{ 
            fontFamily: '"Alex Brush", cursive',
            color: '#5a6c7d',
            fontSize: { xs: '1.8rem', md: '2rem' },
            marginBottom: '15px',
          }}
        >
          Padres de la novia
        </Typography>
        <Typography 
          sx={{ 
            fontFamily: '"Cormorant Garamond", serif',
            color: '#2c3e50',
            fontSize: { xs: '1.2rem', md: '1.3rem' },
            fontWeight: 500,
            lineHeight: 1.8,
          }}
        >
          Sr. Jose Avilio Araujo Briceño †
          <br />
          Sra. Maria Jackelin Paredes de Abreu
        </Typography>
      </Box>
      <Box sx={{ marginBottom: '40px' }}>
        <Typography 
          sx={{ 
            fontFamily: '"Alex Brush", cursive',
            color: '#5a6c7d',
            fontSize: { xs: '1.8rem', md: '2rem' },
            marginBottom: '15px',
          }}
        >
          Padres del novio
        </Typography>
        <Typography 
          sx={{ 
            fontFamily: '"Cormorant Garamond", serif',
            color: '#2c3e50',
            fontSize: { xs: '1.2rem', md: '1.3rem' },
            fontWeight: 500,
            lineHeight: 1.8,
          }}
        >
          Sr. Rafael de la Trinidad Vezga Visbal
          <br />
          Sra. Rosa Rueda Botello
        </Typography>
      </Box>
      <Typography 
        sx={{ 
          fontFamily: '"Alex Brush", cursive',
          color: '#5a6c7d',
          fontSize: { xs: '1.4rem', md: '1.6rem' },
          marginTop: '20px',
          lineHeight: 1.6,
        }}
      >
        Nos complace invitarte a ser parte de
        <br />
        este gran día.
      </Typography>
      </Box>
    </Container>
  );
};

export default Step4;
