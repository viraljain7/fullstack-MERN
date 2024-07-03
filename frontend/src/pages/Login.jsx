import { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send the data to a server
        console.log('Form submitted:', formData);

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                setFormData({
                    email: '',
                    password: '',
                })
                navigate("/")
            }
            console.log(response)
        } catch (error) {
            console.log('login  error:: ', error);

        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4, p: 3, boxShadow: 2, borderRadius: 2 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
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
                            label="Password"
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </Box>
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default LoginPage;
