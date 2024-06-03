import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FullTruckLogo from '../logo/FullTruckLogo';
import { Home, Dataset, PieChart, SignalCellularAlt, StackedBarChart } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  background: 'white',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const MenuFullTruck: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <FullTruckLogo />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem key={'Homepage'} disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={'Homepage'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Statistics'} disablePadding>
            <ListItemButton component={Link} to="/statistics">
              <ListItemIcon>
                <Dataset />
              </ListItemIcon>
              <ListItemText primary={'Statistics'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Histograms'} disablePadding>
            <ListItemButton component={Link} to="/histograms">
              <ListItemIcon>
                <SignalCellularAlt />
              </ListItemIcon>
              <ListItemText primary={'Histograms'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Kpis'} disablePadding>
            <ListItemButton component={Link} to="/kpis">
              <ListItemIcon>
                <PieChart />
              </ListItemIcon>
              <ListItemText primary={'Kpis'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Scalars'} disablePadding>
            <ListItemButton component={Link} to="/scalars">
              <ListItemIcon>
                <StackedBarChart />
              </ListItemIcon>
              <ListItemText primary={'Scalars'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}


export default MenuFullTruck;