import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Trophy,Swords,MessageSquare,Settings,Users,Plus,ChevronRight,Hash,Calendar,Shield,Bell,Menu} from 'lucide-react';
import {Box,Paper,Typography,Button,Select,MenuItem,Grid,CardContent,CardHeader,IconButton,FormControl,Container,ThemeProvider,createTheme,useMediaQuery,Drawer,List,ListItem,ListItemIcon,ListItemText,AppBar,Toolbar,Chip} from '@mui/material';
import { activeEvents, auth, authCheck } from "./dash-config";
import axios from 'axios'; 

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#6366f1',
        },
        background: {
            default: '#111827',
            paper: 'rgba(31, 41, 55, 0.918)',
        },
    },
});

const Dashboard = () => {
    const [selectedServer, setSelectedServer] = useState(["Your Server"]);
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery(darkTheme.breakpoints.down('md'));
    const isTablet = useMediaQuery(darkTheme.breakpoints.down('lg'));
    let servers = [];
    const handleLogin = async () => {
        try{
            const response = await axios.get(`${authCheck}${localStorage.getItem("token")||"x"}`);
            if (response.status != 288) {
                window.location.href = auth;
            }
        }
        catch(err){
            window.location.href = auth;
        }
    }
    window.onload = handleLogin;



    const channels = [
        "#announcements",
        "#tournament-lobby",
        "#scrim-finder",
        "#results"
    ];


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    
    const QuickActions = (
        <Box sx={{ width: isTablet ? '100%' : 280 }}>
            <CardHeader title="Esports" sx={{ pt: 2 }}/>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button variant="contained" color="primary" fullWidth startIcon={<Trophy size={20} />} endIcon={<ChevronRight size={20} />} size="large">Tournament</Button>
                <Button variant="contained"  color="primary" fullWidth startIcon={<Swords size={20} />} endIcon={<ChevronRight size={20} />} size="large">Scrim</Button>
            </CardContent>

            <CardHeader title="Send To Channel" />
            <CardContent>
                <List dense>
                    {channels.map(channel => (
                        <ListItem key={channel} component="button" sx={{ borderRadius: 1, mb: 1, '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                                <Hash size={16} />
                            </ListItemIcon>
                            <ListItemText primary={channel} />
                        </ListItem>
                    ))}
                </List>
                <Button variant="outlined" fullWidth startIcon={<Plus size={16} />} sx={{ mt: 2 }}>Add Channel</Button>
            </CardContent>
        </Box>
    );

    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{display: 'flex',minHeight: '100vh',minWidth: isTablet?'100vw':'100%',background: 'linear-gradient(to bottom, #111827, #000000)'}}>
                {/* App Bar */}
                <AppBar position="fixed" sx={{ bgcolor: 'background.paper',  boxShadow: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}>
                    <Toolbar>
                        <IconButton color="inherit"  edge="start"  onClick={handleDrawerToggle} sx={{ mr: 2, display: { lg: 'none' } }}>
                            <Menu />
                        </IconButton>

                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography variant={isMobile ? "h6" : "h5"} sx={{ fontWeight: 'bold', background: 'linear-gradient(to right, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: ''}}>
                                <Link to="/" className='font-bold'>Spruce</Link>
                            </Typography>
                            {/* <FormControl size="small" sx={{ minWidth: 150 }}>
                                <Select value={selectedServer} onChange={(e) => setSelectedServer(e.target.value)} >
                                    {servers.map(server => ( <MenuItem key={server} value={server}>{server}</MenuItem>))}
                                </Select>
                            </FormControl> */}
                        </Box>

                        {/* <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton color="inherit" sx={{ display: { xs: 'flex', sm: 'none' } }}>
                                <Bell size={20} />
                            </IconButton>
                            <Button variant="contained" color="inherit" startIcon={<Bell size={20} />} sx={{ display: { xs: 'none', sm: 'flex' } }} > Notifications </Button>
                            <IconButton color="primary" sx={{ display: { xs: 'flex', sm: 'none' } }}> 
                                <Settings size={20} />
                            </IconButton>
                            <Button variant="contained" color="primary" startIcon={<Settings size={20} />} sx={{ display: { xs: 'none', sm: 'flex' } }}>Settings</Button>
                        </Box> */}
                    </Toolbar>
                </AppBar>

                {/* Sidebar for larger screens */}
                {!isTablet && (
                    <Paper sx={{ width: 280, flexShrink: 0, borderRadius: 0, height: '100vh', position: 'fixed', top: 64, left: 0, overflowY: 'auto' }} >
                        {QuickActions}
                    </Paper>
                )}

                {/* Drawer for mobile */}
                <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true, }}
                    sx={{ display: { xs: 'block', lg: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, bgcolor: 'background.paper' }, }} >
                    {QuickActions}
                </Drawer>

                {/* Main content */}
                <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, ml: { lg: '280px' }, minWidth: "85vw", }} >
                    <Container maxWidth="xl" sx={{ py: 2 }}>
                        {/* Active Events */}
                        <Paper sx={{ mb: 4 }}>
                            <CardHeader
                                title={
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Calendar className="text-indigo-500" size={24} />
                                        <Typography variant="h6">Active Events</Typography>
                                    </Box>
                                }
                            />
                            <CardContent>
                                <Grid container spacing={2}>
                                    {activeEvents.map((event, index) => (
                                        <Grid item xs={12} md={6} key={index}>
                                            <Paper sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.05)' }} >
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                    <Box>
                                                        <Chip
                                                            label={event.type}
                                                            size="small"
                                                            sx={{
                                                                bgcolor: 'rgba(99, 102, 241, 0.2)',
                                                                color: '#818cf8'
                                                            }}
                                                        />
                                                        <Typography variant="h6" sx={{ mt: 1 }}>
                                                            {event.name}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        {/* <IconButton size="small"><Broadcast size={16} /></IconButton> */}
                                                        <IconButton size="small">
                                                            <Settings size={16} />
                                                        </IconButton>
                                                    </Box>
                                                </Box>
                                                <Box sx={{display: 'flex',flexDirection: { xs: 'column', sm: 'row' },gap: { xs: 1, sm: 0 },justifyContent: 'space-between',color: 'text.secondary'}}>
                                                    <Typography variant="body2">{event.status}</Typography>
                                                    <Typography variant="body2">{event.participants}</Typography>
                                                    <Typography variant="body2">{event.time}</Typography>
                                                </Box>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Button variant="outlined" fullWidth startIcon={<Plus size={20} />} sx={{ mt: 2 }} > Create New Event</Button>
                            </CardContent>
                        </Paper>

                        {/* Stats Grid */}
                        <Grid container spacing={2}>
                            {[
                                { icon: <Trophy size={24} />, label: 'Running Tournaments', value: '2', status: 'Active' },
                                { icon: <Swords size={24} />, label: 'Scrim Requests', value: '3', status: 'Pending' },
                                { icon: <Users size={24} />, label: 'Active Members', value: '128', status: 'Online' },
                                { icon: <Shield size={24} />, label: 'Bot Uptime', value: '99.9%', status: 'Healthy' }
                            ].map((stat, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Paper sx={{ bgcolor: 'background.paper' }}>
                                        <CardContent>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Box sx={{ color: 'primary.main' }}>{stat.icon}</Box>
                                                <Chip label={stat.status} size="small" color="success"/>
                                            </Box>
                                            <Typography variant="h4" sx={{ mt: 2, mb: 0.5 }}>
                                                {stat.value}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {stat.label}
                                            </Typography>
                                        </CardContent>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </Box>
            {/* <Footer /> */}
        </ThemeProvider>
    );
};

export default Dashboard;