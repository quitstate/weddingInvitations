import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const Step6: React.FC = () => {
  const urlBasilica = "https://www.google.com/maps/place//data=!4m2!3m1!1s0x8e89984a60e08973:0xb8c14b5a526a3ec1?sa=X&ved=1t:8290&ictx=111";
  const urlHotelKristoff = "https://www.google.com/maps/place//data=!4m2!3m1!1s0x8e8998db6293f631:0xdd7c2e72ea6b3d9?sa=X&ved=1t:8290&ictx=111";

  return (
    <Container
      sx={{
        background: 'linear-gradient(145deg, #fdfbf7 0%, #f9f6f2 100%)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        padding: { xs: '40px 20px', md: '40px 20px' },
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
      <Typography
        sx={{
          fontFamily: '"Alex Brush", cursive',
          fontSize: { xs: '2.5rem', md: '3rem' },
          color: '#2c3e50',
          marginBottom: '40px',
          fontWeight: 400,
        }}
      >
        Dónde y Cuándo
      </Typography>
      <Box
        sx={{
          position: 'relative',
          padding: { xs: '30px 20px', md: '40px 30px' },
          border: '3px solid #d4af37',
          borderRadius: '0px',
        }}
      >
      <Box
        sx={{
          width: '100%',
          marginBottom: '30px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: { xs: '250px', md: '300px' },
            overflow: 'hidden',
            borderRadius: '4px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <Box
            component="img"
            src="/Basilica.webp"
            alt="La Basílica de Nuestra Señora de Chiquinquirá"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>
      <Typography
        sx={{
          fontFamily: '"Alex Brush", cursive',
          fontSize: { xs: '2rem', md: '2.5rem' },
          color: '#2c3e50',
          marginBottom: '20px',
          fontWeight: 400,
        }}
      >
        Ceremonia Religiosa
      </Typography>

      <Typography
        sx={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: { xs: '1.1rem', md: '1.3rem' },
          color: '#2c3e50',
          fontWeight: 600,
          marginBottom: '15px',
          lineHeight: 1.6,
        }}
      >
        La Basílica de Nuestra Señora
        <br />
        de Chiquinquirá
      </Typography>
      <Typography
        sx={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: { xs: '1.2rem', md: '1.4rem' },
          color: '#2c3e50',
          fontWeight: 500,
          marginBottom: '15px',
        }}
      >
        7:00 pm
      </Typography>
      <Typography
        sx={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: { xs: '1rem', md: '1.1rem' },
          color: '#5a6c7d',
          fontWeight: 400,
          marginBottom: '30px',
          lineHeight: 1.6,
        }}
      >
        Av. 12 con calle 96, final Paseo Ciencias, Maracaibo, Zulia, Venezuela
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#d4af37',
          color: 'white',
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: { xs: '0.95rem', md: '1rem' },
          fontWeight: 600,
          padding: '12px 35px',
          borderRadius: '4px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#b8941f',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 16px rgba(212, 175, 55, 0.4)',
          },
        }}
        href={urlBasilica}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver Mapa
      </Button>
      </Box>
            <Box
        sx={{
          position: 'relative',
          padding: { xs: '30px 20px', md: '40px 30px' },
          border: '3px solid #d4af37',
          borderRadius: '0px',
          marginTop: '40px',
        }}
      >
      <Box
        sx={{
          width: '100%',
          marginBottom: '30px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: { xs: '250px', md: '300px' },
            overflow: 'hidden',
            borderRadius: '4px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <Box
            component="img"
            src="/hotel-kristoff.jpeg"
            alt="Hotel Kristoff"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>
      <Typography
        sx={{
          fontFamily: '"Alex Brush", cursive',
          fontSize: { xs: '2rem', md: '2.5rem' },
          color: '#2c3e50',
          marginBottom: '20px',
          fontWeight: 400,
        }}
      >
        Recepcion
      </Typography>
      <Typography
        sx={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: { xs: '1.1rem', md: '1.3rem' },
          color: '#2c3e50',
          fontWeight: 600,
          marginBottom: '15px',
          lineHeight: 1.6,
        }}
      >
        Hotel Kristoff
        <br />
        Salon Kavak
      </Typography>
      <Typography
        sx={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: { xs: '1.2rem', md: '1.4rem' },
          color: '#2c3e50',
          fontWeight: 500,
          marginBottom: '15px',
        }}
      >
        9:00 pm
      </Typography>
      <Typography
        sx={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: { xs: '1rem', md: '1.1rem' },
          color: '#5a6c7d',
          fontWeight: 400,
          marginBottom: '30px',
          lineHeight: 1.6,
        }}
      >
        Av. 8 Santa Rita con Calle 68. Maracaibo, Zulia, Venezuela
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#d4af37',
          color: 'white',
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: { xs: '0.95rem', md: '1rem' },
          fontWeight: 600,
          padding: '12px 35px',
          borderRadius: '4px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#b8941f',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 16px rgba(212, 175, 55, 0.4)',
          },
        }}
        href={urlHotelKristoff}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver Mapa
      </Button>
      </Box>
    </Container>
  );
};

export default Step6;
