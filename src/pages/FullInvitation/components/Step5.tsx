import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';

const Step5: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date('2025-12-27T19:00:00');
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: { xs: '0 10px', md: '0 15px' },
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: { xs: '3rem', md: '4rem' },
          fontWeight: 700,
          color: '#2c3e50',
          lineHeight: 1,
          marginBottom: '8px',
          textShadow: '0 2px 10px rgba(255, 255, 255, 0.9)',
        }}
      >
        {value.toString().padStart(2, '0')}
      </Typography>
      <Typography
        sx={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: { xs: '0.9rem', md: '1rem' },
          fontWeight: 500,
          color: '#2c3e50',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textShadow: '0 1px 6px rgba(255, 255, 255, 0.9)',
        }}
      >
        {label}
      </Typography>
    </Box>
  );

  return (
    <Container
      sx={{
        background: `url('/portada-flores.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        padding: { xs: '40px 20px', md: '60px 40px' },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        width: { xs: '100%', md: '500px' },
        maxWidth: { xs: '100%', md: '500px' },
        margin: '0 auto',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(0.5px)',
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Alex Brush", cursive',
            fontSize: { xs: '2.5rem', md: '3rem' },
            color: '#2c3e50',
            marginBottom: '40px',
            fontWeight: 400,
            textShadow: '0 2px 8px rgba(255, 255, 255, 0.8)',
          }}
        >
          Faltan
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: { xs: '10px', md: '0' },
          }}
        >
          <TimeUnit value={timeLeft.days} label="DÍAS" />
          <TimeUnit value={timeLeft.hours} label="HRS" />
          <TimeUnit value={timeLeft.minutes} label="MIN" />
          <TimeUnit value={timeLeft.seconds} label="SEG" />
        </Box>
        <Typography
          sx={{
            fontFamily: '"Alex Brush", cursive',
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: '#2c3e50',
            marginTop: '40px',
            fontWeight: 400,
            textShadow: '0 2px 8px rgba(255, 255, 255, 0.8)',
          }}
        >
          para nuestra boda
        </Typography>
      </Box>
    </Container>
  );
};

export default Step5;
