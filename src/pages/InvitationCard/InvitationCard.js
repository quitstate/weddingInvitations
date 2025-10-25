import { Card, CardContent, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const InvitationCard = ({ onOpen }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 'auto',
        marginTop: '10vh',
        textAlign: 'center',
        cursor: 'pointer',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        '&:hover': {
          boxShadow: '0 12px 20px 0 rgba(0,0,0,0.3)',
        },
      }}
      onClick={onOpen}
    >
      <CardContent sx={{ padding: '40px' }}>
        <MailOutlineIcon sx={{ fontSize: 60, color: '#d4af37' }} />
        <Typography variant="h5" component="div" sx={{ marginTop: '20px', fontFamily: 'serif' }}>
          Tienes una invitación
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
          Haz clic para abrir
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InvitationCard;