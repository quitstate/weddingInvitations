import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Step14: React.FC = () => {
  return (
    <Container
      sx={{
        background: 'linear-gradient(145deg, #f5f3ef 0%, #e8e6e2 100%)',
        boxShadow: '0 -10px 30px rgba(0,0,0,0.05)',
        padding: { xs: '30px 20px', md: '30px 20px' },
        textAlign: 'center',
        position: 'relative',
        overflow: 'visible',
        width: { xs: '100%', md: '500px' },
        maxWidth: { xs: '100%', md: '500px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: { xs: '1.1rem', md: '1.2rem' },
            color: '#5a5a5a',
            lineHeight: 1.6,
            marginBottom: { xs: '50px', md: '0px' },
          }}
        >
          Copyright 2025 |{'  '}
          <Box
            component="span"
            sx={{
              fontWeight: 600,
              color: '#2c3e50',
            }}
          >
            Ronald Vezga y Avigail Araujo
          </Box>
        </Typography>
      </Box>
    </Container>
  );
};

export default Step14;
