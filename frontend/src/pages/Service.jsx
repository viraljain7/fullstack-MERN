import { Container, Grid, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Web Development",
        description: "We build responsive and robust web applications using modern technologies like React, Angular, and Vue."
    },
    {
        title: "Mobile Development",
        description: "Our team creates mobile applications for both iOS and Android platforms using React Native and Flutter."
    },
    {
        title: "UI/UX Design",
        description: "We offer UI/UX design services to create visually appealing and user-friendly interfaces."
    },
    {
        title: "Digital Marketing",
        description: "Our digital marketing services help businesses grow their online presence and reach a wider audience."
    },
    {
        title: "SEO Optimization",
        description: "We provide SEO services to improve your website's visibility and ranking on search engines."
    },
    {
        title: "Cloud Services",
        description: "Our cloud services include infrastructure setup, maintenance, and optimization on platforms like AWS and Azure."
    }
];

const Service = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom align="center">
                Our Services
            </Typography>

            <Grid container spacing={4}>
                {services.map((service, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    {service.title}
                                </Typography>
                                <Typography variant="body1">
                                    {service.description}
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Service;
