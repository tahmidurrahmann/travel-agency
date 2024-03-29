import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 240;


function Dashboard(props) {
    const { user } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className='flex flex-col items-center gap-4 justify-center pt-6'>
            <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-24">
                    <img referrerPolicy="no-referrer" src={user?.photoURL} alt="" />
                </div>
            </div>
            <h1 className='font-bold'>{user?.displayName}</h1>
            <NavLink
                to="/dashboard/userProfile"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold md:text-lg text-[#4885a2] bg-gray-100 py-2 w-3/4 rounded-lg border-l-4 border-l-[#4885a2] flex justify-center" : "font-semibold md:text-lg hover:text-neutral-900 text-neutral-400"
                }
            >
                <div className='flex items-center gap-2'><FaUser /> My Profile</div>
            </NavLink>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold md:text-lg text-neutral-900 " : "font-semibold md:text-lg hover:text-neutral-900 text-neutral-400"
                }
            >
                <div className='flex items-center gap-2'><IoHomeOutline /> Home</div>
            </NavLink>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: "#1515154D"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img className="w-[100px]" src="https://themes.themegoods.com/altair/demo/wp-content/themes/altair/images/logo@2x_white.png" alt="" />
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet></Outlet>
            </Box>
        </Box>
    );
}

export default Dashboard;
