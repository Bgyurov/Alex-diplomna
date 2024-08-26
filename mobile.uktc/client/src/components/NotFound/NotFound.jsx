import { Link } from 'react-router-dom';
import { Button, Typography, Container } from '@mui/material';
import { createTheme , ThemeProvider  } from '@mui/material/styles';
const NotFound = () => {
    const theme = createTheme({
        palette: {
          ochre: {
            main: '#E3D026',
            light: '#E9DB5D',
            dark: '#A29415',
            contrastText: '#242105',
          },
        },
      });
    return (
        <Container maxWidth="md" sx={{ color: "white", textAlign: 'center', mt: 4,  }}>
          <Typography variant="h1" component="div" gutterBottom>
            404
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Oops! The page you are looking for might be unavailable.
          </Typography>
          <ThemeProvider theme={theme}>
          <Button sx={{marginBottom: '50px'}} component={Link} to="/" variant="contained" color="ochre">
            Go to Home
          </Button>
          </ThemeProvider>
        </Container>
      );
};

export default NotFound;