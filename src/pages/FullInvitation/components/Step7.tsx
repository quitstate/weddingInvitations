import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface TimelineEvent {
  time: string;
  title: string;
  icon: string;
}

const Step7: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const events: TimelineEvent[] = [
    { time: '7:00 pm', title: 'Ceremonia\nReligiosa', icon: '⛪' },
    { time: '9:00 pm', title: 'Hotel\nKristoff', icon: '🏨' },
    { time: '9:30 pm', title: 'Celebración', icon: '🍽️' },
    { time: '10:00 pm', title: 'A bailar', icon: '🎵' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const windowHeight = window.innerHeight;
      const scrollTrigger = windowHeight * 0.6;
      stepRefs.current.forEach((stepRef, index) => {
        if (stepRef) {
          const stepTop = stepRef.getBoundingClientRect().top;
          if (stepTop < scrollTrigger) {
            setActiveStep(index);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container
      ref={containerRef}
      sx={{
        background: 'linear-gradient(145deg, #fdfbf7 0%, #f9f6f2 100%)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        padding: { xs: '40px 20px', md: '60px 40px' },
        textAlign: 'center',
        position: 'relative',
        overflow: 'visible',
        width: { xs: '100%', md: '500px' },
        maxWidth: { xs: '100%', md: '500px' },
        margin: '0 auto',
        minHeight: '800px',
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: { xs: '1.2rem', md: '1.4rem' },
          color: '#2c3e50',
          marginBottom: '10px',
          fontWeight: 400,
          lineHeight: 1.6,
        }}
      >
        Te compartimos los detalles
        <br />
        de la celebración
      </Typography>
      <Box
        sx={{
          position: 'relative',
          marginTop: '60px',
          paddingLeft: { xs: '80px', md: '120px' },
          paddingRight: { xs: '20px', md: '40px' },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '42px', md: '62px' },
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: '#d4af37',
            opacity: 0.3,
          }}
        />

        {events.map((event, index) => (
          <Box
            key={index}
            ref={(el) => {
              stepRefs.current[index] = el as HTMLDivElement | null;
            }}
            sx={{
              position: 'relative',
              marginBottom: index < events.length - 1 ? '80px' : '0',
              textAlign: 'left',
              transition: 'all 0.5s ease',
              opacity: activeStep >= index ? 1 : 0.4,
              transform: activeStep >= index ? 'translateX(0)' : 'translateX(-20px)',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '-50px', md: '-110px' },
                top: '10px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: activeStep >= index ? '#a8956b' : '#d4d4d4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.5s ease',
                boxShadow: activeStep >= index ? '0 4px 12px rgba(168, 149, 107, 0.4)' : 'none',
                zIndex: 2,
              }}
            >
              <FavoriteIcon
                sx={{
                  color: 'white',
                  fontSize: '20px',
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: { xs: '1.1rem', md: '1.2rem' },
                  color: '#2c3e50',
                  fontWeight: 600,
                  marginBottom: '8px',
                }}
              >
                {event.time}
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Alex Brush", cursive',
                  fontSize: { xs: '2rem', md: '2.3rem' },
                  color: '#2c3e50',
                  marginBottom: '10px',
                  lineHeight: 1.2,
                  whiteSpace: 'pre-line',
                }}
              >
                {event.title}
              </Typography>
              <Box
                sx={{
                  display: 'inline-block',
                  fontSize: { xs: '50px', md: '60px' },
                  marginTop: '10px',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                }}
              >
                {event.icon}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Step7;
