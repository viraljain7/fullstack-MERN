import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8, textAlign: 'center' }}>
                <Typography variant="h1" component="h1" gutterBottom>
                    404
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    Page Not Found
                </Typography>
                <Typography variant="body1" paragraph>
                    Sorry, the page you are looking for does not exist.
                </Typography>
                <Button variant="contained" color="primary" component={Link} to="/">
                    Go to Home
                </Button>
            </Box>
        </Container>
    );
};

export default NotFound;
