import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LogoWhiteTheme from '../../image/Logo/LogoWhiteTheme.png';
import LogoDarkTheme from '../../image/Logo/LogoDarkTheme.png';
import { useNavigate, useLocation, To } from 'react-router-dom';

const pages = [
  { name: 'About', path: '/' },
  { name: 'Women', path: '/women' },
  { name: 'Men', path: '/men' },
  { name: 'Collections', path: '/collections' }
];

interface NavbarProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const darkThemeBgColor = 'rgba(255, 255, 255, 0.4)';

  const handleNavigation = (path: To) => {
    navigate(path);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', p: 2, pb: 0 }}>
      {/* Left Box with Logo */}
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <img src={isDarkTheme ? LogoDarkTheme : LogoWhiteTheme} alt="Logo" style={{ height: '40px', width: 'auto' }} />
      </Box>

      {/* Middle Box */}
      <Box sx={{ flex: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
        {pages.map((page, index) => (
          <Box
            key={index}
            onClick={() => handleNavigation(page.path)}
            sx={{
              cursor: 'pointer',
              borderRadius: '50px',
              p: 1,
              bgcolor: location.pathname === page.path ? (isDarkTheme ? darkThemeBgColor : 'rgba(211, 211, 211, 0.5)') : 'transparent', 
              transition: 'background-color 0.3s',
              ':hover': {
                bgcolor: isDarkTheme ? darkThemeBgColor : 'rgba(211, 211, 211, 0.6)', 
              },
            }}
          >
            <Typography variant="h6" sx={{ mx: 2 }}>
              {page.name}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Right Box with Search, Cart Icons and Theme Toggle */}
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
        <IconButton
          onClick={toggleTheme}
          sx={{
            borderRadius: '50%',
            bgcolor: isDarkTheme ? 'white' : 'black',
            border: '2px solid',
            borderColor: isDarkTheme ? 'white' : 'black',
            p: 1,
            ':hover': {
              bgcolor: isDarkTheme ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
            },
          }}
        >
          {isDarkTheme ? (
            <WbSunnyIcon fontSize="small" sx={{ color: 'black' }} />
          ) : (
            <Brightness2Icon fontSize="small" sx={{ color: 'white' }} />
          )}
        </IconButton>
        <IconButton sx={{ borderRadius: '50%', border: '2px solid', borderColor: isDarkTheme ? 'white' : 'black', p: 1 }}>
          <SearchIcon fontSize="small" sx={{ color: isDarkTheme ? 'white' : 'black' }} />
        </IconButton>
        <IconButton
          sx={{
            borderRadius: '50%',
            bgcolor: isDarkTheme ? 'white' : 'black',
            border: '2px solid',
            borderColor: isDarkTheme ? 'white' : 'black',
            p: 1,
            ':hover': {
              bgcolor: isDarkTheme ? 'rgba(255, 255, 255, 0.8)' : '#333333',
            },
          }}
        >
          <ShoppingCartIcon fontSize="small" sx={{ color: isDarkTheme ? 'black' : 'white' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
