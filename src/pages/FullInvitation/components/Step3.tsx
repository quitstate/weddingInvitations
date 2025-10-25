import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Step3: React.FC = () => {
  return (
    <Container 
      sx={{ 
        background: 'linear-gradient(145deg, #fdfbf7 0%, #f9f6f2 100%)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        padding: { xs: '40px 20px', md: '60px 40px' },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        width: { xs: '100%', md: '500px' },
        maxWidth: { xs: '100%', md: '500px' },
        margin: '0 auto',
      }}
    >
      {/* Título de la sección */}
      <Typography 
        variant="h4" 
        sx={{ 
          fontFamily: '"Alex Brush", cursive',
          color: '#d4af37',
          fontWeight: 400,
          fontSize: { xs: '2.5rem', md: '3rem' },
          marginBottom: '30px',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        Nuestra Historia
      </Typography>

      {/* Línea decorativa */}
      <Box
        sx={{
          width: '60px',
          height: '2px',
          backgroundColor: '#d4af37',
          margin: '0 auto 40px auto',
          borderRadius: '1px',
        }}
      />

      {/* Contenido del paso 3 */}
      <Typography 
        variant="body1" 
        sx={{ 
          fontFamily: '"Cormorant Garamond", serif',
          color: '#5a6c7d',
          fontSize: '16px',
          lineHeight: 1.8,
          marginBottom: '30px',
        }}
      >
        Desde aquel primer encuentro, sabíamos que habíamos encontrado algo especial. 
        Hoy, después de tantos momentos compartidos, queremos celebrar nuestro amor 
        rodeados de las personas más importantes de nuestras vidas.
      </Typography>

      {/* Decoración adicional */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '30px',
        }}
      >
        <Box sx={{ width: '30px', height: '1px', backgroundColor: '#d4af37' }} />
        <Typography sx={{ margin: '0 15px', fontSize: '16px', color: '#d4af37' }}>💕</Typography>
        <Box sx={{ width: '30px', height: '1px', backgroundColor: '#d4af37' }} />
      </Box>
    </Container>
  );
};

export default Step3;
