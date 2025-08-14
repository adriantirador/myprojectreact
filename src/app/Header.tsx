import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header: React.FC = () => (
  <AppBar
    position="fixed"
    elevation={2}
    sx={{
      background: '#154D71',
      color: '#fff',
      zIndex: (theme) => theme.zIndex.drawer + 1,
    }}
  >
    <Toolbar sx={{ justifyContent: 'space-between', minHeight: 64 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <img src="/logo.png" alt="Logo" style={{ height: 36, borderRadius: 8 }} />
        <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>
          MyApp
        </Typography>
      </Box>
      <IconButton color="inherit">
        <NotificationsIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;