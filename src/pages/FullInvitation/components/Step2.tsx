import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Step2: React.FC = () => {
  return (
    <Container 
      sx={{ 
        background: '#a8956b',
        borderRadius: '0px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '300px',
        width: { xs: '100%', md: '500px' },
        maxWidth: { xs: '100%', md: '500px' },
        margin: '0 auto',
        padding: { xs: '40px 20px', md: '80px 60px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography 
        sx={{ 
          fontFamily: '"Cormorant Garamond", serif',
          color: '#ffffff',
          fontSize: { xs: '20px', md: '24px' },
          fontWeight: 400,
          lineHeight: 1.6,
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        A veces lo que empieza como una
        <br />
        locura se convierte en lo mejor de
        <br />
        tu vida
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography 
          sx={{ 
            fontSize: '40px', 
            color: '#ffffff',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
          }}
        >
          ♥
        </Typography>
      </Box>
    </Container>
  );
};

export default Step2;
