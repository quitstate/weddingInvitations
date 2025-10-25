import React, { useState } from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Step11: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
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
        minHeight: '600px',
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
          backgroundColor: 'rgba(253, 251, 247, 0.85)',
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Alex Brush", cursive',
            fontSize: { xs: '2.5rem', md: '3rem' },
            color: '#2c3e50',
            marginBottom: '30px',
            lineHeight: 1.2,
          }}
        >
          Regalos
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: { xs: '0.95rem', md: '1.05rem' },
            color: '#2c3e50',
            lineHeight: 1.8,
            marginBottom: '40px',
            maxWidth: '380px',
            margin: '0 auto 40px auto',
          }}
        >
          El regalo es opcional, la asistencia obligatoria pero si quieres tener un detalle con nosotros te damos algunas ideas.
        </Typography>

        {/* Bank Account Info Accordion */}
        <Accordion
          expanded={expanded}
          onChange={() => setExpanded(!expanded)}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '8px !important',
            maxWidth: '380px',
            margin: '0 auto 40px auto',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: '#2c3e50',
                  fontSize: '2rem',
                }}
              />
            }
            sx={{
              padding: { xs: '20px', md: '25px 30px' },
              '& .MuiAccordionSummary-content': {
                margin: 0,
                justifyContent: 'center',
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Alex Brush", cursive',
                fontSize: { xs: '1.8rem', md: '2rem' },
                color: '#2c3e50',
                lineHeight: 1.2,
              }}
            >
              Número de cuenta
            </Typography>
          </AccordionSummary>
          
          <AccordionDetails
            sx={{
              padding: { xs: '10px 20px 30px', md: '10px 30px 35px' },
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#2c3e50',
                fontWeight: 500,
                marginBottom: '8px',
              }}
            >
              BBVA España
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#2c3e50',
                marginBottom: '8px',
                letterSpacing: '1px',
              }}
            >
              ES91 0182 6589 7802 0388 1507
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#2c3e50',
                fontWeight: 500,
                marginBottom: '20px',
              }}
            >
              Ronald Javier Vezga Rueda
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#2c3e50',
                fontWeight: 500,
                marginBottom: '8px',
              }}
            >
              Zelle
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#2c3e50',
                marginBottom: '8px',
                letterSpacing: '1px',
              }}
            >
              ing.ronald.vezga.col@gmail.com
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#2c3e50',
                fontWeight: 500,
                marginBottom: '20px',
              }}
            >
              Ronald Javier Vezga Rueda
            </Typography>
                        <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#2c3e50',
                fontWeight: 500,
                marginBottom: '8px',
              }}
            >
              Pago Movil
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#2c3e50',
                marginBottom: '8px',
                letterSpacing: '1px',
              }}
            >
              0412-1690398 Banesco 20.623.847
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#2c3e50',
                fontWeight: 500,
                marginBottom: '20px',
              }}
            >
              Ronald Javier Vezga Rueda
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Envelope Box Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <MailOutlineIcon
            sx={{
              fontSize: { xs: '60px', md: '70px' },
              color: '#2c3e50',
              marginBottom: '15px',
            }}
          />

          <Typography
            sx={{
              fontFamily: '"Alex Brush", cursive',
              fontSize: { xs: '2rem', md: '2.3rem' },
              color: '#2c3e50',
              lineHeight: 1.2,
            }}
          >
            Caja de sobres
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Step11;
