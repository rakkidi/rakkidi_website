import { IconButton, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo_rakkidi_vert.svg';

const LogoHome = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={() => navigate('/')}
      edge="start"
      sx={{
        height: 20,
        filter:
          theme.palette.mode === 'dark'
            ? 'invert(83%) sepia(100%) saturate(0%) hue-rotate(100deg) brightness(106%) contrast(100%)'
            : ''
      }}
    >
      <img src={logo} style={{ height: '20px' }} alt="logo" />
    </IconButton>
  );
};

export default LogoHome;
