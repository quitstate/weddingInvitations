import React, { useState } from 'react';
import { Container, Typography, Box, Checkbox, Button, FormControlLabel, FormGroup } from '@mui/material';

const Step8: React.FC = () => {
  const familyName = 'Familia Maldonado Garza';
  const [guests, setGuests] = useState({
    guest1: false,
    guest2: false,
    guest3: false,
    guest4: false,
    noAttend: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    
    if (name === 'noAttend' && checked) {
      // Si marca "No podremos asistir", desmarca todos los demás
      setGuests({
        guest1: false,
        guest2: false,
        guest3: false,
        guest4: false,
        noAttend: true,
      });
    } else if (name !== 'noAttend') {
      // Si marca cualquier invitado, desmarca "No podremos asistir"
      setGuests({
        ...guests,
        [name]: checked,
        noAttend: false,
      });
    } else {
      setGuests({
        ...guests,
        [name]: checked,
      });
    }
  };

  const handleConfirm = () => {
    const selectedGuests: string[] = [];
    
    if (guests.guest1) selectedGuests.push('Sara Maldonado Garza');
    if (guests.guest2) selectedGuests.push('Felipe Ruiz Garza');
    if (guests.guest3) selectedGuests.push('Laura Ruiz Garza');
    if (guests.guest4) selectedGuests.push('Carlos Ruiz Garza');
    
    let message = '';
    
    if (guests.noAttend) {
      message = `Hola, somos la ${familyName}. Lamentablemente no podremos asistir a la boda.`;
    } else if (selectedGuests.length > 0) {
      message = `Hola, somos la ${familyName}. Confirmamos asistencia de: ${selectedGuests.join(', ')}`;
    } else {
      alert('Por favor selecciona al menos una opción');
      return;
    }
    
    // Crear URL de WhatsApp
    const phoneNumber = '584125471717'; // Reemplaza con tu número de WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
  };

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
      {/* Marco dorado */}
      <Box
        sx={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          right: '20px',
          bottom: '20px',
          border: '3px solid #d4af37',
          borderRadius: '0px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Contenido */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Título */}
        <Typography
          sx={{
            fontFamily: '"Alex Brush", cursive',
            fontSize: { xs: '2.5rem', md: '3rem' },
            color: '#2c3e50',
            marginBottom: '40px',
            fontWeight: 400,
          }}
        >
          Invitación para:
        </Typography>

        {/* Nombre de la familia */}
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: { xs: '1.3rem', md: '1.5rem' },
            color: '#2c3e50',
            fontWeight: 600,
            marginBottom: '40px',
          }}
        >
          {familyName}
        </Typography>

        {/* Lista de invitados */}
        <FormGroup
          sx={{
            textAlign: 'left',
            marginBottom: '40px',
            paddingLeft: { xs: '20px', md: '60px' },
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                name="guest1"
                checked={guests.guest1}
                onChange={handleCheckboxChange}
                sx={{
                  color: '#d4af37',
                  '&.Mui-checked': {
                    color: '#d4af37',
                  },
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: '#2c3e50',
                }}
              >
                Sara Maldonado Garza
              </Typography>
            }
            sx={{ marginBottom: '15px' }}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="guest2"
                checked={guests.guest2}
                onChange={handleCheckboxChange}
                sx={{
                  color: '#d4af37',
                  '&.Mui-checked': {
                    color: '#d4af37',
                  },
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: '#2c3e50',
                }}
              >
                Felipe Ruiz Garza
              </Typography>
            }
            sx={{ marginBottom: '15px' }}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="guest3"
                checked={guests.guest3}
                onChange={handleCheckboxChange}
                sx={{
                  color: '#d4af37',
                  '&.Mui-checked': {
                    color: '#d4af37',
                  },
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: '#2c3e50',
                }}
              >
                Laura Ruiz Garza
              </Typography>
            }
            sx={{ marginBottom: '15px' }}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="guest4"
                checked={guests.guest4}
                onChange={handleCheckboxChange}
                sx={{
                  color: '#d4af37',
                  '&.Mui-checked': {
                    color: '#d4af37',
                  },
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: '#2c3e50',
                }}
              >
                Carlos Ruiz Garza
              </Typography>
            }
            sx={{ marginBottom: '15px' }}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="noAttend"
                checked={guests.noAttend}
                onChange={handleCheckboxChange}
                sx={{
                  color: '#d4af37',
                  '&.Mui-checked': {
                    color: '#d4af37',
                  },
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: '#2c3e50',
                }}
              >
                No podremos asistir
              </Typography>
            }
            sx={{ marginBottom: '15px' }}
          />
        </FormGroup>

        {/* Botón Confirmar */}
        <Button
          variant="contained"
          onClick={handleConfirm}
          sx={{
            backgroundColor: '#a8956b',
            color: 'white',
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: { xs: '1rem', md: '1.1rem' },
            fontWeight: 600,
            padding: '15px 50px',
            borderRadius: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            boxShadow: '0 4px 12px rgba(168, 149, 107, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#8f7f5d',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 16px rgba(168, 149, 107, 0.4)',
            },
          }}
        >
          Confirmar
        </Button>
      </Box>
    </Container>
  );
};

export default Step8;
