import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Toolbar, Typography, IconButton, useMediaQuery, Box, Avatar
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import FolderIcon from '@mui/icons-material/Folder';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../auth/authSlice';

const drawerWidth = 220;

const SidePanel: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:768px)');
  const [mobileOpen, setMobileOpen] = useState(false);

  const username = useSelector((state: any) => state.auth.username);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
    setMobileOpen(false);
  };

  const drawerContent = (
    <>
      <Toolbar sx={{ flexDirection: 'column', alignItems: 'center', minHeight: 100, pt: 2 }}>
        <Avatar
          alt={username || 'User'}
          src="/avatar.png"
          sx={{ width: 56, height: 56, mb: 1, boxShadow: 2 }}
        />
        {!isMobile && (
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600 }}>
            {username || 'User'}
          </Typography>
        )}
      </Toolbar>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/dashboard"
            selected={location.pathname === '/dashboard'}
            onClick={() => setMobileOpen(false)}
            sx={{ borderRadius: 2, mx: 1, my: 0.5 }}
          >
            <ListItemIcon>
              <DashboardIcon color={location.pathname === '/dashboard' ? 'primary' : 'inherit'} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/project"
            selected={location.pathname === '/project'}
            onClick={() => setMobileOpen(false)}
            sx={{ borderRadius: 2, mx: 1, my: 0.5 }}
          >
            <ListItemIcon>
              <FolderIcon color={location.pathname === '/project' ? 'primary' : 'inherit'} />
            </ListItemIcon>
            <ListItemText primary="Project Management" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleLogout}
            sx={{ borderRadius: 2, mx: 1, my: 0.5 }}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={() => setMobileOpen(true)}
          sx={{ position: 'fixed', top: 72, left: 16, zIndex: 1300, bgcolor: '#fff', boxShadow: 1 }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={() => setMobileOpen(false)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
            top: 64, // below header
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default SidePanel;