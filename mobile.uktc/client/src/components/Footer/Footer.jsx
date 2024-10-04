import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
import React from 'react';

export const Footer = () => {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#f79845',
        main: '#605b5b',
        dark: '#f79845',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#fffff',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}> </div>

        
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="body2" color="secondary">
              {`© ${new Date().getFullYear()} Mobile.UKTC. All rights reserved.`}
            </Typography>
            <IconButton color="inherit" target="_blank" href="https://uktc-bg.com/">
              <LanguageIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};
