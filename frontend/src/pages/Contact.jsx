import { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send the data to a server
        console.log('Form submitted:', formData);
    };

    return (<>

        <Container maxWidth="sm">
            <Box sx={{ mt: 1, p: 3, boxShadow: 2, borderRadius: 2 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Contact Us
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Username"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Message"
                            id="message"
                            name="message"
                            multiline
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </Box>
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                        Send
                    </Button>
                </form>
            </Box>
        </Container>

        <section>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6630.493073417563!2d73.17126939790576!3d22.317907586635428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b785f53811%3A0xbf98c84f083b4377!2sGenda%20Circle%2C%20Alkapuri%2C%20Vadodara%2C%20Gujarat%20390020!5e0!3m2!1sen!2sin!4v1719856137854!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
        </section>
    </>

    );
};

export default ContactUs;
