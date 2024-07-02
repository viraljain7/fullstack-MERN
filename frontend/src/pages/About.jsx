
import { Container, Grid, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom align="center">
                About Us
            </Typography>

            <Grid container spacing={4}>
                {/* Demo Project Section */}
                <Grid item xs={12} md={4}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Demo Project
                            </Typography>
                            <Typography variant="body1">
                                Our demo project showcases our capabilities and expertise in delivering high-quality solutions. Explore our demo project to see our work in action.
                            </Typography>
                        </Paper>
                    </motion.div>
                </Grid>

                {/* Clients Section */}
                <Grid item xs={12} md={4}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Clients
                            </Typography>
                            <Typography variant="body1">
                                We have had the pleasure of working with a diverse range of clients across various industries. Our clients trust us to deliver exceptional results. Here are some of the industries we serve:
                            </Typography>
                            <Typography variant="body2" component="ul" sx={{ mt: 2 }}>
                                <li>Technology</li>
                                <li>Healthcare</li>
                                <li>Finance</li>
                                <li>Retail</li>
                            </Typography>
                        </Paper>
                    </motion.div>
                </Grid>

                {/* Authenticity Section */}
                <Grid item xs={12} md={4}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Authenticity
                            </Typography>
                            <Typography variant="body1">
                                Our commitment to authenticity is reflected in our transparent processes and ethical practices. We strive to build lasting relationships based on trust. Our core values include:
                            </Typography>
                            <Typography variant="body2" component="ul" sx={{ mt: 2 }}>
                                <li>Integrity</li>
                                <li>Transparency</li>
                                <li>Accountability</li>
                                <li>Innovation</li>
                            </Typography>
                        </Paper>
                    </motion.div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUs;
