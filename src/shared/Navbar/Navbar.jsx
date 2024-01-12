import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Menu, MenuItem } from '@mui/material';
import { MdLogin } from "react-icons/md";
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { CgLogOut } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { ImCross } from "react-icons/im";
import { FaHome } from "react-icons/fa";

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successful")
      })
      .catch(error => {
        toast.error(error?.message)
      })
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = <div className='font-permanent flex flex-col md:flex-row justify-center items-center gap-6'>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "md:py-5 md:border-b-2 text-white border-b-white font-medium text-sm" : "text-white text-sm"
      }
    >
     <span className='flex items-center gap-2'><FaHome /> Home</span>
    </NavLink>
    {user?.email ? <div ><Button
      id="demo-positioned-button"
      aria-controls={open ? 'demo-positioned-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
      <img className="w-[40px] rounded-full" referrerPolicy="no-referrer" src={user?.photoURL} alt="" />
    </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div className='space-y-1.5'>
          <h1 className='flex justify-center items-center gap-2 text-[#525252] px-6 font-semibold pt-2'><FaRegUser />{user?.displayName}</h1>
          <MenuItem onClick={handleClose}><Link to="/dashboard"><button className='flex justify-center items-center gap-2 font-semibold'> <LuLayoutDashboard size="20" className='mx-2' />Dashboard</button></Link></MenuItem>
          <MenuItem onClick={handleClose}><Button variant="contained" color="error" onClick={handleLogout}> <MdLogin size="20" className='mr-2' />Logout</Button></MenuItem>
        </div>
      </Menu></div> : <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "md:py-5 md:border-b-2 text-white border-b-white font-medium text-sm" : "text-white text-sm"
        }
      >
      <Button variant="contained">Login<CgLogOut size="20" className='ml-2' /></Button>
    </NavLink>}
  </div>

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: "#000", height: "100vh" }}>
      <div><ImCross className='text-white pt-3 hover:text-red-500' size={26} /></div>
      <Typography variant="h6" sx={{ my: 2 }}>
        <div className='bg-black flex justify-center'>
          <img referrerPolicy="no-referrer" className="w-[100px]" src="https://themes.themegoods.com/altair/demo/wp-content/themes/altair/images/logo@2x_white.png" alt="" />
        </div>
      </Typography>
      <Divider />
      <List>
        {navItems}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#1515154D" }}>
        <Container maxWidth="xl">
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
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <img className="w-[100px]" src="https://themes.themegoods.com/altair/demo/wp-content/themes/altair/images/logo@2x_white.png" alt="" />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
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
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}


export default Navbar;