import { createMuiTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0d47a1',
    },
    secondary: {
      main: '#cddc39',
    },
    error: {
      main: '#D32F2F',
    },
    background: {
      default: '#FFFFFF',
    },
  },
});

export default theme;