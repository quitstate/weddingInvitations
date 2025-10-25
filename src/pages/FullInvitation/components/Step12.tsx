import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Step12: React.FC = () => {
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
          backgroundColor: 'rgba(253, 251, 247, 0.75)',
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Alex Brush", cursive',
            fontSize: { xs: '2.5rem', md: '3rem' },
            color: '#2c3e50',
            marginBottom: '30px',
            lineHeight: 1.3,
          }}
        >
          Gracias por
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Alex Brush", cursive',
            fontSize: { xs: '2.5rem', md: '3rem' },
            color: '#2c3e50',
            marginBottom: '30px',
            lineHeight: 1.3,
          }}
        >
          acompañarnos en
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Alex Brush", cursive',
            fontSize: { xs: '2.5rem', md: '3rem' },
            color: '#2c3e50',
            marginBottom: '30px',
            lineHeight: 1.3,
          }}
        >
          este día tan
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Alex Brush", cursive',
            fontSize: { xs: '2.5rem', md: '3rem' },
            color: '#2c3e50',
            marginBottom: '30px',
            lineHeight: 1.3,
          }}
        >
          especial para
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Alex Brush", cursive',
            fontSize: { xs: '2.5rem', md: '3rem' },
            color: '#2c3e50',
            marginBottom: '40px',
            lineHeight: 1.3,
          }}
        >
          nosotros
        </Typography>

        <FavoriteIcon
          sx={{
            fontSize: { xs: '40px', md: '50px' },
            color: '#2c3e50',
          }}
        />
      </Box>
    </Container>
  );
};

export default Step12;
