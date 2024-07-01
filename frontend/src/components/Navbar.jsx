import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
    { text: 'Service', path: '/service' },
    { text: 'Login', path: '/login' },
    { text: 'Register', path: '/register' },
  ];

  const drawer = (
    <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {menuItems.map((item) => (
          <ListItem button component={NavLink} to={item.path} key={item.text}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" className="left">
          Company
        </Typography>
        <div className="right desktop-only">
          {menuItems.map((item) => (
            <NavLink to={item.path} className="navbar-link" key={item.text}>
              {item.text}
            </NavLink>
          ))}
        </div>
        <div className="mobile-only">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawer}
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
