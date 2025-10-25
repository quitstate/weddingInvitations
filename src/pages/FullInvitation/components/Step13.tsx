import React from 'react';
import { Container, Box } from '@mui/material';

const Step13: React.FC = () => {
  const photos = [
    '/Basilica.webp',
    '/Basilica.webp',
    '/Basilica.webp',
  ];

  return (
    <Container
      disableGutters
      sx={{
        background: 'linear-gradient(145deg, #fdfbf7 0%, #f9f6f2 100%)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        padding: '0 !important',
        textAlign: 'center',
        position: 'relative',
        overflow: 'visible',
        width: { xs: '100%', md: '500px' },
        maxWidth: { xs: '100%', md: '500px' },
        margin: '0 auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
      >
        {photos.map((photo, index) => (
          <Box
            key={index}
            component="img"
            src={photo}
            alt={`Foto ${index + 1}`}
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'cover',
            }}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Step13;
