import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#212121',
      secondary: '#fff',
    },
    background: {
      default: '#EDDBDC',
      primary: '#796162',
    },
  },
});
