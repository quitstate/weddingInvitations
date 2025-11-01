import React, { useState, useMemo } from 'react';
import { Container, Typography, Box, Checkbox, Button, FormControlLabel, FormGroup } from '@mui/material';
import guestList from '../../../guestList.json';

interface Guest {
  name: string;
  idGroup: number;
  isConfirm: boolean;
}

interface Step8Props {
  idGroup?: number;
}

const Step8: React.FC<Step8Props> = ({ idGroup }) => {
  const filteredGuests = useMemo(() => {
    if (!idGroup) return [];
    return (guestList as Guest[]).filter((guest) => guest.idGroup === idGroup);
  }, [idGroup]);

  const initialGuestState = useMemo(() => {
    const state: { [key: string]: boolean } = { noAttend: false };
    filteredGuests.forEach((_, index) => {
      state[`guest${index}`] = false;
    });
    return state;
  }, [filteredGuests]);

  const [guests, setGuests] = useState(initialGuestState);
  const familyName = filteredGuests.length > 0 
    ? `Grupo ${idGroup}` 
    : 'Familia';

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    
    if (name === 'noAttend' && checked) {
      const resetState: { [key: string]: boolean } = { noAttend: true };
      filteredGuests.forEach((_, index) => {
        resetState[`guest${index}`] = false;
      });
      setGuests(resetState);
    } else if (name !== 'noAttend') {
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
    filteredGuests.forEach((guest, index) => {
      if (guests[`guest${index}`]) {
        selectedGuests.push(guest.name);
      }
    });
    let message = '';
    if (guests.noAttend) {
      message = `Hola, somos del ${familyName}. Lamentablemente no podremos asistir a la boda.`;
    } else if (selectedGuests.length > 0) {
      message = `Hola, somos del ${familyName}. Confirmamos asistencia de: ${selectedGuests.join(', ')}`;
    } else {
      alert('Por favor selecciona al menos una opción');
      return;
    }
    const phoneNumber = '34672893477';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (!idGroup || filteredGuests.length === 0) {
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
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: { xs: '1.3rem', md: '1.5rem' },
            color: '#2c3e50',
            fontWeight: 600,
          }}
        >
          No se encontraron invitados para este grupo
        </Typography>
      </Container>
    );
  }

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
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
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
          Invitación para:
        </Typography>
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
        <FormGroup
          sx={{
            textAlign: 'left',
            marginBottom: '40px',
            paddingLeft: { xs: '20px', md: '60px' },
          }}
        >
          {filteredGuests.map((guest, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  name={`guest${index}`}
                  checked={guests[`guest${index}`] || false}
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
                  {guest.name}
                </Typography>
              }
              sx={{ marginBottom: '15px' }}
            />
          ))}
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
