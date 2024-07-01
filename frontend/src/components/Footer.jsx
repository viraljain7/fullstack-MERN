import { Box, Container, Typography, Link } from '@mui/material';
const Footer = () => {
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#007bff',
                color: 'white',
                mt: 5,
                py: 3,
                textAlign: 'center'
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body1">
                    &copy; {new Date().getFullYear()} Company. All rights reserved.
                </Typography>
                <Typography variant="body2">
                    <Link href="/" color="inherit" underline="none">Home</Link> |{' '}
                    <Link href="/about" color="inherit" underline="none">About</Link> |{' '}
                    <Link href="/contact" color="inherit" underline="none">Contact</Link> |{' '}
                    <Link href="/service" color="inherit" underline="none">Service</Link>
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
